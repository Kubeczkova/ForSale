<script lang="ts">
	import { fly } from 'svelte/transition';
	import { browser } from '$app/environment';

	const KEY = 'cookie_consent';

	let visible = $state(browser ? !localStorage.getItem(KEY) : false);

	function accept() {
		localStorage.setItem(KEY, '1');
		visible = false;
	}

	function dismiss() {
		// session-only dismiss — ask again next visit
		visible = false;
	}
</script>

{#if visible}
	<div
		role="dialog"
		aria-label="Informace o cookies"
		class="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 md:px-8 md:pb-6"
		in:fly={{ y: 80, duration: 350 }}
		out:fly={{ y: 80, duration: 250 }}
	>
		<div
			class="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 rounded-2xl px-6 py-5"
			style="background:#ffffff; box-shadow:0 8px 40px rgba(108,72,32,0.14); border:1px solid #e9e8e5;"
		>
			<!-- Text -->
			<p class="flex-1 text-sm text-on-surface-variant" style="line-height:1.6;">
				Tento web ukládá nezbytná data lokálně ve vašem prohlížeči pro správné fungování formuláře.
				Analytické ani marketingové cookies nepoužíváme.
				<a href="/cookies" class="text-primary underline underline-offset-2 hover:text-primary-container whitespace-nowrap">
					Více informací
				</a>
			</p>

			<!-- Actions -->
			<div class="flex items-center gap-3 shrink-0">
				<button
					onclick={dismiss}
					class="text-xs font-semibold text-outline hover:text-on-surface transition-colors duration-150 px-1"
				>
					Zavřít
				</button>
				<button
					onclick={accept}
					class="rounded-xl font-semibold text-sm bg-primary text-on-primary transition-all duration-200 hover:bg-primary-container"
					style="padding:10px 24px; box-shadow:0 2px 12px rgba(130,59,24,0.25);"
				>
					Rozumím
				</button>
			</div>
		</div>
	</div>
{/if}

