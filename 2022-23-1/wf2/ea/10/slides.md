---
title: Webprogramozás - Szerveroldali webprogramozás
---

::: title
Web-fejlesztés 2.
:::

### Szerveroldali webprogramozás

**Visnovitz Márton**  
egyetemi tanársegéd  
visnovitz.marton@inf.elte.hu

**@elte-fi/courses-tt-webprog**

------

## Szerveroldali dinamikus webprogramozás {data-state="new-section"}

------

## Világháló

A világháló (angolul **World Wide Web**, röviden **web**) egy olyan információs rendszer, amelyben 

- **dokumentumokat** és más erőforrásokat 
- **egységes címmel** azonosítunk, 
- ezeket **hiperhivatkozásokkal** kötjük össze, 
- elérhetőségüket **internetre kötött szerverek** segítségével biztosítjuk, 
- megtekintésük pedig speciális kliensprogramokban, **böngészőkben** történik.

------

## Web komponensei, szabványai

- [HTML](https://www.w3.org/html/) (dokumentumok, hiperhivatkozások)
- [URL](https://www.w3.org/TR/url/) (erőforrások egységes címe)
- webszerver (erőforrások elérhetővé tétele)
- webkliens, webböngésző (erőforrások megjelenítése)
- [HTTP](https://tools.ietf.org/html/rfc7230) (kliens-szerver kommunikáció)

[Webes szabványok](https://www.w3.org/TR/)

------

## HTTP

<div class="columns">
<div class="column" width="70%">
**HTTP protokoll**

- [x] **Web**: kliens és kiszolgáló kommunikációja  
- [x] **HTTP**: a kommunikáció protokollja
- [x] Kliens kérést intéz a szervernek
- [x] Szerver válaszol
- [x] A kliens feldolgozza a választ

</div>
<div class="column" width="30%"><img src="https://bucsi.web.elte.hu/assets/images/architecture/server-client.png" alt="Kliens-szerver"></div>
</div>

------

## Kliensoldali webprogramozás

:::::::::::::::::::: {.columns}
::: {.column style="width: 70%"}
**Egy komponens**

- Kliens-szerver architektúra
- Statikus/dinamikus kliens
- Nem érdekes a szerver, csak az onnan érkező tartalom
- Nem is kell szerver, dolgozhatunk lokálisan
- Programozás a böngészőben
- JavaScript, DOM, stb.
:::

::: {.column style="width: 30%"}
![](https://bucsi.web.elte.hu/assets/images/architecture/client.png)
:::
::::::::::::::::::::

------

## Kliens-szerver architektúra

:::::::::::::::::::: {.columns}
::: {.column style="width: 70%"}
Több komponens

- **Szerver**
- Kliens
- HTTP (kommunikáció)

1. Kérés (request)
2. Válasz (response)
:::

::: {.column style="width: 30%"}
![](https://bucsi.web.elte.hu/assets/images/architecture/server-client.png)
:::
::::::::::::::::::::

------

## Kliens-szerver architektúra

Térben és időben elválhatnak

![](https://bucsi.web.elte.hu/assets/images/architecture/sync-network.png)

------

## Statikus szerveroldali tartalom

:::::::::::::::::::: {.columns}
::: {.column style="width: 70%"}
Kérés pillanatában a szerveren megtalálható az a tartalom, amely leküldésre kerül a válaszban

- Fájlkiszolgálás
- Kiterjesztés alapján
  - `.html`
  - `.jpg`, `.png`, `.gif`
  - `.css`
  - `.js`
:::

::: {.column style="width: 30%"}
![](https://bucsi.web.elte.hu/assets/images/architecture/server-client.png)
:::
::::::::::::::::::::

------

## Dinamikus szerveroldali tartalom

A leküldendő tartalmat egy program állítja elő.

:::::::::::::::::::: {.columns}
::: {.column style="width: 40%"}
![](https://bucsi.web.elte.hu/assets/images/architecture/program-client.png)
:::
::::::::::::::::::::

------

## Architektúrák

![](https://bucsi.web.elte.hu/assets/images/architecture/architectures.png)

------

## Szerveroldali webprogramozás

:::::::::::::::::::: {.columns}
::: {.column style="width: 50%"}
- Nem egyszerű fájlkiszolgálás
- Indítás
  + `cgi-bin` könyvtár
  + kiterjesztés (pl. `.cgi`, `.php`)
- Program
  + **bármilyen**
  + bináris (C++, Pascal)
  + script (PHP, Python, Ruby)
:::

::: {.column style="width: 50%"}
![](https://bucsi.web.elte.hu/assets/images/architecture/web-server-client.png)
:::
::::::::::::::::::::

------

## Szerveroldali webprogramozás

- Program célja, kimenete
  - HTML generálás (általában)
  - Tartalom generálás (általánosan)
  - HTTP protokoll betartásával
- Program helyességét a generált tartalom, a megkapott oldal forrása alapján ellenőrizhetjük.

------

## URL, HTTP, CGI {data-state="new-section"}

------

## URL

![](https://doepud.co.uk/images/blogs/complex_url.png)

[URL az MDN-en](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

------

## HTTP protokoll

- Kérés-válasz alapú protokoll a kliens és szerver között
- Mindig a kliens kezdeményez
- Kliens: kérés
  - kérést küld a 80-as/443-as TCP portra
  - jellemzően böngésző (hivatkozások, formok)
- Szerver: válasz
- TCP/IP réteg feletti protokoll
- [Szabvány](http://tools.ietf.org/html/rfc2616)

------

## HTTP üzenetstruktúra

:::::: {.columns}
::: {.column style="width:40%"}
``` {style="font-size: 0.4em"}
POST / HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (...)
Accept: text/html
Accept-Language: en-Us
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Type: multipart/form-data
Content-Length: 345
✒>                <✒
-12656974
(more data... )
```
:::
::: {.column style="width:20%"}
``` {style="font-size: 0.4em; text-align: center"}
start-line




headers



blank
body
```
:::
::: {.column style="width:40%"}
``` {style="font-size: 0.4em"}
HTTP/1.1 403 Forbidden
Server: Apache
Content-Type: text/html;charset=utf-8
Date: Wed, 10 Aug 2016 09:23:25 GMT
Keep-Alive: timeout=5, max=1000
Connection: Keep-Alive
Age: 3465
X-Cache-Info: caching
Content-Length: 220
✒>                <✒
<!DOCTYPE html>
(more data...)
```
:::
::::::

[HTTP áttekintése](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview),
[HTTP üzenetstruktúra](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages),
[HTTP referencia](https://developer.mozilla.org/en-US/docs/Web/HTTP#Reference)

------

## HTTP kérés

```
METÓDUS ERŐFORRÁS VERZIÓ
FEJLÉC: ÉRTÉK
FEJLÉC: ÉRTÉK
FEJLÉC: ÉRTÉK

ÜZENETTEST (opcionális)
```

------

## HTTP metódusok

- `GET`: Megadott erőforrás letöltése
- `POST`: Feldolgozandó adat felküldése
- `DELETE`: Törli a megadott erőforrást
- `PATCH`: Adott erőforrás javítása, frissízsée
- `HEAD`: Ld. `GET`, de csak a válasz fejléceket kéri le
- `PUT`: Feltölti a megadott erőforrást
- `TRACE`: Visszaküldi a kapott kérést
- `OPTIONS`: A szerver által támogatott HTTP metódusok listája
- `CONNECT`: Kérést transzparens tunnellé alakítja (SSL)

------

## HTTP kérés példa

```txt
GET /index.html HTTP/1.1
Host: webprogramozas.inf.elte.hu

```
```txt
GET / HTTP/1.1
Host: webprogramozas.inf.elte.hu
User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:19.0) Gecko/20100101 Firefox/19.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: hu-hu,hu;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate
Connection: keep-alive

```

------

## HTTP válasz

```txt
VERZIÓ STÁTUSZKÓD INDOKLÁS
FEJLÉC: ÉRTÉK
FEJLÉC: ÉRTÉK
FEJLÉC: ÉRTÉK

ÜZENETTEST (opcionális)
```

------

## HTTP státuszkódok

- `1xx`: Informatív (kérés megkapva)
- `2xx`: Siker (kérés megérkezett, elfogadva)
  - 200 OK
- `3xx`: Átirányítás (további műveletre van szükség)
- `4xx`: Kliens hiba (kérés hibás, nem teljesíthető)
  - 403 Forbidden
  - 404 Not found
- `5xx`: Szerver hiba (nem tudja teljesíteni a kérést)
  - 500 Internal Server Error

------

## HTTP válasz példa

```txt
HTTP/1.1 200 OK
Date: Wed, 03 Apr 2013 07:11:56 GMT
Server: Apache/2.2.10 (Linux/SUSE)
Last-Modified: Wed, 20 Feb 2013 08:39:44 GMT
ETag: "fe8438-6d6-4d623e65e9400"
Accept-Ranges: bytes
Content-Length: 1750
Content-Type: text/html

<!DOCTYPE html>
<html>
	...
</html>
```

------

## HTTP eszközök

Webfejlesztési eszköztár (`F12`) &rarr; Hálózat (Network) fül

------

## Common Gateway Interface (CGI)

Azt határozza meg, hogy egy webszerver hogyan *indíthat* el egy programot és milyen módon cserél *adatot* vele.

:::::::::::::::::::: {.columns}
::: {.column style="width: 60%"}
- Indítás: program futtatása
- Adatok 
  + környezeti változók
  + standard I/O
- **Program eredménye**
  + standard kimeneten
:::

::: {.column style="width: 40%"}
![](https://bucsi.web.elte.hu/assets/images/architecture/web-server-client.png)
:::
::::::::::::::::::::

------

## Példa -- C++

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout << "Content-Type: text/html" << endl;
    cout << endl;

    cout << "<!doctype html>" << endl;
    cout << "<html>" << endl;
    cout << "    <head>" << endl;
    cout << "        <meta charset=\"utf-8\">" << endl;
    cout << "        <title></title>" << endl;
    cout << "    </head>" << endl;
    cout << "    <body>" << endl;
    cout << "        <p>Hello vilag!</p>" << endl;
    cout << "    </body>" << endl;
    cout << "</html>" << endl;

    return 0;
}
```

------

## Példa -- C++

<div class="columns">
<div class="column" style="width: 50%">
- Parancssorból futtatva

```html
Content-Type: text/html

<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <p>Hello vilag!</p>
    </body>
</html>
```
</div>

<div class="column" style="width: 50%">
- Böngészőből futtatva

<div class="example" style="margin-top: 20px">
  <p>Hello vilag!</p>
</div>
</div>
</div>

------

## Példa -- C++

```cpp
int main()
{
    cout << "Content-Type: text/html" << endl;
    cout << endl;

    cout << "<!doctype html>" << endl;
    cout << "<html>" << endl;
    cout << "    <head>" << endl;
    cout << "        <meta charset=\"utf-8\">" << endl;
    cout << "        <title></title>" << endl;
    cout << "    </head>" << endl;
    cout << "    <body>" << endl;

    for (int i = 1; i <= 5; i++) {
        cout << "        <p>Hello vilag!</p>" << endl;
    }

    cout << "    </body>" << endl;
    cout << "</html>" << endl;
    return 0;
}
```

------

## Példa -- C++

:::::::::::::::::::: {.columns}
::: {.column style="width: 50%"}
```html
Content-Type: text/html

<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <p>Hello vilag!</p>
        <p>Hello vilag!</p>
        <p>Hello vilag!</p>
        <p>Hello vilag!</p>
        <p>Hello vilag!</p>
    </body>
</html>
```
:::

::: {.column style="width: 50%"}
<div class="example" style="margin-top: 20px">
  <p>Hello vilag!</p>
  <p>Hello vilag!</p>
  <p>Hello vilag!</p>
  <p>Hello vilag!</p>
  <p>Hello vilag!</p>
</div>
:::
::::::::::::::::::::

------

## CGI


![](https://bucsi.web.elte.hu/assets/images/architecture/web-server-client.png)

------

## PHP

![](https://bucsi.web.elte.hu/assets/images/architecture/web-server-php.png)

------

## Node.js


![](https://bucsi.web.elte.hu/assets/images/architecture/nodejs-client.png)

------

## Összefoglalás {data-state="topic"}

- [x] Kliens-szerver kommunikáció
- [x] Cél: HTML kód előállítása
- [x] HTTP, CGI
