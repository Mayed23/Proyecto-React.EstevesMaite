import { useState, createContext } from "react";

export const CartContext = createContext({
    bolsaCompra: [],
    total: 0,
    cantidadTotal: 0
})


export const CartProvider = ({ children }) => {
    const [bolsaCompra, setBolsaCompra] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantiadTotal] = useState(0);

    console.log(bolsaCompra);

    const agregarRepuesto = (Item, cantidad) => {

        const repstoExistente = bolsaCompra.find(rpto => rpto.Item.id === Item.id);

        if (!repstoExistente) {
            setBolsaCompra(prev => [...prev, { Item, cantidad }]);
            setCantiadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (Item.precio * cantidad))

        } else {
            const bolsaActualizada = bolsaCompra.map(rpto => {
                if (rpto.Item.id === Item.id) {
                    return { ...rpto, cantidad: rpto.cantidad + cantidad };
                } else {
                    return rpto;
                }
            })

            setBolsaCompra(bolsaActualizada);
            setCantiadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (Item.precio * cantidad));
        }
    }

    const eliminarRepto = (id) => {
        const rptoEliminado = bolsaCompra.find(rpto => rpto.Item.id === id);
        const bolsaActualizada = bolsaCompra.filter(rpto => rpto.Item.id !== id);

        setBolsaCompra(bolsaActualizada);
        setCantiadTotal(prev => prev - rptoEliminado.cantidad);
        setTotal(prev => prev - (rptoEliminado.Item.precio * rptoEliminado.cantidad));
    }

    const vaciarBolsaCompra = () => {

        setBolsaCompra([]);
        setCantiadTotal(0);
        setTotal(0);

    }

    return (
        <CartContext.Provider value={{ bolsaCompra, total, cantidadTotal, agregarRepuesto, eliminarRepto, vaciarBolsaCompra }}>

            {children}

        </CartContext.Provider>
    )


}



