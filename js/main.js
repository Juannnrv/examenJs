import { allAbrigos, allCamisas, allPantalones } from './components/products.js';
import { getallAbrigos } from './modules/api.js';


addEventListener('DOMContentLoaded', async() => {
    let products = await getallAbrigos();
    console.log(products);

    document.querySelector(".products1").innerHTML = await allAbrigos(products);
    document.querySelector(".products2").innerHTML = await allCamisas(products);
    document.querySelector(".products3").innerHTML = await allPantalones(products);

    document.querySelector("#todos").addEventListener('click', async() => {
        document.querySelector(".products1").innerHTML = await allAbrigos(products);
        document.querySelector(".products2").innerHTML = await allCamisas(products);
        document.querySelector(".products3").innerHTML = await allPantalones(products);
    });

    document.querySelector("#abrigo").addEventListener('click', async() => {
        document.querySelector(".products1").innerHTML = await allAbrigos(products);
        document.querySelector(".products2").innerHTML = ""
        document.querySelector(".products3").innerHTML = ""
    });

    document.querySelector("#camisa").addEventListener('click', async() => {
        document.querySelector(".products1").innerHTML = await allCamisas(products);
        document.querySelector(".products2").innerHTML = ""
        document.querySelector(".products3").innerHTML = ""
    });

    document.querySelector("#pantalon").addEventListener('click', async() => {
        document.querySelector(".products1").innerHTML = await allPantalones(products);
        document.querySelector(".products2").innerHTML = ""
        document.querySelector(".products3").innerHTML = ""
    });

    document.querySelector(".carrito").addEventListener('click', () => {

    })
})