<?php

echo('Hello world!' . "<br>");

$variable = 123;

if(true){
    echo("true" . "<br>");
}

for($i=0; $i<3; $i++){
    echo("Looping:" . $i . "<br>");
}

$fruits = ["apple", "pear", "apricot", "grape", true, 132]; //Array-like
echo("<br>The 4th element is: " . $fruits[3] . "<br>");

var_dump($fruits);
echo("<br>");
//foreach iterable as variable
foreach($fruits as $fruit){
    echo("The next fruit is " . $fruit . "<br>");
}
echo("<hr>");

$fruitColors = [    //JS object, key-value pair, map
    "apple" => "red",
    "pear" => "yellow",
    "apricot" => "orange",
    "grape" => "green",
    true => 123
];

var_dump($fruitColors);
echo("<br>The 4th color is: " . $fruitColors["grape"] . "<br>");
//foreach iterable as variable - ONLY VALUES FOR ASS.ARRAY
foreach($fruitColors as $var){
    echo("the next item in the associative array is " . $var . "<br>");
}
//if you want to get keys as well
foreach($fruitColors as $key => $value){
    echo("the next item in the associative array is " . $key . ":" . $value . "<br>");
}


$people = [
    [
        "name" => "Aron",
        "age" => 15
    ],
    [
        "name" => "Eszter",
        "age" => 18
    ],
    [
        "name" => "Mate",
        "age" => 20
    ]
];
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    <h1>Hello, HTML world!</h1>
    <?php echo($variable)?>
    <?= $variable ?>
    <?= "<br>Inline php" ?>
    <hr>
    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
        <?php foreach($people as $p): ?>
            <tr>
                <td><?= $p["name"] ?></td>
                <td><?= $p["age"] >= 18 ? $p["age"] : "Underage" ?></td>
            </tr>
        <?php endforeach ?>
    </table>
</body>
</html>







