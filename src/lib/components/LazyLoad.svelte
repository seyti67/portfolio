<script context="module" lang="ts">
	let zoom: any;

	function lazyload() {
		const observer = lozad('.lazyload', {
			rootMargin: '30px 0px',
			loaded: function (el: HTMLElement) {
				el.classList.add('lazyloaded');
			}
		});
		observer.observe();

		zoom = mediumZoom('[data-zoom]', {
			background: '#000000aa',
			margin: 10
		});
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import lozad from 'lozad';

	import mediumZoom from 'medium-zoom';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	onMount(lazyload);

	beforeNavigate(() => {
		zoom.close();
		zoom.detach();
	});
</script>

<style global>
	.medium-zoom-overlay,
	.medium-zoom-image {
		z-index: 5;
	}

	img.lazyload {
		opacity: 0;
		transition-property: transform, opacity !important;
	}
	img.lazyloaded {
		opacity: 1;
	}
</style>
