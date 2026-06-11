<script lang="ts">
	import { page } from '$app/stores';
	import { config } from '$lib/config';
	import t from '$lib/i18n/cs.json';

	const navLinks = [
		{ label: t.header.property, anchor: 'kontakt'  },
		{ label: t.header.gallery,  anchor: 'galerie'  },
		{ label: t.header.bid,      anchor: 'prihodit', primary: true },
	];

	function href(anchor: string) {
		return $page.url.pathname === '/' ? `#${anchor}` : `/#${anchor}`;
	}
</script>

<header class="fixed top-0 left-0 right-0 z-40 border-b border-outline-variant"
	style="background: rgba(250,249,246,0.88); backdrop-filter: blur(12px);">
	<div class="max-w-5xl mx-auto px-5 md:px-16 h-16 flex items-center justify-between gap-6">

		<a href="/" class="font-display font-semibold text-lg text-on-surface shrink-0" style="text-decoration: none;">
			{config.property.name}
		</a>

		<nav class="flex items-center gap-1">
			{#each navLinks as link (link.anchor)}
				{#if link.primary}
					<a href={href(link.anchor)}
						class="rounded-xl text-sm font-semibold bg-primary text-on-primary hover:bg-primary-container transition-colors duration-150"
						style="padding: 8px 20px; text-decoration: none;">
						{link.label}
					</a>
				{:else}
					<a href={href(link.anchor)}
						class="px-4 py-2 rounded-xl text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-150"
						style="text-decoration: none;">
						{link.label}
					</a>
				{/if}
			{/each}
		</nav>

	</div>
</header>
