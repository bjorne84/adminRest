<?php
class UserModel extends Dbc
{
    /* Log the user in, check if password matches and returns array of userdata
    takes username and password as inputs- arguments*/
    protected function logIn($user, $password)
    {
        $sql = "SELECT * FROM users WHERE Username  = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$user]);

        $result = $stmt->fetch();
        //Grabs the hashed password from the array
        $hashedpass = $result["Pass"];

        /* check if the passwords match*/
        if (password_verify($password, $hashedpass)) {
            // Returns the whole array with user-data
            return true;
        } else {
            return false;
        }
    }

    public function setUserSession($user) {
        // session_destroy();
         session_start();
         $_SESSION['username'] = $user;
         header('Location: index.php?login=success');
     }
}
