// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// var books =  document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach((items) => {
//     console.log(items)
// })

///////////////////////////////////////////////////////////////////////

// var books = document.querySelectorAll('#book-list li .name')

// books.forEach((item) => {
//     item.textContent += '(book title)';
// })

// const bookList = document.querySelector('#book-list')
// //bookList.innerHTML = '<h2>Books and more books</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>';


////////////////////////////////////////////////////////////////////////

// const banner =  document.querySelector('#page-banner');
// console.log('#page-banner node type is', banner.nodeType);
// console.log('#page-banner node name is', banner.nodeName);
// console.log('#page-banner node has child nodes', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

//////////////////////////////////////////////////////////////////////

// const bookList = document.querySelector('#book-list');
// console.log('the parent node is', bookList.parentNode);
// console.log('the parent element is', bookList.parentElement);
// console.log('the children element is', bookList.children);

/////////////////////////////////////////////////////////////////////

// const bookList = document.querySelector('#book-list');

//  console.log('book-list next sibling is', bookList.nextSibling);
//  console.log('book-list next elemsibling is', bookList.nextElementSibling);

//  console.log('book-list previous sibling is', bookList.previousSibling);
//  console.log('book-list previousssss elemsibling is', bookList.previousElementSibling);

//  bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool'


/////////////////////////////////////////////////////////////////////////


// const link =  document.querySelector('#page-banner a');

// link.addEventListener('click', (e) => {
//     alert('your going in Youtube page');
// });


/////////////////////////////////////////////////////////////////////////////////
//maganda pang delete ng row sa table
const list = document.querySelector('#book-list ul');

list.addEventListener('click', (e) =>{
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})


/////////////////////////////////////////////////////////////////////////
//pang add ng item sa text box papunta tables

const addForm =  document.forms["add-book"];

addForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const value =  addForm.querySelector('input[type="text"]').value;
 
    //create elements para sa tables
    const li =  document.createElement('li');
    const bookName =  document.createElement('span');
    const deleteBtn =  document.createElement('span');
    
    //add content
    deleteBtn.textContent ='delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});



//////////////////////////////////////////////////////////////////////////
//para sa checkbox

const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', (e) =>{
    if(hideBox.checked){
        list.style.display = "none";
    }
    else{
        list.style.display = "initial";
    }

});


//////////////////////////////////////////////////////////////////////////
//para sa search bar

const searchBar =  document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e) =>{
    const term =  e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1 ){
            book.style.display = "block";
        }
        else{
            book.style.display = "none";
        }
    });
    
});






///////////////////////////////////////////////////////////////////////////
//para malaman kung ano ba classname or attributes

// var book =  document.querySelector('li:first-child .name');
// book.getAttribute('class');


