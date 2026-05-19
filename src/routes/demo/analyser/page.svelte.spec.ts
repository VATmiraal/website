import { page } from 'vitest/browser';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';

vi.mock('$app/navigation', () => ({ goto: vi.fn() }));
vi.mock('$app/paths', () => ({ resolve: (path: string) => `#${path}` }));

const mockExportPayload = {
	version: 1,
	generatedAt: '2025-01-01T00:00:00Z',
	metadata: {
		objectTypes: [],
		propertyCategories: [],
		countries: { eu: [], third: [] }
	},
	parties: [],
	entries: { glEntries: [], stockMovements: [] },
	analyses: {},
	whatIf: {}
};

import Page from './+page.svelte';

describe('/demo/analyser/+page.svelte', () => {
	beforeEach(() => {
		vi.spyOn(window, 'fetch').mockResolvedValue(
			new Response(JSON.stringify(mockExportPayload), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			})
		);
	});

	afterEach(() => {
		vi.restoreAllMocks();
		vi.useRealTimers();
	});

	describe('desktop viewport', () => {
		it('should render the Book a call button', async () => {
			await page.viewport(1280, 800);
			render(Page, {});

			await expect.element(page.getByTestId('book-call-btn')).toBeInTheDocument();
		});

		it('should render the share bar', async () => {
			await page.viewport(1280, 800);
			render(Page, {});

			await expect.element(page.getByTestId('share-bar')).toBeInTheDocument();
		});

		it('should link the Book a call button to /request_a_demo', async () => {
			await page.viewport(1280, 800);
			render(Page, {});

			const link = page.getByTestId('book-call-btn').element() as HTMLAnchorElement;
			expect(link.href).toContain('/request_a_demo');
		});

		it('should render the desktop-only container', async () => {
			await page.viewport(1280, 800);
			render(Page, {});

			await expect.element(page.getByTestId('desktop-only')).toBeInTheDocument();
		});
	});

	describe('mobile viewport', () => {
		it('should render the mobile message', async () => {
			await page.viewport(375, 667);
			render(Page, {});

			await expect.element(page.getByTestId('mobile-message')).toBeInTheDocument();
		});

		it('should show "Desktop Only" heading in mobile message', async () => {
			await page.viewport(375, 667);
			render(Page, {});

			await expect.element(page.getByRole('heading', { name: 'Desktop Only' })).toBeInTheDocument();
		});

		it('should have a back link to demo overview in mobile message', async () => {
			await page.viewport(375, 667);
			render(Page, {});

			await expect.element(page.getByTestId('mobile-message')).toBeInTheDocument();

			const link = page.getByRole('link', { name: /Back to demo/ }).element() as HTMLAnchorElement;
			expect(link.href).toContain('/demo');
		});
	});

	it('should not show the booking popup initially', async () => {
		render(Page, {});

		await expect.element(page.getByTestId('booking-popup')).not.toBeInTheDocument();
	});

	it('should show the booking popup after the timer fires', async () => {
		vi.useFakeTimers();

		render(Page, {});

		await vi.advanceTimersByTimeAsync(0);
		await vi.advanceTimersByTimeAsync(60_000);

		await expect.element(page.getByTestId('booking-popup')).toBeInTheDocument();
	});

	it('should close the popup when Escape is pressed', async () => {
		vi.useFakeTimers();

		render(Page, {});

		await vi.advanceTimersByTimeAsync(0);
		await vi.advanceTimersByTimeAsync(60_000);

		await expect.element(page.getByTestId('booking-popup')).toBeInTheDocument();

		page
			.getByRole('dialog')
			.element()
			.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

		await expect.element(page.getByTestId('booking-popup')).not.toBeInTheDocument();
	});

	it('should close the popup when the overlay is clicked', async () => {
		vi.useFakeTimers();

		render(Page, {});

		await vi.advanceTimersByTimeAsync(0);
		await vi.advanceTimersByTimeAsync(60_000);
		await expect.element(page.getByTestId('booking-popup')).toBeInTheDocument();

		const overlay = page.getByTestId('booking-popup').element() as HTMLElement;
		overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));

		await expect.element(page.getByTestId('booking-popup')).not.toBeInTheDocument();
	});

	it('should have proper accessibility attributes on the popup dialog', async () => {
		vi.useFakeTimers();

		render(Page, {});

		await vi.advanceTimersByTimeAsync(0);
		await vi.advanceTimersByTimeAsync(60_000);
		await expect.element(page.getByTestId('booking-popup')).toBeInTheDocument();

		const dialog = page.getByRole('dialog').element() as HTMLElement;
		expect(dialog.getAttribute('aria-modal')).toBe('true');
		expect(dialog.getAttribute('aria-labelledby')).toBe('popup-title');
		expect(dialog.getAttribute('tabindex')).toBe('-1');
	});

	it('should trap Tab focus within the dialog', async () => {
		vi.useFakeTimers();

		render(Page, {});

		await vi.advanceTimersByTimeAsync(0);
		await vi.advanceTimersByTimeAsync(60_000);
		await expect.element(page.getByTestId('booking-popup')).toBeInTheDocument();

		const dialog = page.getByRole('dialog').element();
		const continueBtn = page
			.getByRole('button', { name: 'Continue exploring' })
			.element() as HTMLElement;

		continueBtn.focus();
		expect(document.activeElement).toBe(continueBtn);

		dialog.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }));

		dialog.dispatchEvent(
			new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true })
		);
		expect(document.activeElement).toBe(continueBtn);
	});
});
