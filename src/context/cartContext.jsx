import React, {useState, createContext} from "react";

const cartContex = createContext();

export default function CartContexProvider({children}){

    const [cart, setCart] = useState([]);

    function addItem(item, count){
        if(count <= item.stock){
            if(isInCart(item.id)){
                let newCart = cart.map((el) => {
                    if(el.id === item.id){
                        el.count += count
                        return el;
                    }else{
                        return el;
                    }
                })
                setCart(newCart);
            }else{
                let newCart = cart.map(item => item);
                const itemCart = ({...item, count})
                newCart.push(itemCart);
                setCart(newCart)
        }
    }else{
        alert("se paso del stock")
    }
    }

    function totalItemsInCart(){
        let total = 0;
        cart.forEach(item => total += item.count);
        console.log(total)
        return total;
    }

    function clearCart(){
        return setCart([]);
    }

    function removeItem(itemId){
        return setCart(cart.filter(item => item.id !== itemId))
    }

    function isInCart(id){
        let findItem = cart.some(item=>item.id === id);
        return findItem;
    }



    return (
        <cartContex.Provider value={{cart, addItem, totalItemsInCart, removeItem, clearCart}}>
            {children}
        </cartContex.Provider>
    )
}

export {cartContex}