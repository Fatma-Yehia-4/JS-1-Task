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
                    person : userValue, 
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
                 <span>User Name:</span>${listArr[i].person}
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
    
    user.value = listArr[i].person;
    age.value =  listArr[i].age;
    btn.innerHTML = "save";
    mood = " update";
    tmp = i;
    scroll ({
        top : 0,
        behavior:"smooth"
    })
}



function searchData (value){



   
    // search.value ="";
    let listOfUsers = "";
    for(var i = 0; i < listArr.length; i++){
        if(listArr[i].name.includes(value.toLowerCase())){
            listOfUsers += 
            `<li>
                <span>User Name:</span> ${listArr[i].name}
                <span> Age:</span> ${listArr[i].age}
                <button onclick = updateData(${i})>update</button>
                <button onclick = del(${globalId})>Delete</button>
            </li>`;
            
            
        }
    }
    toDolist.innerHTML = listOfUsers;
    
    setTimeout(
        search.onclick = function(){
            let listOfUsers = "";
                for(var i = 0; i < listArr.length; i++){
                listOfUsers += (
                `<li id=${globalId.toString()} >
                    <span>User Name:</span> ${listArr[i].name}
                    <span> Age:</span> ${listArr[i].age}
                    <button onclick = updateData(${i})>update</button>
                    <button onclick = del(${i})>Delete</button>
                </li>`);
                toDolist.innerHTML = listOfUsers;
                
                }
            }
       , 5000);

            }

//  btn.onclick =function(add) { }
//       add.onclick = function () {
//                 msg.style.display = "none";
                
//                 let userValue = user.value.toLowerCase().trim();
                
//                 let ageNumber = +age.value;
                
                
//                 if(userValue && ageNumber >= 0){
                
                    
//                     if(userValue.length <= 10 &&
//                         (ageNumber > 0 && ageNumber <= 100)){     
                            
//                             if (localStorge.product != null) {
//                                listArr = Json.parse(localStorge.product)
//                             }
                                
                           
                                
//                            else{
//                                 listArr= [];
//                             }
                                
//                             let newUsers = {
//                                 id:globalId,
//                                 name:userValue,
//                                 age:ageNumber 
//                             };
                             
                            
//                                 globalId += 1;
//                                 user.value = "";
//                                 age.value = "";  
                            
//                             listArr.push(newpro)
//                             localStorge.setItem('product', Json.stringify(listArr));
                           
                             
                            
                            
                            
//                             if(mood === "add"){
//                                 listArr.push(newUsers);
//                             }else{
//                                 listArr[tmp] = newUsers;
//                                 mood = "add";
//                                 btn.innerHTML = "Add Users";
//                             }
                          
                        //     function Showdata ()
                            
                        //     {
                        //     let listOfUsers = "";
                        //     for(var i = 0; i < listArr.length; i++){
                        //     listOfUsers += 
                        //     `<li>
                        //         <span>User Name:</span> ${listArr[i].name}
                        //         <span> Age:</span> ${listArr[i].age}
                        //         <button onclick = updateData(${i})>Edit</button>
                        //         <button onclick = "del(${i})" id="delete">Delete</button>
                        //     </li>`;
                        //     toDolist.innerHTML = listOfUsers;
                            
                        //     }
                        // }
//                          }else if(userValue.length > 10 &&
//                                 (ageNumber > 0 && ageNumber <= 100)){
//                                 msg.style.display = "block";
//                                 msg.innerHTML = "The User Name Should be Less than 10 Letters";
                                            
//                         }else if(userValue.length <= 10 &&
//                                 (ageNumber <= 0 || ageNumber > 100)){
//                                 msg.style.display = "block";
//                                 msg.innerHTML = "The User age should be from 1 to 100";
                                            
//                         }else{
//                                 msg.style.display = "block";
//                                 msg.innerHTML = "The User Name Should be Less than 10 Letters<br>The User age should be from 1 to 100";
//                                         }
                                
//                 }else if(userValue && !ageNumber){
//                     msg.style.display = "block";
//                     msg.innerHTML = "Please Enter Your Age";
                                    
//                 }else if(!userValue && ageNumber){
//                     msg.style.display = "block";
//                     msg.innerHTML = "Please Enter Your Name";
                                    
//                 } else{
//                     msg.style.display = "block";
//                     msg.innerHTML = "Please Enter Data";
//                                 }
                                                        
//                             }
                    
            
           
            

// function Showdata ()

// {
//     let listOfUsers = "";
//     for(var i = 0; i < listArr.length; i++){
//     listOfUsers += 
//     `<li>
//         <span>User Name:</span> ${listArr[i].name}
//         <span> Age:</span> ${listArr[i].age}
//         <button onclick = updateData(${i})>Edit</button>
//         <button onclick = "del(${i})" id="delete">Delete</button>
//     </li>`;
    
//     }
//     toDolist.innerHTML = listOfUsers;
// }
// Showdata()



// function deletedate(i)
// {
//     listArr.splice(i,1);
// Localstorge.product = Json.stringify(listArr);
// Showdata()
// }


// function updateData(i){
    
//     user.value = listArr[i].name;
//     age.value =  listArr[i].age;
//     btn.innerHTML = "save";
//     mood = " update";
//     tmp = i;
//     scroll ({
//         top : 0,
//         behavior:"smooth"
//     })
// }



// // search.value ="";
// let listOfUsers = "";
// for(var i = 0; i < listArr.length; i++){
//     if(listArr[i].name.includes(value.toLowerCase())){
//         listOfUsers += 
//         `<li>
//             <span>User Name:</span> ${listArr[i].name}
//             <span> Age:</span> ${listArr[i].age}
//             <button onclick = updateData(${i})>update</button>
//             <button onclick = del(${globalId})>Delete</button>
//         </li>`;
        
        
//     }
// }
// toDolist.innerHTML = listOfUsers;

// setTimeout(
//     search.onclick = function(){
//         let listOfUsers = "";
//             for(var i = 0; i < listArr.length; i++){
//             listOfUsers += 
//             `<li>
//                 <span>User Name:</span> ${listArr[i].name}
//                 <span> Age:</span> ${listArr[i].age}
//                 <button onclick = updateData(${i})>update</button>
//                 <button onclick = del(${i})>Delete</button>
//             </li>`;
//             toDolist.innerHTML = listOfUsers;
            
//             }
//         }
//    , 5000);


//  /Delete Function
//  function del(i) {
//      console.log(i)
     
//      //remove from Dom
     
//      let listItems = toDolist.querySelector('li');
//      listItems.addEventListener('click', () =>{
//          listItems.remove();
//      } )
 
//      //remove from Arr
//          listArr.splice(i,1);
         
//      }





function Showdata ()

{
    let listOfUsers = "";
    for(var i = 0; i < listArr.length; i++){
    listOfUsers += 
    `<li>
        <span>User Name:</span> ${listArr[i].name}
        <span> Age:</span> ${listArr[i].age}
        <button onclick = updateData(${i})>Edit</button>
        <button onclick = "del(${i})" id="delete">Delete</button>
    </li>`;
    
    }
    toDolist.innerHTML = listOfUsers;
  }
 Showdata()

