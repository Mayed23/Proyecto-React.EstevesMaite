import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../Service/Config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css"

const Checkout = () => {

    const { bolsaCompra, vaciarBolsaCompra, total } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [error, setError] = useState("");
    const [orden, setOrden] = useState("");
    const limpiarCampos = () => {
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEmailConfirm("");
    }

    const manejadorFormulario = (event) => {

        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
            setError("Por favor, completar todos los Campos");
            return;
        }

        if (email !== emailConfirm) {
            setError("Email no coinciden, vuelve a ingresar el email")
            return;
        }

        const ordenId = {
            items: bolsaCompra.map(repuesto => ({
                id: repuesto.Item.id,
                nombre: repuesto.Item.nombre,
                cantidad: repuesto.cantidad
            })),

            total: total,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date(),

        }

        Promise.all(
            ordenId.items.map(async (repuestoOrden) => {
                const repuestoRef = doc(db, "inventario", repuestoOrden.id);
                const repuestoDoc = await getDoc(repuestoRef);
                const stockActual = repuestoDoc.data().stock;
                await updateDoc(repuestoRef, {
                    stock: stockActual - repuestoOrden.cantidad,
                });


            })
        )

            .then(() => {
                addDoc(collection(db, "ordenes"), ordenId)
                    .then(docRef => {
                        setOrden(docRef.id);
                        vaciarBolsaCompra();
                        limpiarCampos();

                    })
                    .catch(error => {
                        console.log("Error al crear Orden de Compra", error);
                        setError("Error al crear la Orden")
                    })

            })
            .catch(error => {
                console.log("error al actualizar el Stock", error);
                setError("El stock de Repuestos no se ha actualizado correctamente, por favor, vuelva a intentar su compra");
            })
    }

    return (

        <div>
            <h2>Checkout</h2>

            <form onSubmit={manejadorFormulario} className="formulariogit ">
                {bolsaCompra.map(repuesto => (
                    <div key={repuesto.Item.id}>
                        <p>
                            {repuesto.Item.nombre} x {repuesto.cantidad}
                        </p>
                        <p>Precio: $ {repuesto.Item.precio} </p>
                    </div>

                ))}
                <h3>Total: ${total} </h3>
                <hr />

                <div className="form-grupo">
                    <label htmlFor=""> Nombre: </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="form-grupo">
                    <label htmlFor=""> Apellido: </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="form-grupo">
                    <label htmlFor=""> Teléfono: </label>
                    <input type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="form-grupo">
                    <label htmlFor=""> Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-grupo">
                    <label htmlFor=""> Email Confirmación: </label>
                    <input type="email" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} />
                </div>

                {error && <p style={{ color: "red" }}> {error} </p>}
                <button className="btn-cartItem" type="submit"> Finalizar Compra </button>
            </form>

            {
                orden && (
                    <strong> ¡Gracias, por tu compra! Número de Orden : {orden} </strong>
                )
            }
        </div>
    )
}

export default Checkout
