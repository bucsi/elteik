# Modern technológiák 2. kisbeadandók (PHP)

Általános pontozás: Az alap alkalmazás működése 5 pont, ez lehetőleg legyen meg hibátlanul! A továbbfejlesztések pontjait a táblázatokban olvashatjátok.

Feladatok:

- [Modern technológiák 2. kisbeadandók (PHP)](#modern-technológiák-2-kisbeadandók-php)
  - [Bevásárlás](#bevásárlás)
    - [Feladat (5 pont)](#feladat-5-pont)
    - [Továbbfejlesztések](#továbbfejlesztések)
  - [Oltópont](#oltópont)
    - [Feladat (5 pont)](#feladat-5-pont-1)
    - [Továbbfejlesztések](#továbbfejlesztések-1)
  - [Órarend](#órarend)
    - [Feladat (5 pont)](#feladat-5-pont-2)
    - [Továbbfejlesztések (5 pont)](#továbbfejlesztések-5-pont)

## Bevásárlás

### Feladat (5 pont)

A felhasználó bevásárlólistát szeretne készíteni. Fel tud venni új tételt, és tudja törölni azt. Minden terméknek ismert a neve, mennyisége és a mennyiség egysége (pl. db, kg). Minden tétel mellett van egy gomb, ami késznek jelöli az adott sort. Ekkor nem törlődik, csak innentől áthúzottan jelenik meg (érdemes a `<del>` HTML taget használni). Több listánk is lehet, amik közt egy legördülő menüvel tudunk változtatni (az alapfeladatban elég beégetni három listát, pl. `Lista 1`, `Lista 2`, `Lista 3`, amikre külön-külön lehet elemeket felvenni/róluk törölni).

### Továbbfejlesztések

| Feladat                                                 | Pontszám |
| ------------------------------------------------------- | -------- |
| Az elemek módosíthatók törlés nélkül                    | 1 pont   |
| A törlés (és módosítás) fetch-el van megoldva           | 2 pont   |
| A felhasználó létrehozhat új listát, és elnevezheti azt | 1 pont   |
| A felhasználó törölhet egy listát                       | 1 pont   |

## Oltópont

Az oltásra érkezők adminisztrálását egy PHP alkalmazás, és a mögötte működő adatbázis látja el.

### Feladat (5 pont)

Az adatbázis tárolja egy beteg:

- nevét
- TAJ számát
- oltás időpontját (év-hónap-nap)
- oltópont sorszámát
- kért vakcina típusát (Pfizer, Moderna, AstraZeneca, Sputnik vagy Sinopharm)
- oltottságát (igaz/hamis, avagy megkapta-e az oltást)

A weboldalon van lehetőség:

- új oltandó személy mentésére a fenti adatok megadásával
- listát készíteni az oltandókról:
  - szűrés és egyebek nélkül az összes, adatbázisban szereplő kiírása
  - oltásra szűrve (tehát egy adott vakcinát kapó összes ember kilistázása)
  - oltópontra szűrve (tehát egy adott oltópontra behívott emberek kilistázása)
  - a két fentit kombinálva (tehát pl. azok kilistázása, akik Sinopharmot kapnak a 2-es oltóponton).
- betegenként egy gomb segítségével "oltani". Ez a gomb a beteget oltottnak jelöli, és onnantól nem jelenik meg a szűrt listákban, csak a szűrés nélküliben.

### Továbbfejlesztések

| Feladat                                                                                                                             | Pont   |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Lehet dátumra is szűrni (csak azon betegek kilistázása, akik az adott dátumon érkeznek)                                             | 2 pont |
| A dátumszűrés a többi feltétellel kombinálható                                                                                      | 1 pont |
| A listázások (a szűrt és szűretlen is) `fetch`-vel történnek, is a szkript által küldött választ JavaScript jeleníti meg az oldalon | 2 pont |

## Órarend

### Feladat (5 pont)

Adatbázisban tároljuk tantárgyak adatait (tárgykód, tárgyév, oktató neve, terem, nap, kezdés időpontja, befejezés időpontja). Ebből egy php webalkalmazás táblázatos órarendet készít, a tárgyakat külön színekkel jelölve.
Egy formon keresztül van lehetőség új tantárgy felvételére. Ha az időpont ütközne más tárggyal, akkor jelenjen meg hibaüzenet, és ne kerüljön mentésre a tárgy!

### Továbbfejlesztések (5 pont)

| Feladat                                                                                                                                                                           | Pont   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Az alkalmazás tud egyszeres óraüzközéseket kezelni (tehát pl. ha hétfőn 10:30-11:30 között két órám van, vagy kedden 11:00-kor ér véget egy óra, de 10:45-kor kezdődik egy másik) | 2 pont |
| Egy-egy tárgy kiválasztható, és az adatai módosíthatóak                                                                                                                           | 1 pont |
| Az alkalmazás tudja az összetartozó előadás-gyakorlat párokat, és azonos színnel jelöli őket a generált órarendben.                                                               | 2 pont |
