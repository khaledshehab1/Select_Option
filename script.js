let down = document.getElementById("selectField");
let logo = document.getElementById("down");
let main = document.querySelector(".icons");
let title = document.getElementById("title");

down.addEventListener("click", () => {
    logo.classList.toggle("rotated");
    main.classList.toggle("hide");

})
let facebook = document.querySelector("#facebook");

facebook.addEventListener("click", () => {
    title.innerText = "Facebook";
    main.classList.toggle("hide");
})

let twitter = document.querySelector("#twitter");

twitter.addEventListener("click", () => {
    title.innerText = "Twitter";
    main.classList.toggle("hide");
})

let instagram = document.querySelector("#instagram");

instagram.addEventListener("click", () => {
    title.innerText = "Instagram";
    main.classList.toggle("hide");
})

let youtube = document.querySelector("#youtube");

youtube.addEventListener("click", () => {
    title.innerText = "Youtube";
    main.classList.toggle("hide");
})

let pinterest = document.querySelector("#pinterest");

pinterest.addEventListener("click", () => {
    title.innerText = "Pinterest";
    main.classList.toggle("hide");
})

let whatsapp = document.querySelector("#whatsapp");

whatsapp.addEventListener("click", () => {
    title.innerText = "WhatsApp";
    main.classList.toggle("hide");
})