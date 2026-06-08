<script lang="ts">
	// ─── Add / remove photos here ─────────────────────────────────────────────
	const photos: { src: string; alt: string; desc: string }[] = [
		// { src: '/images/obyvak.jpg',  alt: 'Obývací pokoj',  desc: 'Prostorný obývací pokoj s výhledem do zahrady' },
		// { src: '/images/kuchyn.jpg',  alt: 'Kuchyně',        desc: 'Moderní kuchyň s ostrovem a spotřebiči Bosch' },
		// { src: '/images/loznice.jpg', alt: 'Ložnice',        desc: 'Klidná ložnice s vestavěnými skříněmi' },
		// { src: '/images/zahrada.jpg', alt: 'Zahrada',        desc: 'Oplocená zahrada 450 m² s terasou' },
	];

	let modalIndex = $state<number | null>(null);
	function open(i: number)  { modalIndex = i; }
	function close()          { modalIndex = null; }
	function prev()           { if (modalIndex !== null) modalIndex = (modalIndex - 1 + photos.length) % photos.length; }
	function next()           { if (modalIndex !== null) modalIndex = (modalIndex + 1) % photos.length; }

	function onKeydown(e: KeyboardEvent) {
		if (modalIndex === null) return;
		if (e.key === 'Escape')     close();
		if (e.key === 'ArrowLeft')  prev();
		if (e.key === 'ArrowRight') next();
	}
</script>

<svelte:window onkeydown={onKeydown} />

<section class="bg-surface" id="galerie">
	<div class="max-w-5xl mx-auto px-5 md:px-16 pb-20 md:pb-32">

		<!-- Section header -->
		<div class="mb-10">
			<p class="text-xs font-semibold uppercase text-outline mb-4" style="letter-spacing: 0.1em;">
				Fotodokumentace
			</p>
			<h2 class="font-display font-semibold text-on-surface text-3xl md:text-4xl" style="letter-spacing: -0.01em;">
				Prohlédněte si nemovitost
			</h2>
		</div>

		{#if photos.length === 0}
			<!-- Placeholder -->
			<div class="rounded-2xl flex items-center justify-center py-20 bg-surface-container border-2 border-dashed border-outline-variant">
				<div class="text-center">
					<p class="text-3xl mb-3">🏠</p>
					<p class="text-sm font-semibold text-outline">Fotografie budou přidány brzy</p>
				</div>
			</div>
		{:else}
			<!-- Photo grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{#each photos as photo, i (i)}
					<button
						type="button"
						class="group relative w-full overflow-hidden rounded-2xl text-left"
						style="aspect-ratio: 4/3;"
						onclick={() => open(i)}
					>
						<img src={photo.src} alt={photo.alt}
							class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
						<span class="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							style="background: linear-gradient(to top, rgba(26,28,26,0.75) 0%, transparent 60%); display: flex;">
							<span class="text-sm font-medium text-white">{photo.desc}</span>
						</span>
						<span class="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							style="background: rgba(255,255,255,0.15); backdrop-filter: blur(8px); display: flex;">
							<svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="text-white">
								<path d="M3 8V3h5M12 3h5v5M17 12v5h-5M8 17H3v-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</span>
					</button>
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- Fullscreen modal -->
{#if modalIndex !== null}
	<div class="fixed inset-0 z-50 flex items-center justify-center"
		style="background: rgba(26,28,26,0.92); backdrop-filter: blur(8px);"
		role="dialog" aria-modal="true">

		<button type="button" onclick={close}
			class="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-white"
			style="background: rgba(255,255,255,0.1);" aria-label="Zavřít">✕</button>

		{#if photos.length > 1}
			<button type="button" onclick={prev}
				class="absolute left-4 md:left-8 w-10 h-10 rounded-full flex items-center justify-center text-white"
				style="background: rgba(255,255,255,0.1);" aria-label="Předchozí">‹</button>
		{/if}

		<div class="flex flex-col items-center gap-4 px-16 max-w-5xl w-full">
			<img src={photos[modalIndex].src} alt={photos[modalIndex].alt}
				class="max-h-[75vh] w-auto rounded-2xl object-contain" />
			<div class="text-center">
				<p class="text-base font-medium text-white">{photos[modalIndex].desc}</p>
				<p class="text-xs mt-1" style="color: rgba(255,255,255,0.4);">{modalIndex + 1} / {photos.length}</p>
			</div>
		</div>

		{#if photos.length > 1}
			<button type="button" onclick={next}
				class="absolute right-4 md:right-8 w-10 h-10 rounded-full flex items-center justify-center text-white"
				style="background: rgba(255,255,255,0.1);" aria-label="Další">›</button>
		{/if}
	</div>
{/if}

