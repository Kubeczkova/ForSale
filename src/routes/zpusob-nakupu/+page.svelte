<script>
	import t from '$lib/i18n/cs.json';

	const hi = t.how_it_works;
	let openIndex = $state(-1);
</script>

<div class="min-h-screen bg-surface page-offset">

	<!-- Hero / header block -->
	<header class="w-full border-b" style="border-color: #dac1b8;">
		<div class="max-w-5xl mx-auto px-5 md:px-16 py-16 md:py-20">
			<h1 class="text-4xl md:text-6xl font-semibold leading-tight" style="font-family: 'Playfair Display', serif; color: #1a1c1a; letter-spacing: -0.02em; white-space: pre-line;">
				{hi.heading}
			</h1>
		</div>
	</header>

	<!-- Content area -->
	<main class="max-w-5xl mx-auto px-5 md:px-16 py-16 md:py-24 space-y-12">

		<!-- Intro -->
		<section class="space-y-3">
			<p class="text-lg leading-relaxed max-w-2xl" style="font-family: 'Inter', sans-serif; color: #54433c; line-height: 1.6;">
				{hi.intro}
			</p>
		</section>

		<!-- Bid types -->
		<section class="space-y-3">
			<h2 class="text-2xl md:text-3xl font-medium" style="font-family: 'Playfair Display', serif; color: #1a1c1a;">
				{hi.bid_types_heading}
			</h2>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
				<!-- Single -->
				<div class="rounded-2xl p-8 flex flex-col gap-4" style="background: #ffffff; box-shadow: 0 4px 24px rgba(108,72,32,0.08); border: 1px solid #e9e8e5;">
					<span class="self-start inline-block px-3 py-1 rounded-full text-xs font-semibold" style="background: #efeeeb; color: #87736b; font-family: 'Inter', sans-serif; letter-spacing: 0.05em;">
						{hi.single.tag}
					</span>
					<h3 class="text-2xl font-semibold" style="font-family: 'Playfair Display', serif; color: #1a1c1a;">
						{hi.single.title}
					</h3>
					<p class="text-sm leading-relaxed" style="font-family: 'Inter', sans-serif; color: #54433c; line-height: 1.6;">
						{hi.single.desc}
					</p>
					<div class="rounded-xl p-4 mt-auto" style="background: #f4f3f1; border: 1px solid #e9e8e5;">
						<p class="text-xs font-semibold uppercase tracking-widest mb-2" style="color: #87736b; font-family: 'Inter', sans-serif; letter-spacing: 0.1em;">{hi.single.example_label}</p>
						<p class="text-sm" style="color: #54433c; font-family: 'Inter', sans-serif; line-height: 1.6;">
							{@html hi.single.example}
						</p>
					</div>
				</div>

				<!-- Max -->
				<div class="rounded-2xl p-8 flex flex-col gap-4 relative" style="background: #823b18; box-shadow: 0 8px 32px rgba(130,59,24,0.22);">
					<span class="self-start inline-block px-3 py-1 rounded-full text-xs font-semibold" style="background: rgba(255,255,255,0.18); color: #ffe1d6; font-family: 'Inter', sans-serif; letter-spacing: 0.05em;">
						{hi.max.tag}
					</span>
					<h3 class="text-2xl font-semibold" style="font-family: 'Playfair Display', serif; color: #ffffff;">
						{hi.max.title}
					</h3>
					<p class="text-sm leading-relaxed" style="font-family: 'Inter', sans-serif; color: #ffe1d6; line-height: 1.6;">
						{hi.max.desc}
					</p>
					<div class="rounded-xl p-4 mt-auto" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);">
						<p class="text-xs font-semibold uppercase tracking-widest mb-2" style="color: rgba(255,225,214,0.7); font-family: 'Inter', sans-serif; letter-spacing: 0.1em;">{hi.max.example_label}</p>
						<p class="text-sm" style="color: #ffe1d6; font-family: 'Inter', sans-serif; line-height: 1.6;">
							{@html hi.max.example}
						</p>
					</div>
				</div>
			</div>

			<p class="text-lg leading-relaxed max-w-2xl" style="font-family: 'Inter', sans-serif; color: #54433c; line-height: 1.6;">
				{@html hi.verification_note}
			</p>
		</section>

		<!-- Steps -->
		<section class="space-y-6">
			<h2 class="text-2xl md:text-3xl font-medium" style="font-family: 'Playfair Display', serif; color: #1a1c1a;">
				{hi.steps_heading}
			</h2>

			<div class="flex flex-col gap-0">
				{#each hi.steps as step, i (i)}
					<div class="flex gap-5">
						<div class="flex flex-col items-center">
							<div class="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-bold" style="background: #823b18; color: #fff; font-family: 'Inter', sans-serif;">
								{i + 1}
							</div>
							{#if i < hi.steps.length - 1}
								<div class="w-px flex-1 my-1" style="background: #dac1b8;"></div>
							{/if}
						</div>
						<div class="pb-8">
							<p class="font-semibold text-base mb-1" style="font-family: 'Inter', sans-serif; color: #1a1c1a;">{step.title}</p>
							<p class="text-sm leading-relaxed" style="font-family: 'Inter', sans-serif; color: #54433c; line-height: 1.6;">{step.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- FAQ -->
		<section class="space-y-3">
			<h2 class="text-2xl md:text-3xl font-medium" style="font-family: 'Playfair Display', serif; color: #1a1c1a;">
				{hi.faq_heading}
			</h2>

			<div class="rounded-2xl overflow-hidden" style="background: #ffffff; box-shadow: 0 4px 24px rgba(108,72,32,0.08);">
				{#each hi.faqs as faq, i (i)}
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
