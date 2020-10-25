// Element för att läsa ut alla kurser, uppdatera och radera 
let courseEl = document.getElementById('courseWrapper');
// element för att välja program/utbildning
let programmeEl = document.getElementById('programme');

// Händelselyssnare, när sidan har laddat klart
window.addEventListener('load', getCourse);
window.addEventListener('load', getEducationToSelect);

//Händelselyssnare för formuläret, skapa ny kurs

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
                })
            })
        )
}


function getEducationToSelect() {
        // Get data over courses and education from this url
        fetch('https://webb01.se/restapi/?table=education')
        .then(response => response.json()
            .then(data => {
                data.forEach(education => {
                    //console.log(education);
                    // info insereted in form select, as dropdown
                    programmeEl.innerHTML +=
                        `<option value="${education.Education_ID}<">${education.Programme}</option>
                        `
                })
            })
        )
}

