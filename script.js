var form = document.getElementById("myForm")
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const h = document.getElementsByTagName("h1")[0];
    const p = document.getElementsByTagName("p")[0];
    const mail = document.getElementsByClassName("mail")[0];
    const container = document.getElementsByClassName("container")[0];
    const textSuc = document.getElementsByClassName("text-suc");
    for (var i = 0; i < textSuc.length; i++) {
        textSuc[i].style.display = "none";
    }
    const photoURL = "icon-success.svg";
    const photoElement = document.createElement("img");
    photoElement.style.width = "3rem";
    photoElement.style.height = "3rem";
    photoElement.src = photoURL;
    photoElement.alt = "Appended Photo";
    container.insertBefore(photoElement, container.firstChild)
    container.style.width = "20rem";
    container.style.height = "fit-content";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    const image = document.getElementsByClassName("img-desk")[0];
    image.style.display = "none";
    const buttonElement = document.createElement("button");
    buttonElement.style.marginTop="1rem"
    buttonElement.textContent = " Dismiss message";
    container.appendChild(buttonElement);
    buttonElement.classList.add("appended-button");
    photoElement.classList.add("appended-photo");
    // container.removeChild("img-desk");
    // const img = document.getElementsByTagName("img")[0];
    // const feedbackContainer = document.getElementsByClassName("container")[0];
    // const sp = document.getElementsByClassName("sp")[0];
    // const feedbackForm = document.getElementById("form");
    form.style.display = "none";
    // sp.textContent = "You selected " + optionValue + " out of 5";
    // sp.style.textAlign = "center";
    // sp.style.height = "2rem";
    // sp.style.paddingTop = ".5rem";
    // sp.style.marginBottom = "1rem";
    h.textContent = "Thanks For subscribing!";
    h.style.width - "1rem";
    // h.style.textAlign = "center"
    // p.style.textAlign = "center"
    p.textContent = `A confirmation email has been sent to ${mail.value}. Please open it and click the button inside to confirm your subscription.`;
    // img.src = "illustration-thank-you.svg";
    // img.style.width = "162px";
    // img.style.height = "108px";
    // feedbackContainer.classList.add("submitted");

});