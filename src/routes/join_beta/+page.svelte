<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { dev } from '$app/environment';

	let { data }: { data?: { devMode: boolean } } = $props();

	let showPopup = $state(false);
	let popupTitle = $state('Thank You!');
	let popupMessage = $state("You've been added to the beta waitlist. We'll be in touch soon.");

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const entries: [string, string][] = [];
		for (const [key, value] of formData.entries()) {
			if (typeof value === 'string') {
				entries.push([key, value]);
			} else {
				console.error(`the form value ${key}:${value} is not a string`);
				popupTitle = 'Oops!';
				popupMessage =
					'Something went wrong. Please try again later or contact us at info@vatmiraal.be';
				showPopup = true;
				return;
			}
		}
		const params = new URLSearchParams(entries);

		if (data?.devMode ?? dev) {
			popupTitle = 'Thank You! (Dev Mode)';
			popupMessage =
				"Form submission skipped in development. In production, you'd be added to the waitlist.";
			showPopup = true;
			return;
		}

		const response = await fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: params.toString()
		});

		if (response.ok) {
			popupTitle = 'Thank You!';
			popupMessage = "You've been added to the beta waitlist. We'll be in touch soon.";
		} else {
		    console.error(`the response is not ok it returns ${JSON.stringify(await response.json(), null, 2)}`);
			popupTitle = 'Oops!';
			popupMessage =
				'Something went wrong. Please try again later or contact us at info@vatmiraal.be';
		}

		showPopup = true;
	}

	function closePopup() {
		showPopup = false;
		goto(resolve('/'));
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closePopup();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div id="page">
	<h1>Join the Beta Waitlist</h1>
	<p id="subtitle">Be among the first to experience the future of VAT compliance.</p>

	<form
		id="beta-form"
		data-testid="beta-form"
		name="beta-signup"
		method="POST"
		data-netlify="true"
		onsubmit={handleSubmit}
	>
		<input type="hidden" name="form-name" value="beta-signup" />

		<div class="form-group">
			<label for="email">Email</label>
			<input type="email" id="email" name="email" placeholder="your.email@company.com" required />
		</div>

		<div class="form-group">
			<label for="company">Company</label>
			<input type="text" id="company" name="company" placeholder="Company Name" required />
		</div>

		<div class="form-group">
			<label for="role">Role</label>
			<select id="role" name="role" required>
				<option value="">Select your role</option>
				<option value="tax-advisor">Tax Advisor</option>
				<option value="accountant">Accountant</option>
				<option value="lawyer">Lawyer</option>
				<option value="business-owner">Business Owner</option>
				<option value="finance-manager">Finance Manager</option>
				<option value="other">Other</option>
			</select>
		</div>

		<button type="submit">Join Beta Waitlist</button>
	</form>
</div>

{#if showPopup}
	<div class="overlay" data-testid="popup" onclick={closePopup} role="presentation">
		<div class="popup">
			<h2>{popupTitle}</h2>
			<p>{popupMessage}</p>
			<button onclick={closePopup}>Back to Home</button>
		</div>
	</div>
{/if}

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 10vh;
		height: calc(100vh - var(--header-total-height));
	}

	h1 {
		font-size: 2.5em;
		font-weight: bold;
		margin-bottom: 0.5em;
	}

	#subtitle {
		font-size: 1.2em;
		opacity: 0.7;
		margin-bottom: 3em;
	}

	#beta-form {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
		width: 25vw;
		min-width: 300px;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	label {
		font-weight: bold;
		font-size: 1.1em;
	}

	input,
	select {
		font-family: 'Inter', sans-serif;
		font-size: 1em;
		padding: 0.8em 1em;
		border: 2.5px solid black;
		background: transparent;
		outline: none;
		transition: box-shadow 0.2s ease;
	}

	input:focus,
	select:focus {
		box-shadow: 0 0 0 2px #10b981;
	}

	input::placeholder {
		opacity: 0.5;
	}

	select {
		cursor: pointer;
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='black' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 1em center;
	}

	button {
		font-family: 'Inter', sans-serif;
		font-size: 1.2em;
		font-weight: bold;
		padding: 0.8em 1.5em;
		border: 2.5px solid black;
		background: black;
		color: white;
		cursor: pointer;
		transition: all 0.2s ease;
		margin-top: 1em;
	}

	button:hover:not(:disabled) {
		background: transparent;
		color: black;
	}

	button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.popup {
		background: white;
		padding: 3em;
		border: 2.5px solid black;
		text-align: center;
		max-width: 400px;
	}

	.popup h2 {
		font-size: 2em;
		font-weight: bold;
		margin-bottom: 0.5em;
	}

	.popup p {
		font-size: 1.1em;
		opacity: 0.8;
		margin-bottom: 2em;
	}

	.popup button {
		margin-top: 0;
	}
</style>
