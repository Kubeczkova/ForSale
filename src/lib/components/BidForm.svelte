<script lang="ts">
	import { enhance } from '$app/forms';
	import { fly } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { untrack } from 'svelte';
	import type { ActionResult } from '@sveltejs/kit';
	import { config } from '$lib/config';
	import t from '$lib/i18n/cs.json';

	let { maxBid }: { maxBid: { price: number } | null } = $props();

	let success = $state(false);

	const LS_KEY = 'bid_contact';
	const saved = browser ? JSON.parse(localStorage.getItem(LS_KEY) ?? 'null') : null;

	const initialPrice = untrack(() =>
		String((maxBid?.price ?? config.auction.startingPrice) + config.auction.minBidStep)
	);

	let vals = $state({
		name:  saved?.name  ?? '',
		email: saved?.email ?? '',
		phone: saved?.phone ?? '',
		price: initialPrice,
		isMax: false,
		terms: false,
	});


	let errors = $state<Record<string, string>>({});
	let loading = $state(false);

	function formatPrice(e: Event) {
		const input = e.currentTarget as HTMLInputElement;
		const raw = input.value.replace(/\s/g, '').replace(/\D/g, '');
		vals.price = raw.replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
		input.value = vals.price;
	}
</script>

{#if errors.server}
	<div class="mb-6 px-4 py-3 rounded-xl text-sm font-medium" style="background:#ffdad6; color:#93000a;">
		{errors.server}
	</div>
{/if}

{#if success}
	<section class="bg-surface-container border-t border-outline-variant" id="prihodit">
		<div class="max-w-5xl mx-auto px-5 md:px-16 py-20 md:py-32">
			<div class="max-w-xl mx-auto text-center flex flex-col items-center gap-8" in:fly={{ y: 24, duration: 400 }}>
				<div class="w-16 h-16 rounded-2xl flex items-center justify-center" style="background:#51634c;">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<polyline points="20 6 9 17 4 12"/>
					</svg>
				</div>
				<h2 class="font-display font-semibold text-on-surface text-3xl md:text-4xl" style="letter-spacing:-0.01em;">
					{t.form.success_heading}
				</h2>
				<p class="text-base text-on-surface-variant" style="line-height:1.6;">
					{t.form.success_text}
				</p>
			</div>
		</div>
	</section>
{:else}
	<section class="bg-surface-container border-t border-outline-variant" id="prihodit">
		<div class="max-w-5xl mx-auto px-5 md:px-16 py-20 md:py-32">
			<div class="max-w-xl mx-auto flex flex-col items-start gap-8">

				<!-- Icon -->
				<div class="w-full flex flex-col items-center gap-8">
					<div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-on-primary">
							<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
						</svg>
					</div>

					<!-- Heading -->
					<div class="text-center">
						<p class="text-xs font-semibold uppercase text-outline mb-3" style="letter-spacing: 0.1em;">{t.form.overline}</p>
						<h2 class="font-display font-semibold text-on-surface text-3xl md:text-4xl" style="letter-spacing: -0.01em;">
							{t.form.heading}
						</h2>
					</div>
				</div>

				<div class="w-full" in:fly={{ y: 32, duration: 400 }}>
					<form
						method="POST"
						action="/?/bid"
						use:enhance={({ formData }) => {
							loading = true;
							formData.set('is_max', String(vals.isMax));
							formData.set('price', (vals.price ?? '').replace(/[\u00a0\s]/g, ''));
							if (browser) {
								localStorage.setItem(LS_KEY, JSON.stringify({
									name:  vals.name,
									email: vals.email,
									phone: vals.phone,
								}));
							}
							return async ({ result }: { result: ActionResult }) => {
								loading = false;
								if (result.type === 'failure') {
									errors = (result.data?.errors as Record<string, string>) ?? {};
									vals   = { ...vals, ...(result.data?.values ?? {}) };
								} else if (result.type === 'success') {
									success = true;
								}
							};
						}}
						class="flex flex-col gap-6"
					>
						<!-- ── Kontaktní údaje ── -->
						<fieldset class="rounded-2xl overflow-hidden" style="background:#fff; box-shadow:0 4px 24px rgba(108,72,32,0.08); border:1px solid #e9e8e5;">
							<legend class="sr-only">Kontaktní údaje</legend>

							<div class="px-6 pt-6 pb-4 border-b" style="border-color:#e9e8e5;">
								<label class="block text-xs font-semibold uppercase mb-2 text-outline" style="letter-spacing:0.08em;" for="name">
									{t.form.name_label} <span class="text-primary">*</span>
								</label>
								<input id="name" name="name" type="text" required autocomplete="name"
									bind:value={vals.name} placeholder={t.form.name_placeholder}
									class="w-full bg-transparent text-on-surface text-base outline-none placeholder:text-outline"
									style="border:none; padding:0; line-height:1.6;" />
								{#if errors.name}<p class="mt-1 text-xs font-medium" style="color:#ba1a1a;">{errors.name}</p>{/if}
							</div>

							<div class="grid grid-cols-1 sm:grid-cols-2 border-b" style="border-color:#e9e8e5;">
								<div class="px-6 py-4 border-b sm:border-b-0 sm:border-r" style="border-color:#e9e8e5;">
									<label class="block text-xs font-semibold uppercase mb-2 text-outline" style="letter-spacing:0.08em;" for="email">
										{t.form.email_label} <span class="text-primary">*</span>
									</label>
									<input id="email" name="email" type="email" required autocomplete="email"
										bind:value={vals.email} placeholder={t.form.email_placeholder}
										class="w-full bg-transparent text-on-surface text-base outline-none placeholder:text-outline"
										style="border:none; padding:0; line-height:1.6;" />
									{#if errors.email}<p class="mt-1 text-xs font-medium" style="color:#ba1a1a;">{errors.email}</p>{/if}
								</div>

								<div class="px-6 py-4">
									<label class="block text-xs font-semibold uppercase mb-2 text-outline" style="letter-spacing:0.08em;" for="phone">
										{t.form.phone_label} <span class="text-primary">*</span>
									</label>
									<input id="phone" name="phone" type="tel" required autocomplete="tel"
										bind:value={vals.phone} placeholder={t.form.phone_placeholder}
										class="w-full bg-transparent text-on-surface text-base outline-none placeholder:text-outline"
										style="border:none; padding:0; line-height:1.6;" />
									{#if errors.phone}<p class="mt-1 text-xs font-medium" style="color:#ba1a1a;">{errors.phone}</p>{/if}
								</div>
							</div>
						</fieldset>

						<!-- ── Typ příhozu ── -->
						<fieldset>
							<legend class="sr-only">Typ příhozu</legend>
							<div class="flex items-center gap-2 mb-3">
								<p class="text-xs font-semibold uppercase text-outline" style="letter-spacing:0.08em;">{t.form.bid_type_label}</p>
								<a href="/zpusob-nakupu" target="_blank" tabindex="-1"
									class="inline-flex items-center justify-center w-4 h-4 rounded-full text-xs font-bold text-on-primary bg-primary no-underline"
									title={t.form.bid_type_help_title}>?</a>
							</div>

							<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

								<!-- Jednorázový -->
								<label class="relative flex flex-col gap-3 rounded-2xl p-6 cursor-pointer transition-all duration-200"
									style="background:#fff; box-shadow:0 4px 24px rgba(108,72,32,0.08); border:2px solid {!vals.isMax ? '#823b18' : '#e9e8e5'};">
									<input type="radio" name="is_max" value="false"
										checked={!vals.isMax} onchange={() => vals.isMax = false}
										class="sr-only" />
									<span class="self-start inline-block px-3 py-1 rounded-full text-xs font-semibold" style="background:#efeeeb; color:#87736b; letter-spacing:0.05em;">
										{t.form.single_tag}
									</span>
									<span class="text-lg font-semibold font-display text-on-surface">{t.form.single_title}</span>
									<span class="text-xs text-on-surface-variant" style="line-height:1.6;">{t.form.single_desc}</span>
									{#if !vals.isMax}
										<span class="absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center" style="background:#823b18;">
											<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2 5 4 7 8 3" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
										</span>
									{/if}
								</label>

								<!-- Maximální -->
								<label class="relative flex flex-col gap-3 rounded-2xl p-6 cursor-pointer transition-all duration-200"
									style="background:{vals.isMax ? '#823b18' : '#fff'}; box-shadow:{vals.isMax ? '0 8px 32px rgba(130,59,24,0.22)' : '0 4px 24px rgba(108,72,32,0.08)'}; border:2px solid {vals.isMax ? '#823b18' : '#e9e8e5'};">
									<input type="radio" name="is_max" value="true"
										checked={vals.isMax} onchange={() => vals.isMax = true}
										class="sr-only" />
									<span class="self-start inline-block px-3 py-1 rounded-full text-xs font-semibold"
										style="background:{vals.isMax ? 'rgba(255,255,255,0.18)' : '#efeeeb'}; color:{vals.isMax ? '#ffe1d6' : '#87736b'}; letter-spacing:0.05em;">
										{t.form.max_tag}
									</span>
									<span class="text-lg font-semibold font-display" style="color:{vals.isMax ? '#fff' : '#1a1c1a'};">{t.form.max_title}</span>
									<span class="text-xs" style="color:{vals.isMax ? '#ffe1d6' : '#54433c'}; line-height:1.6;">{t.form.max_desc}</span>
									{#if vals.isMax}
										<span class="absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center" style="background:rgba(255,255,255,0.25);">
											<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2 5 4 7 8 3" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
										</span>
									{/if}
								</label>

							</div>
						</fieldset>

						<!-- ── Výše příhozu ── -->
						<div class="rounded-2xl px-6 py-5" style="background:#fff; box-shadow:0 4px 24px rgba(108,72,32,0.08); border:1px solid #e9e8e5;">
							{#if maxBid}
								<p class="text-xs font-semibold uppercase mb-4 pb-4 border-b" style="letter-spacing:0.08em; color:#87736b; border-color:#e9e8e5;">
									{t.form.current_bid_label}
									<span class="text-base font-medium text-on-surface-variant shrink-0">
										{maxBid.price.toLocaleString('cs-CZ')} Kč
									</span>
								</p>
							{/if}
							<label class="block text-xs font-semibold uppercase mb-3 text-outline" style="letter-spacing:0.08em;" for="price">
								{vals.isMax ? t.form.price_label_max : t.form.price_label} <span class="text-primary">*</span>
							</label>
							<div class="flex items-baseline gap-2">
								<input id="price" name="price" type="text" inputmode="numeric" required
									value={vals.price} oninput={formatPrice}
									class="w-full bg-transparent text-on-surface text-2xl font-semibold font-display outline-none placeholder:text-outline"
									style="border:none; padding:0;" />
								<span class="text-base font-medium text-on-surface-variant shrink-0">Kč</span>
							</div>
							{#if errors.price}<p class="mt-1 text-xs font-medium" style="color:#ba1a1a;">{errors.price}</p>{/if}
						</div>

						<!-- ── Obchodní podmínky ── -->
						<label class="flex items-start gap-3 cursor-pointer">
							<input type="checkbox" name="terms" bind:checked={vals.terms} class="mt-1 accent-primary shrink-0" required />
							<span class="text-sm text-on-surface-variant" style="line-height:1.6;">
								{t.form.terms_prefix}
								<a href="/obchodni-podminky" target="_blank" class="text-primary underline underline-offset-2 hover:text-primary-container">{t.form.terms_link}</a>
								{t.form.terms_suffix} <span class="text-primary">*</span>
							</span>
						</label>
						{#if errors.terms}<p class="-mt-4 text-xs font-medium" style="color:#ba1a1a;">{errors.terms}</p>{/if}

						<!-- ── Submit ── -->
						<button type="submit" disabled={loading}
							class="w-full rounded-2xl font-semibold text-base bg-primary text-on-primary transition-all duration-200 hover:bg-primary-container disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
							style="padding:16px 32px; box-shadow:0 4px 20px rgba(130,59,24,0.3);">
							{#if loading}
								<svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
									<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
								</svg>
								Odesílám…
							{:else}
								{t.form.submit}
							{/if}
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
{/if}
