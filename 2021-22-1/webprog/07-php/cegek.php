<?php
$cegek = [
    (object)[
        'nev' => 'Webprogramozás Oktatás Kft.',
        'leiras' => 'PHP oktatás egyetemi hallgatóknak',
        'szekhely' => 'Budapest',
        'bevetel' => 'Állami fenntatás',
        'alkalmazottak' => [
            (object)[
                'nev' => 'Tamás',
                'fizetes' => 10000
            ],
            (object)[
                'nev' => 'Mihály',
                'fizetes' => 20000
            ]
        ],
        'alapitva' => 1997
    ],
    (object)[
        'nev' => 'Vector Media',
        'leiras' => 'Nikon kamerák Canon objektívekkel',
        'szekhely' => 'Érd',
        'bevetel' => 'Bankártyás fizetések',
        'alkalmazottak' => [
            (object)[
                'nev' => 'Viktor',
                'fizetes' => 15000
            ]
        ],
        'alapitva' => 1996
    ],
    (object)[
        'nev' => 'Gábor Tábor',
        'leiras' => 'Kiskorúak táboroztatása',
        'szekhely' => 'Tapolca',
        'bevetel' => 'A gyerekek ebédpénze',
        'alkalmazottak' => [
            (object)[
                'nev' => 'Gábor',
                'fizetes' => 8000
            ]
        ],
        'alapitva' => 2000
    ],
    (object)[
        'nev' => 'Fent az Auron',
        'leiras' => 'Sífelszerelés',
        'szekhely' => 'Etyek',
        'bevetel' => 'Nemzeti Síelési Tartalék',
        'alkalmazottak' => [
            (object)[
                'nev' => 'Ákos',
                'fizetes' => 11000
            ],
            (object)[
                'nev' => 'Áron',
                'fizetes' => 12000
            ],
            (object)[
                'nev' => 'Gergő',
                'fizetes' => 13000
            ]
        ],
        'alapitva' => 1999
    ]
];

function sum($s, $x){
    return $s + $x->fizetes;
}

function atlagFizu($alk){
    return array_reduce($alk, "sum", 0) / count($alk);
}
?>
<table>
    <tr>
        <th>Név</th>
        <th>Leírás</th>
        <th>Székhely</th>
        <th>Bevételi forrás</th>
        <th>Alkalmazottak adatai</th>
        <th>Átlagfizetés</th>
        <th>Cég kora</th>
    </tr>
    <?php foreach ($cegek as $c) : ?>
        <tr>
            <td><?= $c->nev ?></td>
            <td><?= $c->leiras ?></td>
            <td><?= $c->szekhely ?></td>
            <td><?= $c->bevetel ?></td>
            <td>
                <ul>
                    <?php foreach ($c->alkalmazottak as $a) : ?>
                        <li><?= $a->nev ?></li>
                    <?php endforeach ?>
                </ul>
            </td>
            <td><?= atlagFizu($c->alkalmazottak) ?></td>
            <td><?= intval(date("Y"))-$c->alapitva ?></td>
        </tr>
    <?php endforeach ?>
</table>