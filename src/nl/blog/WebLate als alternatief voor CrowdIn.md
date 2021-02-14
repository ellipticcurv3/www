type: blogpost
date: 2019-09-03 06:00:00 +00:00
excerpt: "WebLate is een gratis en open source alternatief voor vertalen van (web)apps."
category: "Softwareontwikkeling"
tags: ["vertalen", "webapps", "apps", "crowdin", "weblate"]
lang: nl
permalink: /blog/weblate-crowdin-alternatief

# WebLate als alternatief voor CrowdIn

Sinds enkele jaren help ik ProtonMail met het vertalen van hun webapplicaties, waaronder ProtonMail zelf en ProtonVPN. Zij maken gebruik van CrowdIn, tevens een online applicatie waarmee vertalingen ingediend en gecontroleerd kunnen worden. Tot nu toe werkt dit goed maar om zelf applicaties te vertalen op CrowdIn, dien je een betaald abonnement te nemen. Daar had ik geen zin in, dus ging op zoek naar een gratis alternatief.

Het alternatief dat ik vond was WebLate. Net als CrowdIn is WebLate een webapplicatie waarmee je vertalingen kunt indienen en controleren. Het enige verschil is dat CrowdIn de dienst kant-en-klaar aanbiedt, terwijl WebLate gratis en open-source is. Maar... dan moet je het zelf wel even installeren. Hoe je dat precies doet leg ik uit in dit artikel.

---

## Stap 1. Zorgen voor een goede basis.

Een goede basis is belangrijk voor ieder programma.

### 1.1. Zorgen voor een goede installatie van Docker

Gebruik je nog geen Docker? :astonished: Schaam je! Ga even snel mijn handleiding volgen hoe je Docker installeert, alvorens verder te gaan. [De handleiding is hier te vinden][Docker Setup Instructions]. :eyeglasses:

### 1.2. Zorgen voor een goede mailserver

WebLate is een beetje ouderwets, want het communiceert nog vrij veel per e-mail. Het is daarom belangrijk om een goede mailserver in te richten, voornamelijk om uitgaande e-mails te versturen (SMTP). Dan kan 'ie je op de hoogte houden van de voortgang van de vertalingen. Het opzetten van een uitgaande mailserver is vrij eenvoudig. Je kunt bijvoorbeeld gebruik maken van de bestaande SMTP-mailserver van je bedrijf, die van je internetprovider of een account aanmaken op [SendGrid van Twilio][SendGrid].

Mijn eigen voorkeur gaat uit naar SendGrid, omdat je dan gewoon een account aanmaakt, de gegevens van hun SMTP-mailserver opvraagt en voilá! :muscle::mailbox:

## Stap 2. WebLate installeren

Nu komt het spannendste gedeelte: WebLate installeren. :tada:

## Stap 3. Bronbestanden uploaden

## Stap 4. Vertalen &amp; Controleren

## Stap 5. Vertalingen downloaden