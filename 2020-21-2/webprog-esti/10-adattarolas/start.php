<?php

require_once("lib/storage.php");

$szavazatok = new Storage(new JsonIO("data/votes.json"));
