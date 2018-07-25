
let personalityContent = {

    sectionOne: {
        agree: {
            pointOne: "Anyone can learn to code",
            pointTwo: "HTML and CSS are fun languages to learn",
            pointThree: "Javascript will eventually be easier to pick-up",
        },

        disagree: {
            pointOne: "Coding is easy",
            pointTwo: "Javascript currently makes sense",
            pointThree: "I wont be able to make a career out of web development",
        }
    },

    sectionTwo: {
        peopleLikeMe: {
            personOne: "J.R.R. Tolkien",
            personTwo: "Johnny Depp",
            personThree: "Tom Hiddleston",
            personFour: "Lance Sweets",
        },
    },
    
    sectionThree: {
        questionOne: "slack, text, email, phone",
        questionTwo: "slack, text, email, phone",
        questionThree: "slack, text, email, phone",
    }
};

const saveDatabase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)    
    localStorage.setItem(localStorageKey, stringifiedDatabase)
};

saveDatabase(personalityContent, "personalityContent");

const loadDatabase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)
};

document.getElementById("generalProfile").innerHTML = 
    `<article>
        <h2>Things I agree with...</h2>
        <div>
            <div>${personalityContent.sectionOne.agree.pointOne}</div>
            <div>${personalityContent.sectionOne.agree.pointTwo}</div>
            <div>${personalityContent.sectionOne.agree.pointThree}</div>
        </div>
    </article>

    <article>
        <h2>Things I disagree with...</h2>
        <div>
            <div>${personalityContent.sectionOne.disagree.pointOne}</div>
            <div>${personalityContent.sectionOne.disagree.pointTwo}</div>
            <div>${personalityContent.sectionOne.disagree.pointThree}</div>
        </div>
    </article>`;

/* function generalProfile2 () {
    document.createElement("generalProfile2").innerHTML = 
    `<article>
        <h2>Things I agree with...</h2>
        <ul>
            <li>${personalityContent.sectionOne.agree.pointOne}</li>
            <li>${personalityContent.sectionOne.agree.pointTwo}</li>
            <li>${personalityContent.sectionOne.agree.pointThree}</li>
        </ul>
    </article>

    <article>
        <h2>Things I disagree with...</h2>
        <ul>
        <li>${personalityContent.sectionOne.disagree.pointOne}</li>
        <li>${personalityContent.sectionOne.disagree.pointTwo}</li>
        <li>${personalityContent.sectionOne.disagree.pointThree}</li>
        </ul>
    </article>`;
};

document.getElementById("generalProfile2").innerHTML = generalProfile2; */

document.getElementById("peopleLikeMe").innerHTML = 
    `<h2>4 People that share your personality type</h2>
        <div>
            <div>${personalityContent.sectionTwo.peopleLikeMe.personOne}</div>
            <div>${personalityContent.sectionTwo.peopleLikeMe.personTwo}</div>
            <div>${personalityContent.sectionTwo.peopleLikeMe.personThree}</div>
            <div>${personalityContent.sectionTwo.peopleLikeMe.personFour}</div>
        </div>`;

document.getElementById("communication").innerHTML =
    `<article id="question1">
        <h3>How would I communicate best with my little sib?</h3>
        <p>${personalityContent.sectionThree.questionOne}</p>
    </article>

    <article id="question2">
        <h3>How would I like my instructors to communicate with me?</h3>
        <p>${personalityContent.sectionThree.questionTwo}</p>
    </article>

    <article id="question3">
        <h3>How would I like my teammates to communicate with me?</h3>
        <p>${personalityContent.sectionThree.questionTwo}</p>
    </article>`;