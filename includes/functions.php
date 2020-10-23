<?php
function logOut() {
    session_start();
    unset($_SESSION['user_id']);
    unset($_SESSION['username']);
    unset($_SESSION['email']);
    session_destroy();
    header('location: index.php?login=notloggedin');
    exit();
}