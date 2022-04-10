<script context="module">
	let i = 0;
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import Marquee from 'svelte-fast-marquee';

	export let icons: string[][];
	i++;
</script>

<Marquee pauseOnHover={true} direction={i % 2 == 0 ? 'left' : 'right'} speed={25}>
	{#each icons as [lang, logo], i}
		<span title={lang}>
			<Icon icon={logo} />
		</span>
	{/each}
</Marquee>

<style>
	span {
		margin: 0 2rem;
		display: inline-block;
	}
	span :global(svg) {
		height: 4rem;
		width: auto;
	}
</style>
