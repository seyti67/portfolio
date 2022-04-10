<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import 'locomotive-scroll/dist/locomotive-scroll.min.css';
	import { onMount } from 'svelte';

	let scroll = null;
	onMount(async () => {
		console.debug('onMount');
		const module = await import('locomotive-scroll');
		const LocomotiveScroll = module.default;
		const pageContainer = document.getElementById('app');
		scroll = new LocomotiveScroll({
			el: pageContainer,
			smooth: true,
			mobile: {
				smooth: true
			},
			tablet: {
				smooth: true
			}
		});
		window.addEventListener('load', scroll.update);
	});
	beforeNavigate(() => {
		scroll.destroy();
	});
</script>

<div id="app">
	<slot />
</div>

<style>
	#app {
		width: 100vw;
		padding-bottom: 1rem;
	}
</style>
