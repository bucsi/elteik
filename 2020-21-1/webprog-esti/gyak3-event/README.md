# Eseménykezelés
## Delegálás minta
Ezt a mintát tudod copy-paste használni a delehálásra.

```javascript
function kezel(event, child){
    //csinálj, amit eseményre akarsz child-dal
}
/**
 * Egy függvény, hogy egy "nagy" eseménykezelőn szülőnek delegáljuk a gyerek elemek eseményinek kezelését
 * @param {Node} szulo Egy HTML elem (querySelectorral kiválasztva)
 * @param {string} gyerek Egy CSS selector (stringként), ami leírja azon gyerek elemeket, akiken figyelni akarjuk az eseményt (pl. `".gomb"`)
 * @param {string} mikor Egy esemény stringként, amikor futtatni szeretnénk a kezelő függvényt (pl. `"click"`)
 * @param {(ev: Event,target: Node) => void} mit A függvény, ami fut az eseményre (paraméterként megkapja az eseményt, és a `legkozelebbiKeresettELem`-et)
 */
function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }

    szulo.addEventListener(mikor, esemenyKezelo);
}

delegal(child_container, "child css", "event", kezel)
```

## 0. Linkre kattintás SHIFT gombbal
### Lore
Egy hallgató vagy a webprogramozás tárgyon. Nagyon megtetszett a gyakorlatot felvezető videó, és eldöntötted, hogy kibővíted: ha a SHIFT gombot nyomva tartva kattintunk egy `.tiltott` linkre, akor preventeli a  `preventDefaul`T, és mégis megnyitja a linket (új ablakban?)

### Feladat
A gyakoralti videót egészítsd ki, a `.tiltott` class csak akkor ne nyisson linket kattintásra, ha a shift gomb le van nyomva.

### Mintakód
```html
<ul>
    <li><a href="http://www.elte.hu" class="tiltott">ELTE</a></li>
    <li><a href="http://www.inf.elte.hu">ELTE Informatika Kar</a></li>
    <li><a href="http://www.inf.elte.hu/mot" class="tiltott">Média- és Oktatásinformatikai Tanszék</a></li>
    <li><a href="http://bucsi.web.elte.hu/#!/webprog"/>Kurzusweboldal</li>
</ul>
```


```javascript
function kattintas(e) { 
  if (e.shiftKey) {
      if(e.target.matches('a.tiltott')){
          e.preventDefault();
      }
  }
}
```

## 1. Emergency meeting
### Lore
A gyakorlaton a gyakorlatvezető és a hallgatók kivételével több imposztor (más csoport gyakorlatvezetője, más csoport hallgatója) is feltűnhet. Ha gyanús viselkedést lát az egyik hallgató, ezt valahogy jeleznie kell a többieknek. Fejlesszünk erre egy megoldást!

### Feladat
- Az oldalon lévő gomb megnyomására jelenítsd meg az oldalon az "Emergency meeting" feliratot
- A gomb váltson kinézetet (`.disabled`)
- A gombot egy nyomás után egy ideig ne lehessen újra megnyomni!
<details>
    <summary>Gyakorlatvezetőknek: Itt érdemes beszélni a <code>SetTimeout</code> és az <code>await</code>működéséről</summary>

```javascript
    let timeout = ms => new Promise(r => setTimeout(r,ms));

    funtction foo(){
        //...
        setTimeout(bar, 2000) //calls bar() after 2 sec
        //...
    }

    async function baz(){
        //...
        timeout(2000)
        //...
    }

```



</details>

### Mintakód
```html
<style>
    button#emergency{
        color: white;
        font-size: 2em;
        font-weight: bold;
        background-color: red;
        padding: 1em;
        border-radius: 50%;
        border: 2px solid black;
        cursor: pointer;
    }
    .disabled{
        color: lightblue !important;
        background-color: gray !important;
        cursor: not-allowed !important;
    }
</style>
<button id="emergency" class="disabled">Emergency<br>meeting</button>
<button>Test</button>

```

## 2. Képességek
### Lore
Egy apró, indie játékfejlesző cég a hős-alapú aréna játékukban a hősök képességeinek aktiválását implementálja éppen. Van azonban egy karakter, amely a játék közben át tud változni, és így a képességei is megváltoznak. Oldd meg, hogy a válátást figyelembe véve mindig a megfelelő képesség süljön el!

### Feladat

- Egy-egy gombra kattintáskor jelenítsd meg a megfelelő képességet
- A Mega Gnar mező kipipálása mellett is!

### Mintakód
```html
<style>
.mini{
        color: goldenrod;
        background-color: #06203A;
        font-family: serif;
    }
.mega{
    color: palevioletred;
    background-color: darkred;
    font-family: 'Comic Sans MS';
    border: 3px solid red;
}
</style>

<input type="checkbox"> Mega Gnar? <br>
<button data-mini="Boomerang Throw" data-mega="Boulder Toss">Q</button>
<button data-mini="Hyper" data-mega="Wallop">W</button>
<button data-mini="Hop" data-mega="Crunch">E</button>
<button data-mini="Gnar!" data-mega="G N A R !">R</button>
```

