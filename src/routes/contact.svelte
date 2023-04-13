<script>
	import Pane from '$lib/components/index/Pane.svelte';
import Nav from '$lib/components/nav.svelte';
</script>

<Nav />
<svelte:head>
	<title>Me contacter | Antoine Blumenroeder</title>
	<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
</svelte:head>
<br /><br /><br /><br /><br />
<h1>Me contacter</h1>
<div class="links">
	<a href="mailto:antoine.blumenroeder@epita.fr">antoine.blumenroeder@epita.fr</a>
	<div class="badge-base LI-profile-badge" data-locale="fr_FR" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="antoine-blumenroeder-a5178b208" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://fr.linkedin.com/in/antoine-blumenroeder-a5178b208?trk=profile-badge">LinkedIn : Antoine Blumenroeder</a></div>
</div>

<style lang="scss">
	@import '../lib/styles/glass.scss';
	h1{
		margin: 3rem;
	}
	.links {
		@include layer-glass(0.2);
		max-width: 30rem;
		margin: 3rem;
		padding: 1rem;
	}
</style>
