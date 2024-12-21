"use strict";
// Selecting form elements
const form = document.getElementById("resume-form");
const profilePicInput = document.getElementById("profile-pic");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const educationInput = document.getElementById("education-input");
const skillsInput = document.getElementById("skills-input");
const workExpInput = document.getElementById("work-exp-input");
// Elements to display generated resume
const profilePicture = document.getElementById("profile-picture");
const displayName = document.getElementById("display-name");
const displayEmail = document.getElementById("display-email");
const educationList = document.querySelector("#dynamic-education ul");
const skillsList = document.querySelector("#dynamic-skills ul");
const workExpList = document.querySelector("#dynamic-work-exp ul");
const resumeContainer = document.getElementById("resume");
// Handle form submission to generate resume
form.addEventListener("submit", (e) => {
    var _a;
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
    const file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        profilePicture.src = URL.createObjectURL(file); // Create a URL for the uploaded image
    }
    else {
        profilePicture.src = ""; //  no image if none uploaded
    }
    // Populate education list
    educationList.innerHTML = "";
    education.forEach((item) => {
        const li = document.createElement("li");
     li.textContent = item.trim();
        educationList.appendChild(li);
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
