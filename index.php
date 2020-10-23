<?php
include('includes/header.php');
?>
<?php

/* If the login-form has been sent in, 
then instance new objekt of the LogInController class
and start method logInUser()*/
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $logInCheck = new LogInController;
    $log = $logInCheck->logInUser();
    //var_dump($log);
    //var_dump($log);
    }
?>

<main>
<?php //Check if user is logged in or not and displays message
if (isset($_SESSION['username'])) {
    echo "<h1 class='h1-left'>Du är inloggad "?><?php echo $_SESSION['username']?><?php echo "</h1>";
} else {
    echo "<h1 class='h1-left'>Logga in!</h1>";
}?>
    <form class="forms" id="formCreate" <?php echo $_SERVER['PHP_SELF']; ?> method="POST">
        <fieldset id="field">
            <p class="pfield"></p>
            <?php if(isset($_POST['submit-btn'])) {
                                if(!$log == "") {
                                    ?><div class="errorDiv">
                                    <p class="errorLight"><?php echo $log;?></p>   
                         </div><?php
                                }
                            }
                            ?>
            <label for="userName">Användarnamn:</label><br>
            <input type="text" name="userName" id="userName" class="input" ><br>
            <label for="password">Lösenord:</label><br>
            <input type="text" name="password" id="password" class="input" ><br>
            <button type="submit" id="btn-create" name="submit-btn" class="btn">Logga in</button>
        </fieldset>
    </form>
</main>
<?php
include('includes/footer.php');
?>