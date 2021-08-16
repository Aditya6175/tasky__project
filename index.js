const taskcontainer = document.querySelector(".task__container");

//Global store
let globleStore = [];




const newCard = ({id,imageurl,tasktitle,taskdescription,tasktype}) => ` <div class="col-md-6 col-lg-4" id=${id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button"  id=${id} class="btn btn-outline-danger" onclick="deleteCard.apply(this, arguments)"> <i class="fas fa-trash-alt" id=${id} onclick="deleteCard.apply(this, arguments)" ></i></button>
  </div>
  <img src=${imageurl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${tasktitle}</h5>
    <p class="card-text">${taskdescription}</p>
    <span class="badge bg-primary">Amazing</span>
  </div>
  <div class="card-footer text-muted">
    <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
  </div>
</div>`;

const loadInitialTaskcards = () => {
   const getInitailData = localStorage.getItem("tasky");
  if(!getInitailData) return;

   const {cards}= JSON.parse(getInitailData);

   cards.map((cardObject) =>{
     const creatNewCard = newCard(cardObject);
    taskcontainer.insertAdjacentHTML("beforeend", creatNewCard);
    globleStore.push(cardObject);

   }); 


};

const updateLocalStorage = () =>  localStorage.setItem("tasky",JSON.stringify({ cards :  globleStore }));


const savechanges = () => {                                                                   //creating a function
    const taskdata = {                                                                       //created an object
        id: `${Date.now()}`,                                                                //unique number for id.Calling Date object and .now method
        imageurl:document.getElementById("Imageurl").value,
        tasktitle:document.getElementById("tasktitle").value,
        tasktype:document.getElementById("tasktype").value,
        taskdescription:document.getElementById("taskdescription").value,
    };

    const creatNewCard = newCard(taskdata); 

    taskcontainer.insertAdjacentHTML("beforeend", creatNewCard);
    globleStore.push(taskdata);


    //add to local storage
    updateLocalStorage();


  };


const deleteCard = (event) => {

  //id 
  event = window.event;
  const targetID = event.target.id;
  const tagName = event.target.tagName; //BUTTON
  

  //search the globalstore, remove the objecy which matches with the id
  globleStore = globleStore.filter((cardObject) => cardObject.id !== targetID);

   updateLocalStorage();


   if(tagName === "BUTTON"){
     
     return taskcontainer.removeChild(event.target.parentNode.parentNode.parentNode);
     
   }
  
   return taskcontainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);

};

//Fratures
//open task
//Edit task
