const input = document.querySelector('input');
const todoList = document.getElementById('todoList')

const clicouEnter = (evento) => {
    if(evento.key ==='Enter'){
        const memoria = evento.target.value;
        localStorage.setItem(memoria,'value');
        const recupara = localStorage.getItem(memoria,'value')
        console.log(typeof recupara)
    }
}

input.addEventListener('keypress',clicouEnter)