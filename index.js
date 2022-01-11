// using query selector method

const billAmt = document.querySelector("#bill-amt");
const cashAmt = document.querySelector("#cash-amt");

const errorMsg = document.querySelector(".error-msg");

const cashAmtDiv = document.querySelector(".cash-input");
const cashReturnedDiv = document.querySelector(".change-returned");

const output = document.querySelector("#output");

const nextBtn = document.querySelector("#next-btn");
const checkBtn = document.querySelector("#check-btn");

const Notes = document.querySelectorAll(".notes");

const notesArray = [2000, 500, 100, 20, 10, 5, 1];

// if bill amount is filled display cash given input field

nextBtn.addEventListener("click", () => {
  errorHide();

  if (Number(billAmt.value > 0)) {
    nextBtn.style.display = "none";
    cashAmtDiv.style.display = "block";
  } else {
    errorShow("Enter valid bill amount");
  }
});

const errorShow = (text) => {
  errorMsg.style.display = "block";
  errorMsg.innerText = text;
  cashReturnedDiv.style.display = "none";
};

const errorHide = () => {
  errorMsg.style.display = "none";
};

// check button click handler

checkBtn.addEventListener("click", () => {
  clearNotes(); //to do
  errorHide();
  // error handling
  let billAmtValue = Number(billAmt.value);
  let cashAmtValue = Number(cashAmt.value);

  if (billAmtValue > 0 && cashAmtValue) {
    if (!Number.isInteger(cashAmtValue)) {
      errorShow("Enter valid amount in cash given field");
      return;
    }

    if (billAmtValue > cashAmtValue) {
      errorShow("Cash is less than bill amount, please enter right amount");
      return;
    }

    //if input is valid calculate no.of notes

    calculateNotes(billAmtValue, cashAmtValue);
  } else {
    errorShow("Enter valid bill amount and cash given to continue");
  }
});

// when check btn is clicked without refreshing the page, clear the no.of note values

const clearNotes = () => {
  for (let notes of Notes) {
    notes.innerText = "";
  }
};

// to calculate no.of notes

const calculateNotes = (bill, cash) => {
  let returnAmt = cash - bill;

  if (returnAmt < 1) {
    errorShow("No amount to be returned");
    return;
  }

  cashReturnedDiv.style.display = "block";

  for (let i = 0; i < notesArray.length; i++) {
    returnAmt = compare(returnAmt, notesArray[i], i);
  }
};

// compare with currencies and post the no.of notes on screen

const compare = (remainder, noteAmt, index) => {
  if (remainder >= noteAmt) {
    let notes = Math.floor(remainder / noteAmt);

    // console.log(notes)

    remainder = remainder - notes * noteAmt;

    Notes[index].innerText = `${notes}`;
  }

  return remainder;
};
