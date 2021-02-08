<?php



if(true){
    $hello = "Bucsi";
}

$tomb = ["String", 123.5, true];

for($i=0; $i<3; $i++){
    echo "A tömb " . $i . ".-ik értéke: " . $tomb[$i] . "<br>";
}

echo "<hr>" . $tomb . "<br><br>";

var_dump($tomb);

$asszociativTomb = [
    "kulcs" => "ertek",

];

//var_dump($asszociativTomb);
echo "<hr>" . $asszociativTomb["kulcs"];

$obj = (object)[
    "kulcs2" => "ertek2"
];

//var_dump($obj);
echo "<hr>" . $obj -> kulcs2;   

$emberek = [
    [
        "nev" => "Áron",
        "kor" => 15
    ],
    [
        "nev" => "Eszter",
        "kor" => 18
    ],
    [
        "nev" => "Máté",
        "kor" => 20
    ]
]

?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?= "Hello " . $hello ?></h1>

    <table>
        <tr><th>Sorszám</th><th>Név</th><th>Életkor</th></tr>
        
        <?php for($i=0; $i < count($emberek); $i++): ?>
            <tr>
                <td> <?= $i ?> </td>
                <td> <?= $emberek[$i]["nev"] ?> </td>
                <td>
                    <?php if($emberek[$i]["kor"] >= 18): ?>
                        <?= $emberek[$i]["kor"] ?>
                    <?php else: ?>
                        kiskorú
                    <?php endif ?>
                </td>
            </tr>
        <?php endfor ?>
    </table>
    <hr>
    <table>
        <tr><th>Sorszám</th><th>Név</th><th>Életkor</th></tr>
        
        <?php foreach($emberek as $i => $ember): ?>
            <tr>
                <td> <?= $i ?> </td>
                <td> <?= $ember["nev"] ?> </td>
                <td> <?= $ember["kor"] >= 18 ? $ember["kor"] : "kiskoru" ?> </td>
            </tr>
        <?php endforeach ?>
    </table>
</body>
</html>