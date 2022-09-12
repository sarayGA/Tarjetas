import { data } from '../data/data.js'

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment()
let like = [];

document.addEventListener('DOMContentLoaded', () => {
    loadData(data)
})

const loadData = data => {
    data.forEach(albunes => {
        const { id, name, image } = albunes;
        templateCard.querySelector('h5').textcontent = name;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('.btn-dark').dataset.id = id;

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    }) 

    items.appendChild(fragment)
}
items.addEventListener('click', e => {
    addLike(e);
})
const addLike = e => {
    if (e.target.classList.contains('btn-dark')) {
        setLike(e.target.parentElement);
    }
}

const setLike = objeto => {
    const boton = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        cantidad: 0

    }
    if(like.hasOwnProperty(boton.id)){
        boton.cantidad = like[boton.id].cantidad + 1;
        objeto.querySelector('#like').textcontent = boton.cantidad;
    }
    like[boton.id] = {...boton};

    console.log(like[boton.id]);
}