//Variables
let user = document.getElementById("user");
let age = document.getElementById("age");
let btn = document.getElementById("btn");
let toDolist = document.getElementById("usersList");
let msg = document.getElementById("msg");
let search = document.getElementById("search");
let globalId = 1;
let listArr = [] ;
let mood = "add";
let tmp ;




//Adding Function
function add(){
    msg.style.display = "none";
    let userValue = user.value.toLowerCase().trim();
    let ageNumber = +(age.value);

    
    if(userValue && ageNumber >= 0){

        
        if(userValue.length <= 10 &&
            (ageNumber > 0 && ageNumber <= 100)){ 

                let newUsers = {
                    id   : globalId, 
                    name : userValue, 
                    age  : ageNumber 

                } ;
            
                //switch bet Add &Edit
                if(mood === "add"){
                    listArr.push(newUsers);
                    
                    localStorage.setItem('item', JSON.stringify(listArr));
                }else{
                    listArr[tmp] = newUsers;
                    mood = "add";
                    btn.innerHTML = "Add Users";
                }

                //clear Data
                globalId += 1;
                user.value = "";
                age.value = "";
                



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
    Showdata()
}
//OnClick Event
btn.onclick = add 


//Delete Function
function del(i){
    listArr.splice(i,1);

Showdata()
}





//Update Function
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


//search function
function searchData(value){
    let listItems = "";
    for(var i = 0; i < listArr.length; i++){
        if(listArr[i].name.includes(value.toLowerCase())){
            listItems += 
            `<li 
                id=${globalId.toString()}>
                <span>User Name:</span>${listArr[i].name}
                <span> Age:</span> ${listArr[i].age} 
                <button onclick=updateData(${i})>Edit</button> 
                <button onclick=del(${i})>Delete</button> 
                </li>`;

                toDolist.innerHTML = listItems;
        }

    }

    }


    function resetData(){
        search.value = "";
        search.focus();
        Showdata();
    }




// showing Data Function
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

