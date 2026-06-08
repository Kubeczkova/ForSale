<script>
	let openIndex = $state(-1);

	const faqs = [
		{
			q: 'Je příhoz právně závazný?',
			a: 'Ne. Příhoz vyjadřuje vážný zájem o nemovitost, ale není právně závaznou smlouvou. Majitel si vyhrazuje právo odmítnout všechny nabídky nebo si vybrat kupujícího podle vlastních kritérií, nejen podle výše nabídky.'
		},
		{
			q: 'Uvidí ostatní zájemci moji maximální částku?',
			a: 'Ne. Pokud zvolíte maximální příhoz, váš skutečný limit zůstane skrytý. Ostatní vidí pouze aktuálně zobrazenou výši nabídky.'
		},
		{
			q: 'Dostanu zprávu, pokud mě někdo přehodí?',
			a: 'Ano. Na váš e-mail zašleme upozornění, že vaše nabídka již není nejvyšší, a budete mít možnost přihodit znovu.'
		},
		{
			q: 'Proč musím příhoz potvrzovat e-mailem?',
			a: 'Ověření slouží k ochraně všech zájemců před falešnými nebo škodolibými nabídkami. Bez potvrzení se příhoz nezobrazí.'
		},
		{
			q: 'Kdy výběrové řízení skončí?',
			a: 'Datum ukončení bude zveřejněno na hlavní stránce. Majitel si vyhrazuje právo výběrové řízení prodloužit nebo ukončit dříve.'
		}
	];
</script>

