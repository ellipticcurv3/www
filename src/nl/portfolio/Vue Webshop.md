---
{
  "type": "portfolio",
  "date": "2020-02-18 03:00:00 -0400",
  "shortTitle": "Webshop",
  "client": "VueShop",
  "category": "Webdevelopment",
  "tags": [
    "elda",
    "bedrijfsvideo",
    "dutch"
  ],
  "images": {
    "featured": {
      "filename": "shopping-cart.webp",
      "description": "Shopping Cart"
    }
  },
  "excerpt": "Custom webshop, gebouwd met Vue en TypeScript",
  "permalink": "/portfolio/vue-webshop",
  "lang": "nl"
}
---

# Webshop

Ik heb een webshop gemaakt met Vue en TypeScript.  Ik had in totaal 5 dagen om een werkende demo op te leveren, omdat Bunq mij wilde interviewen over mijn werk en mijn toepassingen van de Bunq API. De webshop is een demo van een Vue-gebaseerde webapplicatie en gebruikt TypeScript.

In de shop is het mogelijk om te bladeren door diverse producten, toe te voegen aan het winkelwagentje en ze vervolgens af te rekenen. Bij het afrekenen wordt er een factuur aangemaakt, die de klant vervolgens kan betalen via de getoonde QR-code of door het aanklikken van een link.

Producten die getoond worden in de webshop worden opgehaald uit de backend. Momenteel is dat een zeer eenvoudige Node.js applicatie op basis van Express, want het is immers een demo. Als het pad `/` geraadpleegd wordt op deze back-end, worden alle "producten" uit de webshop getoond. Het is ook mogelijk een eenvoudige zoekopdracht uit te voeren, waarna de back-end resultaten toont van de gegeven zoekopdracht.

Omdat het een demo is, kan er natuurlijk niets daadwerkelijk besteld worden. 

## Volgende stappen

Momenteel kijk ik naar de mogelijkheden om de webshop verder uit te werken als een volledige werkende webapplicatie. Het idee dat ik in gedachten heb is het opsplitsen van de front-end en back-end, waarbij er een volledig open-source, pluggable en extendable webshop back-end ontstaat.

Deze back-end heb ik de naam **Storekeepr** gegeven omdat dat een toepasselijke naam is voor een dergelijke applicatie. Een 'storekeeper' is het Engelse woord voor iemand die een winkel bezit, de voorraad bijhoudt, etc. Precies wat de back-end gaat doen dus.

Het beheren van de winkel gebeurt via een REST-gebaseerde API. Middels die API is het mogelijk om de winkel te 'bekijken', zoekopdrachten uit te voeren, je te registreren of aan te melden als klant, producten toe te voegen aan je winkelwagentje, je winkelwagentje afrekenen, de winkelvoorraad te beheren, etc.

Eigenlijk precies zoals bij een echte winkel of andere webshop maar dan gericht op developers.



