var togglebutton1 = document.getElementById("toggleSection('skills')");
var togglebutton2 = document.getElementById("toggleSection('education')");
var togglebutton3 = document.getElementById("toggleSection('work-experience')");
var skills = document.getElementById("skills");
var education = document.getElementById("education");
var workexp = document.getElementById("work-experience");
togglebutton1.addEventListener('click', function () {
    if (skills.style.display == 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
togglebutton2.addEventListener('click', function () {
    if (education.style.display == 'none') {
        education.style.display = 'block';
    }
    else {
        education.style.display = 'none';
    }
});
togglebutton3.addEventListener('click', function () {
    if (workexp.style.display == 'none') {
        workexp.style.display = 'block';
    }
    else {
        workexp.style.display = 'none';
    }
});
