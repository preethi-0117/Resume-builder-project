let params=new URLSearchParams(document.location.search)
let index=params.get("index")


let desk=localStorage.getItem("detail");
let converted=JSON.parse(desk);
let resumeObj=converted[index];
console.log(resumeObj.name);

// document.getElementById("resume_name").innerHTML=resumeObj.name
document.getElementById("re_name").innerHTML=resumeObj.name
document.getElementById("welcome").innerHTML="Hello   "+resumeObj.name

document.getElementById("re_dob").innerHTML="BIRTHDAY : "+resumeObj.personal_details.dob

document.getElementById("role").innerHTML=resumeObj.title

document.getElementById("re_phone").innerHTML="PHONE : "+resumeObj.phone

document.getElementById("re_mail").innerHTML="MAIL : "+resumeObj.email

document.getElementById("re_locate").innerHTML="Location : "+resumeObj.address

document.getElementById("re_summary").innerHTML=resumeObj.summary

// document.getElementById("re_skills").innerHTML=resumeObj.skills


let edu_list=""

for (let each of resumeObj.education){

    edu_list= edu_list + `<li class="time-line-item">
    <span class="badge badge-primary">${each.course_name}</span>
    <h6 class="time-line-item-title">${each.year}</h6>
    <p class="time-line-item-subtitle">${each.ins_name}</p>
    <p class="time-line-item-content">${each.percentage}
        
    </p>
</li>`
}

document.getElementById("re_education").innerHTML=edu_list

let proj_list=""

for (let each of resumeObj.projects){

    proj_list=proj_list +  `<h5 class="service-title">${each.project_name}</h5>
                           <p class="service-description">${each.organization}</p>`
}

document.getElementById("re_project").innerHTML=proj_list

let exp_list=""

for (let each of resumeObj.experience){

    exp_list=exp_list + `<li class="time-line-item">
<span class="badge badge-primary">${each.company_name}</span>

<p class="time-line-item-subtitle">${each.year_of_experience}</p>

</p>
</li>`
}

document.getElementById("re_experience").innerHTML=exp_list


let language=""

for (let each of resumeObj.personal_details.languages_known){

    language=language +    `<p>${each}</p>`
                           
}
document.getElementById("re_language").innerHTML=language


let hobbies=""

for (let each of resumeObj.personal_details.hobbies){

  hobbies=hobbies+ `<p>${each}</p>`
}
document.getElementById("re_hobby").innerHTML=hobbies


// let certify=""

// for (let each of resumeObj.certificates){

//     certify= certify + 
// }

// document.getElementById("resume_name").innerHTML=resumeObj.name