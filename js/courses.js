// Element för att läsa ut alla kurser, uppdatera och radera 
let courseEl = document.getElementById('courseWrapper');
// element för att välja program/utbildning
let programmeEl = document.getElementById('programme');
let languages_outEl = document.getElementById('languages_out');


// Variebles from the form
let programmeIn = document.getElementById("programme");
let courseIn = document.getElementById("course");
let pointsIn = document.getElementById("points");
let gradeIn = document.getElementById("grade");

// Element for att lägga till en ny kurs, i översta formuläret
let formCreateEl = document.getElementById('formCreate2');

// Händelselyssnare, när sidan har laddat klart
window.addEventListener('load', getCourse);
window.addEventListener('load', getEducationToSelect);
window.addEventListener('load', getAllLanguages);

//Händelselyssnare för formuläret, skapa ny kurs
//formCreate.addEventListener('submit', createCourse());
formCreateEl.addEventListener('submit', (e) => {
    e.preventDefault(); // Förhindrar att sidan laddas om
    createCourse();
});


// ***** Funktioner ************
// Hämtar kurser
function getCourse() {
    // Tom element på innehåll
    //courseEl.innerHTML = '';
    // Get data over courses and education from this url
    fetch('https://webb01.se/restapi/?table=coursesand')
        .then(response => response.json()
            .then(data => {
                data.forEach(course => {
                    console.log(course);
                    courseEl.innerHTML +=
                        `<div class="getcourse">
                            <ul class="ul">
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Lärosäte:</span><span class="outputSpanCourse">${course.School}</span></div></li>
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Program/utbilding:</span><span class="outputSpanCourse">${course.Programme}</span></div></li>
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Kurs:</span><span class="outputSpanCourse">${course.CourseName}</span></div></li>
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Poäng:</span><span class="outputSpanCourse">${course.Points}</span></div></li>
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Betyg:</span><span class="outputSpanCourse">${course.Grade}</span></div></li>
                            </ul>
                            <div class="btn-wrapper btn_wrapper2">
                                <button id="btn_up_${course.Course_ID}" class="btn btn2" onClick="startUpdateCourse(${course.Course_ID})">Update</button>
                                <button id="btn_del_${course.Course_ID}" class="btn btn2 btn-reset" onClick="deleteCourse(${course.Course_ID})">Delete</button>
                            </div>
                        </div>`
                   // let lastli = getElementById(`lastli${course.Course_ID}`);
                })
            })
        )
}


/* This data is used in the form */
function getEducationToSelect() {
    // Get data over education from this url
    fetch('https://webb01.se/restapi/?table=education')
        .then(response => response.json()
            .then(data => {
                data.forEach(education => {
                    //console.log(education);
                    // info insereted in form select, as dropdown
                    programmeEl.innerHTML +=
                        `<option value="${education.Education_ID}">${education.Programme}</option>
                        `
                })
            })
        )
}


// Function to get all langueages
function getAllLanguages() {
    // Get data over education from this url
    fetch('https://webb01.se/restapi/?table=language')
        .then(response => response.json()
            .then(data => {
                data.forEach(language => {
                    console.log(language);
                    // info insereted in form select, as dropdown
                    languages_outEl.innerHTML +=
                        `<option value="${language.Language_ID}">${language.Language}</option>
                    `
                })
            })
        )
}




// Function to get all languages for a specific course
function getLanguagesById(id) {
    // Get data over languages 
    fetch(`https://webb01.se/restapi/?table=courseslang&id=${id}`)
        .then(response => response.json()
            .then(data => {
                data.forEach(lang => {
                    //console.log(education);
                    // info insereted in form select, as dropdown
                    programmeEl.innerHTML +=
                        `<option value="${lang.Language}<">${education.Programme}</option>
                    `
                })
            })
        )
}



/* ******************************************
********* POST create courses ***************
******************************************** */
function createCourse() {
    // Sparar variabler med värde från formuläret
    let programme = programmeIn.value;
    let course = courseIn.value;
    let points = pointsIn.value;
    let grade = gradeIn.value;
    // Sparar ner det som ett objekt som sedan görs om till JSON-format
    let courseObj = {
        "Table": "courses",
        "Indata": {
            "Education_ID": programme,
            "CourseName": course,
            "Points": points,
            "Grade": grade
        }
    }

    //let json = JSON.stringify(courseObj);
    //console.log(json);
    //Skapar fetch-anrop
    fetch('https://webb01.se/restapi', {
        method: 'POST',
        body: JSON.stringify(courseObj),
    })
        //Vi kollar responsen, att anropet lyckats
        .then(response => response.json())
        .then(data => {
            // message
            let message = data.message;
            document.getElementById("message_form").innerHTML = message;
            getCourse();
            document.getElementById("formCreate2").reset();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}

/* ******************************************
********* DELETE Deletecourses ***************
******************************************** */
function deleteCourse(id) {
    // Skapar objekt som innehåller kurs ID
    let obj = {
        "Table": "courses",
        "Id_type": "Course_ID",
        "Id_push": id
    };
    /* Fetchar, skickar med metod delete och body med JSON-fil som 
    görs av objektet*/
    fetch('https://webb01.se/restapi', {
        method: 'DELETE',
        body: JSON.stringify(obj),
    })
    // Tar emot respons-data i JSON-format
    .then(response => response.json())
    // Laddar om kurslistan
    .then(data => {
        getCourse();
    })
    .catch(error => {
        console.log('Error: ', error);
    })
}
