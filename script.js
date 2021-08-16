let contentAuthorShare = document.querySelector(".contentAuthorShare");
let ShareBtnContainer = document.querySelector(".shareIconContainer");
let shareIcon = document.querySelector(".shareIcon")

// toggle the active class on click 
ShareBtnContainer.addEventListener("click", function () {
    contentAuthorShare.classList.toggle("active")
})

// hide the box on any part of the document
document.addEventListener("click", function (e) {
    if (e.target !== ShareBtnContainer && e.target.closest(".shareIconContainer") == null) {
        contentAuthorShare.classList.remove("active")
    }
})