<?php
include('includes/header.php');
?>
<main>
    <div class="mainWrapper">
    <h3 id="formHeading">Add a new Course to database</h3>
        <form class="forms" id="formCreate2" method="POST" action="courses.php" enctype="multipart/form-data" forum-action>
            <!--fält för formulär, hela den grå delen-->
            <fieldset id ="field2" class="field2">
                <p class="pfield pError" id="message_form"></p>
                <input type="hidden" id="hidden" name="hidden" value="new">
                <label for="programme">Choose programme:</label>
                <br>
                <select id="programme" name="programme">
                </select>
                <br>
                <label for="course">Course:</label><br>
                <input type="text" name="course:" id="course" class="input" placeholder="The name of the Course">
                <br>
                <label for="points">Points:</label><br>
                <input type="text" name="points" id="points" class="input" placeholder="add points">
                <br>
                <label for="grade">Grade:</label><br>
                <input type="text" name="grade" id="grade" class="input" placeholder="add grade"><br>
                <label for="languages_out">Välj språk: (håll in ctrl för att välja flera)</label><br>
                <!--Multiple for possible to choose multiply valuus-->
                <select name="languages_out" id="languages_out" multiple>
                </select><br>
                <!--<button type = "button" class="btn3" onclick = "addLanguages()">Add languages</button>-->
                <p>Finns inte språket, lägg till <a href="webb01_projekt/adminRest/langauges.php">nytt här</a></p>
                <div class="btn-wrapper">
                    <button type="submit" name="submitPost" id="btncreate" class="btn btn2">Publish</button>
                    <button type="reset" name="deletePost" id="btn-reset" class="btn btn2 btn-reset">Delete
                        field</button>
                </div>
            </fieldset>
        </form>
    </div>
    <section class="sectionPadding">
        <h1>Utbildningar:</h1>
        <!--Inside here all courses are placed-->
        <div id="courseWrapper">
        </div>
    </section>
</main>
<script src="js/courses.js"></script>
<?php
include('includes/footer.php');
?>