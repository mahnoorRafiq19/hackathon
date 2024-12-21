// Selecting form elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const profilePicInput = document.getElementById("profile-pic") as HTMLInputElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const educationInput = document.getElementById("education-input") as HTMLInputElement;
const skillsInput = document.getElementById("skills-input") as HTMLInputElement;
const workExpInput = document.getElementById("work-exp-input") as HTMLInputElement;

// Elements to display generated resume
const profilePicture = document.getElementById("profile-picture") as HTMLImageElement;
const displayName = document.getElementById("display-name") as HTMLElement;
const displayEmail = document.getElementById("display-email") as HTMLElement;
const educationList = document.querySelector("#dynamic-education ul") as HTMLUListElement;
const skillsList = document.querySelector("#dynamic-skills ul") as HTMLUListElement;
const workExpList = document.querySelector("#dynamic-work-exp ul") as HTMLUListElement;
const resumeContainer = document.getElementById("resume") as HTMLElement;

// Handle form submission to generate resume
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const name = nameInput.value;
    const email = emailInput.value;
    const education = educationInput.value.split(",");
    const skills = skillsInput.value.split(",");
    const workExp = workExpInput.value.split(",");

    // Display personal information
    displayName.textContent = `Name: ${name}`;
    displayEmail.textContent = `Email: ${email}`;

    // Handle profile picture upload
const file = profilePicInput.files?.[0];
if (file) {
    profilePicture.src = URL.createObjectURL(file);  // Create a URL for the uploaded image
} else {
    profilePicture.src = ""; //  no image if none uploaded
}

    // Populate education list
    educationList.innerHTML = "";
    education.forEach((item) => {
        const li = document.createElement("li");
       // li.textContent = item.trim();
        //educationList.appendChild(li);
    });

    // Populate skills list
    skillsList.innerHTML = "";
    skills.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.trim();
        skillsList.appendChild(li);
    });

    // Populate work experience list
    workExpList.innerHTML = "";
    workExp.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.trim();
        workExpList.appendChild(li);
    });


    resumeContainer.style.display = "block";
});
