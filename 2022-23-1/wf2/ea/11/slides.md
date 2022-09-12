---
title: Webprogramozás - Megosztott erőforrások a szerveren
---

::: title
Web-fejlesztés 2.
:::

### Megosztott erőforrások a szerveren

**Visnovitz Márton**  
egyetemi tanársegéd  
visnovitz.marton@inf.elte.hu

**@elte-fi/courses-tt-webprog**

------

## Ismétlés {data-state="new-section"}

------

## Ismétlés

- [x] Kliens-szerver kommunikáció
- [x] Cél: HTML kód előállítása
- [x] HTTP, CGI

------

## Szerveroldali programozás

![](http://webprogramozas.inf.elte.hu/hallgatok/vimtaai/assets/images/architecture/web-server-client.png)

------

## Erőforrások megosztása {data-state="new-section"}

------

## HTTP állapotmentesség

- A HTTP állapotmentes protokoll
- Nem emlékezik az előző kérés adataira
- Függetlenül kezeli a kéréseket
    + Ugyanazon kliens különböző kéréseit
    + Különböző kliensek kéréseit

![](http://webprogramozas.inf.elte.hu/hallgatok/vimtaai/assets/images/architecture/stateless.png)
![](http://webprogramozas.inf.elte.hu/hallgatok/vimtaai/assets/images/architecture/multiple-clients.png)

------

## 1. probléma

- Ugyanazon kliens több kérése között az állapot megtartása
- Pl. kosár
- Megoldás: HTTP kéréstől külön tárolni

![](http://webprogramozas.inf.elte.hu/hallgatok/vimtaai/assets/images/architecture/stateless.png)

------

## 1. probléma

![](http://webprogramozas.inf.elte.hu/hallgatok/vimtaai/assets/images/architecture/stateless-file.png)

------

## 2. probléma

Mindegyik kliens ugyanazon az adaton osztozkodik

![](http://webprogramozas.inf.elte.hu/hallgatok/vimtaai/assets/images/architecture/multiple-clients-file.png)

------

## 2. probléma

"Kliensenkénti adattárolás"

![](http://webprogramozas.inf.elte.hu/hallgatok/vimtaai/assets/images/architecture/multiple-clients-multiple-files.png)

------

## Erőforrások a szerveren

![](http://webprogramozas.inf.elte.hu/hallgatok/vimtaai/assets/images/architecture/server-input.png)

------

## Adattárolás {data-state="new-section"}

------

## Külső adattárolás

Lényeg: az adat a programtól különválik

![](http://webprogramozas.inf.elte.hu/hallgatok/vimtaai/assets/images/architecture/web-server-php-db.png)

------

:::::::::::::::::::: {.columns}
:::: {.column style="width: 45%"}
### Fájl

::: {.fragment style="color:green"}
- bármikor elérhető, nincs szükség plusz szoftverekre
- könnyen értelmezhető (ember, program)
- könnyen használható
- viszonylag kis méretű
:::
::: {.fragment style="color:maroon"}
- nincs/rossz konkurenciakezelés
- lassú
- nem biztonságos
:::
::::

:::: {.column style="width: 45%"}
### Adatbázis

::: {.fragment style="color:green"}
- biztonságos
- típusos adatok / séma
- bonyolult adatszerkezetek
- összetett kereshetőség
- fejlett konkurenciakezelés
:::
::: {.fragment style="color:maroon"}
- külön szoftver (általában)
- erőforrásigényes
- sok helyet foglal
:::
::::
::::::::::::::::::::
::: {.fragment}
**Általában mind a kettőre van magas szintű megoldás**
:::

------

## Adattárolás

- Adatok tárolása a kliensektől függetlenül
- Adatok elválasztása a programtól
- Minden kliens hozzáfér ugyanazokhoz az adatokhoz
- Példák:
  - hírportál hírei
  - videók egy videómegosztón
  - film adatbázis
- Megoldás:
  - szerver oldalon

------

## Munkamenet-kezelés {data-state="new-section"}

------

## Példa

Tároljuk egy számláló értékét felhasználónként, és minden kérésnél növeljük a számláló értékét eggyel!

------

## 1. ötlet: kliensoldali állapottartás

:::::::::::::::::::: {.columns}
::: {.column}
- Az adatot a kliensen tároljuk
- Minden kérésnél felküldjük a szerverre
- A szerver visszaadja a kliensnek
- Kliens oldali "trükkök" (URL, HTTP-body)
:::
::::::::::::::::::::

![](http://webprogramozas.inf.elte.hu/hallgatok/vimtaai/assets/images/architecture/stateless-data.png)

------

## 1/1: URL

```txt
session_url.php?counter=1
```

- Hátránya:
  - Minden linkhez oda kell generálni  
    (Ha egyről is lemarad, elvész az adat)
  - Sok adat nem fér el benne  
    (URL hossza limitált)
  - Feltűnő (zavaró)
  - **Könnyen átírható**
- Előny
  - Könyvjelzőzhető

------

## 1/2: rejtett mező

- URL: kevés adat, feltűnő, manipulálható
- → űrlap rejtett mezője

```html
<input type="hidden" name="counter" value="4">
```

:::::::::::::::::::: {.columns}
::: {.column}
- Előny
  - sok adat
  - nem feltűnő
:::

::: {.column}
- Hátrány
  - **manipulálható**
  - csak űrlapok esetén
  - normál linkeknél JavaScript kell
:::
::::::::::::::::::::

------

## 1/3: Süti

- Rejtett mező: macerás, manipulálható → süti
- HTTP kérés

```http
Cookie: név1=érték1; név2=érték2; név3=érték3
```

HTTP válasz:

```http
Set-Cookie: név=érték[; expires=dátum][...]
```
------

## Süti

:::::::::::::::::::: {.columns}
::: {.column}
- Előny
  - nem feltűnő
  - küldése automatikus
:::

::: {.column}
- Hátrány
  - **manipulálható**
  - limitált adatmennyiség
  - letiltható
:::
::::::::::::::::::::

------

## Kliensoldali megoldások

- Adat a kliensen van
- **Manipulálható**
- Sok adat esetén feleslegesen sok adat  
  megy oda-vissza a kliens és szerver között

![](http://webprogramozas.inf.elte.hu/hallgatok/vimtaai/assets/images/architecture/stateless-data.png)

------

## 2 ötlet: Szerveroldali állapottartás

- Tároljuk az adatot a szerveren
  - → nem manipulálható kliens oldalon
  - → nem kell sok adatot küldözgetni
- A kliens megkülönböztetése továbbra is szükséges
- → **tokent** kap, amivel azonosítja magát 
- → hozzáfér a **tokenhez** tartozó adatokhoz
- Token kliensoldali megoldással közlekedik
  - süti (alapértelmezett)
  - URL (ha nincs süti)

------

## Szerveroldali megoldás

Több kliens

![](http://webprogramozas.inf.elte.hu/hallgatok/vimtaai/assets/images/architecture/multiple-clients-token.png)

------

## Szerveroldali megoldás

Egy kliens különböző kérései

![](http://webprogramozas.inf.elte.hu/hallgatok/vimtaai/assets/images/architecture/stateless-token.png)

------

## Szerveroldali megoldás

- Adatok tárolása
  - fájlban
  - adatbázisban
- Plusz erőforrás a szervertől
- A tokenre nagyon kell vigyázni!
  - ellopható
  - kilépés

------

## Munkamenet-kezelés

- Kliensek megkülönböztetése
- Kliensenkénti adattárolás
- Példák:
  + levelezés, dokumentumok
  + internetbank
  + webáruház kosara, online szerkesztők
- Megoldás
  + kliens oldalon
  + szerver oldalon

------

## Összefoglalás

- Szerveroldali programozás = erőforrások megosztása
- **Adattárolás**: ugyanazon adat minden kliensnek (térben-időben)
- **Munkamenet-kezelés**: kliensenkénti adattárolás