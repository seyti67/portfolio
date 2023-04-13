<script>
	import Person from '$lib/components/about/person.svelte';
	import Skills from '$lib/components/about/Skills.svelte';
	import Nav from '$lib/components/nav.svelte';
	import Scroll from '$lib/components/scroll.svelte';
</script>

<Nav />
<svelte:head>
	<title>À propos | Antoine Blumenroeder</title>
</svelte:head>

<Scroll>
	<div class="container">
		<div class="card">
			<div class="pfp">
				<Person />
			</div>
			<h2>Antoine Blumenroeder</h2>
			<ul class="back">
				<li>Age : 18 ans</li>
				<li>Pays : France</li>
				<li>Situation : 1ère année EPITA</li>
				<li>Passion : programmation</li>
				<a href="/portfolio/CV Antoine BLUMENROEDER.pdf" target="_blank">CV</a>
			</ul>
		</div>
	</div>
	<h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5">Mes compétences</h1>
	<Skills />
	<h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed="5">Mon caractère</h1>
	<p class="about" data-scroll data-scroll-speed="3" data-scroll-delay="0.1">
		Étudiant motivé par la volonté d'apprendre, de comprendre et de découvrir, j'aime les défis, la
		programmation et les mathématiques qui sont pour moi des sources de stimulation. Même si la
		curiosité prône, je ressens aussi un besoin de créer ce qui forme un certain équilibre. La
		curiosité me lance dans des projets et la volonté de créer me pousse à les mener à bien.
	</p>
</Scroll>

<style lang="scss">
	@import '../lib/styles/glass.scss';
	h1 {
		text-align: center;
		margin-bottom: 2rem;
		z-index: 3;
		position: relative;
	}

	.container {
		width: fit-content;
		margin: 0 auto;
		&:hover .card {
			transform: rotateY(180deg);
		}
	}
	.card {
		@include layer-glass(0.9);
		position: relative;
		width: min(95vw, 25rem);
		padding: 1rem;
		margin: 5rem auto;
		color: #000;

		perspective: 1000px;
		transform-style: preserve-3d;
		transform: translateZ(-100px) rotateY(0deg);
		transition: transform 1s;

		h2 {
			text-align: center;
			margin: 5rem 0;
			font-size: 2rem;
			transform: translateZ(5rem);
		}
	}

	.pfp {
		@include layer-glass(0.1);
		width: 50%;
		margin: 2rem auto;
		padding: 0.5rem;
		border-radius: 25rem;
		transform: translateZ(3rem);
	}

	.back {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: rotateY(180deg) translateZ(4rem);
		padding: 1rem 2.5rem;
		list-style: none;
		font-size: 1.5rem;
		font-weight: bold;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
		a {
			text-decoration: none;
			color: #000;
			position: absolute;
			bottom: 1rem;
			right: 1rem;
			&:hover {
				text-decoration: underline;
			}
		}
	}
	.back li::before {
		content: ' - ';
		width: 1rem;
		position: absolute;
		transform: translateX(-100%);
	}

	.about {
		@include glass(0.1);
		width: min(95vw, 50rem);
		margin: 2rem auto 30rem auto;
		padding: 1rem;
		font-size: 1.2rem;
	}
</style>
