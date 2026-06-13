<script lang="ts">
	import { config } from '$lib/config';
	import t from '$lib/i18n/cs.json';

	let { maxBid }: { maxBid: { price: number } | null } = $props();
	let imageSrc = null;
</script>

<section class="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">

	<!-- Background image / gradient placeholder -->
	{#if imageSrc}
		<img src={imageSrc} alt='Pohled na nemovitost'
			class="absolute inset-0 w-full h-full object-cover"
			style="filter: grayscale(40%) brightness(0.45);" />
	{:else}
		<div class="absolute inset-0 bg-inverse-surface"
			style="background: linear-gradient(160deg, #2f312f 0%, #54433c 100%);"></div>
	{/if}

	<!-- Vignette -->
	<div class="absolute inset-0"
		style="background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%);"></div>

	<!-- Content -->
	<div class="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-16 flex flex-col gap-8">

		<p class="text-xs font-semibold uppercase" style="color: #ffb596; letter-spacing: 0.12em;">
			{t.hero.overline}
		</p>

		<h1 class="font-display font-semibold text-white leading-tight"
			style="font-size: clamp(2.5rem, 6vw, 4rem); letter-spacing: -0.02em; max-width: 14ch;">
			{config.property.name}
		</h1>

		<div class="flex flex-wrap gap-6">
			{#each [
				{ label: t.hero.stats.disposition, value: config.property.disposition },
				{ label: t.hero.stats.land,        value: config.property.landArea },
				{ label: t.hero.stats.location,    value: config.property.location },
			] as stat, i (i)}
				<div>
					<p class="text-xs font-semibold uppercase mb-1"
						style="color: rgba(255,181,150,0.7); letter-spacing: 0.1em;">{stat.label}</p>
					<p class="text-base font-medium text-white">{stat.value}</p>
				</div>
			{/each}
		</div>

		<!-- Divider -->
		<div class="w-16 h-px" style="background: rgba(218,193,184,0.4);"></div>

		<!-- Current bid -->
		<div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
			<div>
				<p class="text-xs font-semibold uppercase mb-1"
					style="color: rgba(255,181,150,0.7); letter-spacing: 0.1em;">{t.hero.current_bid}</p>
				<p class="font-display font-semibold text-white text-3xl md:text-4xl">
					{maxBid?.price?.toLocaleString('cs-CZ') ?? '—'} Kč
				</p>
			</div>
		</div>

		<!-- CTA -->
		<div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
			<a href="#prihodit"
				class="bg-primary text-on-primary rounded-2xl font-semibold text-base transition-all duration-200 hover:bg-primary-container"
				style="padding: 14px 36px; box-shadow: 0 4px 20px rgba(130,59,24,0.45); text-decoration: none; display: inline-block;">
				{t.hero.cta}
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
		<p class="text-xs uppercase" style="color: rgba(255,255,255,0.45); letter-spacing: 0.1em;">{t.hero.scroll}</p>
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="color: rgba(255,255,255,0.45);">
			<path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	</div>
</section>
