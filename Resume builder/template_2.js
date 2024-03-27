let params = new URLSearchParams(document.location.search);
let index = params.get("index");

let desk=localStorage.getItem("detail")
let converted=JSON.parse(desk)


let resumeObj = converted[index];


 document.getElementById("re_name").innerHTML = resumeObj.name
 document.getElementById("re_designation").innerHTML = resumeObj.title
// document.getElementById("welcome_msg").innerHTML ="Hello!  " + resumeObj.name
 document.getElementById("re_objectives").innerHTML = resumeObj.summary
// document.getElementById("re_dob").innerHTML = "Birthday: " +resumeObj.personal_details.date_of_birth
 document.getElementById("re_contact").innerHTML =+ resumeObj.phone
 document.getElementById("re_mail").innerHTML = resumeObj.email
// document.getElementById("re_address").innerHTML ="Residential Address: " + resumeObj.personal_details.address
document.getElementById("re_linkedin").innerHTML = resumeObj.linkedin
document.getElementById("re_github").innerHTML = resumeObj.github

let edu_li = '';

for(let each of resumeObj.education){

    edu_li = edu_li +  `<div>
                    <h4 class="degree">${each.course_name}</h4>
                    <h5 class="meta">${each.ins_name}</h5>
                    <h5 class="meta">${each.percentage}</h5>
                    <div class="time">${each.Year}</div>
                    </div>`

}
document.getElementById("re_education").innerHTML = edu_li

let exp_li = '';

for(let each of resumeObj.experience){

    exp_li = exp_li + `<div><div class="upper-row" >
    <h2 class="job-title">${each.company_name}</h2>
    <h3 class="job-title">${each.role}</h3>
    <div class="time">${each.year_of_experience}</div>
</div><div> <div class="details">
<p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>  
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
</div>
</div>`

}
document.getElementById('re_experience').innerHTML = exp_li

let language_li="";
for (let each of resumeObj.languages_known){
    language_li=language_li+  `<ul>
                    <li>${each}</li></ul>`
}
document.getElementById('re_languages').innerHTML = language_li
console.log(language_li)


let hobbies_li="";
for (let each of resumeObj.hobbies){
    hobbies_li=hobbies_li+   `<ul>
    <li>${each}</li>
   
</ul>`
}
document.getElementById('re_hobbies').innerHTML = hobbies_li

let skills_li="";
for (let each of resumeObj.hard_skills){
    skills_li=skills_li+    `<ul class="item">
    <li class="level-title">${each}</li>
    <div class="progress level-bar">
        <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 99%" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
    </ul>`      
}
document.getElementById('re_skills').innerHTML = skills_li



let projects_li="";
for (let each of resumeObj.projects){
    projects_li=projects_li+   `<p>${each.project_name}
    </div> - <span class="project-tagline">A responsive website template designed to help developers launch their software projects. </span></p> `
    }
document.getElementById("re_projects").innerHTML = projects_li

