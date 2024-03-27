let params = new URLSearchParams(document.location.search);
let index = params.get("index");

let desk=localStorage.getItem("detail")
let converted=JSON.parse(desk)


let resumeObj = converted[index];


document.getElementById("re_name").innerHTML = resumeObj.name
document.getElementById("re_designation").innerHTML = resumeObj.title
document.getElementById("re_contact").innerHTML = resumeObj.phone

 document.getElementById("re_objectives").innerHTML = resumeObj.summary
 document.getElementById("re_linkedin").innerHTML = resumeObj.linkedin
 document.getElementById("re_github").innerHTML = resumeObj.github





let edu_li = '';

for(let each of resumeObj.education){

    edu_li = edu_li + `
    <li class="mb-2">
    <div class="resume-degree font-weight-bold">${each.course_name}</div>
    <div class="resume-degree-org">${each.ins_name}</div>
    <div class="resume-degree-time">${each.Year}</div>
</li>
                        `

}
document.getElementById('re_education').innerHTML = edu_li

let exp_li = '';

for(let each of resumeObj.experience){

    exp_li = exp_li + `<div class="resume-timeline-item-header mb-2" >
    <div class="d-flex flex-column flex-md-row">
        <h3 class="resume-position-title font-weight-bold mb-1">${each.role}</h3>
        <div class="resume-company-name ms-auto">${each.company_name}</div>
    </div><!--//row-->
    <div class="resume-position-time">${each.year_of_experience}</div>
</div><!--//resume-timeline-item-header-->
<div class="resume-timeline-item-desc">
    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
    <h4 class="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
    <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
    <ul>
        <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
        <li>At vero eos et accusamus et iusto odio dignissimos.</li>
        <li>Blanditiis praesentium voluptatum deleniti atque corrupti.</li>
        <li>Maecenas tempus tellus eget.</li>
    </ul>
    <h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
    <ul class="list-inline">
        <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Angular</span></li>
        <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Python</span></li>
        <li class="list-inline-item"><span class="badge bg-secondary badge-pill">jQuery</span></li>
        <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Webpack</span></li>
        <li class="list-inline-item"><span class="badge bg-secondary badge-pill">HTML/SASS</span></li>
        <li class="list-inline-item"><span class="badge bg-secondary badge-pill">PostgresSQL</span></li>
    </ul>
</div>`
}
document.getElementById('re_experience').innerHTML = exp_li

let language_li="";
for (let each of resumeObj.languages_known){
    language_li=language_li+ `  <li class="mb-2"><span class="resume-lang-name font-weight-bold">${each}</span></li>
    `
}
document.getElementById('re_languages').innerHTML = language_li


let hobbies_li="";
for (let each of resumeObj.hobbies){
    hobbies_li=hobbies_li+ `  <li class="mb-1">${each}</li>`
}
document.getElementById('re_hobbies').innerHTML = hobbies_li

let certificates_li="";
for (let each of resumeObj.certificates){
    certificates_li=certificates_li+ ` <li class="mb-2 ps-4 position-relative">
    <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
    <div class="resume-award-name">${each.course_name}</div>
    <div class="resume-award-desc">${each.year}</div>
</li>`
}
document.getElementById("re_certification").innerHTML = certificates_li

let projects_li="";
for (let each of resumeObj.projects){
    projects_li=projects_li+   `<li class="mb-2 ps-4 position-relative">
    
    <i class="resume-award-icon fa-solid fa-sheet-plastic position-absolute"></i><b class="resume-award-name">${each.project_name}</b>
    <div class="resume-award-desc">${each.duration}</div>
    <div class="resume-award-desc">${each.organization}</div>
</li>`
}
document.getElementById("re_projects").innerHTML = projects_li


let skills_li="";
for (let each of resumeObj.hard_skills){
    skills_li=skills_li+   `<li class="mb-2">
    <div class="resume-skill-name">${each}</div>
    <div class="progress resume-progress">
        <div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 98%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</li>`
                        
}
console.log(resumeObj.skills)
 document.getElementById('re_skills').innerHTML = skills_li


