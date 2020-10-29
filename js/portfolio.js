// ******elements from the form *************
// Element för att läsa ut alla kurser, uppdatera och radera 
// formulär
let formCreate_portEl = document.getElementById('formCreate_port');
// select element for adding languages
let lang_portEl = document.getElementById('lang_port');


// Variebles from the form
let title_portIn = document.getElementById("title_port");
let url_portIn = document.getElementById("url_port");
let description_portIn = document.getElementById("description_port");
let image_portIn = document.getElementById("image_port");
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
window.addEventListener('load', getAllLanguages2);

window.addEventListener('load', getPortfolio);
window.addEventListener('load', test);


// PATH live and local
const urlPath = "/webb01_projekt/adminRest/";
const urlImg = "/webb01_projekt/adminRest/gallery/";

//let updateId;
// true / false for adding img
let imgSetter = false;



formCreate_portEl.addEventListener('submit', (e) => {
    e.preventDefault(); // Förhindrar att sidan laddas om
    // sets the url path
    let imgname = [];
    //if (typeof myVar !== 'undefined')
    if (imgSetter == true) {
        imgname = image_portIn.files[0].name;
        // return imgname;
    }

    let imgSendName = urlImg + imgname;
    if (imgSendName === urlImg) {
        imgSendName = null;
    }
    // IF /else id its a new/post or update/put
    if (hidden_portIn.value === "new") {
        // handles the upload of image
        sendImg2();
        console.log(imgSendName);
        // input value umg url path
        createPortfolio(imgSendName);

    } else if (hidden_portIn.value === "update") {
        sendImg2();
        updatePortApi(updateId, imgSendName);
    }
});

// Check image size
image_portIn.addEventListener('change', function () {
    let imgSize = image_portIn.files[0].size;
    if (imgSize > 4000000) {
        alert(`${imgSize} is too big! Max 4 MB`);
    }
    imgSetter = true;
});



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
                    //console.log(portfolio);
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
                            //console.log(lang);
                            let last_li_div = document.getElementById(`portlang_${portfolio.Portfolio_ID}`);
                           // console.log(last_li_div);
                            last_li_div.innerHTML +=
                            `<span class="outputSpanCourse">${lang.Language}</span>`
                        })
                        // <span class="outputSpanCourse">${portfolio.Image_url}</span>
                })
            })
        )
}

function test() {
    console.log("hej");
}

// Function to get all langueages
function getAllLanguages2() {
    // Get data over education from this url
    fetch('https://webb01.se/restapi/?table=language')
        .then(response => response.json()
            .then(data => {
                data.forEach(language => {
                    console.log("hej");
                    console.log(language);
                    // info insereted in form select, as dropdown
                    lang_portEl.innerHTML +=
                        `<option value="${language.Language_ID}">${language.Language}</option>
                    `
                })
            })
        )
}



/* ******************************************
********* POST create portfolio ***************
******************************************** */
function createPortfolio(url) {


    // Sparar variabler med värde från formuläret
    let title_portEl = title_portIn.value;
    let url_portEl = url_portIn.value;
    let description_portEl = description_portIn.value;
    // select element

    
    let langArr3 = addLanguages2();
    

    // Sparar ner det som ett objekt som sedan görs om till JSON-format
    let courseObj = {
        "Table": "portfolio",
        "Indata": {
        	"Titel": title_portEl,
		    "URL": url_portEl,
		    "Image_url": url,
		    "Description": description_portEl,
		    "Bridge_portfolio_id": langArr3
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
            document.getElementById("message_form_port").innerHTML = message;
            getPortfolio();
            document.getElementById("formCreate_port").reset();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}

// Function to add all selected languaqges from form
function addLanguages2() {
    // Två val att lösa det, antingen en for-loop eller med map och array.from
    for (i = 0; i < lang_portEl.length; i++) {
        currentOption = lang_portEl[i];
        //print it if it has been selected
        if (currentOption.selected == true) {
            //console.log(currentOption.value);
        }
    }
    const selected = document.querySelectorAll('#lang_port option:checked');
    const values = Array.from(selected).map(el => el.value);
    //console.log(values);
    const numvalues = values.map((i) => Number(i));
    return numvalues;

}

// SEND Image to gallary
function sendImg2() {
    const endpoint = `${urlPath}upload.php`;
    const formData = new FormData();

    console.log(image_portIn.files[0]);

    formData.append("langImg", image_portIn.files[0]);

    fetch(endpoint, {
        method: "post",
        body: formData
    }).catch(console.error);
}



