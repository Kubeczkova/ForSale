<script lang="ts">
	// ─── Replace this section when bid form is ready ──────────────────────────
	const contact = { email: 'info@myfilm.cz', phone: '+420 606 787 927' };
</script>

<section class="bg-surface-container border-t border-outline-variant" id="prihodit">
	<div class="max-w-5xl mx-auto px-5 md:px-16 py-20 md:py-32">
		<div class="max-w-xl mx-auto text-center flex flex-col items-center gap-8">

			<!-- Icon -->
			<div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-on-primary">
					<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
				</svg>
			</div>

			<!-- Heading -->
			<div>
				<p class="text-xs font-semibold uppercase text-outline mb-3" style="letter-spacing: 0.1em;">Máte zájem?</p>
				<h2 class="font-display font-semibold text-on-surface text-3xl md:text-4xl" style="letter-spacing: -0.01em;">
					Kontaktujte nás
				</h2>
				<p class="mt-4 text-base text-on-surface-variant" style="line-height: 1.6;">
					Formulář příhozů je připravován. Prozatím nás kontaktujte přímo — rádi vám zodpovíme jakékoli otázky a domluvíme prohlídku.
				</p>
			</div>

			<!-- Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 w-full justify-center">
				<a href="mailto:{contact.email}"
					class="flex items-center justify-center gap-2 rounded-2xl font-semibold text-sm bg-primary text-on-primary transition-all duration-200 hover:bg-primary-container"
					style="padding: 14px 32px;">
					<svg width="16" height="16" viewBox="0 0 20 20" fill="none">
						<path d="M3 5h14l-7 7L3 5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
						<path d="M3 5v10h14V5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
					</svg>
					{contact.email}
				</a>
				<a href="tel:{contact.phone}"
					class="flex items-center justify-center gap-2 rounded-2xl font-semibold text-sm bg-white text-primary border border-outline-variant transition-all duration-200 hover:border-primary"
					style="padding: 14px 32px;">
					<svg width="16" height="16" viewBox="0 0 20 20" fill="none">
						<path d="M6 2h3l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L14.5 10 18 11.5V14c0 2-2 3-4 2C7 13.5 3.5 7 4 4c-.5-2 1-2 2-2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
					</svg>
					{contact.phone}
				</a>
			</div>
		</div>
	</div>
</section>
