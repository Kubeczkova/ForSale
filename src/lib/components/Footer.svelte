<script lang="ts">
	import t from '$lib/i18n/cs.json';

	const legalLinks = [
		{ label: t.footer.how_it_works, href: '/zpusob-nakupu' },
		{ label: t.footer.terms,        href: '/obchodni-podminky' },
		{ label: t.footer.privacy,      href: '/ochrana-osobnich-udaju' },
		{ label: t.footer.cookies,      href: '/cookies' },
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

			<div class="flex justify-end">
				<div class="w-8 h-8 flex items-center justify-center" title="Beeebooo Crew">
					<a href="https://becrew.cz" target="_blank">
						<img src="/favicon.svg" alt="Beeebooo Crew" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
