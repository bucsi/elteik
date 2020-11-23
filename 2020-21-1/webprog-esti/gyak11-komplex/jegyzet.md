
## Tárolt adatok
- [x] userek
- [x] teljes spell lista
- [x] egy-egy user varázslatainak tárolása -> második JsonStorage

## Funkciók (oldalak)
- [x] teljes spell listából egy új hozzáadása az userhez
- [x] ha ismerem már a varázslatot, nem tanulhatom meg újra
- [x] ismert spellek listázása a main.php oldalon
  - [ ] egy-egy fontos részlet kiírásával
- [x] egy oldal, ami egy db spell részleteit kiírja (valszeg GET-en kapja)
  - [ ] szebben megjelenítva
  - [ ] TODO: css


## Adatszerkezetek

userStorage
- userID*
  - fullname*
  - username*
  - password_hash

spells
- spellID*
  - name
  - egyebek...
    - al-elemek...

feladat: tároljuk el az "user -> spell | spell | spell" adatsort, és ez legyen módosítható!

- id*
  - user neve*
  - spellek:*
    - spell1*
    - spell2*
    - spell3*

