<?php

require_once("lib/storage.php");

$notes = new Storage(new JsonIO("data/notes.json"));