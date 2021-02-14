---
layout: post
title: "Masonry layout using pure HTML and CSS"
excerpt: "You don't need fancy scripts to create a masonry-style layout."
category: "front-end development"
tags: ["website", "development", "geeky"]
date: 2019-10-02 06:00:00 +00:00
language: nl
---

<!-- A short introduction -->

Ik onderhoud mijn website geregeld. Om mijn website sneller te maken heb ik gekozen om mijn blog- en portfolio- te verbeteren. Daarnaast ben ik op dit moment bezig met een opdracht voor een klant waarvoor ik het ga inzetten. Een win-win situatie dus, want zo kan ik het eerst zelf testen voordat ik het bij de klant gebruik.

---

# Masonry-layout

Zowel de overzichtpagina van mijn [blog](/blog) als mijn [portfolio](/portfolio) maken gebruik van de Masonry-layout. Het masonry-layout is gebaseerd op een horizontaal of verticaal grid dat als metselwerk in elkaar zit.

<!-- TODO: Afbeelding -->

## De uitdaging

De uitdaging bij een masonry-layout is dat de 'stenen' (afbeeldingen) een variable hoogte of breedte hebben, afhankelijk of het gaat om een horizontale of een verticale variant. Één van de twee dimensies is dus vast, de andere is variabel.

Op mijn website maak ik gebruik van de verticale variant, waardoor de stenen een vaste breedte hebben en een variabele hoogte. Het probleem van een variabele hoogte is dat de stenen op de verticale basis variabel in elkaar moeten schuiven. Met reguliere/ouderwetse HTML/CSS-technieken is dat niet mogelijk. Onderstaande is dit probleem te zien.

<!-- TODO: Afbeelding toevoegen -->

## Scripts, walgelijk.

Een van de mogelijke oplossingen is gebruik van een scriptgebaseerde oplossing: Masonry van Desandro. Echter levert het gebruik van een script wat problemen op. De scriptgebaseerde variant is gemaakt in 2011 en dus al enigzins verouderd. Daarnaast zorgt het laden van een script voor extra downloadtijd en kan 't pas z'n werk doen nadat alle inhoud is geladen. Kortom, de hele website wordt trager.

## HTML5/CSS3, heerlijk.

Sinds enige tijd is er een nieuwe taal voor de opmaak van websites, CSS3 - vaak samen met HTML5 benoemd: HTML5/CSS3. Sinds de invoer, implementatie en ondersteuning van CSS3 is er een nieuwe basis die ervoor zorgt dat er zonder (externe) scripts relatief dynamische websites gebouwd kunnen worden. Websites zijn daardoor een stuk beter bruikbaar op allerlei apparaten, zoals je smartphone, tablet en e-reader.

HTML5/CSS3 blijft in ontwikkeling, waardoor er nieuwe functies ontstaan zoals het CSS Grid, Flexible box model ("Flexbox") en automatisch opdelen van kolommen. Deze technieken heb ik gecombineerd om een Masonry-layout te maken. Het grote voordeel van de HTML5/CSS3-gebaseerde aanpak is dat er geen script meer nodig is, waardoor de website veel sneller laadt.

De browser hoeft niet te wachten tot het script en alle inhoud geladen is en hoeft vervolgens geen ingewikkelde berekeningen te verrichten, maar kan in plaats daarvan de items meteen op de juiste plek zetten binnen het grid en de nodige aanpassingen verrichten. Kortom, met de nieuwste technieken kun je hetzelfde layout maken, maar werkt de site een stuk sneller én beter.

# Mijn oplossing

De oplossing die ik heb gemaakt, is puur gebaseerd op HTML5 en CSS3. Voor de CSS3 ben ik een stapje verder gegaan en heb ik gebruik gemaakt van SCSS. SCSS zorgt ervoor dat repititieve code korter geschreven is (DRY-principe) en dankzij variabelen wordt het aanpassen van het grid kinderspel. Onderstaande is mijn oplossing te zien:

<script async src="//jsfiddle.net/ellipticcurv3/9vtkhso1/embed/html,css,result/"></script>

Zoals je kunt zien wordt er enkel gebruik gemaakt van HTML5 en CSS3.

Het werkt als volgt:

- Er is een container `.masonry-container`. Deze container heeft een maximumbreedte en is in het midden uitgelijnd &mdash; maar dit is niet verplicht.
- In de container bevindt zich een div `.columns`, die zorgt voor het grid-layout. Ieder `.item` die zich in `.columns` bevindt, wordt in een verticaal Masonry-grid gezet.
- SCSS-variabelen helpen met het bepalen van het aantal weergegeven kolommen.

```scss
$column-count-large: 3;    // Het aantal kolommen dat wordt weergegeven op een computer.
$column-count-medium: 2;   // Het aantal kolommen dat wordt weergegeven op een tablet.
$column-count-small: 1;    // Het aantal kolommen dat wordt weergegeven op mobiele apparaten.
```

> Let op: `.item` werkt enkel met elementen die automatisch hun hoogte bepalen aan de hand van een vaste breedte en een gegeven beeldverhouding (`img`, `svg`, `figure`).