const container = document.querySelector('#container');

for (i =0; i< 256; i++ ){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

const myDiv = document.querySelectorAll('.square');

for (let i = 0 ; i < 256; i++){
    myDiv[i].addEventListener('mouseenter', () => {   
        myDiv[i].style.backgroundColor = '#f95738';    
    });
}

const reset = document.querySelector('.reset');

    reset.addEventListener('click', () =>{
        for ( let i =0; i<256; i++){
            myDiv[i].style.backgroundColor = '#F4D35E';    

        }
    });






















