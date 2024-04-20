// pesudocodigo para el loguin de numeros aleatorios

/* la primera vez que se cargue la pagina se crearan los botones dinamicamente con js.
cada que el usuario recargue la pagina se volveran a crear los botones en  pero en ordenes aleatorios.
tambien cada que el usuario presione el boton de enviar datos se volveran a crear los botones aleatoriamente pero con un delay de 3 segundos

*/


const divContainer = document.querySelector('.div-container')
const inputNumber = document.querySelector('.input-number')
const positions = [0,1,2,3,4,5,6,7,8,9]
const sendButton = document.createElement('button')
sendButton.innerText = 'sendData'
sendButton.classList.add('send-data')
const deleteButton = document.createElement('button')
deleteButton.innerText = 'delete X'
deleteButton.classList.add('delete-button')
let tempo 



document.addEventListener('DOMContentLoaded', (e) => {
    // alterando el orden de los numeros del arreglo
    positions.sort(() => numbersRandomPosition())
    console.log(positions);
    let text = ''
    // crear dinamicamente los botones
    positions.forEach(number => {
        text+=`
        <button class="button-child" id=${number}>${number}</button>
        `
    })
    divContainer.innerHTML = text
    divContainer.insertAdjacentElement('beforeend', deleteButton)
    divContainer.insertAdjacentElement('afterend', sendButton)

    const buttonsChild = document.querySelectorAll('.div-container button')
    buttonsChild.forEach(button => button.addEventListener('click', buttonsPrint))

})


// funcion para alterar el orden de los numeros en el arreglo

function numbersRandomPosition() {
    return Math.floor(Math.random()-0.5)
}

// funcion para los botones
function buttonsPrint(button) {
    console.log(button.target);
    if(button.target.classList.contains('delete-button')) {
        inputNumber.value = inputNumber.value.slice(0,inputNumber.value.length-1)
    }
    else{
        if(inputNumber.value.length <=5){
            let number = button.target.textContent
            inputNumber.value+= number 
            console.log(inputNumber.value);
        }
    }
  
    
}

sendButton.addEventListener('click', (e) => {
    if(inputNumber.value.length <= 5){
        alert('inserta tus datos')
        return
    }
    clearTimeout(tempo)
    alert('wait please')
    deleteButton.disabled = true
    e.target.disabled = true
    tempo = setTimeout(() => {
        location.reload()
    }, 3000)
   
})

