export interface Project {
	title: string;
	description: string;
	images: string[];
}

export function get(): { body: { projects: Project[] } } {
	return {
		body: {
			projects: [
				{
					title: 'Kaki',
					description:
						"Kaki est un réseau social créé dans le cadre des cours de NSI à l'institution Sainte-Philomène. Il est basé sur VueJS, NodeJS et sqlite. Il remplit les fonctions d'une messagerie instantanée à l'aide de Socket.IO. Les principales fonctionnalités sont basées le langage SQL ce qui en a permis un apprentissage efficace.",
					images: ['kaki/chat.png', 'kaki/friends.png', 'kaki/login.png']
				},
				{
					title: 'Manufacture Blumenroeder',
					description: `Il s'agit d'un site internet pour la Manufacture d'orgues Blumenroeder accessible à l'adresse <a href="https://blumenroeder.fr" target="_blank">blumenroeder.fr</a>. Il bénéficie d'une grande visibilité mais une des erreurs a été de n'utiliser aucune librairie ce qui me fait que je le reconstruis complètement aujourd'hui n'étant pas entièrement satisfait. Le nouveau sera basé sur SvelteKit, NodeJS et le CMS Strapi. (Vous pouvez visiter le projet en cours <a href="http://51.91.250.172" target="_blank">ici</a>)`,
					images: [
						'blumenroeder/nav.png',
						'blumenroeder/home.png',
						'blumenroeder/page.png',
						'blumenroeder/nav2.png'
					]
				},
				{
					title: "Calculateur de tuyaux d'orgues",
					description:
						"Toujours pour la Manufacture Blumenroeder, ce site permet de faire des prédictions sur la longueur des tuyaux d'orgues. Il répond à un cahier des charges très exigeant, le défi ici était de modéliser le problème, faire le lien entre le facteur d'orgues et l'algorithme pour produire un résultat satisfaisant. Il est maintenant régulièrement utilisé par la Manufacture et lui permet de gagner du temps.",
					images: ['tuyaux/valeurs.png', 'tuyaux/graphique.png', 'tuyaux/rapport.png']
				},
				{
					title: 'Visualisation de graphe',
					description:
						'Dans le cadre des cours de NSI, nous avons vu les matrices pondérées. J\'ai donc décidé de créer un site web pour visualiser les graphes de manière simple et intuitive pour rendre la compréhension de l\'algorithme de Dijkstra plus facile. Basé sur Svelte, j\'ai pu facilement intégrer des animations pour le rendre vivant. Vous pouvez l\'essayer à cette <a href="https://seyti67.github.io/graph-viewer/public/" target="_blank">adresse</a>.',
					images: ['graph/villes.png', 'graph/chemin.png', 'graph/wide.png']
				},
				{
					title: 'Visualisation de nombres complexes',
					description:
						"Lorsque nous avons vu les nombres complexes en maths expertes, je pensais que nous allions voir la forme exponentielle sous peu (ce n'était pas le cas). Comme cette forme est fortement reliée à la géométrie, je me suis donc lancé dans le développement d'un site pour visualiser l'affixe d'un nombre z dont on donne la formule. La formule prend en paramètre un nombre x qui va varier au cours du temps selon un pas fourni par l'utilisateur. Vous pouvez l'essayer <a href=\"https://seyti67.github.io/complex-viewer/\" target=\"_blank\">ici</a>.",
					images: ['complex/exp.png', 'complex/cos2+sin2.png']
				},
				{
					title: 'Draw Together',
					description:
						"Il se joue à plusieurs, chaque joueur dessine un bout de dessin en voyant un petit bout dépasser du morceau précédent. Draw Together s'inspire d'un jeu pratiqué entre élèves dans la vraie vie où le même principe s'applique à une feuille de papier que l'on plie. Ici, on doit dessiner un objet parmi une liste de 3 mots, cette liste est constante pour chaque dessin mais il arrive que le premier commence avec une fourchette et que le deuxième continue avec une girafe donnant lieu à des résultats loufoques.",
					images: ['draw/rooms.png', 'draw/dessin1.png', 'draw/dessin2.png', 'draw/result.png']
				},
				{
					title: 'Thomas le train',
					description:
						'Dans le cadre des cours de NSI de première, nous avons réalisé avec un ami un site sur Thomas le train, le dessin animé pour enfant. Il n\'utilise aucune librairie mais comprend tout de même certaines fonctionnalités poussées comme les roues du train qui bougent avec le scroll ou la grue qui vient chercher les wagons pour en sortir les menus. Il a donc fallu beaucoup de travail pour le faire fonctionner mais le résultat était satisfaisant pour l\'époque. Vous pouvez le trouver <a href="https://thomasletrain--duianaft.repl.co" target="_blank">ici</a>.',
					images: [
						'thomas/home.png',
						'thomas/cube.png',
						'thomas/ile.png',
						'thomas/mods.png',
						'thomas/commercial.png'
					]
				}
			]
		}
	};
}
