<script lang="ts">
	const nav = [
		{
			title: 'Projets',
			url: '/portfolio'
		},
		{
			title: 'À propos',
			url: '/portfolio/a-propos'
		},
		{
			title: 'Contact',
			url: '/portfolio/contact'
		}
	];
	import '$lib/styles/global.css';
</script>

<nav>
	{#each nav as link}
		<a href={link.url}>{link.title}</a>
	{/each}
</nav>

<style lang="scss">
	@import '../styles/glass.scss';
	nav {
		z-index: 5;
		position: relative;
		display: flex;
		justify-content: space-around;
		width: calc(min(40rem, 95%));
		margin: 2rem auto -3em auto;
		@include glass(0.1);
	}
	a {
		width: 100%;
		text-align: center;
		padding: 1em;
		text-decoration: none;
		color: #fff;
		transition: box-shadow 0.2s ease-in-out;
	}
	a:first-child {
		border-top-left-radius: 0.8rem;
		border-bottom-left-radius: 0.8rem;
	}
	a:last-child {
		border-top-right-radius: 0.8rem;
		border-bottom-right-radius: 0.8rem;
	}
	a:hover {
		box-shadow: inset 0 0 0.3rem rgba(255, 255, 255, 0.2);
	}
</style>
