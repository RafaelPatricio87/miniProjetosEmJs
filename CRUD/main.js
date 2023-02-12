'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')
 // CRUD    create - read - update - delete

const tempClient = {
    nome: 'Rafel',
    email: 'rafaelpatricio2002@',
    celular: '478996422',
    cidade: 'Joinville'
}

const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client'))
    console.log(db_client)
    
    db_client.push(client)
    localStorage.setItem('db_client', JSON.stringify(db_client))
}

//eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)