import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

export function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    function addToCart(product)
    {
        const existing = cart.find(val=>val.id===product.id);
        
        if(existing)
        {
            const updatedCart = cart.map((val)=>{
                if(val.id===product.id)
                {
                    return {...val,quantity:val.quantity+1};
                }

                return {...val};
            })

            setCart(updatedCart);
            return;
        }

        const updatedCart = [...cart,{...product, quantity: 1}];
        setCart(updatedCart);
    }

    function removeFromCart(product)
    {
        const existing = cart.find(val=>val.id===product.id);
        
        if(existing.quantity ===   1)
        {
            const updatedCart = cart.filter(val=>val.id!==product.id);
            setCart(updatedCart);
            return;
        }

        const updatedCart = cart.map((val)=>{
            if(val.id===product.id)
            {
                return {...val,quantity: val.quantity-1};
            }

            return {...val};
        });
        setCart(updatedCart);

    }

    function totalPriceofCart()
    {
        let total = 0;
        for(let i=0;i<=cart.length-1;i++)
        {
            total += (cart[i].quantity * cart[i].price);
        }

        return total;
    }

    return (<CartContext.Provider value={{cart, addToCart, removeFromCart, totalPriceofCart}}>
        {children}
    </CartContext.Provider>)

}
