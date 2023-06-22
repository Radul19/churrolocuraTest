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
        "price": "5.00$",
        "description": "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
        "category":"Churros",
        "units":"5",
        "image": churro1
    },
    {
        "title": "Churros salados con salsa",
        "price": "9.99$",
        "description": "Lorem ipsum dolor sit amet consectetur. At tellus posuere ut egestas mi. Mauris mattis tortor rutrum aenean tempor. Vestibulum sed adipiscing sollicitudin lectus ante rhoncus. In lectus nunc vitae hendrerit volutpat facilisis.",
        "category":"Churros",
        "units":"8",
        "image": churro2
    },
    {
        "title": "Churros gourmet",
        "price": "15.00$",
        "description": "Lorem ipsum dolor sit amet consectetur. Molestie vitae platea morbi pretium pretium. Ut gravida imperdiet condimentum amet gravida mi ullamcorper accumsan. Porta ullamcorper sed sagittis faucibus est felis sollicitudin diam.", 
        "category":"Churros",
        "units":"10",
        "image": churro3
    },
    {
        "title": "Churros mixtos",
        "price": "19.00$",
        "description": "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
        "category":"Churros",
        "units":"16",
        "image": churro4
    },
    {
        "title": "Pancakes de mora",
        "price": "12.00$",
        "description": "Lorem ipsum dolor sit amet consectetur. At tellus posuere ut egestas mi. Mauris mattis tortor rutrum aenean tempor. Vestibulum sed adipiscing sollicitudin lectus ante rhoncus. In lectus nunc vitae hendrerit volutpat facilisis.",
        "category":"Pancakes",
        "units":"8",
        "image": pancake1
    },
    {
        "title": "Pancakes de fresa",
        "price": "13.00$",
        "description": "Lorem ipsum dolor sit amet consectetur. Molestie vitae platea morbi pretium pretium. Ut gravida imperdiet condimentum amet gravida mi ullamcorper accumsan. Porta ullamcorper sed sagittis faucibus est felis sollicitudin diam.",
        "category":"Pancakes",
        "units":"8",
        "image": pancake2
    },
    {
        "title": "Pancakes con miel",
        "price": "7.00$",
        "description": "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
        "category":"Pancakes",
        "units":"6",
        "image": pancake3
    },
    {
        "title": "Barquilla sencilla",
        "price": "1.50$",
        "description": "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
        "category":"Barquillas",
        "units":"1",
        "image": icecream1
    },
    {
        "title": "Barquilla doble con adicionales",
        "price": "4.00$",
        "description": "Lorem ipsum dolor sit amet consectetur. At tellus posuere ut egestas mi. Mauris mattis tortor rutrum aenean tempor. Vestibulum sed adipiscing sollicitudin lectus ante rhoncus. In lectus nunc vitae hendrerit volutpat facilisis.",
        "category":"Barquillas",
        "units":"1",
        "image": icecream2
    },
    {
        "title": "Barquillón de sabores",
        "price": "8.00$",
        "description": "Lorem ipsum dolor sit amet consectetur. Molestie vitae platea morbi pretium pretium. Ut gravida imperdiet condimentum amet gravida mi ullamcorper accumsan. Porta ullamcorper sed sagittis faucibus est felis sollicitudin diam.",
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
        "title": "Pancakes del Amor",
        "price": "15.00$",
        "description": "Lorem ipsum dolor sit amet consectetur. Ornare nec quis ullamcorper in mauris erat. Ultricies urna pharetra enim neque luctus vitae duis lectus. Morbi purus facilisi nulla vitae nulla semper adipiscing. Ultricies eget semper maecenas faucibus at tellus adipiscing ut. Ullamcorper volutpat enim non ultrices eget at urna elit. Ullamcorper lacinia augue ac nunc aliquet nisi ipsum mus non.",
        "units":"2",
        "image": promo2
    },
    {
        "title": "Combo de Todo-en-uno",
        "price": "99.00$",
        "description": "Lorem ipsum dolor sit amet consectetur. In purus in laoreet quam libero sed tristique interdum. Sem adipiscing vestibulum elit at. Euismod purus risus sed lacus volutpat cursus orci viverra nibh. Interdum ullamcorper dignissim faucibus feugiat. Nulla donec pulvinar diam luctus nunc malesuada sapien elementum. Risus at aliquam cras luctus felis fusce. Malesuada purus nulla ullamcorper nulla platea nisi vitae consequat ullamcorper. Nulla interdum enim mauris proin nibh cras vitae. Enim cras consectetur tellus sollicitudin nibh tellus dignissim.",
        "units":"8",
        "image": promo3
    }
])