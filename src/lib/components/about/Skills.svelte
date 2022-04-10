<script lang="ts">
	import LogoList from './LogoList.svelte';

	const languages = [
		['html', 'logos:html-5'],
		['CSS', 'logos:css-3'],
		['Sass', 'logos:sass'],
		['JavaScript', 'logos:javascript'],
		['TypeScript', 'logos:typescript-icon'],
		['php', 'logos:php'],
		['PostgreSQL', 'logos:postgresql'],
		['Python', 'logos:python']
	];
	const techs = [
		['Svelte/SvelteKit', 'logos:svelte'],
		['GreenSock', 'cib:greensock'],
		['Vue', 'logos:vue'],
		['GraphQL', 'logos:graphql'],
		['NestJS', 'logos:nestjs'],
		['GitHub', 'bi:github'],
		['NodeJS', 'logos:nodejs'],
		['Strapi', 'logos:strapi'],
		['PixiJS', 'logos:pixijs']
	];
</script>

<div class="skills">
	<h2 class="title">Langages</h2>
	<LogoList icons={languages} />
</div>
<div class="skills">
	<h2 class="title">Technologies</h2>
	<LogoList icons={techs} />
</div>

<style lang="scss">
	@import '../../styles/glass';
	.skills {
		@include glass(0.2);
		width: min(95vw, 50rem);
		margin: 0 auto;
		margin-bottom: 5rem;
		padding: 2rem 0;
	}
	.title {
		@include glass(0.3);
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 0.5em 1em;
		width: fit-content;
		z-index: 2;
	}
	@media (min-width: 52rem) {
		.title {
			left: 0;
			transform: translate(-20%, -50%);
		}
	}
</style>
