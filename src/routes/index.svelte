<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
	import Scroll from '$lib/components/scroll.svelte';
	import Pane from '$lib/components/index/Pane.svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Pagination, Navigation } from 'swiper';

	import 'swiper/css/pagination';
	import 'swiper/css/navigation';
	import 'swiper/css';

	import type { Project } from '.';
	import LazyLoad from '$lib/components/LazyLoad.svelte';
	import CharLerp from '$lib/components/CharLerp.svelte';

	export let projects: Project[];
</script>

<LazyLoad />

<svelte:head>
	<title>Mes projets | Antoine Blumenroeder</title>
</svelte:head>

<Nav />
<Scroll>
	<h1>
		<Pane center />
		<Pane center />
		<CharLerp text="MES PROJETS" />
	</h1>
	{#each projects as project, i}
		<Pane />
		<Pane />
		<Pane />
		<section data-scroll data-scroll-direction="horizontal" data-scroll-speed={i % 2 ? -3 : 3}>
			<h2>{project.title}</h2>
			<Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]}>
				{#each project.images as image}
					<SwiperSlide>
						<img
							class="slide lazyload"
							data-zoom
							height="746"
							width="1495"
							data-src={image}
							alt=""
						/>
					</SwiperSlide>
				{/each}
			</Swiper>

			<div class="project-info">
				<p>{@html project.description}</p>
			</div>
		</section>
	{/each}
	<h2 class="end" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-10">
		Et plein d'autres encore...
	</h2>
</Scroll>

<style lang="scss">
	h1 {
		position: relative;
		color: white;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
		height: 100vh;
	}

	@import '../lib/styles/glass.scss';
	section {
		color: #fff;
		position: relative;
		z-index: 2;
		width: min(95vw, 60rem);
		margin: 15rem auto;
		padding: 1rem;
		@include glass(0.2);
		text-shadow: 0 0 0.2em #000;
	}
	@media (min-width: 700px) {
		section {
			padding: 2rem;
			p {
				font-size: 1.2rem;
			}
		}
	}
	h2 {
		margin-bottom: 1rem;
		margin-left: 1rem;
	}
	.slide {
		max-width: 100%;
		height: auto;
	}
	.project-info {
		padding: 1rem;
	}

	.end {
		position: relative;
		color: white;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		height: 100vh;
	}
</style>
