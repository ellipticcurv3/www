---
{
  "type": "portfolio",
  "date": "2018-06-01 03:00:00 -0400",
  "shortTitle": "Red Blue Yellow",
  "client": "HAN University of Applied Sciences",
  "category": "Game Development",
  "tags": [
    "Unity",
    "Game",
    "C#",
    "HAN"
  ],
  "images": {
    "featured": {
      "filename": "red-blue-yellow.webp",
      "description": "Code of a website"
    }
  },
  "excerpt": "Game in Unity",
  "permalink": "/portfolio/red-blue-yellow",
  "lang": "nl"
}
---

# Red Blue Yellow

Tijdens mijn minor 'Scripting for Designers' op de Hogeschool van Arnhem en Nijmegen heb ik gewerkt aan Red Blue Yellow, een arcadeachtige game waarbij je door middel van kleuren mengen een zo hoog mogelijke score probeert te halen. De game is binnen 6 weken gerealiseerd door 4 studenten. De druk lag erg hoog omdat er nagenoeg geen ervaring was in de programmeertaal C#, beperkte tijd was om de taal eigen te maken èn daarnaast een werkende game op te leveren. Ondanks de omstandigheden is deze toffe game gerealiseerd.

## Scripting for Designers

Alvorens direct te vertellen hoe 'Red Blue Yellow' tot stand kwam, is het wellicht interessant om te weten hoe deze game zijn plek kreeg binnen de minor Scripting for Designers...

De minor S4D was bedoeld voor studenten die hun ervaring in het (grafisch) vormgeven wilden uitbreiden met wat meer technische kennis. In grote lijnen was de minor opgebouwd uit klassikale lessen, een klein project en een groot project.

Tijdens de klassikale lessen deden de studenten ervaring op op het gebied van programmeertechnieken. Hoe 'denken' computers, hoe bouw je functies, wat zijn enkele 'best practices' en hoe sluit je je zelf geschreven code op elkaar aan, zodat er iets werkends onstaat?

In het kleine project pasten de studenten hun opgedane kennis in de praktijk toe door een Arduino te programmeren, een soort electronicabordje met heel veel draadjes, waarmee je lichtjes, zoemertjes en andere input/output kunt aansturen. Door de kennis uit de klassikale lessen toe te passen moesten we een eenvoudig spelletje creëren waarmee onze kennis getoetst werd.

Na het kleine project volgde het grote project. In het grote project mochten studenten zèlf een programmeertaal/platform kiezen, groepjes vormen en zich 6 weken lang verdiepen in de gekozen taal of platform, een concept bedenken en er iets tofs van maken. Tijdens dit grote project ontstond onze game, Red Blue Yellow.

## Unity (C#)

Wij, (dat zijn: Ricardo, Niels, Job en Max), kozen voor het platform Unity. In Unity is het mogelijk om games te bouwen, zo is het bekende Pokémon Go ook gebouwd in Unity.

Games bouwen is relatief makkelijk in Unity maar het heeft wel een enorm steile leercurve. Deze steile leercurve heeft dan voornamelijk betrekking op het ontwikkelen van de gamelogica. Zeker als je zo idioot bent als ons, om meteen voor de programmeertaal C# te gaan binnen Unity &mdash; want C# is nou niet bepaald een heel eenvoudige programmeertaal voor 4 studenten met wat basiservaring in JavaScript en C. Maar wij waren undercover nerds met hoge ambities, dus dat kwam wel goed.

Als team van 4 personen functioneerden we erg goed. Zo richtten we ons de eerste week op het vormen van een goed concept voor een speelbare game. Gewoon door goed met elkaar te overleggen aan een tafel, met wat papier, een potlood en een gum. Hier en daar ontstonden mindmaps, schetsen en storyboards, die de basis voor ons concept vormden. Ons concept werd onderverdeeld in verschillende taken. Denk aan dingen die uitgezocht moesten worden, dingen die gemaakt moesten worden en dingen die later konden. Maandagmiddag begonnen we en woensdagochtend konden we aan de slag.

## Het concept

Het concept was een soort arcade-achtige game met een ruimteschip waarvan je de kleur kunt aanpassen. Dit was nodig om de juiste 'vijanden' te verslaan. Het klinkt als een eenvoudig concept maar de complexiteit zit in het mengen van kleuren: Naast rood, blauw en geel, moet je ook combinaties maken van de kleuren, waardoor er in totaal 9 kleuren ontstaan: zwart, rood, blauw, geel, oranje, paars, groen en wit. Bovendien komen er na verloop van tijd steeds meer vijanden op je af, in allerlei kleuren. Oh &ndash; en ze vliegen ook steeds sneller naar je toe... Je kunt dus wel stellen dat het spel zowel je cognitieve vaardigheden als je reactievermogen op de proef stelt.

## Random Generation

Een van mijn verantwoordelijkheden was juist die random generation, zoals wij het onderdeel noemden. Deze zorgde ervoor dat er steeds meer vijanden na verloop van tijd op het scherm kwamen. Uiteraard op verschillende, willekeurige plaatsen. Het ironische van random generation in games is dat de willekeurigheid in games juist omlaag gebracht dient te worden om de speelbaarheid niet in gevaar te brengen. Ik zal dit even grafisch uitbeelden, zodat je begrijpt wat ik bedoel.

<!-- TODO: Grafisch uitbeelden van random speelveld en minder random speelveld -->

Eigenlijk maak je de willekeur minder willekeurig, daar komt het op neer. Grappig hè?

Ik was verantwoordelijk voor de code van de random generation, die zorgt dat enemies op willekeurige plaatsen verschijnen en de spelbesturing.

## Bitflags en bitmasks

Een byte bestaat uit 8 bits, en omdat er &ndash; buiten zwart (niets) en wit (alle kleuren) &ndash; 8 kleuren mogelijk waren voor zowel de vijanden als de speler, hebben we de 'kleur' in een enkele byte weten te stoppen. Dit principe heet bitflag. Hieronder zie je een voorstelling van een bitflag:

<!-- TODO: Bitflags tonen -->

Het grote voordeel van bitflags is dat je gebruik kunt maken van bitmasks. Stel, je vliegt in ons spel tegen een vijand aan. Dan kunnen we de gamelogica zo schrijven dat we stap voor stap kijken welke kleur onze speler heeft en welke kleur de vijand heeft, om tot een conclusie te komen: punten erbij of leven eraf. Met bitmasks hoeft dit niet, want daarmee kun je de 8 kleur-bits van de vijand in één stap vergelijken met de bits van de speler.

## Spelbesturing

Naast de random generation was ik verantwoordelijk voor de spelbesturing. Dit hield in dat de input van de muis omgezet moesten worden in bewegingen binnen het speelveld en de input van het toetsenbord moest resulteren in het mengen van de juiste kleuren.

## Custom Gamecontroller

Aan het eind van het project hadden we wat tijd over. Daarom heb ik als kers op de taart een zelfgebouwde gamecontroller gemaakt. De gamecontroller is gebaseerd op een hele kleine variant van een Arduino, een klein bordje waarmee je allerlei electronicaprojecten kunt bouwen. De ervaring met een Arduino heb ik opgedaan tijdens de klassikale lessen van de minor. Deze ervaring heb ik dit keer toegepast op een echte gamecontroller, die hieronder is te zien:

<!-- TODO: Afbeelding van gamecontroller -->

## Resultaat

Het was een toffe periode waarin we in zeer korte tijd een leuke game gebouwd hebben. Hieronder is het spel te spelen.

<!-- TODO: Spel toevoegen -->