<div class="min-h-screen bg-surface page-offset">

	<!-- Hero / header block -->
	<header class="w-full border-b" style="border-color: #dac1b8;">
		<div class="max-w-5xl mx-auto px-5 md:px-16 py-16 md:py-20">
			<!-- Display headline -->
			<h1 class="text-4xl md:text-6xl font-semibold leading-tight" style="font-family: 'Playfair Display', serif; color: #1a1c1a; letter-spacing: -0.02em;">
				Jak probíhá<br />výběrové řízení?
			</h1>
		</div>
	</header>

	<!-- Content area -->
	<main class="max-w-5xl mx-auto px-5 md:px-16 py-16 md:py-24 space-y-12">

		<!-- Intro section -->
		<section class="space-y-3">
			<p class="text-lg leading-relaxed max-w-2xl" style="font-family: 'Inter', sans-serif; color: #54433c; line-height: 1.6;">
				Tento web slouží jako otevřené výběrové řízení o nejvhodnější nabídku.
				Nejde o veřejnou dražbu — majitel si vyhrazuje právo vybrat kupujícího podle vlastního uvážení.
			</p>
		</section>

		<section class="space-y-3">
			<h2 class="text-2xl md:text-3xl font-medium" style="font-family: 'Playfair Display', serif; color: #1a1c1a;">
				Způsob příhozu
			</h2>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
				<div class="rounded-2xl p-8 flex flex-col gap-4" style="background: #ffffff; box-shadow: 0 4px 24px rgba(108,72,32,0.08); border: 1px solid #e9e8e5;">
					<!-- Spacer to align with tag on left -->
					<span class="self-start inline-block px-3 py-1 rounded-full text-xs font-semibold" style="background: #efeeeb; color: #87736b; font-family: 'Inter', sans-serif; letter-spacing: 0.05em;">
						Jednorázový
					</span>
					<!-- Title -->
					<h3 class="text-2xl font-semibold" style="font-family: 'Playfair Display', serif; color: #1a1c1a;">
						Jednorázový příhoz
					</h3>
					<!-- Description -->
					<p class="text-sm leading-relaxed" style="font-family: 'Inter', sans-serif; color: #54433c; line-height: 1.6;">
						Zadáte přesnou částku, za kterou jste ochotni nemovitost koupit.
						Tato částka se okamžitě zobrazí jako vaše aktuální nabídka.
						Pokud vás někdo přehodí, musíte podat nový příhoz ručně.
					</p>
					<!-- Example -->
					<div class="rounded-xl p-4 mt-auto" style="background: #f4f3f1; border: 1px solid #e9e8e5;">
						<p class="text-xs font-semibold uppercase tracking-widest mb-2" style="color: #87736b; font-family: 'Inter', sans-serif; letter-spacing: 0.1em;">Příklad</p>
						<p class="text-sm" style="color: #54433c; font-family: 'Inter', sans-serif; line-height: 1.6;">
							Aktuální nejvyšší nabídka je <strong style="color:#1a1c1a;">2 500 000 Kč</strong>.
							Zadáte <strong style="color:#1a1c1a;">2 510 000 Kč</strong>.
							Vaše nabídka se zobrazí jako nejvyšší — ale pokud vás někdo přehodí,
							dostanete e-mail a musíte příhoz opakovat ručně.
						</p>
					</div>
				</div>

				<div class="rounded-2xl p-8 flex flex-col gap-4 relative" style="background: #823b18; box-shadow: 0 8px 32px rgba(130,59,24,0.22);">
					<!-- Recommended tag -->
					<span class="self-start inline-block px-3 py-1 rounded-full text-xs font-semibold" style="background: rgba(255,255,255,0.18); color: #ffe1d6; font-family: 'Inter', sans-serif; letter-spacing: 0.05em;">
						★ Doporučeno
					</span>
					<!-- Title -->
					<h3 class="text-2xl font-semibold" style="font-family: 'Playfair Display', serif; color: #ffffff;">
						Maximální příhoz
					</h3>
					<!-- Description -->
					<p class="text-sm leading-relaxed" style="font-family: 'Inter', sans-serif; color: #ffe1d6; line-height: 1.6;">
						Zadáte nejvyšší částku, kterou jste ochotni zaplatit.
						Systém za vás automaticky přehodí konkurenční nabídky — vždy jen o nejmenší nutný krok.
					</p>
					<!-- Example -->
					<div class="rounded-xl p-4 mt-auto" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);">
						<p class="text-xs font-semibold uppercase tracking-widest mb-2" style="color: rgba(255,225,214,0.7); font-family: 'Inter', sans-serif; letter-spacing: 0.1em;">Příklad</p>
						<p class="text-sm" style="color: #ffe1d6; font-family: 'Inter', sans-serif; line-height: 1.6;">
							Aktuální nejvyšší nabídka je <strong style="color:#fff;">2 500 000 Kč</strong>.
							Zadáte maximum <strong style="color:#fff;">2 700 000 Kč</strong>.
							Systém vaši nabídku okamžitě zobrazí jako <strong style="color:#fff;">2 510 000 Kč</strong>.
							Pokud vás někdo přehodí na 4 700 000 Kč, systém vás automaticky posune na
							<strong style="color:#fff;">2 520 000 Kč</strong>. Váš skutečný limit zůstane skrytý.
						</p>
					</div>
				</div>

			</div>

			<p class="text-lg leading-relaxed max-w-2xl" style="font-family: 'Inter', sans-serif; color: #54433c; line-height: 1.6;">
				<strong>Váš příhoz musí být ověřen.</strong> Po odeslání formuláře obdržíte potvrzovací e-mail.
				Teprve po kliknutí na odkaz v e-mailu se vaše nabídka zobrazí ostatním zájemcům. Tím omezujeme falešné příhozy.
			</p>
		</section>

		<section class="space-y-6">
			<h2 class="text-2xl md:text-3xl font-medium" style="font-family: 'Playfair Display', serif; color: #1a1c1a;">
				Jak přihodit
			</h2>

			<div class="flex flex-col gap-0">
				{#each [
					{
						n: '1',
						title: 'Klikněte na tlačítko „Přihodit"',
						desc: 'Tlačítko najdete v hlavní části stránky. Otevře se formulář příhozu.'
					},
					{
						n: '2',
						title: 'Vyplňte kontaktní údaje a zvolte způsob příhozu',
						desc: 'Zadejte jméno, e-mail a telefon. Vyberte, zda chcete jednorázový nebo maximální příhoz, a vyplňte částku.'
					},
					{
						n: '3',
						title: 'Potvrďte příhoz e-mailem',
						desc: 'Na váš e-mail přijde zpráva s potvrzovacím odkazem. Klikněte na něj do 30 minut — jinak nabídka vyprší.'
					},
					{
						n: '4',
						title: 'Vaše nabídka je aktivní',
						desc: 'Po potvrzení se vaše nabídka zobrazí v přehledu. Budeme vás informovat e-mailem, pokud vás někdo přehodí.'
					},
					{
						n: '5',
						title: 'Konec výběrového řízení',
						desc: 'Majitel kontaktuje zájemce s nejvyšší nabídkou a dohodne další postup. Výběrové řízení může být ukončeno kdykoli dle rozhodnutí majitele.'
					}
				] as step, i (i)}
					<div class="flex gap-5">
						<!-- Step indicator + line -->
						<div class="flex flex-col items-center">
							<div class="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-bold" style="background: #823b18; color: #fff; font-family: 'Inter', sans-serif;">
								{step.n}
							</div>
							{#if i < 4}
								<div class="w-px flex-1 my-1" style="background: #dac1b8;"></div>
							{/if}
						</div>
						<!-- Content -->
						<div class="pb-8">
							<p class="font-semibold text-base mb-1" style="font-family: 'Inter', sans-serif; color: #1a1c1a;">{step.title}</p>
							<p class="text-sm leading-relaxed" style="font-family: 'Inter', sans-serif; color: #54433c; line-height: 1.6;">{step.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section class="space-y-3">
			<h2 class="text-2xl md:text-3xl font-medium" style="font-family: 'Playfair Display', serif; color: #1a1c1a;">
				Časté otázky
			</h2>

			<div class="rounded-2xl overflow-hidden" style="background: #ffffff; box-shadow: 0 4px 24px rgba(108,72,32,0.08);">
				{#each faqs as faq, i (i)}
					<div class="border-b last:border-b-0" style="border-color: #e9e8e5;">
						<button
							type="button"
							class="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
							onclick={() => { openIndex = openIndex === i ? -1 : i; }}
						>
							<span class="text-base font-semibold" style="font-family: 'Inter', sans-serif; color: #1a1c1a;">
								{faq.q}
							</span>
							<span
								class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-base leading-none"
								style="
									background: {openIndex === i ? '#823b18' : '#efeeeb'};
									color: {openIndex === i ? '#ffffff' : '#87736b'};
									transition: background 0.2s, color 0.2s, transform 0.2s;
									transform: rotate({openIndex === i ? '45' : '0'}deg);
								"
							>+</span>
						</button>
						{#if openIndex === i}
							<p class="px-6 pb-5 text-sm leading-relaxed" style="font-family: 'Inter', sans-serif; color: #54433c; line-height: 1.6;">
								{faq.a}
							</p>
						{/if}
					</div>
				{/each}
			</div>
		</section>
	</main>
</div>
