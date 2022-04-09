<script lang="ts">
	export let text: string;
	const characters = text.split('');
	const length = characters.length;
</script>

{#each characters as character, i}
	<span
		data-scroll
		data-scroll-speed={(length - i) / 2}
		data-scroll-delay={0.05 * (i + 2)}
		data-scroll-position="top">{character}</span
	>
{/each}

<style>
	span {
		display: inline-block;
		white-space: pre;
	}
</style>
