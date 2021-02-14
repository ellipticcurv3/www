---
type: portfolio
date: 2020-11-01 09:00:00 +02:00
shortTitle: Locatietracker
client: Hacktoberfest
category: Webdevelopment
tags: ["frontend", "backend", "api", "go", "vue", "typescript", "hacktoberfest"]
images:
  featured:
    filename: "blank-world-map-inverted.svg"
    description: "Wereldkaart"
  hero:
    filename: "blank-world-map-inverted.svg"
    description: "Wereldkaart"
excerpt: Live locatie delen met vrienden.
permalink: /portfolio/location-tracker
lang: nl
---

# Locatietracker in Go en Vue

Ik bezoek regelmatig een verre vriend, ondanks dat ik ook een goede buur heb. Zodra het tijd is om terug te gaan naar huis, vraagt hij me altijd om een berichtje te sturen zodat hij weet dat ik weer veilig thuis ben. Da's natuurlijk wel tof van 'm, maar ik vergat dat altijd te doen. 🙈

Gelukkig ben ik de afgelopen jaren steeds beter geworden met het bouwen van websites en -applicaties, dus had een mooie oplossing voor ogen: Een locatie-tracker die goed samenwerkt met de navigatiesoftware op m'n telefoon, zodat die vriend live ziet waar ik me op dat moment bevind. Mocht er dan iets raars gebeuren, bijvoorbeeld dat ik midden op de snelweg stilsta, dan weet 'ie dat het geen zuivere koffie is.

Terwijl ik mijn idee begon uit te werken ging Hacktoberfest van start, een online evenement dat jaarlijk plaatsvindt in oktober (duh 😜). Tijdens dit evenement helpen verschillende mensen wereldwijd mee aan het bouwen en verbeteren van open-source software. Het doel ervan is om open-source een 'boost' te geven en deelnemers de gelegenheid bieden zichzelf te ontplooien door samen met anderen ervaring op te doen met vele verschillende programmeertalen.

Mijn idee om een locatietracker te bouwen kreeg verrassend veel interesse vanuit de Hacktoberfest-gemeenschap. Wellicht kwam dat doordat ik mijn idee al voor de start van Hacktoberfest indiende en het een relatief eenvoudige app met een 'straightforward' doel: op een eenvoudige manier je huidige locatie delen met een ander.

Om mijn idee daadwerkelijk tot een product om te toveren was het eerst belangrijk om te kijken naar het "probleem" en passende oplossingen. Vervolgens heb ik een plan bedacht en de requirements opgesteld. Een harde requirement was om de back-end en de front-end te splitsen en meteen te werken met de meest moderne programmeertalen. Dit zorgt namelijk dat je niet met een achterstand begint. De programmeertalen waarin de locatietracker gebouwd is, zijn Go 1.14 voor de back-end en Vue 3 (met TypeScript 💪🏻) voor de front-end.

Ook hebben we regels opgesteld waaraan zowel de communicatie tussen de belanghebbenden als de applicatie zelf aan moesten voldoen. Zo communiceerden we uitsluitend door middel van "issues" op GitHub (zogeheten "contribution guidelines") en waren er bepaalde standaard richtlijnen voor de code (zogeheten "code guidelines"). Iedereen weet daardoor waar de ander aan werkt, waarom bepaalde keuzes genomen zijn en het draagt bij aan een goede samenwerking met consitente kwaliteit.

Dankzij de pragmatische aanpak en de inzet van alle mensen die aan dit toffe idee meewerkten is het in korte tijd uitgegroeid tot bruikbare applicatie, die in de toekomst verder uitgewerkt wordt. De combinatie van Go en Vue is geweldig en ik ben erg enthousiast geworden over open-source software, doordat ik nieuwe mensen leerde kennen en we samen tot dit toffe resultaat kwamen. M'n Hacktoberfest T-shirt is inmiddels onderweg en volgend jaar ga ik zeker opnieuw deelnemen!

Mocht je geïnteresseerd zijn in de broncode, neem dan vooral een kijkje op de [GitHub-pagina][github/waarzitjenu] die ik voor deze app aangemaakt heb.

[github/waarzitjenu]: https://github.com/waarzitjenu