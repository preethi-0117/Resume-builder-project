
let myResume={
    
  hard_skills:[],
  soft_skills:[],
  
    languages_known:[],
    hobbies:[],
  
  education:[
          { 
            course_name:"",
            ins_name:"",
            percentage:"",
            year:""
          },
            
            {
            course_name:"",
            ins_name:"",
            percentage:"",
            year:""
          },

            {
            course_name:"",
            ins_name:"",
            percentage:"",
            year:""
          },
        ],

          certificates:
          [{
            course_name:"",
            year:""
          },
           {
            course_name:"",
            year:""
           }
          ],
  projects:[
      {  project_name:"",
         duration:"",
         team_size:"",
         organization:""
  },
     {  
         project_name:"",
         duration:"",
         team_size:"",
         organization:""
  }
  ],

  experience:[
    {    company_name:"",
         year_of_experience:""
      },
    {    company_name:"",
         year_of_experience:""
      },
  ]
}

function gen(ele,key,p_key,index,c_key){

  if(p_key){
      myResume[p_key][key]=ele.value
  }
  else if(c_key){
      myResume[key][index][c_key]=ele.value;
  }
  else{
  myResume[key]=ele.value;
  }

}
console.log(myResume)
function AddArrValue(key,id){
  let value=document.getElementById(id).value;
  myResume[key].push(value)
  document.getElementById(id).value=""
 
}

function add(key,id,parent){
let a=document.getElementById(id).value;
myResume[parent][key].push(a)
document.getElementById(id).value=""

}

function Display(){
  let desk=localStorage.getItem("detail")
  let convertItem=JSON.parse(desk)
  let renderHTML="";
  for (const each of convertItem){
   renderHTML=renderHTML + `<li>${each.title}</li>`
  }
  document.getElementById("list").innerHTML=renderHTML
}


// this function calls in list html page   //to view title in list page delete button and edit button 

function resumeTitle(){
 let desk=localStorage.getItem("detail")
 let converted=JSON.parse(desk)
 let renderHTML="";
 for (const each in converted){
  renderHTML=renderHTML + `<li>
                            <a href="view.html?index=${each}">${converted[each].title}</a>   
                            <button type="button" onclick="deleteData('${each}')">Delete</button>   
                            <a href="edit.html?index=${each}"> <button type="button">Edit</button></a>
                          </li>`

 }
 document.getElementById("list").innerHTML=renderHTML
}

//argument passing in paramater to delete the data 

function deleteData(key){
let news=[]
let desk=localStorage.getItem("detail")
 let converted=JSON.parse(desk)

  for (let each in converted){
     if (each!=key){
        news.push(converted[each])
        console.log(news)
       
     }

    }

    localStorage.setItem("detail",JSON.stringify(news))
    window.location="list.html"
    
}

function updateData(){

let params = new URLSearchParams(document.location.search);
let index = params.get("index");

let desk=localStorage.getItem("detail")
let converted=JSON.parse(desk)

let update_title=document.getElementById("input").value;
let update_name=document.getElementById("changename").value
let update_email=document.getElementById("editemail").value
let update_address=document.getElementById("editaddress").value
let update_phone=document.getElementById("editphone").value
let update_summary=document.getElementById("editsummary").value
let update_linkedin=document.getElementById("editlinkedin").value
let update_github=document.getElementById("editgithub").value

  
converted[index].title=update_title
converted[index].name=update_name
converted[index].email=update_email
converted[index].address=update_address
converted[index].phone=update_phone
converted[index].summary=update_summary
converted[index].linkedin=update_linkedin
converted[index].github=update_github

   localStorage.setItem("detail",JSON.stringify(converted))


  let getting_language=document.getElementsByClassName("language_input")
  let list=[]
  for (let each of getting_language){

     list.push(each.value)
  
  }

  converted[index].personal_details.languages_known=list
  localStorage.setItem("detail",JSON.stringify(converted))


  let getting_hobby=document.getElementsByClassName("hobby_input")
  let item=[]
  for (let each of getting_hobby){
    item.push(each.value)
   
  }
  converted[index].personal_details.hobbies=item


  let getting_hardskill=document.getElementsByClassName("hardskill_input")
  let list_item=[]
  
  for (let each of getting_hardskill){

    list_item.push(each.value)
}
converted[index].hard_skills=list_item


let getting_softskill=document.getElementsByClassName("softskill_input")
let list_items=[]

for (let each of getting_softskill){

  list_items.push(each.value)
}
converted[index].soft_skills=list_items


localStorage.setItem("detail",JSON.stringify(converted))
window.location="list.html"

}

// function setData(element,data_index,key_word,parent_key){// education,project details,experience update onkeyup function
//   let parms = new URLSearchParams(document.location.search);
//   let index = parms.get("index");

//   let desk = localStorage.getItem("details")
//   let converted = JSON.parse(desk)


//      converted[index][parent_key][data_index][key_word]=element.value;


//      localStorage.setItem("details",JSON.stringify(converted))


// }
// function storeData(element,data_index,key_word,praent_key){// education,project details,experiance update function
//   let parms = new URLSearchParams(document.location.search);
//   let index = parms.get("index");

//   let desk = localStorage.getItem("details")
//   let converted = JSON.parse(desk)


//       converted[index][praent_key][data_index][key_word]=element.value;




//   localStorage.setItem("details",JSON.stringify(converted))

// }

