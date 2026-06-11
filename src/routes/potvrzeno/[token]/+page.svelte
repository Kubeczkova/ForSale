<script lang="ts">
	import t from '$lib/i18n/cs.json';

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
				{t.verification.success_heading}
			</h1>
			<p class="text-base text-on-surface-variant" style="line-height:1.6;">
				{t.verification.success_text}
			</p>
		{:else}
			<div class="w-16 h-16 rounded-2xl flex items-center justify-center" style="background:#ffdad6;">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#93000a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
				</svg>
			</div>
			<h1 class="font-display font-semibold text-on-surface text-3xl" style="letter-spacing:-0.01em;">
				{t.verification.error_heading}
			</h1>
			<p class="text-base text-on-surface-variant" style="line-height:1.6;">
				{result.error ?? t.verification.error_default}
			</p>
		{/if}

		<a href="/" class="mt-2 text-sm font-semibold text-primary underline underline-offset-2 hover:text-primary-container">
			{t.verification.back}
		</a>
	</div>
</div>
