<script lang="ts">
	const legalLinks = [
		{ label: 'Jak probíhá výběrové řízení?', href: '/zpusob-nakupu' },
		{ label: 'Obchodní podmínky',             href: '/obchodni-podminky' },
		{ label: 'Ochrana osobních údajů',        href: '/ochrana-osobnich-udaju' },
		{ label: 'Cookies',                        href: '/cookies' },
	];
</script>

<footer class="bg-surface border-t border-outline-variant">
	<div class="max-w-5xl mx-auto px-5 md:px-16 py-6">
		<div class="grid items-center" style="grid-template-columns: 1fr auto 1fr;">

			<span></span>

			<nav class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
				{#each legalLinks as link (link.href)}
					<a href={link.href}
						class="text-xs text-outline hover:text-primary transition-colors duration-150 whitespace-nowrap"
						style="text-decoration: none;">
						{link.label}
					</a>
				{/each}
			</nav>

			<!-- Icon placeholder — replace with logo / social link -->
			<div class="flex justify-end">
				<!--
					ICON PLACEHOLDER
					<a href="https://instagram.com/..." target="_blank">
						<img src="/images/instagram.svg" alt="Instagram" class="w-6 h-6" />
					</a>
				-->
				<div class="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container text-outline" title="Placeholder pro ikonku">
					<svg width="14" height="14" viewBox="0 0 20 20" fill="none">
						<circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
						<path d="M10 6v4l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</footer>
