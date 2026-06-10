<script lang="ts">
	let { data } = $props();
	const result = data as { success: boolean; error?: string };
</script>

<div class="min-h-screen flex items-center justify-center" style="background:#faf9f6;">
	<div class="rounded-2xl p-10 max-w-md w-full text-center flex flex-col items-center gap-6"
		style="background:#fff; box-shadow:0 4px 24px rgba(108,72,32,0.08); border:1px solid #e9e8e5;">

		{#if result.success}
			<div class="w-16 h-16 rounded-2xl flex items-center justify-center" style="background:#51634c;">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<polyline points="20 6 9 17 4 12"/>
				</svg>
			</div>
			<h1 class="font-display font-semibold text-on-surface text-3xl" style="letter-spacing:-0.01em;">
				Příhoz potvrzen
			</h1>
			<p class="text-base text-on-surface-variant" style="line-height:1.6;">
				Váš příhoz byl úspěšně ověřen. Budeme vás kontaktovat s dalšími informacemi.
			</p>
		{:else}
			<div class="w-16 h-16 rounded-2xl flex items-center justify-center" style="background:#ffdad6;">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#93000a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
				</svg>
			</div>
			<h1 class="font-display font-semibold text-on-surface text-3xl" style="letter-spacing:-0.01em;">
				Odkaz je neplatný
			</h1>
			<p class="text-base text-on-surface-variant" style="line-height:1.6;">
				{result.error ?? 'Token je neplatný nebo již byl použit.'}
			</p>
		{/if}

		<a href="/" class="mt-2 text-sm font-semibold text-primary underline underline-offset-2 hover:text-primary-container">
			Zpět na hlavní stránku
		</a>
	</div>
</div>
