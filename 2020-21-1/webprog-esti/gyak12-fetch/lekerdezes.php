<?php

if(isset($_GET["szam"])){
    sleep(2);
    echo(intval($_GET["szam"])*2);
}else if(isset($_POST["negyzet"])){
    sleep(2);
    echo(intval($_POST["negyzet"])*intval($_POST["negyzet"]));

}else{
    $adat = [
        [
            "nev"=>"Javascript évfolyam-zh",
            "jegy"=>5
        ],
        [
            "nev"=>"PHP évfolyam-zh",
            "jegy"=>4
        ]

    ];

    echo(json_encode($adat));

}

?>