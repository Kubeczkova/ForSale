<script lang="ts">
	// ─── Swap seller info here ────────────────────────────────────────────────
	const seller = {
		name:  'Jiří Kubeczka',
		photo: '',                     // e.g. '/images/prodavajici.jpg'
		role:  'Majitel nemovitosti',
		email: 'info@myfilm.cz',
		phone: '+420 606 787 927',
	};

	// ─── Story content — edit freely ─────────────────────────────────────────
	const story = {
		overline: 'Příběh nemovitosti',
		headline: 'Dům postavený\npro rodinu.',
		why:     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
		reason:  `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		promise: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
	};
</script>

<section class="bg-surface" id="kontakt">
	<div class="max-w-5xl mx-auto px-5 md:px-16 py-20 md:py-32">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

			<!-- LEFT — Story text -->
			<div class="flex flex-col gap-8">
				<p class="text-xs font-semibold uppercase text-outline" style="letter-spacing: 0.1em;">
					{story.overline}
				</p>
				<h2 class="font-display font-semibold text-on-surface leading-tight"
					style="font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.02em; white-space: pre-line;">
					{story.headline}
				</h2>
				<div class="flex flex-col gap-4">
					{#each [story.why, story.reason, story.promise] as paragraph, i (i)}
						<p class="text-base text-on-surface-variant" style="line-height: 1.7;">{paragraph}</p>
					{/each}
				</div>
			</div>

			<!-- RIGHT — Seller card -->
			<div class="flex flex-col gap-6 md:pt-16">

				<!-- Avatar -->
				<div class="w-20 h-20 rounded-2xl overflow-hidden bg-surface-container">
					{#if seller.photo}
						<img src={seller.photo} alt={seller.name} class="w-full h-full object-cover" />
					{:else}
						<div class="w-full h-full flex items-center justify-center text-2xl font-semibold font-display text-outline">
							{seller.name.split(' ').map(w => w[0]).join('')}
						</div>
					{/if}
				</div>

				<!-- Name + role -->
				<div>
					<p class="text-xl font-semibold font-display text-on-surface">{seller.name}</p>
					<p class="text-sm mt-1 text-outline">{seller.role}</p>
				</div>

				<!-- Divider -->
				<div class="w-12 h-px bg-outline-variant"></div>

				<!-- Contact links -->
				<div class="flex flex-col gap-3">
					<a href="mailto:{seller.email}" class="flex items-center gap-3 text-sm text-on-surface-variant">
						<span class="w-8 h-8 rounded-full flex items-center justify-center" style="background: rgba(130,59,24,0.08);">
							<svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="text-primary">
								<path d="M3 5h14l-7 7L3 5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
								<path d="M3 5v10h14V5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
							</svg>
						</span>
						<span class="text-primary">{seller.email}</span>
					</a>
					<a href="tel:{seller.phone}" class="flex items-center gap-3 text-sm text-on-surface-variant">
						<span class="w-8 h-8 rounded-full flex items-center justify-center" style="background: rgba(130,59,24,0.08);">
							<svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="text-primary">
								<path d="M6 2h3l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L14.5 10 18 11.5V14c0 2-2 3-4 2C7 13.5 3.5 7 4 4c-.5-2 1-2 2-2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
							</svg>
						</span>
						<span class="text-primary">{seller.phone}</span>
					</a>
				</div>

				<!-- Trust badge -->
				<div class="rounded-2xl p-5 mt-2 bg-surface-container border border-surface-high">
					<p class="text-xs font-semibold uppercase text-outline mb-2" style="letter-spacing: 0.1em;">Prodej bez realitní kanceláře.</p>
					<p class="text-sm text-on-surface-variant" style="line-height: 1.6;">
						Rádi vám zodpovíme jakékoli otázky a domluvíme prohlídku. Kompletní dokumentace k nahlédnutí při prohlídce.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
