<script lang="ts">
	import Hero    from '$lib/components/Hero.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import BidForm from '$lib/components/BidForm.svelte';

	let { data } = $props();
</script>

<div class="bg-surface">
	<Hero maxBid={data} />

	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.5194624828705!2d18.528062276630894!3d49.6821898423817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471406278448ec6d%3A0x13bb03cab264ad39!2sHnojn%C3%ADk%20383%2C%20739%2053%20Hnojn%C3%ADk!5e0!3m2!1sen!2scz!4v1781193295953!5m2!1sen!2scz"
		width="100%"
		height="450"
		style="border:0;"
		allowfullscreen=""
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade">
	</iframe>

	<Contact />
	<Gallery />
	<BidForm maxBid={data} />
</div>
