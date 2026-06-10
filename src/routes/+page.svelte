<script lang="ts">
	import Hero    from '$lib/components/Hero.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import BidForm from '$lib/components/BidForm.svelte';

	let { data } = $props();
</script>

<div class="bg-surface">
	<Hero maxBid={data} />
	<Contact />
	<Gallery />
	<BidForm maxBid={data} />
</div>
