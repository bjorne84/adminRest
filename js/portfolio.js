// ******elements from the form *************
// Element för att läsa ut alla kurser, uppdatera och radera 
let formCreate_portEl = document.getElementById('formCreate_port');
// select element for adding languages
let programmeEl = document.getElementById('lang_port');


// Variebles from the form
let title_portIn = document.getElementById("title_port");
let url_portIn = document.getElementById("url_port");
let description_portIn = document.getElementById("description_port");
// Hidden value, bestämmer om det skall skapas ny kurs eller uppdatatera i eventelistner
let hidden_portIn = document.getElementById("hidden_port");

// Element för textheading till formuläret
let formHeading_portEl = document.getElementById("formHeading_port");

// Används för att skicka med ett värde in för vilket id som skall uppdateras
let updateId;

// Element för att lägga in portfoliodata
let portWrapperEl = document.getElementById("portWrapper");

// array för att spara valda språk
let langArr = [];

// Händelselyssnare, när sidan har laddat klart
window.addEventListener('load', getPortfolio);


/* ******************************************
********* GET portfolio ***************
******************************************** */
// Hämtar kurser
function getPortfolio() {
    // Töm element på innehåll
    portWrapperEl.innerHTML = '';
    // Get data over courses and education from this url
    fetch('https://www.webb01.se/restapi/?table=portfolio')
        .then(response => response.json()
            .then(data => {
                data.forEach(portfolio => {
                    console.log(portfolio);
                    portWrapperEl.innerHTML +=
                        `<div class="getcourse">
                            <ul class="ul">
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Titel:</span><span class="outputSpanCourse">${portfolio.Titel}</span></div></li>
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Beskrivning:</span><span class="outputSpanCourse">${portfolio.Description}</span></div></li>
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Webbadress:</span><span class="outputSpanCourse">${portfolio.URL}</span></div></li>
                                <li class="li_nth"><div class="lispan"><span class="courseSpan">Bild URL:</span><span class="outputSpanCourse">${portfolio.Image_url}</span></div></li>
                                <li id="last_port_${portfolio.Portfolio_ID}" class="li_nth"><div id=portlang_${portfolio.Portfolio_ID} class="lispan"><span class="courseSpan">Språk:</span></div></li>
                            </ul>
                            <div class="btn-wrapper btn_wrapper2">
                                <button id="btn_up_${portfolio.Portfolio_ID}" class="btn btn2" onClick="updateCourse(${portfolio.Portfolio_ID})">Update</button>
                                <button id="btn_del_${portfolio.Portfolio_ID}" class="btn btn2 btn-reset" onClick="deleteCourse(${portfolio.Portfolio_ID})">Delete</button>
                            </div>
                        </div>`
                        portfolio.languages.forEach(lang => {
                            console.log(lang);
                            let last_li_div = document.getElementById(`portlang_${portfolio.Portfolio_ID}`);
                            console.log(last_li_div);
                            last_li_div.innerHTML +=
                            `<span class="outputSpanCourse">${lang.Language}</span>`
                        })
                        // <span class="outputSpanCourse">${portfolio.Image_url}</span>
                })
            })
        )
}

