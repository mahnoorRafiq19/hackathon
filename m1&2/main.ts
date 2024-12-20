const togglebutton1 = document.getElementById("toggleSection('skills')") as HTMLButtonElement
const togglebutton2 = document.getElementById("toggleSection('education')") as HTMLButtonElement
const togglebutton3 = document.getElementById("toggleSection('work-experience')") as HTMLButtonElement
const skills = document.getElementById("skills") as HTMLElement
const education = document.getElementById("education") as HTMLElement
const workexp = document.getElementById("work-experience") as HTMLElement

togglebutton1.addEventListener('click',()=>{
    if(skills.style.display =='none'){
        skills.style.display ='block'
    }else{
        skills.style.display ='none'
    }
})
togglebutton2.addEventListener('click',()=>{
    if(education.style.display =='none'){
        education.style.display ='block'
    }else{
        education.style.display ='none'
    }
})
togglebutton3.addEventListener('click',()=>{
    if(workexp.style.display =='none'){
        workexp.style.display ='block'
    }else{
        workexp.style.display ='none'
    }
})