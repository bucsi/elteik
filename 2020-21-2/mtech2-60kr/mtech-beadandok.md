# Modern technológiák 2. kisbeadandók
Általános pontozás: Az alapjáték működése 5 pont, ez lehetőleg legyen meg hibátlanul! A továbbfejlesztések pontjait a táblázatokban olvashatjátok.

Feladatok:
  - [Akasztófa](#akasztófa)
    - [Feladat (5 pont)](#feladat-5-pont)
    - [Továbbfejlesztések](#továbbfejlesztések)
  - [Amőba](#amőba)
    - [Feladat (5 pont)](#feladat-5-pont-1)
    - [Továbbfejlesztések](#továbbfejlesztések-1)
  - [Dáma](#dáma)
    - [Továbbfejlesztések](#továbbfejlesztések-2)
  - [Kockapóker](#kockapóker)
    - [Alapjáték (5 pont)](#alapjáték-5-pont)
    - [Továbbfejlesztések](#továbbfejlesztések-3)
  - [Függvényrajzolás Canvassal](#függvényrajzolás-canvassal)

## Akasztófa
### Feladat (5 pont)
A játék indításkor véletlenszerűen választ egy szót legalább 10 beépített szóból, és kiírja "elrejtve", pl. az `_ _ _ _` (alma) formátumban. Egy input mezőben lehet tippelni egy darab betűt. Ha ez a betű szerepel a szóban, az megjelenik (pl: `a _ _ a`). Ha a betű nem szerepel, a program számol egy hibát. 11 hibás betű után a játék véget ér. A hibásan bevitt betűket megjeleníti a program, illetve ha valamit egyszer hibásan tippeltünk, azt nem engedi újra tippelni.

### Továbbfejlesztések
| feladat                                                                                                                                                     | pontszám |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| A játék indításától kezdve a kitalálásig méri a játék az időt, és ez a végén meg is jelenik. Játék közben is látszódik az idő telése (pl. másodpercenként)  | 1 pont   |
| A hibákat valamilyen ábrával jelöli (nem szükséges egy teljes akasztófát megjeleníteni, egy 11 szeletes tortadiagram is megfelel pl.)                       | 1 pont   |
| A játék végén van lehetőség egy gombnyomással új játékot indítani. Ez az opció helyesen visszaállít mindent a kezdőállapotba (az oldal újratöltése nélkül). | 1 pont   |
| A játék végén elkéri a játékos nevét, és toplistában tárolja (`localStorage`, idő szerint rendezve)                                                         | 1 pont   |
| A `localStorage` toplistája gombnyomásra megjeleníthető valamilyen szép HTML formátumba generálva                                                           | 1 pont   |

## Amőba 
### Feladat (5 pont)
A játék indítása előtt meg kell adni az `X` és a `O` játékosok nevét. A játék indításakor egy üres 3x3-mas pálya látszik. Egy üres mezőre kattintásra `O` kerül a mezőbe, majd `X` felváltva. Egy foglalt mezőre kattintáskor semmi sem történik. Minden kattintás után ellenőrzi a játék, hogy nyert-e az adott játékos (3 egyforma jel szerepel a jelenlegi oszlopban, sorban vagy átlóban). Győzelem esetén kiírja a játék, hogy melyik játékos nyert, hány lépésből.

### Továbbfejlesztések
| feladat                                                                                                                                                                          | pontszám |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| A játék indítása előtt megadható, hogy mekkora pályán szeretnénk játszani (&ge; 3). A győzelemhez továbbra is egy teljes sor/oszlop/átló feltöltése szükséges.                   | 1 pont   |
| Nagyobb pályaméret esetén megadható, hogy a győzelemhez egy teljes sor/oszlop/átló feltöltése szükséges, vagy csak 3 egymás melletti `O` vagy `X`.                               | 1 pont   |
| A győzelmeket `localStorage`ban számon tartja a játék. Ha a győztes játékos még nem szerepel a győztesek között, felveszi 1 győzelemmel, ha szerepel, növeli a győzelmek számát. | 1 pont   |
| A `localStorage` győzelmek száma szerint rendezve megjeleníthető a felületen (gombnyomásra)                                                                                      | 1 pont   |
| A játék elején kiválasztható, hogy két vagy három játékos játszik felváltva.                                                                                                     | 1 pont   |

## Dáma
### Alapjáték (5 pont)
A játék egy 8x8-as sakktáblán játszódik. A tábla bal alsó sarka fekete, és a fekete mezőkön mindkét játékosnak 12 bábuja áll (értelemszerűen, a játékosokhoz közel álló 3 sorban.) A játékosok felváltva lépnek, minden bábu a hozzá tartozó játékoshoz képest előre, egyet átlósan tud lépni (mint a sakkban a gyalogok ütései). Ha egy bábu előtt átlósan ellenséges bábu áll, de a mögötte levő mező üres, az ellenséget átugorva le kell venni az ellenfél bábuját:

<table style="text-align: center">
    <tr>
        <td> </td>
        <td> </td>
        <td> </td>
    </tr>
    <tr>
        <td> </td>
        <td>🔵</td>
        <td> </td>
    </tr>
    <tr>
        <td>🔴</td>
        <td> </td>
        <td> </td>
    </tr>
</table>
<hr>
<table style="text-align: center">
    <tr>
        <td> </td>
        <td> </td>
        <td>🔴</td>
    </tr>
    <tr>
        <td> </td>
        <td>💀</td>
        <td> </td>
    </tr>
    <tr>
        <td> </td>
        <td> </td>
        <td> </td>
    </tr>
</table>

### Továbbfejlesztések
| feladat                                                                                                                   | pontszám |
| ------------------------------------------------------------------------------------------------------------------------- | -------- |
| Egy sikeres ütés után, ha ugyanazon az átlón tud még ütni a bábu, akkor nem ér véget a játékos köre, hanem üthet tovább.  | 1 pont   |
| Ha egy játékos bábúi elfogynak, véget ér a játék                                                                          | 1 pont   |
| Ha egyik játékosnak sincsenek már érvényes lépései, az nyer, akinek több bábúja van a táblán                              | 1 pont   |
| Ha egy játékos valamely bábúja beér az ellenfél első sorába, "előlép" királlyá, és innentől kezdve hátrafele is tud ütni. | 2 pont   |

## Kockapóker
### Alapjáték (5 pont)
[A kockapóker általános szabályai](http://users.atw.hu/kartyaszabalyok/mappa/kockapoker.htm) (Elég, ha egy játékosra működik, elsősorban a pontozásért van itt a link. Nektek csak a mellékelt pontozótáblához kell megírni a programot.)  
A játékos gombnyomásra kap öt random számot (1 és 6 között). Kiválaszthatja, hogy melyeket szeretné újradobni, és azokat újra sorsolja a program, ezt összesen kétszer teheti meg. A három dobás után a játékos kiválasztja (pl. egy `<select>` elemből, vagy a mezőre kattintással), hogy melyik kategória szabálya szerint kér érte pontot (pl. kis sor), a megfelelő helyre pedig a program kiszámolja a dobott kockákért járó pontot.
<details>
<summary>A pontozótábla</summary>

| Kategória | Pontszám |
| --------- | -------- |
| Pár       |
| Két pár   |
| Drill     |
| Full      |
| Póker     |
| Kis sor   |
| Nagy sor  |
| Nagypóker |
| Szemét    |
| Összesen  |

</details>

### Továbbfejlesztések
| feladat                                                                                                                                                | pontszám |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| Minden egyes (újra)dobás után a táblázatban "feltételes" pontok is megjelennek: **ha** oda választaná a játékos ezt a dobást, ennyi pontot kapna érte. | 1 pont   |
| A táblázat alján folyamatosan látszik a jelenlegi összpontszám.                                                                                        | 1 pont   |
| A véletlenszámok kockaként jelennek meg (pl. felülnézetben, képként)                                                                                   | 1 pont   |
| 2 játékos is tud játszani, felváltva dobnak (3-3 újrapróbálással, ugyan úgy.)                                                                          | 2 pont   |


## Függvényrajzolás Canvassal
A következő heti órán vesszük a canvas technológiát. A feladatban felhasználói paraméterezéssel kell függvényeket kirajzolni, transzformálni. Talán egy kicsit nehezebb, de látványosabb feladat, ha érdekel, keress meg minket és beszéljünk róla!