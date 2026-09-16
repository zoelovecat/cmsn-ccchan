// Chỉnh nội dung thiệp tại đây
const CARD = {
  pageTitle: "Happy Birthday",
  name: "Babii",
  profileImage: "./images/r5.png",
  dateOfBirth: "5 April 1996",
  letterTitle: "To you",
  message:
    "My love. You are a very special girl. I always silently thank you for coming into my life. Today, I wish you all the best, lots of health, and lots of joy. I always hope we will celebrate many more birthdays like this together. Happy birthday to you.💕",
};

document.addEventListener("DOMContentLoaded", function () {
  document.title = CARD.pageTitle;

  const nameEl = document.querySelector(".name span");
  if (nameEl) nameEl.textContent = CARD.name;

  const profileImg = document.querySelector(".box__account .image img");
  if (profileImg) profileImg.src = CARD.profileImage;

  window.datetxt = CARD.dateOfBirth;
  window.datatxtletter = CARD.message;
  window.titleLetter = CARD.letterTitle;
  window.charArrDate = window.datetxt.split("");
  window.charArrDateLetter = window.datatxtletter.split("");
  window.charArrTitle = window.titleLetter.split("");
  window.currentIndex = 0;
  window.currentIndexLetter = 0;
  window.currentIndexTitle = 0;
});

var datetxt = CARD.dateOfBirth;
var datatxtletter = CARD.message;
var titleLetter = CARD.letterTitle;
var charArrDate = datetxt.split("");
var charArrDateLetter = datatxtletter.split("");
var charArrTitle = titleLetter.split("");
var currentIndex = 0;
var currentIndexLetter = 0;
var currentIndexTitle = 0;
var date__of__birth = document.querySelector(".date__of__birth span");
var text__letter = document.querySelector(".text__letter p");

if (text__letter) {
  text__letter.style.whiteSpace = "pre-line";
}

window.datetxt = datetxt;
window.datatxtletter = datatxtletter;
window.titleLetter = titleLetter;
window.charArrDate = charArrDate;
window.charArrDateLetter = charArrDateLetter;
window.charArrTitle = charArrTitle;
window.currentIndex = currentIndex;
window.currentIndexLetter = currentIndexLetter;
window.currentIndexTitle = currentIndexTitle;

setTimeout(function () {
  timeDatetxt = setInterval(function () {
    if (window.currentIndex < window.charArrDate.length) {
      date__of__birth.textContent += window.charArrDate[window.currentIndex];
      window.currentIndex++;
      currentIndex = window.currentIndex;
    } else {
      let i = document.createElement("i");
      i.className = "fa-solid fa-star";
      document.querySelector(".date__of__birth").prepend(i);
      document.querySelector(".date__of__birth").appendChild(i.cloneNode(true));
      clearInterval(timeDatetxt);
    }
  }, 100);
}, 12000);

var intervalContent;
var intervalTitle;
$("#btn__letter").on("click", function () {
  $(".box__letter").slideDown();
  setTimeout(function () {
    $(".letter__border").slideDown();
  }, 1000);
  setTimeout(function () {
    intervalTitle = setInterval(function () {
      if (window.currentIndexTitle < window.charArrTitle.length) {
        document.querySelector(".title__letter").textContent +=
          window.charArrTitle[window.currentIndexTitle];
        let i = document.createElement("i");
        i.className = "fa-solid fa-heart";
        document.querySelector(".title__letter").appendChild(i);
        window.currentIndexTitle++;
        currentIndexTitle = window.currentIndexTitle;
      } else {
        clearInterval(intervalTitle);
      }
    }, 100);
  }, 2000);
  setTimeout(function () {
    document.querySelector("#heart__letter").classList.add("animationOp");
    document.querySelector(".love__img").classList.add("animationOp");
    document.querySelector("#mewmew").classList.add("animationOp");
  }, 2800);
  setTimeout(function () {
    document.querySelectorAll(".heart").forEach((item) => {
      item.classList.add("animation");
    });
  }, 3500);
  setTimeout(function () {
    text__letter.textContent = "";

    intervalContent = setInterval(function () {
      if (window.currentIndexLetter < window.charArrDateLetter.length) {
        const currentChar = window.charArrDateLetter[window.currentIndexLetter];
        text__letter.textContent += currentChar;
        window.currentIndexLetter++;
        currentIndexLetter = window.currentIndexLetter;
      } else {
        clearInterval(intervalContent);
      }
    }, 50);
  }, 6000);
});

$(".close").on("click", function () {
  clearInterval(intervalContent);
  document.querySelector(".title__letter").textContent = "";
  text__letter.textContent = "";
  window.currentIndexLetter = 0;
  window.currentIndexTitle = 0;
  currentIndexLetter = 0;
  currentIndexTitle = 0;
  document.querySelector("#heart__letter").classList.remove("animationOp");
  document.querySelector(".love__img").classList.remove("animationOp");
  document.querySelector("#mewmew").classList.remove("animationOp");
  document.querySelectorAll(".heart").forEach((item) => {
    item.classList.remove("animation");
  });
  $(".box__letter").slideUp();
  $(".letter__border").slideUp();
});
