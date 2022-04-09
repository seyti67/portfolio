<script context="module" lang="ts">
	import { writable, get } from 'svelte/store';
	const scroll = writable(undefined);

	export function scrollTo(id: string) {
		const target = document.getElementById(id);
		get(scroll).scrollTo(target);
	}

	export function scrollCall(func: Function) {
		scroll.subscribe((value) => {
			if (value) {
				value.on('call', (call: string, type: 'enter' | 'exit', params: any) => {
					func({ call, type, params });
				});
			}
		});
	}
</script>

<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import 'locomotive-scroll/dist/locomotive-scroll.min.css';
	import { onMount } from 'svelte';

	onMount(async () => {
		const module = await import('locomotive-scroll');
		const LocomotiveScroll = module.default;
		scroll.set(
			new LocomotiveScroll({
				el: document.getElementById('app'),
				smooth: true,
				smartphone: {
					smooth: true
				},
				mobile: {
					smooth: true
				},
				tablet: {
					smooth: true
				}
			})
		);
		window.addEventListener('load', () => {
			get(scroll).update();
		});
	});
	beforeNavigate(() => {
		get(scroll).destroy();
	});
</script>

<div id="app" data-scroll-container>
	<slot />
</div>

<style>
	#app {
		width: 100vw;
		padding-bottom: 1rem;
	}
</style>
