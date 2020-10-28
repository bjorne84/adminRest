data.forEach(course => {
    //console.log(data);
    console.log(course.Course_ID);



    //  programmeIn = coursename.innerHTML;
    // courseIn = coursename.innerHTML;

    updateEl.innerHTML +=
        `
    <p>Update course in database</p>
    <form class="forms" id="formCreate3" method="POST" action="courses.php" enctype="multipart/form-data" forum-action>
        <!--fält för formulär, hela den grå delen-->
        <fieldset id ="fiel3" class="field2">
            <p class="pfield pError" id="message_form3"></p>
            <label for="programmeUp">Choose programme:</label>
            <br>
            <select id="programmeUp" name="programmeUp">
            </select>
            <br>
            <label for="courseUp">Course:</label><br>
            <input type="text" name="courseUp:" id="courseUp" class="input" placeholder="The name of the Course">
            <br>
            <label for="ointsUp">Points:</label><br>
            <input type="text" name="pointsUp" id="pointsUp" class="input" placeholder="add points">
            <br>
            <label for="gradueUp">Grade:</label><br>
            <input type="text" name="gradeUp" id="gradeUp" class="input" placeholder="add grade"><br>
            <label for="languages_outUp">Välj språk: (håll in ctrl för att välja flera)</label><br>
            <!--Multiple for possible to choose multiply valuus-->
            <select name="languages_outUp" id="languages_outUp" multiple>
            </select>
            <p>Finns inte språket, lägg till <a href="">nytt här</a></p>
            <div class="btn-wrapper">
                <button type="submit" name="submitPost" id="btncreateUp" class="btn btn2">Publish</button>
                <button type="reset" name="deletePost" id="btn-resetUp" class="btn btn2 btn-reset">Delete
                    field</button>
            </div>
        </fieldset>
    </form>
    `
    // Variebles from the form
    //let programmeIn = document.getElementById("programmeUp");
    let courseUp = document.getElementById("courseUp");
    let pointsUp = document.getElementById("pointsUp");
    let gradeUp = document.getElementById("gradeUp");

    /* KListarar in data i formuläret*/
    courseUp.value = course.CourseName;
    pointsUp.value = course.Points;
    gradeUp.value = course.Grade;


    // Sparar variabler med värde från formuläret
    //let programme2 = programmeUp.value;
    let course2 = courseUp.value;
    let points2 = pointsUp.value;
    let grade2 = gradeUp.value;
})