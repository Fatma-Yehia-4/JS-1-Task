//Variables
let user = document.getElementById("user");
let age = document.getElementById("age");
let btn = document.getElementById("btn");
let toDolist = document.getElementById("usersList");
let msg = document.getElementById("msg");
let search = document.getElementById("search");
let globalId = 1;
let listArr  ;
let mood = "add";
let tmp ;



if (localStorage.item != null) {
    listArr = JSON.parse(localStorage.item)
}

else{ 
    listArr= []; 

    }

//Adding Function
function add(){
    msg.style.display = "none";
    //Remove Spacing
    let userValue = user.value.toLowerCase().trim();
    //Convert To Number
   let ageNumber = +(age.value);

    //Check User Name && age Number
    if(userValue && ageNumber >= 0){

        //Check Condition Of Input Data 
        if(userValue.length <= 10 &&
            (ageNumber > 0 && ageNumber <= 100)){ 
               
                let newUsers = {
                    id   : globalId, 
                    name : userValue, 
                    age  : ageNumber 

                } ;
            
                // listArr.push(newItem);
                console.log(listArr)

                if(mood === "add"){
                    listArr.push(newUsers);
                    
                    localStorage.setItem('item', JSON.stringify(listArr));
                }else{
                    listArr[tmp] = newUsers;
                    mood = "add";
                    btn.innerHTML = "Add Users";
                }


                globalId += 1;
                user.value = "";
                age.value = "";
               
                let listOfUsers = "";
            for(let i = 0; i < listArr.length; i++){
            listOfUsers += 
            `<li 
                 id=${globalId.toString()}>
                 <span>User Name:</span>${listArr[i].name}
                 <span> Age:</span> ${listArr[i].age} 
                 <button onclick=updateData(${i})>Edit</button> 
                 <button onclick=del(${i})>Delete</button> 
                </li>`;
             

            toDolist.innerHTML = listOfUsers;

                }
                



            }else if(userValue.length > 10 &&
                (ageNumber > 0 && ageNumber <= 100)){
                msg.style.display = "block";
                msg.innerHTML = 'Enter User Name Less Than 10 Letters';

            }else if(userValue.length <= 10 &&
                (ageNumber <= 0 || ageNumber > 100)){
                msg.style.display = "block";
                msg.innerHTML = 'Enter User Age From 1 To 100';

            }else{
                msg.style.display = "block";
                msg.innerHTML = 'Enter User Name Less Than 10 Letters <br>Enter User Age From 1 To 100';
            }
    //Check Any Input is Entered
    }else if(userValue && !ageNumber){
        msg.style.display = "block";
        msg.innerHTML = 'Please Enter Your Age';

    }else if(!userValue && ageNumber){
        msg.style.display = "block";
        msg.innerHTML = 'Please Enter Your Name';

    } else{
            msg.style.display = "block";
            msg.innerHTML = 'Please Enter Data';
    }
    
}
//OnClick Event
btn.onclick = add 

function del(i)
{
    listArr.splice(i,1);
localStorage.item = JSON.stringify(listArr);
Showdata()
}






function updateData(i){
    
    user.value = listArr[i].name;
    age.value =  listArr[i].age;
    btn.innerHTML = "save";
    mood = " update";
    tmp = i;
    scroll ({
        top : 0,
        behavior:"smooth"
    })
}



function searchData(value){
    let listOfUsers = "";
    for(var i = 0; i < listArr.length; i++){
        if(listArr[i].name.includes(value.toLowerCase())){
            listOfUsers += 
            `<li 
                 id=${globalId.toString()}>
                 <span>User Name:</span>${listArr[i].name}
                 <span> Age:</span> ${listArr[i].age} 
                 <button onclick=updateData(${i})>Edit</button> 
                 <button onclick=del(${i})>Delete</button> 
                </li>`;
        }
    }
    toDolist.innerHTML = listOfUsers;
    
    setTimeout(
        search.onclick = function(){
            Showdata() }, 5000);
            }


function Showdata (){
    let listOfUsers = "";
    for(var i = 0; i < listArr.length; i++){
    listOfUsers += 
    `<li 
                 id=${globalId.toString()}>
                 <span>User Name:</span>${listArr[i].name}
                 <span> Age:</span> ${listArr[i].age} 
                 <button onclick=updateData(${i})>Edit</button> 
                 <button onclick=del(${i})>Delete</button> 
                </li>`;
    
    }
    toDolist.innerHTML = listOfUsers;
  }
 Showdata()

