<?php
include('includes/header.php');
?>
<main>
    <div class="mainWrapper">
    <p>Add a new Course to database</p>
        <form class="forms" id="formCreate2" method="POST" action="courses.php" enctype="multipart/form-data" forum-action>
            <!--fält för formulär, hela den grå delen-->
            <fieldset id ="field2" class="field2">
                <p class="pfield pError" id="message_form"></p>
                <label for="programme">Choose programme:</label>
                <br>
                <select id="programme" name="programme">
                </select>
                <br>
                <label for="name">Course:</label><br>
                <input type="text" name="course:" id="course" class="input" placeholder="The name of the Course">
                <br>
                <label for="progression">Points:</label><br>
                <input type="text" name="points" id="points" class="input" placeholder="add points">
                <br>
                <label for="kursplan">Grade:</label><br>
                <input type="text" name="grade" id="grade" class="input" placeholder="add grade"><br>
                <label for="cars">Välj språk: (håll in ctrl för att välja flera)</label><br>
                <!--Multiple for possible to choose multiply valuus-->
                <select name="languages_out" id="languages_out" multiple>
                </select>
                <p>Finns inte språket, lägg till <a href="">nytt här</a></p>
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
<script src="js/getMethod.js"></script>
<script src="js/postMethod.js"></script>
<?php
include('includes/footer.php');
?>