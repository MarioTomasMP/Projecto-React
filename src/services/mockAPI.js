const items=[
    {
        id : 1,
        title : "Taza de League of Legends",
        price : 2500,
        detail : "Taza personalizada de Lol, ahora puedes disfrutar tu meriendas y desayunos acompañado de tu campeón favorito",
        stock : 20,
        category : "bazar"
    },
    {
        id : 2,
        title : "Remeras animes",
        price : 900,
        detail : "Elige la remera de tu anime favorito. ¡Comprala, te va a encantar!",
        stock : 45,
        category : "ropa"
    },
    {
        id : 3,
        title : "Llaveros gamer/anime",
        price : 599,
        detail : "¡Compra ya y llevate estos llaveros de tus heroes y personajes favoritos, no te vas a arrepentir!",
        stock : 100,
        category : "accesorios"
    },
    {
        id : 4,
        title : "Taza de Harry Potter",
        price : 2300,
        detail : "Taza personalizada de Harry Potter, ahora puedes disfrutar tu meriendas y desayunos acompañado de tu personaje favorito",
        stock : 8,
        category : "tazas"
    },
    {
        id : 5,
        title : "Campera de Assasins Creed",
        price : 8500,
        detail : "¡Comprala ahora y convierte el el proximo asesino!",
        stock : 18,
        category : "ropa"
    }
];

export function loadProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2500);
    })
}

export default loadProducts