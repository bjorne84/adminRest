<?php
include('includes/header.php');
?>
<main>
    <div class="mainWrapper">
    <p>Add a new Course to database</p>
    <form class="forms" id="formCreate" method="POST" action="index.html" enctype="multipart/form-data" forum-action>
        <!--fält för formulär, hela den grå delen-->
        <fieldset id="field">
            <p class="pfield pError" id="message_form"></p>
            <label for="name">N:</label><br>
            <input type="text" name="name" id="name" class="input" placeholder="The name of the Course">
            <br>
            <label for="code">Code:</label><br>
            <input type="text" name="code" id="code" class="input" placeholder="The code of the course, 6 signs">
            <br>
            <label for="progression">Course:</label><br>
            <input type="text" name="progression" id="progression" class="input" placeholder="Pagenation, one letter">
            <br>
            <label for="kursplan">Course syllabus:</label><br>
            <input type="text" name="kursplan" id="kursplan" class="input" placeholder="Web-link to the course syllabus"><br>
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
<?php
include('includes/footer.php');
?>