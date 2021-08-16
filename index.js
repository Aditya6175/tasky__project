const taskcontainer = document.querySelector(".task__container");

//Global store
const globleStore = [];




const newCard = ({id,imageurl,tasktitle,taskdescription,tasktype}) => ` <div class="col-md-6 col-lg-4" id=$(id)>
<div class="card">
  <div class="ca rd-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
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
   const getInitailData = localStorage.tasky;
  if(!getInitailData) return;

   const {cards}= JSON.parse(getInitailData);

   cards.map((cardObject) =>{
     const creatNewCard = newCard(cardObject);
    taskcontainer.insertAdjacentHTML("beforeend", creatNewCard);
    globleStore.push(cardObject);

   }); 


};


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
    localStorage.setItem("tasky",JSON.stringify({ cards :  globleStore }));


  };
//ssue



//Fratures
//Delete modal feture
//open task
//Edit task