import { page } from 'vitest/browser';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';

import Page from './+page.svelte';

describe('/+page.svelte', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('should not submit an empty form', async () => {
		render(Page);

		await page.getByRole('button', { name: 'Join Beta Waitlist' }).click();

		// Form heading should still be visible (no redirect)
		await expect.element(page.getByTestId('beta-form')).toBeInTheDocument();

		// No popup should appear
		await expect.element(page.getByTestId('popup')).not.toBeInTheDocument();

		// Email input should have a validation warning (required field is empty)
		const emailInput = page.getByLabelText('Email').element() as HTMLInputElement;
		expect(emailInput.validity.valueMissing).toBe(true);
		expect(emailInput.validationMessage).toBeTruthy();
	});

	it('should not submit when the email is missing', async () => {
		render(Page);

		// Fill in everything except email
		await page.getByLabelText('Company').fill('Test Company');
		await page.getByLabelText('Role').selectOptions('tax-advisor');

		await page.getByRole('button', { name: 'Join Beta Waitlist' }).click();

		// Form heading should still be visible (no redirect)
		await expect.element(page.getByTestId('beta-form')).toBeInTheDocument();

		// No popup should appear
		await expect.element(page.getByTestId('popup')).not.toBeInTheDocument();

		// Email input should have a validation warning
		const emailInput = page.getByLabelText('Email').element() as HTMLInputElement;
		expect(emailInput.validity.valueMissing).toBe(true);
		expect(emailInput.validationMessage).toBeTruthy();
	});

	it('should not submit when the email is poorly formated', async () => {
		render(Page);

		// Fill in everything except email
		await page.getByLabelText('Company').fill('Test Company');
		await page.getByLabelText('Email').fill('Test email');
		await page.getByLabelText('Role').selectOptions('tax-advisor');

		await page.getByRole('button', { name: 'Join Beta Waitlist' }).click();

		// Form heading should still be visible (no redirect)
		await expect.element(page.getByTestId('beta-form')).toBeInTheDocument();

		// No popup should appear
		await expect.element(page.getByTestId('popup')).not.toBeInTheDocument();

		// Email input should have a validity warning
		const emailInput = page.getByLabelText('Email').element() as HTMLInputElement;
		expect(emailInput.validity.valueMissing).toBe(false);
		expect(emailInput.validity.valid).toBe(false);
		expect(emailInput.validationMessage).toBeTruthy();
	});

	it('should not submit when the company is missing', async () => {
		render(Page);

		// Fill in everything except company
		await page.getByLabelText('Email').fill('myEmail@email.be');
		await page.getByLabelText('Role').selectOptions('tax-advisor');

		await page.getByRole('button', { name: 'Join Beta Waitlist' }).click();

		// Form heading should still be visible (no redirect)
		await expect.element(page.getByTestId('beta-form')).toBeInTheDocument();

		// No popup should appear
		await expect.element(page.getByTestId('popup')).not.toBeInTheDocument();

		// Company input should have a validation warning
		const companyInput = page.getByLabelText('Company').element() as HTMLInputElement;
		expect(companyInput.validity.valueMissing).toBe(true);
		expect(companyInput.validationMessage).toBeTruthy();
	});

	it('should not submit when the role is missing', async () => {
		render(Page);

		// Fill in everything except role
		await page.getByLabelText('Email').fill('myEmail@email.be');
		await page.getByLabelText('Company').fill('Test Company');

		await page.getByRole('button', { name: 'Join Beta Waitlist' }).click();

		// Form heading should still be visible (no redirect)
		await expect.element(page.getByTestId('beta-form')).toBeInTheDocument();

		// No popup should appear
		await expect.element(page.getByTestId('popup')).not.toBeInTheDocument();

		// role input should have a validation warning
		const roleInput = page.getByLabelText('Role').element() as HTMLInputElement;
		expect(roleInput.validity.valueMissing).toBe(true);
		expect(roleInput.validationMessage).toBeTruthy();
	});

	it('should submit the form when it is valid', async () => {
		const fetchSpy = vi
			.spyOn(window, 'fetch')
			.mockResolvedValue(new Response(null, { status: 200 }));

		render(Page, { props: { data: { devMode: false } } });

		// Fill in all fields
		await page.getByLabelText('Email').fill('myEmail@email.be');
		await page.getByLabelText('Company').fill('Test Company');
		await page.getByLabelText('Role').selectOptions('tax-advisor');

		await page.getByRole('button', { name: 'Join Beta Waitlist' }).click();

		// Verify the POST request was sent
		expect(fetchSpy).toHaveBeenCalledOnce();
		expect(fetchSpy).toHaveBeenCalledWith(
			'https://formspree.io/f/mreagrzq',
			expect.objectContaining({
				method: 'post',
				headers: {
					Accept: 'application/json'
				}
			})
		);

		// Form should still be visible
		await expect.element(page.getByTestId('beta-form')).toBeInTheDocument();

		// Popup should appear with success message
		await expect.element(page.getByTestId('popup')).toBeInTheDocument();
		await expect
			.element(page.getByText("You've been added to the beta waitlist. We'll be in touch soon."))
			.toBeInTheDocument();
	});

	it('should show dev mode popup and skip fetch when dev is on', async () => {
		const fetchSpy = vi.spyOn(window, 'fetch');

		render(Page, { props: { data: { devMode: true } } });

		// Fill in all fields
		await page.getByLabelText('Email').fill('myEmail@email.be');
		await page.getByLabelText('Company').fill('Test Company');
		await page.getByLabelText('Role').selectOptions('tax-advisor');

		await page.getByRole('button', { name: 'Join Beta Waitlist' }).click();

		// Fetch should not have been called
		expect(fetchSpy).not.toHaveBeenCalled();

		// Form should still be visible
		await expect.element(page.getByTestId('beta-form')).toBeInTheDocument();

		// Popup should appear with dev mode message
		await expect.element(page.getByTestId('popup')).toBeInTheDocument();
		await expect.element(page.getByText('Thank You! (Dev Mode)')).toBeInTheDocument();
		await expect
			.element(
				page.getByText(
					"Form submission skipped in development. In production, you'd be added to the waitlist."
				)
			)
			.toBeInTheDocument();
	});

	it('should show error popup when the request fails', async () => {
		vi.spyOn(window, 'fetch').mockResolvedValue(new Response(null, { status: 500 }));

		render(Page, { props: { data: { devMode: false } } });

		// Fill in all fields
		await page.getByLabelText('Email').fill('myEmail@email.be');
		await page.getByLabelText('Company').fill('Test Company');
		await page.getByLabelText('Role').selectOptions('tax-advisor');

		await page.getByRole('button', { name: 'Join Beta Waitlist' }).click();

		// Form should still be visible
		await expect.element(page.getByTestId('beta-form')).toBeInTheDocument();

		// Popup should appear with error message
		await expect.element(page.getByTestId('popup')).toBeInTheDocument();
		await expect.element(page.getByText('Oops!')).toBeInTheDocument();
		await expect
			.element(
				page.getByText(
					'Something went wrong. Please try again later or contact us at info@vatmiraal.be'
				)
			)
			.toBeInTheDocument();
	});

	it('should show error popup when the request return an error', async () => {
		vi.spyOn(window, 'fetch').mockRejectedValueOnce(new Error(''));

		render(Page, { props: { data: { devMode: false } } });

		// Fill in all fields
		await page.getByLabelText('Email').fill('myEmail@email.be');
		await page.getByLabelText('Company').fill('Test Company');
		await page.getByLabelText('Role').selectOptions('tax-advisor');

		await page.getByRole('button', { name: 'Join Beta Waitlist' }).click();

		// Form should still be visible
		await expect.element(page.getByTestId('beta-form')).toBeInTheDocument();

		// Popup should appear with error message
		await expect.element(page.getByTestId('popup')).toBeInTheDocument();
		await expect.element(page.getByText('Oops!')).toBeInTheDocument();
		await expect
			.element(
				page.getByText(
					'Something went wrong. Please try again later or contact us at info@vatmiraal.be'
				)
			)
			.toBeInTheDocument();
	});
});
