// using query selector method

const billAmt = document.querySelector("#bill-amt");
const cashAmt = document.querySelector("#cash-amt");

const errorMsg = document.querySelector(".error-msg");

const cashAmtDiv = document.querySelector(".cash-input");
const cashReturnedDiv = document.querySelector(".change-returned");

const output = document.querySelector("#output");

const nextBtn = document.querySelector("#next-btn");
const checkBtn = document.querySelector("check-btn");

const notes = document.querySelectorAll(".notes");

const notesArray = [2000, 500, 100, 20, 10, 5, 1 ];

// if bill amount is filled display cash given input field 

nextBtn.addEventListener("click", () => {
    errorHide();

    if(Number(billAmt.value > 0)){
        nextBtn.style.display= "none";
        cashAmtDiv.style.display= "block";
    } else {
        errorShow("Enter valid bill amount");
    }
});

function errorShow(text){
    errorMsg.style.display= "block";
    errorMsg.innerText= text;
    cashReturnedDiv.style.display= "none";
}

function errorHide(){
    errorMsg.style.display= "none";
}







