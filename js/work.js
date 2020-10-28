// Element för att läsa ut alla kurser, uppdatera och radera 
let cvWrapperEl = document.getElementById('cvWrapper');

// the form
const formCreate_workEl = document.getElementById("formCreate_work");

// Variebles from the formvalues
let workplace_nameIn = document.getElementById("workplace_name");
let titel_workIn = document.getElementById("titel_work");
let description_workIn = document.getElementById("description_work");
let startdate_workIn = document.getElementById("startdate_work");
let enddate_workIn = document.getElementById("enddate_work");

// Hidden value, bestämmer om det skall skapas ny kurs eller uppdatatera i eventelistner
let hiddenIn = document.getElementById("hidden_work");
// Används för att skicka med ett värde in för vilket id som skall uppdateras
let updateId;

// Element för textheading till formuläret
let formHeading_workEl = document.getElementById("formHeading_work");



// Händelselyssnare, när sidan har laddat klart
window.addEventListener('load', getWork);


/* ******************************************
********* GET work experience ***************
******************************************** */
// Hämtar kurser
function getWork() {
    // Töm element på innehåll
    cvWrapperEl.innerHTML = '';
    // Get data over courses and education from this url
    fetch('https://www.webb01.se/restapi/?table=work_experience')
        .then(response => response.json()
            .then(data => {
                data.forEach(work => {
                    console.log(work);
                    cvWrapperEl.innerHTML +=
                        `<div class="getcourse">
                            <ul class="ul">
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Arbetsgivare:</span><span class="outputSpanCourse">${work.Workplace}</span></div></li>
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Titel:</span><span class="outputSpanCourse">${work.Titel}</span></div></li>
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Beskrivning:</span><span class="outputSpanCourse">${work.Description}</span></div></li>
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Startdatum:</span><span class="outputSpanCourse">${work.Startdate}</span></div></li>
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Slutdatum:</span><span class="outputSpanCourse">${work.Enddate}</span></div></li>
                            </ul>
                            <div class="btn-wrapper btn_wrapper2">
                                <button id="btn_up_${work.CV_ID}" class="btn btn2" onClick="updateCourse(${work.CV_ID})">Update</button>
                                <button id="btn_del_${work.CV_ID}" class="btn btn2 btn-reset" onClick="deleteCourse(${work.CV_ID})">Delete</button>
                            </div>
                        </div>`
                })
            })
        )
}


/* ******************************************
********* POST work experience ***************
******************************************** */
function createWork() {

    // Sparar variabler med värde från formuläret
    let programme = programmeIn.value;
    let course = courseIn.value;
    let points = pointsIn.value;
    let grade = gradeIn.value;

    let langArr2 = addLanguages();
    

    // Sparar ner det som ett objekt som sedan görs om till JSON-format
    let courseObj = {
        "Table": "courses",
        "Indata": {
            "Education_ID": programme,
            "CourseName": course,
            "Points": points,
            "Grade": grade,
            "Languages_id": langArr2
        }
    }

    //Skapar fetch-anrop
    fetch('https://webb01.se/restapi/', {
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