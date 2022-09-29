const items=[
    {
        id : 1,
        title : "Taza de League of Legends",
        price : 2500,
        detail : "Taza personalizada de Lol, ahora puedes disfrutar tu meriendas y desayunos acompañado de tu campeón favorito",
        stock : 20,
        category : "bazar",
        stock : 10,
        img : "https://http2.mlstatic.com/D_NQ_NP_768489-MLA42985755552_082020-O.jpg"
    },
    {
        id : 2,
        title : "Remeras animes",
        price : 900,
        detail : "Elige la remera de tu anime favorito. ¡Comprala, te va a encantar!",
        stock : 45,
        category : "ropa",
        img : "https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/tokio-ghoul1-aa3b5b635ce46f430316330162853999-1024-1024.jpg"
    },
    {
        id : 3,
        title : "Llaveros gamer/anime",
        price : 599,
        detail : "¡Compra ya y llevate estos llaveros de tus heroes y personajes favoritos, no te vas a arrepentir!",
        stock : 100,
        category : "accesorios",
        img : "https://img.joomcdn.net/c954a63d3d0155f4a5052ab2e40e80ff17b13d6d_original.jpeg"
    },
    {
        id : 4,
        title : "Taza magica de Harry Potter",
        price : 2300,
        detail : "Taza personalizada de Harry Potter, ahora puedes disfrutar tu meriendas y desayunos acompañado de tu personaje favorito",
        stock : 8,
        category : "tazas",
        img : "https://http2.mlstatic.com/D_NQ_NP_711756-MLA50572122920_072022-W.jpg"
    },
    {
        id : 5,
        title : "Campera de Assasins Creed",
        price : 8500,
        detail : "¡Comprala ahora y convierte el el proximo asesino!",
        stock : 18,
        category : "ropa",
        img : "https://http2.mlstatic.com/D_NQ_NP_794177-CBT51420211048_092022-W.jpg"
    }
];

export function loadProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 1500);
    })
}


export function loadSingleProduct(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let findProduct = items.find((item) => {
                console.log("find", item.id, id)
                return item.id === Number(id)
            })
            if(findProduct)resolve(findProduct)
            else reject(new Error("No se encontro el producto"))
        }, 1500)
    })
}

export default loadProducts