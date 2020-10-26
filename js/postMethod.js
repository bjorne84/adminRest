// Variebles from the form
let programmeIn = document.getElementById("programme");
let courseIn = document.getElementById("course");
let pointsIn = document.getElementById("points");
let gradeIn = document.getElementById("grade");

// Element for att lägga till en ny kurs, i översta formuläret
let formCreateEl = document.getElementById('formCreate2');

//formCreate.addEventListener('submit', createCourse());
formCreateEl.addEventListener('submit', (e) => {
    e.preventDefault(); // Förhindrar att sidan laddas om
    createCourse();
});



// Skapar kurser
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
    fetch('http://localhost/webb01_projekt/restapi/', {
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


// Delete
function deleteCourse(id) {
    // Skapar objekt som innehåller kurs ID
    let obj = {
        "Table": "courses",
        "Id_type": "Course_ID",
        "Id_push": 23
    };
    /* Fetchar, skickar med metod delete och body med JSON-fil som 
    görs av objektet*/
    fetch('http://localhost/webb01_projekt/restapi/', {
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
