const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const tasksList = document.querySelector('.collection');

form.addEventListener('submit', Submit);
tasksList.addEventListener('click', deleteTask);


function deleteTask(event){
    if(event.target.textContent == 'X');{
        if(confirm("Do you want to delete this book?")){
            (event.target.parentElement.remove());
        }
    }
}


function Submit(event){
    // input value
    const task = taskInput.value;
    // create <li> element
    const li = document.createElement('li');
    // devine <li> CSS class
    li.className = "collection-item";
    // create text value for <li>
    const text = document.createTextNode(task);
    // add text value to <li>
    li.appendChild(text);
    // create link element
    const link = document.createElement('a');
    // set href attribute
    link.setAttribute('href', '#');
    // add CSS style
    link.className = 'secondary-content';
    // add X text to link
    link.appendChild(document.createTextNode('X'));
    // add link to <li>
    li.appendChild(link);


    // find <ul> DOM component
    const ul = document.querySelector('.collection');
    // add <li> to <ul>

    ul.appendChild(li);
    // clear input value
    taskInput.value = '';
    // form submit event control
    event.preventDefault();
}