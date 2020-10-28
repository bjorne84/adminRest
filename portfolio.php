<?php
include('includes/header.php');
?>
<main>
    <div class="mainWrapper">
        <h3 id="formHeading_port">Add a project in portfolio</h3>
        <form class="forms" id="formCreate_port" method="POST" action="portfolio.php" enctype="multipart/form-data" forum-action>
            <!--fält för formulär, hela den grå delen-->
            <fieldset id="field_port" class="field2">
                <p class="pfield pError" id="message_form_port"></p>
                <input type="hidden" id="hidden_port" name="hidden_port" value="new">
                <br>
                <label for="title_port">Project title:</label><br>
                <input type="text" name="title_port" id="title_port" class="input" placeholder="Title">
                <br>
                <label for="url_port">URL:</label><br>
                <input type="text" name="url_port" id="url_port" class="input" placeholder="add url">
                <br>
                <label for="image_port">Image:</label><br>
                <input type="file" id="image_port" name="image_port" accept="image/png, image/jpeg, image/gif, image/webp"><br>
                <br>
                <label for="description_port">Description:</label><br>
                <textarea name="description_port" id="description_port" class="textArea" cols="30" rows="4" placeholder="Describe the project"></textarea>
                <label for="lang_port">Välj språk: (håll in ctrl för att välja flera)</label><br>
                <!--Multiple for possible to choose multiply valuus-->
                <select name="lang_port" id="lang_port" multiple>
                </select><br>
                <p>Finns inte språket, lägg till <a href="webb01_projekt/adminRest/langauges.php">nytt här</a></p>
                <div class="btn-wrapper">
                    <button type="submit" name="submitPost" id="btncreate_port" class="btn btn2">Publish</button>
                    <button type="reset" name="deletePost" id="btn-reset_port" class="btn btn2 btn-reset">Delete
                        field</button>
                </div>
            </fieldset>
        </form>
    </div>
    <section class="sectionPadding">
        <h1>Portfolio:</h1>
        <!--Inside here all projects in portfolio are placed-->
        <div id="portWrapper">
        </div>
    </section>
</main>
<script src="js/portfolio.js"></script>
<?php
include('includes/footer.php');
?>