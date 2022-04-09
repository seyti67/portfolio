<script>
	export let center = false;

	const width = `${5 + Math.random() * 5}em`;
	const height = `${5 + Math.random() * 5}em`;
	const opacity = `${Math.random() * 0.4 + 0.5}`;
	const delta = `${Math.random() * 25 + 5}%`;
	const speed = Math.random() * 10 + 2;

	const side = Math.random() > 0.5 ? 'left' : 'right';
	let rotate = `${side === 'left' ? '-' : ''}${Math.random() * 20 + 10}deg`;
	const position = center ? '' : `${side}:${delta};`;
</script>

<div data-scroll data-scroll-speed={speed} data-scroll-delay="0.1">
	<div
		class="glass"
		style="width:{width};height:{height};transform:rotate({rotate});opacity:{opacity};{position}"
	/>
</div>

<style lang="scss">
	@import '../../styles/glass.scss';
	.glass {
		@include glass(0.2);
		position: absolute;
		z-index: -1;
	}
</style>
