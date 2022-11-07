
export function loadProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 1000);
    })
}

export function loadProductsForCategory(category){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let findProductForCategory = items.filter((item)=>{
                return item.category === category;
            });
            setTimeout(()=>{
                if(findProductForCategory)resolve(findProductForCategory);
                else reject(new Error("Items no encontrados"));
            })
        }, 500);
    })
}


export function loadSingleProduct(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let findProduct = items.find((item) => {
                return item.id === Number(id)
            })
            if(findProduct)resolve(findProduct)
            else reject(new Error("Producto no encontrado"))
        }, 1500)
    })
}

export default loadProducts