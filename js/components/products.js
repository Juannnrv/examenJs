
export const allAbrigos = async (infoProduct) => {
    console.log(infoProduct);
    let data = infoProduct.abrigo;

    let plantilla = "";
    data.map((infoProduct) => {
        plantilla += /*html*/ `
        <div class="product_item">
            <img src=${infoProduct.imagen}>
            <div class="item_info">
                <p>${infoProduct.nombre}</p>
                <div class="info_price">
                    <small>$ ${infoProduct.precio}</small>
                    <button class="add" data-id=${infoProduct.id} >Agregar</button>
                </div>
            </div> 
        </div>`;
    });
    // console.log(plantilla);
    return plantilla;
}

export const allCamisas = async (infoProduct) => {
    // console.log(infoProduct);
    let data = infoProduct.camiseta;
    // console.log(data);

    let plantilla = "";
    data.map((infoProduct) => {
        plantilla += /*html*/ `
        <div class="product_item">
            <img src=${infoProduct.imagen}>
            <div class="item_info">
                <p>${infoProduct.nombre}</p>
                <div class="info_price">
                    <small>$ ${infoProduct.precio}</small>
                    <button class="add" data-id=${infoProduct.id} >Agregar</button>
                </div>
            </div> 
        </div>`;
    });
    // console.log(plantilla);
    return plantilla;
}

export const allPantalones = async (infoProduct) => {
    // console.log(infoProduct);
    let data = infoProduct.pantalon;

    let plantilla = "";
    data.map((infoProduct) => {
        plantilla += /*html*/ `
        <div class="product_item">
            <img src=${infoProduct.imagen}>
            <div class="item_info">
                <p>${infoProduct.nombre}</p>
                <div class="info_price">
                    <small>$ ${infoProduct.precio}</small>
                    <button class="add" data-id=${infoProduct.id} >Agregar</button>
                </div>
            </div> 
        </div>`;
    });
    // console.log(plantilla);
    return plantilla;
}
