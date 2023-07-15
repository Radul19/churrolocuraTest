import { writable } from 'svelte/store';
import churro1 from '../../../public/churro1.png'
import churro2 from '../../../public/churro2.png'
import churro3 from '../../../public/churro3.png'
import churro4 from '../../../public/churro4.png'
import icecream1 from '../../../public/icecream1.png'
import icecream2 from '../../../public/icecream2.png'
import icecream3 from '../../../public/icecream3.png'
import pancake1 from '../../../public/pancake1.png'
import pancake2 from '../../../public/pancake2.png'
import pancake3 from '../../../public/pancake3.png'

import promo1 from '../../../public/promo1.png'
import promo2 from '../../../public/promo2.png'
import promo3 from '../../../public/promo3.png'


export const data = writable([
    {
        "title": "Churros Sencillos",
        "price": "2.50$",
        "description": "Churros tradicionales con azúcar y canela",
        "category":"Churros",
        "units":"10",
        "image": churro1
    },
    {
        "title": "Churros sencillos con topping",
        "price": "4.00$",
        "description": "Churros tradicionales con azúcar y canela con adicional de topping",
        "category":"Churros",
        "units":"10",
        "image": churro2
    },
    {
        "title": "Mini churros con sirope",
        "price": "15.00$",
        "description": "Churros pequeños cubiertos de azúcar y canela con un topping adicional", 
        "category":"Churros",
        "units":"10",
        "image": churro3
    },
    {
        "title": "Dulce Tentación",
        "price": "6.00$",
        "description": "Churros salados recubiertos con el topping de su preferencia",
        "category":"Churros",
        "units":"20",
        "image": churro4
    },
    {
        "title": "Barquilla sencilla",
        "price": "1.00$",
        "description": "Helado de vainilla",
        "category":"Barquillas",
        "units":"1",
        "image": icecream1
    },
    {
        "title": "Barquilla doble con adicionales",
        "price": "1.50$",
        "description": "Barquilla combinada con adicional de chispas de colores",
        "category":"Barquillas",
        "units":"1",
        "image": icecream2
    },
    {
        "title": "Locura Sundae",
        "price": "3.00$",
        "description": "Barquilla con trozos de churros azucarados con un adicional de topping",
        "category":"Barquillas",
        "units":"1",
        "image": icecream3
    }
])

export const promos = writable([
    {
        "title": "Combo familiar para fiestas",
        "price": "39.00$",
        "description": "Lorem ipsum dolor sit amet consectetur. Aliquet ut quam porta augue consectetur a. In magna suspendisse et fringilla massa imperdiet quis mi. Nunc lectus ac sodales duis justo et tellus. Sit odio varius vitae leo ut. Eget et eu velit egestas venenatis. Arcu sed maecenas sed at id. Eget ullamcorper suscipit et nulla id felis orci tincidunt donec.",
        "units":"5",
        "image": promo1
    },
    {
        "title": "Combo de tequeño",
        "price": "2.00$",
        "description": "Tequeños acompañados de bebida.",
        "units":"2",
        "image": promo2
    },
    {
        "title": "Combo de pastelitos de carne y papa con queso.",
        "price": "2.00$",
        "description": "Pastelitos rellenos de carne y papa con queso junto con una bebida",
        "units":"3",
        "image": promo3
    }
])