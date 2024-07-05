
export const carProducts = async (infoProduct) => {
    if (sessionStorage === null || sessionStorage === undefined) {
        return /*html*/ `<h1>No termine 😥</h1>`;
    } else {
        return /*html*/ `<h1>Empty car 🛒</h1>`;
    }
}