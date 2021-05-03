# timo-pirn-praktika

## Link projektile

Timo Pirn proovitöö Netlify link: <https://timopirn-test.netlify.app/>.

## Kasutusjuhend

Päikesetõusu ja -loojangu aegade kuvamiseks tuleb sisestada info väljadesse vastavad koordinaadid või vajutades hiirega kaardile.

## Lahenduskäik

* Loon vaated koordinaatide ja kellaaja sisestamiseks kasutades lihtsaid HTML input elemente ja Javascripti, et sisestatud info kätte saada onclick funktsiooni kasutades.

* Input väjadesse sisestatud koordinaadid kuvavad kaardil täpse asukoha ja kaardi all päikesetõusu ja -loojangu aegu.

* Lisan ala päikesetõusu ja loojangu ning päeva pikkuse kuvamiseks.

* Lisan juurde kaardi kasutades Leaflet'i APId.

* Et näidata päikesetõusu ja loojangut, kasutan sunrise-sunset.org'i API'd. API kasutab latitude ja longitude parameetreid/muutujaid.

* Kaardile vajutades saab kuvada koordinaate ja sellega veel päikesetõusu ja -loojangu aegasid.

## Lahendamata etapid ja potensiaalsed lahendused

* Etapp 3 - Graafiliselt päeva pikkuse muutumine valitud ajavahemikul. Et probleem lahendada, võiks leida API mis võtab sisse vajalikud parameetrid ja siis kuvab andmed graafiliselt veebilehele, sarnaselt kaardile.

## Kulunud aeg

Kogu projektile kulus kokku ligikaudu 10 tundi. Suurem osa sellest kulus päikesetõusu ja -loojangu API integreerimisele ja selle andmete kuvamisele ja veelgi suurem osa kulus andmete otsimisele.

## Lihtne/Raske

### Lihtne

Kõige lihtsam osa oli HTML "raami" ehitamine, kuna see on üks esimesi baas teadmisi mida õppisin kui alustasin tarkvaraarendusega.

### Raske

Kõige raskem osa oli uuringute tegemine ja API-de leidmine ning nende õigesti kasutamine. Kuna dokumentatsioon on selle APIga väga vähene siis pöördusin oma õpetaja poole, et abi saada.