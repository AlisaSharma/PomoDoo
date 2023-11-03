//varaible of timers//
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var bm =document.getElementById('b_minutes');
var bs =document.getElementById('b_seconds');

//variable of todo list//
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

//task

document.addEventListener('DOMContentLoaded', getTodos);

//store reference to a timer variable

var startTimer;

start.addEventListener('click',function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    }
    else{
        alert('Timer is already running');
    }
})

reset.addEventListener('click',function(){
        bm.innerText = 5;
        bs.innerText ='00';
        
       stopInterval();
       startTimer = undefined;
     }
)

stop.addEventListener('click',function(){
    stopInterval();
    startTimer = undefined;
})


//start timer function//
function timer(){
     //break timer countdown
      if(bs.innerText != 0){
      bs.innerText--;
     }  else if(bm.innerText != 0 && bs.innerText == 0){
           bs.innerText = 59;
           bm.innerText--;
      }
      if(bm.innerText==0 && bs.innerText==0){
          window.location.replace("http://127.0.0.1:5501/index.html")
      }
}


//stop timer function//

function stopInterval(){
    clearInterval(startTimer);
}
//add task 
//addToDoButton.addEventListener('click', function(){
    //var paragraph = document.createElement('p');
   // paragraph.classList.add('paragraph-styling');
   // paragraph.innerText = inputField.value;
    //toDoContainer.appendChild(paragraph);
    //inputField.value = "";
   // paragraph.addEventListener('click', function(){
       // paragraph.style.textDecoration = "line-through";
   // })
   // paragraph.addEventListener('dblclick', function(){
        //toDoContainer.removeChild(paragraph);
    //})
//})

//music
var song = document.getElementById('song1');
var icon = document.getElementById('icon');

icon.onclick = function(){
    if(song.paused){
        song.play();
        icon.src = "img/pause.jpg";
    }else{
        song.pause();
        icon.src = "img/play.jpg";
    }
}

//add task 
addToDoButton.addEventListener('click', function(){
    saveTodos(inputField.value);
    let values = inputField.value;
    let paragraph = document.createElement('p');

    paragraph.addEventListener('dblclick', function(){
        console.log(data);
        console.log("double c");
        console.log(inputField.values);
        removeTodos(values);
        toDoContainer.removeChild(paragraph);
       
    })

    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    //inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    
   
})
// save data to local storage
function saveTodos(inputField) {
    let todos;
    if(localStorage.getItem('todos') === null){
        //create one if none
        todos = [];
    }else{
        //if yes get data
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(inputField); 
    localStorage.setItem('todos', JSON.stringify(todos));
}
 
function getTodos(inputField){
    let todos;
    if(localStorage.getItem('todos') === null){
        //create one if none
        todos = [];
    }else{
        //if yes get data
        todos = JSON.parse(localStorage.getItem('todos'));
    }
   todos.forEach(function(inputField){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField;
    toDoContainer.appendChild(paragraph);
    //console.log(inputField);
    //inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        //console.log(inputField);
        removeTodos(inputField)
        toDoContainer.removeChild(paragraph);
    })

})
}
 
function removeTodos(inputField){
        let deletedData = JSON.stringify(inputField);
        let todosArr = JSON.parse(localStorage.getItem('todos'));
        todoArr = todosArr.filter(function(item) {
            return item !== inputField;
        })
        localStorage.setItem('todos', JSON.stringify(todoArr));
    }
  
