<?php
include('includes/header.php');
?>
<main>
    <div class="mainWrapper">
    <h3 id="formHeading_lang">Add a new languages or technique to database</h3>
        <form class="forms" id="formLang" method="POST" action="langauges.php" enctype="multipart/form-data" forum-action>
            <!--fält för formulär, hela den grå delen-->
            <fieldset id ="field_lang" class="field2">
                <p class="pfield pError" id="message_form_lang"></p>
                <input type="hidden" id="hidden_lang" name="hidden_lang" value="new">
                <label for="language_lang">Language or technique </label><br>
                <input type="text" name="language_lang" id="language_lang" class="input" placeholder="The name of the language">
                <br>
                <label for="langImg">Image:</label><br>
                <input type="file" id="langImg" name="langImg" accept="image/png, image/jpeg, image/gif, image/webp"><br>
                <!--<button type = "button" class="btn3" onclick = "addLanguages()">Add languages</button>-->
                <div class="btn-wrapper">
                    <button type="submit" name="submitPost" id="btncreateLang" class="btn btn2">Publish</button>
                    <button type="reset" name="deletePost" id="btn-resetLang" class="btn btn2 btn-reset">Delete
                        field</button>
                </div>
            </fieldset>
        </form>
    </div>
    <section class="sectionPadding">
        <h1>Språk:</h1>
        <!--Inside here all courses are placed-->
        <div id="langWrapper">
        </div>
    </section>
</main>
<script src="js/languages.js"></script>
<?php
include('includes/footer.php');
?>