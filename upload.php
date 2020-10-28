<?php
$targetPath = "gallery/" . basename($_FILES["langImg"]["name"]);
move_uploaded_file($_FILES["langImg"]["tmp_name"], $targetPath);

if(isset($_FILES["langImg"]["name"])) {
    echo($_FILES["langImg"]["name"]);
}
