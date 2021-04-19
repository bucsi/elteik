# Webprogramozás -- JavaScript beadandó

Feladatod egy régi táblás játéknak, a Connect-fournak átültetése egy böngészőben futó webes játékká. [A játék leírását itt tudod elolvasni.](https://hu.wikipedia.org/wiki/Connect_four)

![](https://upload.wikimedia.org/wikipedia/commons/e/e9/Connect4.PNG)

## A játék menete

A játéknak kétféle felhasználói felülete van:
- a *játék nyitólapja*, ami kezdetben jelenik meg, és a beállításokat tartalmazza; és
- a *játékoldal*, ahol játszani lehet.

Ugyan ezeket "oldal"-aknak hívjuk, mégsem kell ezeket külön HTML oldalon megvalósítani. Sőt, elvárás, hogy mindez egy HTML oldalon belül kerüljön megvalósításra, és pl. a kétféle "panel" megjelenésének változtatgatásával (pl. egy `div` `hidden` tulajdonságának programozásával) menjük egyik játékfázisból a másikba.

### A játék nyitólapja

A játék nyitólapján jelenjen meg 
- a játék neve, legyen lehetőség 
- a játékszabály elolvasására (ugyanott, külön oldalon, elrejtve/felfedve, stb. módon),
- a játékosok nevének megadására,
- egy mentett játék folytatására.

**Két játékos** lehet. A nyitólapon megadható a nevük, alapértelmezetten "1. játékos" és "2. játékos" legyen.

Legyen egy lista a korábbi játékospárokkal feltöltve. A lista tartalmazza az adott pár nevét, illetve hogy hányszor nyert az egyik, hányszor a másik, hányszor volt döntetlen. A sorrend is fontos, azaz Piroska-Farkas és Farkas-Piroska különböző pár, mert mindig az 1. játékos kezd. A lista egy elemére kattintva a nevek automatikusan kitöltődnek. (Pl. Piroska-Farkas párra kattintva az első játékos helyére a Piroska, a 2. helyére a Farkas név kerül.) Ezzel megkönnyítjük a visszatérő játékospárok nevének beírását.

Ha vannak félbehagyott játékok, akkor azoknak a listája is ezen az oldalon jelenik meg. A lista egy eleme a mentés dátumát, és a kitöltés %-os arányát tartalmazza. Rákattintva az adott állás töltődik be.

Egy **"Start"** feliratú gomb lenyomására indul a játék.

### Játékoldal

- A játék indítása után megjelenik az üres tábla.
- Ha a játékot mentett állásból indítottuk, akkor az adott állás töltődik be.
- A felületen jelezni kell, hogy melyik játékos van soron. (Ezt talán legegyszerűbb a bedobandó korong színével jelezni.) Mindig az 1. játékos kezd.
- A dobáskor az egeret a tábla felett húzogatva, az adott oszlop felett megjelenik a bedobandó korong. Kattintásra a korong bedobásra kerül.
- A korong pozícióját a jobbra-balra nyilakkal is mozgathatjuk. Space vagy ENTER megnyomására a korong bedobásra kerül.
- A korong animálva kerüljön a helyére, azaz lássuk leesni.
- Ha valamelyik játékosnak vízszintesen, függőlegesen vagy átlósan összejön négy egyforma színe, akkor az a játékos nyer, és a játék véget ér. A győztes játékos nevét írjuk ki. Majd egy kattintásra térjünk vissza a nyitólapra.
- Helyi tárolóba növeljük el az adott párnál a győztes játékos győzelmeinek számát.
- Ha döntetlen, akkor ezt kell kiírni, és növeljük a döntetlenek számát.
- A játék menet közben félbehagyható. Legyen egy "Mentés" gomb, amelyre kattintva a játékállapot mentésre kerül, és visszatérünk a nyitólapra.
- Ha egy korábban mentett játékot végigjátszunk, akkor az már ne jelenjen meg a mentett játékok listájában.

### Plusz feladatok plusz pontokért

- **1 játékos mód**:
  - a játék nyitólapján lehessen ezt kiválasztani. 
  - ekkor a második játékos a gép lesz, aki valamilyen logika szerint dobja a korongot
  - a gép is emberi idő alatt végezze a dolgát, azaz kis idő teljen el az oszlop kiválasztása és a dobás között
- **Időlimit**
  - lehessen megadni a főoldalon egy időlimitet, amennyit egy-egy játékos összesen gondolkodhat a játék során. Ha ez letelt, akkor automatikusan veszít.

## További elvárások és segítség

Fontos az **igényes megjelenés**. Ez nem feltétlenül jelenti egy agyon csicsázott oldal elkészítését, de azt igen, hogy 1024x768 felbontásban és a fölött az elrendezés jól jelenjen meg, a kártyákban középre rendezetten és felismerhetően jelenjenek meg az ábrák. Ehhez lehet minimalista designt is alkalmazni, lehet különböző háttérképekkel és grafikus elemekkel felturbózott saját CSS-t készíteni, de lehet bármilyen CSS keretrendszer segítségét is igénybe venni.

Nincs elvárás arra vonatkozóan, hogy milyen **technológiá**val (táblázat, div-ek vagy canvas) oldod meg a feladatot, továbbá a megjelenést és működést illetően sincsenek kőbe vésett elvárások. A lényeg, hogy a fenti feladatok felismerhetők legyenek, és a játék jól játszható legyen.

Az időméréshez lehet használni a `Date.now()` metódust, ami ms-okban adja vissza az aktuális időt. A folyamatosan időkijelzéshez használj időzítőt!

## A fejlesztés lépésekre bontása

Szeretnénk azoknak is segítséget nyújtani, akiknek nehezebb egy nagyobb feladatot átlátni, megtervezni. Lehet az egész feladatot előre megtervezni, és utána fejleszteni, de az alábbi lépések kisebb részfeladatok megoldásánál is használhatók:

1. Készítsd el a fejlesztendő alkalmazás **statikus HTML prototípusát**! Azaz első lépésben csak HTML és CSS segítségével tervezd meg a nyitóoldal és a játékoldal összes elemét: hogyan adod meg a beállításokat, hogyan jelenik meg a játéktábla, fölötte hogyan jelenik meg a korong, stb. Bizonyos műveletekhez hozz létre egy olyan stílusosztályt, ami a műveletnek megfelel, és statikusan alkalmazd a stílusosztályt az elemre, hogy lásd, tényleg működik-e.
2. Gondold át, hogy az egyes részfeladatok milyen **adatszerkezettel** írhatók le! 
   - Hogyan tárolod a beállításokat?
   - Hogyan tárolod a táblát?
   - Hogyan tárolod a mentéseket, vagy a korábbi játékokat?
   - Honnan tudod, hogy a nyitóoldalon vagy a játékoldalon vagy-e?
   - stb.
3. Gondold át, hogy a felületeddel a felhasználó milyen módon lép interakcióba, mire kattinthat, stb, és ezeket hogyan kezeled. Azaz határozd meg az **eseménykezelőket**! Ezek lesznek a mini programjaid.

Egy nagyobb feladatnál nem látunk át előre mindent. A fenti lépéseket lehet részfeladatonként alkalmazni. A HTML, CSS fázist nem kell feltétlenül kis lépésekre bontani. Meg lehet előre tervezni az egész felületet. A JavaScript logika fejlesztésénél viszont érdemes kis lépésekben haladni. Egyszerre egy dolog működjön.

## Pontozás

A feladat megoldásával 20 pont szerezhető. Vannak minimum elvárások, melyek teljesítése nélkül a beadandó nem elfogadható. A plusz feladatokért további 5 pont szerezhető. Azaz ha valaki mindent megcsinál a beadandóra 25 pontot kaphat.

### Minimálisan teljesítendő (enélkül nem fogadjuk el, 6 pont)

- A "További elvárások" részben szereplő `README.md` fájl megfelelően kitöltve szerepel a feltöltött csomagban (0 pont)
- A játékoldal megjelenik. (0 pont)
- Felváltva lehet korongokat dobálni. (3 pont)
- A nyerést vagy döntetlent érzékeli a gép és kiírja. (3 pont)

### Az alap feladatok (14 pont)

- A játék nyitólapjáról elérhető a játék leírása (0,5 pont)
- A játék nyitólapján meg lehet adni a játékosok nevét. (1 pont)
- A játék nyitólapján megjelennek a mentett játékospárok a megfelelő adatokkal. (1 pont)
- Egy játékospárra kattintva a nevek automatikusan bemásolódnak a játékosnevek helyére. (1 pont)
- A játék nyitólapján megjelenik a félbehagyott játékok listája is a megfelelő adatokkal. (1,5 pont)
- Erre kattintva a játék betöltésre kerül. (1 pont)
- A Start gombra kattintva új játék indítható. (1 pont)
- A játékoldalon az oszlop kiválasztása történhet egérrel. (1 pont)
- A játékoldalon az oszlop kiválasztása történhet billentyűzettel. (1 pont)
- A játékoldalon a korong animálva esik le. (1 pont)
- A játék félbehagyható, mentés után a játék a félbehagyott játékok listájában megjelenik, és onnan újra betölthető. (2 pont)
- A játék végén a statisztika az adott játékospárra mentésre kerül, és ez a nyitóoldalon is látszik. (2 pont)
- **Késés naponta (-1 pont)**

### Plusz feladatok (plusz 5 pont)

- 1 játékos mód (3 pont)
- Időlimit (2 pont)

## További elvárások

- Az elkészült feladatot tömörítve, az összes szükséges állománnyal, illetve a program gyökérmappájában elhelyezett `README.md` fájllal együtt legkésőbb a határidőig kell feltölteni a Canvas rendszerbe.
- A játék megvalósításához NEM használható semmilyen keretrendszer, külső JavaScript könyvtár.
- A `README.md` fájlban szerepeljen a következő kijelentés (a <> jeleket nem kell beleírni):

  ```txt
  <Hallgató neve> 
  <Neptun kódja> 
  Webprogramozás - számonkérés
  Ezt a megoldást a fent írt hallgató küldte be és készítette a Webprogramozás kurzus számonkéréséhez.
  Kijelentem, hogy ez a megoldás a saját munkám. Nem másoltam vagy használtam harmadik féltől 
  származó megoldásokat. Nem továbbítottam megoldást hallgatótársaimnak, és nem is tettem közzé. 
  Az Eötvös Loránd Tudományegyetem Hallgatói Követelményrendszere 
  (ELTE szervezeti és működési szabályzata, II. Kötet, 74/C. §) kimondja, hogy mindaddig, 
  amíg egy hallgató egy másik hallgató munkáját - vagy legalábbis annak jelentős részét - 
  saját munkájaként mutatja be, az fegyelmi vétségnek számít. 
  A fegyelmi vétség legsúlyosabb következménye a hallgató elbocsátása az egyetemről.
  ```

- A `README.md` fájlban a kijelentés alatt egy üres sorral elválasztva szerepeljen az alábbi lista. Az egyes `[ ]` közötti szóközt cseréld le x-re azokra a részfeladatokra, amit sikerült (akár részben) megoldanod!

  ```txt
  Minimálisan teljesítendő (enélkül nem fogadjuk el, 6 pont)

  - [ ] A "További elvárások" részben szereplő `README.md` fájl megfelelően kitöltve szerepel a feltöltött csomagban (0 pont)
  - [ ] A játékoldal megjelenik. (0 pont)
  - [ ] Felváltva lehet korongokat dobálni. (3 pont)
  - [ ] A nyerést vagy döntetlent érzékeli a gép és kiírja. (3 pont)

  Az alap feladatok (14 pont)

  - [ ] A játék nyitólapjáról elérhető a játék leírása (0,5 pont)
  - [ ] A játék nyitólapján meg lehet adni a játékosok nevét. (1 pont)
  - [ ] A játék nyitólapján megjelennek a mentett játékospárok a megfelelő adatokkal. (1 pont)
  - [ ] Egy játékospárra kattintva a nevek automatikusan bemásolódnak a játékosnevek helyére. (1 pont)
  - [ ] A játék nyitólapján megjelenik a félbehagyott játékok listája is a megfelelő adatokkal. (1,5 pont)
  - [ ] Erre kattintva a játék betöltésre kerül. (1 pont)
  - [ ] A Start gombra kattintva új játék indítható. (1 pont)
  - [ ] A játékoldalon az oszlop kiválasztása történhet egérrel. (1 pont)
  - [ ] A játékoldalon az oszlop kiválasztása történhet billentyűzettel. (1 pont)
  - [ ] A játékoldalon a korong animálva esik le. (1 pont)
  - [ ] A játék félbehagyható, mentés után a játék a félbehagyott játékok listájában megjelenik, és onnan újra betölthető. (2 pont)
  - [ ] A játék végén a statisztika az adott játékospárra mentésre kerül, és ez a nyitóoldalon is látszik. (2 pont)
  - **Késés naponta (-1 pont)**

  Plusz feladatok (plusz 5 pont)

  - [ ] 1 játékos mód (3 pont)
  - [ ] Időlimit (2 pont)
  ```

A megfelelően kitöltött `README.md` fájl nélkül a megoldást nem fogadjuk el!
