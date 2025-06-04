const burgerButton = document.querySelector(".burger-button");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
const body = document.body;

const servicesLink = document.querySelector("#services-link");
const services = document.querySelector("#services");

const stockLink = document.querySelector("#stock-link");
const stock = document.querySelector("#stock");

const compositionsLink = document.querySelector("#compositions-link");
const compositions = document.querySelector("#compositions");

const giftCardLink = document.querySelector("#gift-card-link");
const giftCard = document.querySelector("#gift-card");

const arrowScroll = document.querySelector(".arrow-scroll");

function scroll() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      arrowScroll.style.display = "block";
    } else {
      arrowScroll.style.display = "none";
    }
  });
  arrowScroll.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

scroll();

function handleScrollSection(navLink, section) {
  navLink.addEventListener("click", () => {
    body.classList.remove("noscroll");
    modal.classList.remove("modal-open");
    section.scrollIntoView({ behavior: "smooth" });
  });
}

handleScrollSection(servicesLink, services);
handleScrollSection(stockLink, stock);
handleScrollSection(compositionsLink, compositions);
handleScrollSection(giftCardLink, giftCard);

burgerButton.addEventListener("click", handleClickButton);

closeButton.addEventListener("click", () => {
  modal.classList.remove("modal-open");
});

function handleClickButton(e) {
  e.preventDefault();
  modal.classList.toggle("modal-open");
  body.classList.toggle("noscroll");
}
