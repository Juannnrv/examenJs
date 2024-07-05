

const apiUrl = "https://6687d8990bc7155dc019549e.mockapi.io/campusShop";

export const getallAbrigos = async () => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    
    const res = await fetch(apiUrl, options);
    const data = await res.json();
    // console.log(data[0]);
    return data[0];
}