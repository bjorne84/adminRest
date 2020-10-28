<?php
include('includes/header.php');
?>
<main>
    <div class="mainWrapper">
        <h3 id="formHeading_work">Add a new work experience to database</h3>
        <form class="forms" id="formCreate_work" method="POST" action="work.php" enctype="multipart/form-data" forum-action>
            <!--fält för formulär, hela den grå delen-->
            <fieldset id="field_work" class="field2">
                <p class="pfield pError" id="message_form_work"></p>
                <input type="hidden" id="hidden_work" name="hidden" value="new">
                <br>
                <label for="workplace_name">Workplace:</label><br>
                <input type="text" name="workplace_name" id="workplace_name" class="input" placeholder="The name of the workplace">
                <br>
                <label for="titel_work">Titel:</label><br>
                <input type="text" name="titel_work" id="titel_work" class="input" placeholder="add your titel">
                <br>
                <label for="description_work">Description:</label><br>
                <textarea name="description_work" id="description_work" class="textArea" cols="30" rows="4" placeholder="Describe the work"></textarea>
                <br>
                <label for="startdate_work">Start date:</label>
                <input type="date" id="startdate_work" name="startdate_work" value="2018-07-22" min="2000-01-01" max="2021-12-31">
                <label for="enddate_work">End date:</label>
                <input type="date" id="enddate_work" name="enddate_work" value="2018-07-22" max="2021-12-31">
                <div class="btn-wrapper">
                    <button type="submit" name="submitPost" id="btncreate_work" class="btn btn2">Publish</button>
                    <button type="reset" name="deletePost" id="btn-reset_work" class="btn btn2 btn-reset">Delete
                        field</button>
                </div>
            </fieldset>
        </form>
    </div>
    <section class="sectionPadding">
        <h1>CV:</h1>
        <!--Inside here all courses are placed-->
        <div id="cvWrapper">
        </div>
    </section>
</main>
<script src="js/work.js"></script>
<?php
include('includes/footer.php');
?>