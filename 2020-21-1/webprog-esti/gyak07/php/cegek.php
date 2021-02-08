<?php
$cegek = [
    [
        'nev' => 'Webprogramozás Oktatás Kft.',
        'leiras' => 'PHP oktatás egyetemi hallgatóknak',
        'szekhely' => 'Budapest',
        'bevetel' => 'Állami fenntatás',
        'alkalmazottak' => [
            [
                'nev' => 'Tamás',
                'fizetes' => 10000
            ],
            [
                'nev' => 'Mihály',
                'fizetes' => 20000
            ]
        ],
        'alapitva' => 1997
    ],
    [
        'nev' => 'Vector Media',
        'leiras' => 'Nikon kamerák Canon objektívekkel',
        'szekhely' => 'Érd',
        'bevetel' => 'Bankártyás fizetések',
        'alkalmazottak' => [
            [
                'nev' => 'Viktor',
                'fizetes' => 15000
            ]
        ],
        'alapitva' => 1996
    ],
    [
        'nev' => 'Gábor Tábor',
        'leiras' => 'Kiskorúak táboroztatása',
        'szekhely' => 'Tapolca',
        'bevetel' => 'A gyerekek ebédpénze',
        'alkalmazottak' => [
            [
                'nev' => 'Gábor',
                'fizetes' => 8000
            ]
        ],
        'alapitva' => 2000
    ],
    [
        'nev' => 'Fent az Auron',
        'leiras' => 'Sífelszerelés',
        'szekhely' => 'Etyek',
        'bevetel' => 'Nemzeti Síelési Tartalék',
        'alkalmazottak' => [
            [
                'nev' => 'Ákos',
                'fizetes' => 11000
            ],
            [
                'nev' => 'Áron',
                'fizetes' => 12000
            ],
            [
                'nev' => 'Gergő',
                'fizetes' => 13000
            ]
        ],
        'alapitva' => 1999
    ]
];


function atlagFizu($dolgozok){
    $sum = 0;
    for($i=0; $i<count($dolgozok); $i++){
        $sum += $dolgozok[$i]["fizetes"];
    }

    return $sum / count($dolgozok);
}

?>

<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cégek</title>
</head>

<body>
    <table>
    <tr>
        <th>Cég neve</th>
        <th>Cég leírása</th>
        <th>Cég székhelye</th>
        <th>Cég legnagyobb bveételi forrása</th>
        <th>Cég alkalmazottai</th>
        <th>Dolgozók átlagfizetése</th>
        <th>Cég kora</th>
    </tr>

    <?php foreach ($cegek as $ceg): ?>
        <tr>
        <td> <?=$ceg['nev']?> </td>
        <td> <?=$ceg['leiras']?> </td>
        <td> <?=$ceg['szekhely']?> </td>
        <td> <?=$ceg['bevetel']?> </td>
        <td>
            <ul>
                <?php foreach($ceg["alkalmazottak"] as $dolgozo): ?>
                    <li> <?= $dolgozo["nev"] . " (" . $dolgozo["fizetes"] . ")" ?> </li>
                <?php endforeach ?>
            </ul>
        </td>
        <td> <?= atlagFizu($ceg["alkalmazottak"]) ?></td>
        <td> <?= intval(date('Y')) - $ceg["alapitva"] ?></td>
        </tr>

    <?php endforeach ?>

    </table>
</body>

</html>