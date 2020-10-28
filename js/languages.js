
/* Elements form the form*/
let language_lang = document.getElementById("language_lang"); //langauges name
let langImgEl = document.getElementById("langImg"); // image
const formLangEl = document.getElementById("formLang"); // form id

/* Heading form*/
let formHeading_langEl = document.getElementById("formHeading_lang");

/* div to display langiuages in*/
let langWrapperEl = document.getElementById("langWrapper"); // form id

// Hidden value, bestämmer om det skall skapas ny kurs eller uppdatatera i eventelistner
let hiddenIn = document.getElementById("hidden_lang");

// PATH live and local
const urlPath = "/webb01_projekt/adminRest/";
const urlImg = "/webb01_projekt/adminRest/gallery/";

let updateId;
// true / false for adding img
let imgSetter = false;

// Händelselyssnare, när sidan har laddat klart
window.addEventListener('load', getAllLang);


formLangEl.addEventListener('submit', (e) => {
    e.preventDefault(); // Förhindrar att sidan laddas om
    // sets the url path
    let imgname = [];
    //if (typeof myVar !== 'undefined')
    if (imgSetter) {
        imgname = langImg.files[0].name;
        // return imgname;
    }

    let imgSendName = urlImg + imgname;
    if (imgSendName === urlImg) {
        imgSendName = null;
    }
    // IF /else id its a new/post or update/put
    if (hiddenIn.value === "new") {
        // handles the upload of image
        sendImg();
        console.log(imgSendName);
        // input value umg url path
        createLang(imgSendName);

    } else if (hiddenIn.value === "update") {
        sendImg();
        updateLangApi(updateId, imgSendName);
    }
});

// Check image size
langImgEl.addEventListener('change', function () {
    console.log(langImg.name);
    let imgname = langImg.files[0].name;
    let imgSize = langImg.files[0].size;
    if (imgSize > 2500000) {
        alert(`${imgSize} is too big! Max 2,5 MB`);
    }
    imgSetter = true;
});

/* ******************************************
********* GET Languages ***************
******************************************** */
function getAllLang() {
    langWrapperEl.innerHTML = '';
    // Get data over education from this url
    fetch('https://webb01.se/restapi/?table=language')
        .then(response => response.json()
            .then(data => {
                data.forEach(language => {
                    console.log(language);
                    console.log(language.Language);
                    // info insereted in form select, as dropdown
                    langWrapperEl.innerHTML +=
                        `<div class="getcourse">
                        <ul class="ul">
                            <li class="li_nth"><div class="lispan"><span class="courseSpan">Languages:</span><span class="outputSpanCourse">${language.Language}</span></div></li>
                            <li class="li_nth"><div class="lispan"><span class="courseSpan">Img url path:</span><span class="outputSpanCourse">${language.Img_url}</span></div></li>
                        </ul>
                        <div class="btn-wrapper btn_wrapper2">
                            <button id="btn_up_${language.Language_ID}" class="btn btn2" onClick="updateLang(${language.Language_ID})">Update</button>
                            <button id="btn_del_${language.Language_ID}" class="btn btn2 btn-reset" onClick="deleteLang(${language.Language_ID})">Delete</button>
                        </div>
                    </div>`
                })
            })
        )
}


/* ******************************************
********* POST Languages ***************
******************************************** */


function createLang(url) {
    // Sparar variabler med värde från formuläret
    let languageName = language_lang.value;


    // Sparar ner det som ett objekt som sedan görs om till JSON-format
    let courseObj = {
        "Table": "language",
        "Indata": {
            "Language": languageName,
            "Img_url": url
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
            document.getElementById("message_form_lang").innerHTML = message;
            getAllLang();
            document.getElementById("formLang").reset();
        })
        .catch(error => {
            console.log('Error: ', error);
        })

}

// SEND Image to gallary
function sendImg() {
    const endpoint = `${urlPath}upload.php`;
    const formData = new FormData();

    console.log(langImg.files[0]);

    formData.append("langImg", langImg.files[0]);

    fetch(endpoint, {
        method: "post",
        body: formData
    }).catch(console.error);
}


/* ******************************************
********* UPDATE Languages ***************
******************************************** */
function updateLangApi(id, url) {
     // Sparar variabler med värde från formuläret
     let languageName = language_lang.value;


     // Sparar ner det som ett objekt som sedan görs om till JSON-format
     let courseObj = {
         "Table": "language",
         "Id_push": id,
         "Indata": {
             "Language": languageName,
             "Img_url": url
         }
     }
 

    //Skapar fetch-anrop
    fetch('https://webb01.se/restapi/', {
        method: 'PUT',
        body: JSON.stringify(courseObj),
    })
        //Vi kollar responsen, att anropet lyckats
        .then(response => response.json())
        .then(data => {
            // message
            let message = data.message;
            document.getElementById("message_form_lang").innerHTML = message;
            getAllLang();
            document.getElementById("formLang").reset();
        })
        .catch(error => {
            console.log('Error: ', error);
        })

}


function updateLang(id) {
    // Get data over education from this url

    fetch(`https://www.webb01.se/restapi/?table=language&id=${id}`)
        .then(response => response.json()
            .then(data => {
                console.log(data[0].Language_ID);

                /* KListarar in data i formuläret*/
                language_lang.value = data[0].Language;
                langImgEl.value = data[0].Img_url;
                //Change method to put aka update
                hiddenIn.value = "update";
                updateId = data[0].Language_ID;
                //hiddenInId.valiue =  data[0].Course_ID;
                //change heading
                formHeading_langEl.innerHTML = "Update Languages";
            })

        )
}






/* ******************************************
********* DELETE DeleteLanguages ***************
******************************************** */
function deleteLang(id) {
    // Skapar objekt som innehåller kurs ID

    let obj = {
        "Table": "language",
        "Id_push": id
    }
    /* Fetchar, skickar med metod delete och body med JSON-fil som  https://webb01.se/restapi/
    görs av objektet*/
    fetch('https://webb01.se/restapi/', {
        method: 'DELETE',
        body: JSON.stringify(obj),
    })
        // Tar emot respons-data i JSON-format
        .then(response => response.json())
        // Reload languages list
        .then(data => {
            getAllLang();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}
