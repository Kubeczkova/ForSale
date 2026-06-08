<script lang="ts">
	import Hero    from '$lib/components/Hero.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import BidForm from '$lib/components/BidForm.svelte';

	function scrollToBidForm() {
		document.getElementById('prihodit')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div class="bg-surface">
	<Hero
		imageSrc=""
		address="Hnojník 383"
		size="3+kk · 78 m²"
		plot="Pozemek 450 m²"
		currentBid="2 500 000 Kč"
		onBid={scrollToBidForm}
	/>

	<Contact />

	<Gallery />

	<BidForm />
</div>
