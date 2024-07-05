import { carProducts } from './components/carrito.js';
import { allAbrigos, allCamisas, allPantalones } from './components/products.js';
import { getallAbrigos } from './modules/api.js';


addEventListener('DOMContentLoaded', async() => {
    let products = await getallAbrigos();
    console.log(products);

    document.querySelector(".title").textContent = "Todos los productos"
    document.querySelector(".products1").innerHTML = await allAbrigos(products);
    document.querySelector(".products2").innerHTML = await allCamisas(products);
    document.querySelector(".products3").innerHTML = await allPantalones(products);

    document.querySelector("#todos").addEventListener('click', async() => {
        document.querySelector(".title").textContent = "Todos los productos"
        document.querySelector(".products1").innerHTML = await allAbrigos(products);
        document.querySelector(".products2").innerHTML = await allCamisas(products);
        document.querySelector(".products3").innerHTML = await allPantalones(products);
    });

    document.querySelector("#abrigo").addEventListener('click', async() => {
        document.querySelector(".title").textContent = "Abrigos"
        document.querySelector(".products1").innerHTML = await allAbrigos(products);
        document.querySelector(".products2").innerHTML = ""
        document.querySelector(".products3").innerHTML = ""
    });

    document.querySelector("#camisa").addEventListener('click', async() => {
        document.querySelector(".title").textContent = "Camisetas"
        document.querySelector(".products1").innerHTML = await allCamisas(products);
        document.querySelector(".products2").innerHTML = ""
        document.querySelector(".products3").innerHTML = ""
    });

    document.querySelector("#pantalon").addEventListener('click', async() => {
        document.querySelector(".title").textContent = "Pantalones"
        document.querySelector(".products1").innerHTML = await allPantalones(products);
        document.querySelector(".products2").innerHTML = ""
        document.querySelector(".products3").innerHTML = ""
    });

    document.querySelector(".carrito").addEventListener('click', async(e) => {
        document.querySelector(".main").innerHTML = await carProducts(products);
    })

    // document.querySelectorAll(".add").addEventListener('click', (e) => {
    //     console.log(e.target.dataset.id)
    // })
})