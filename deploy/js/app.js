const database = firebase.database()


function addTodo  ()
    { 
        let list = document.getElementById('list').value;
        // database.ref(`todoApp/`).push(list);
        // document.getElementById('list').value = '';

    if(list === ""){
        alert(" Firstly Write Something ");
    }
    else {
        
     let list = document.getElementById('list').value;
     database.ref(`todoApp/`).push(list);
     document.getElementById('list').value = '';
    }

}

function myTodo() {
    var userdata = localStorage.getItem('userData');
    userdata = JSON.parse(userdata);
    var allTodoes = document.getElementById('todolist');

    
    database.ref(`todoApp/`).on('child_added', (snapshot) => {
        // console.log('abcd', snapshot.val());
        localStorage.setItem('todo', JSON.stringify(snapshot.val()));
        var userdata = localStorage.getItem('todo');
        userdata = JSON.parse(userdata);
        var createdLi = crateElement(userdata, 'LI', 'list-group-item')
        console.log( createdLi);
        allTodoes.appendChild(createdLi);
        document.getElementById('todolist').style.marginTop = '30px'
    })
}

function crateElement(text, element, className) {
    var li = document.createElement(element);
    var textNode = document.createTextNode(text);
    li.appendChild(textNode);
    li.setAttribute('class', className);
    return li;

    
}

function deleteData(){
    alert( 'Are You Sure All Data Will Be Deleted');
    let d = document.getElementById('todolist'). innerHTML = '';

    database.ref(`todoApp/`).remove('');
   }