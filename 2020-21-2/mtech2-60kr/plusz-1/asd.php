<?php

if (isset($_GET["lemond"]) && isset($_GET["id"])) {
    echo ($_GET["id"] . " film lemondása sikeres.");
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table>
        <tr>
            <td>Filmcím 1</td>
            <td><button data-id="1">lemond</button></td>
        </tr>
        <tr>
            <td>Filmcím 2</td>
            <td><button data-id="2">lemond</button></td>
        </tr>
    </table>
</body>
<script>
    document.querySelectorAll("button").forEach(btn => btn.addEventListener("click", (e) => {
        let baseURL = window.location.href.split(".php")[0] // ez itt ["http://webprogramozas.inf.elte.hu/hallgatok/dzhbcx/github/2020-21-2/mtech2-60kr/plusz-1/asd", "?lemond=true&id=1"] lenne
        if (window.confirm(`Biztosan lemondod az ${e.target.dataset.id} filmet?`)) {

            window.location.href = `${baseURL}.php?lemond=true&id=${e.target.dataset.id}`
        }
    }))
</script>

</html>