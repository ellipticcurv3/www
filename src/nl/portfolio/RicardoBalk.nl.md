---
{
  "type": "portfolio",
  "date": "2018-06-01 03:00:00 -0400",
  "shortTitle": "Website",
  "client": "Ricardo Balk",
  "category": "Fotografie & Film",
  "tags": [
    "elda",
    "bedrijfsvideo",
    "dutch"
  ],
  "images": {
    "featured": {
      "filename": "website-ricardobalk.webp",
      "description": "Code of a website"
    }
  },
  "excerpt": "Ik heb mijn eigen website gebouwd in Vue.",
  "permalink": "/portfolio/mijn-website",
  "lang": "nl"
}
---

# Mijn eigen website

Nadat ik afstudeerde heb ik wat aandacht gegeven aan mijn eigen website&hellip;

Ik heb een nieuw ontwerp gemaakt voor mijn website en heb daarna zelfstandig de code geschreven om zo ervaring op te doen met Vue, een Javascript-framework waarmee je dynamische onderdelen kunt bouwen voor een website of -applicatie, waardoor er snel een professioneel resultaat ontstaat.

Het grote voordeel van Vue is dat het erg overzichtelijk is, omdat het werkt met componenten (SFCs). Dat maakt de website of webapplicatie erg makkelijk te onderhouden. Bovendien sluit Vue goed aan bij de Atomic Design-filosofie. Het uitgangspunt van Atomic Design is het bouwen van een systeem in plaats van individuele pagina’s, waarbij je ontwerpen opsplitst in kleinere onderdelen. Het is vergelijkbaar met LEGO-blokjes waarmee je grotere dingen kunt bouwen.

Onderstaande is een voorbeeld te zien van een Vue SFC. <!-- TODO: Polaroid van maken -->

```vue
<template>
  <div class="example-message">{{ message }}</div>
</template>

<script>
export default {
  name: "Example Message",
  props: {
   message: {
     type: string,
     required: true,
     default() {
       return "An example message.";
     },
   },
}
</script>

<style>
.example-message {
  color: red;
}
</style>
```

Vervolgens kan dit kleine component elders gebruikt worden...

```vue
<template>
	<div class="elders">
    Ik heb het volgende bericht:
    	<ExampleMessage message="Een kort berichtje" />
    </div>
</template>

<script>
    import ExampleMessage from "@/components/ExampleMessage";
    export default {
        name: "Elders",
        component: { ExampleMessage },
    }
</script>
```



De achterliggende gedachte is dat als alle kleine onderdelen goed zijn uitgedacht, uitgewerkt en aansluiten op elkaar, het geheel als site of app ook goed werkt. Gaat een individueel onderdeel toch stuk, dan blijft de rest meestal voldoende werken.

Doordat alles op een gestructureerde manier ingedeeld is, zijn problemen zijn makkelijker te vinden en is de (programma)code is makkelijker te onderhouden. 



## Meer informatie

Wil je meer weten over de Atomic Design filosofie? Lees dan de blogpost van Brad Frost over Atomic Design, te vinden op: [https://bradfrost.com/blog/post/atomic-web-design/](https://bradfrost.com/blog/post/atomic-web-design/).