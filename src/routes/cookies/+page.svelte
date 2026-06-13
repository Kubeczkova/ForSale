<div class="min-h-screen bg-surface page-offset">

	<!-- Hero / header block -->
	<header class="w-full border-b" style="border-color: #dac1b8;">
		<div class="max-w-5xl mx-auto px-5 md:px-16 py-16 md:py-20">
			<!-- Overline label -->
			<p class="mb-4 tracking-widest text-xs font-semibold uppercase" style="color: #54433c; font-family: 'Inter', sans-serif; letter-spacing: 0.1em;">
				Právní informace
			</p>
			<!-- Display headline -->
			<h1 class="text-4xl md:text-6xl font-semibold leading-tight" style="font-family: 'Playfair Display', serif; color: #1a1c1a; letter-spacing: -0.02em;">
				Informace<br />o&nbsp;cookies
			</h1>
			<!-- Effective date chip -->
			<span class="inline-block mt-6 px-4 py-1 rounded-full text-xs font-semibold" style="background-color: rgba(81,99,76,0.1); color: #51634c; font-family: 'Inter', sans-serif;">
				Platné od: 8. 6. 2026
			</span>
		</div>
	</header>

	<!-- Content area -->
	<main class="max-w-5xl mx-auto px-5 md:px-16 py-16 md:py-24 space-y-12">

		<!-- Intro section -->
		<section class="space-y-3">
			<p class="text-lg leading-relaxed max-w-2xl" style="font-family: 'Inter', sans-serif; color: #54433c; line-height: 1.6;">
				Tento web používá soubory cookies výhradně v rozsahu nezbytném pro správné fungování stránky a váš komfort. Analytické ani marketingové cookies nepoužíváme.
			</p>
		</section>

		<!-- Table section -->
		<section class="space-y-3">
			<h2 class="text-2xl md:text-3xl font-medium" style="font-family: 'Playfair Display', serif; color: #1a1c1a;">
				Přehled cookies
			</h2>

			<!-- Mobile: card -->
			<div class="sm:hidden rounded-2xl px-5 py-4" style="background:#ffffff; box-shadow:0 4px 24px rgba(108,72,32,0.08);">
				<p class="font-semibold text-sm mb-2" style="color:#1a1c1a;">localStorage — nezbytné</p>
				<p class="text-sm mb-3" style="color:#54433c; line-height:1.6;">Uložení předvyplněných údajů formuláře (jméno, e-mail, telefon) pro pohodlí při opakované návštěvě.</p>
				<span class="inline-block px-3 py-1 rounded-full text-xs font-semibold" style="background-color: rgba(81,99,76,0.1); color: #51634c;">nevyžadován</span>
			</div>

			<!-- Desktop: table -->
			<div class="hidden sm:block rounded-2xl overflow-hidden" style="background: #ffffff; box-shadow: 0 4px 24px rgba(108,72,32,0.08);">
				<table class="w-full text-sm" style="font-family: 'Inter', sans-serif;">
					<thead>
						<tr style="background-color: #efeeeb;">
							<th class="text-left px-6 py-4 font-semibold tracking-wide text-xs uppercase" style="color: #54433c; letter-spacing: 0.05em;">Název / typ</th>
							<th class="text-left px-6 py-4 font-semibold tracking-wide text-xs uppercase" style="color: #54433c; letter-spacing: 0.05em;">Účel</th>
							<th class="text-left px-6 py-4 font-semibold tracking-wide text-xs uppercase" style="color: #54433c; letter-spacing: 0.05em;">Souhlas?</th>
						</tr>
					</thead>
					<tbody>
						<tr class="border-t" style="border-color: #e9e8e5;">
							<td class="px-6 py-5 font-medium whitespace-nowrap" style="color: #1a1c1a;">localStorage — nezbytné</td>
							<td class="px-6 py-5" style="color: #54433c; line-height: 1.6;">Uložení předvyplněných údajů formuláře (jméno, e-mail, telefon) pro pohodlí při opakované návštěvě.</td>
							<td class="px-6 py-5">
								<span class="inline-block px-3 py-1 rounded-full text-xs font-semibold" style="background-color: rgba(81,99,76,0.1); color: #51634c;">
									nevyžadován
								</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Management section -->
		<section class="space-y-8">
			<h2 class="text-2xl md:text-3xl font-medium" style="font-family: 'Playfair Display', serif; color: #1a1c1a;">
				Správa cookies
			</h2>

			<p class="text-base leading-relaxed max-w-2xl" style="font-family: 'Inter', sans-serif; color: #54433c; line-height: 1.6;">
				Uložená data webu můžete kdykoli smazat v nastavení svého prohlížeče. Upozorňujeme, že jejich smazáním se předvyplnění formuláře vymaže a informační lišta o cookies se při příští návštěvě zobrazí znovu.
			</p>

			<div>
				<p class="mb-5 text-xs font-semibold uppercase tracking-widest" style="color: #87736b; letter-spacing: 0.1em; font-family: 'Inter', sans-serif;">
					Návod pro správu dat v prohlížeči
				</p>
				<ul class="space-y-3">
					{#each [
						{ label: 'Google Chrome', href: 'https://support.google.com/chrome/answer/95647' },
						{ label: 'Mozilla Firefox', href: 'https://support.mozilla.org/cs/kb/vymazani-cookies' },
						{ label: 'Safari', href: 'https://support.apple.com/cs-cz/guide/safari/sfri11471/mac' },
						{ label: 'Microsoft Edge', href: 'https://support.microsoft.com/cs-cz/microsoft-edge/odstraneni-souboru-cookie-v-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
					] as browser}
						<li>
							<a
								href={browser.href}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150"
								style="color: #823b18; font-family: 'Inter', sans-serif;"
								onmouseenter={(e) => e.currentTarget.style.color = '#a0522d'}
								onmouseleave={(e) => e.currentTarget.style.color = '#823b18'}
							>
								<span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#a0522d; flex-shrink:0;"></span>
								{browser.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</section>

	</main>
</div>
