<?php
class LogInController extends UserModel
{

    public function logInUser()
    {

        //Create empty array
        $data = [
            'userName' => '',
            'password' => '',
            'message' => ''
        ];

        /* POST-data get sanitizes from html/php/script-tags*/
        $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

        $data = [
            'userName' => $_POST['userName'],
            'password' => $_POST['password'],
        ];

        /* cData = cleanData, trim() function, delete whitespace*/
        $cData = array_map('trim', $data);

        /* If either of required fields are empty, error message is displayed. */
        if (empty($cData['userName']) || empty($cData['password'])) {
            $errorMsg = 'Användarnamnet eller lösenordet var fel försök igen!';
            return $errorMsg;
            exit();
        }

        // Start method to send in data to database and check if the password match
        $userLoggedIn = $this->logIn($cData['userName'], $cData['password']);

        // if user is logged in start user session.
        if ($userLoggedIn) {
            /* Sends in username to use in session */
            $this->setUserSession($cData['userName']);
        } else {
            $errorMsg = 'Användarnamnet eller lösenordet var fel försök igen!';
            return $errorMsg;
            exit();
        }
    }

    public function checkErrorMsg($sData)
    {
        if (isset($cData['message'])) {
            return true;
        } else {
            return false;
        }
    }
}
