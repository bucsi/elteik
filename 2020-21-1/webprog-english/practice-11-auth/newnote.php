<?php

require_once("_start.php");


if(count($_POST)>0){
    if(verify_post("note-title", "note-text")){
        $record = $storage -> findAll(["userID" => $_SESSION["user-id"]]);
        $dataID = key($record);
        $data = $record[$dataID];
        array_push($data["notes"], ["title" => $_POST["note-title"], "text" => $_POST["note-text"]]);
        $storage -> update($dataID, $data);

        header("Location: main.php");
    }
}