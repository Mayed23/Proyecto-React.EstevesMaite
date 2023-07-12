const misRespuestos = [
    {id: "1", nombre: "KIT Bomba de Gasolina", modelo: "Aveo", precio: 5,stock:"5",  img: "../public/kitbomba.png", idCategoria: "1" },    
    {id: "2", nombre: "KIT Bomba de Gasolina", modelo: "Lumina", precio: 15,stock:"12",  img: "../public/kitbombalumina.png", idCategoria: "1" },    
    {id: "3", nombre: "KIT Bomba de Gasolina", modelo: "Silverado", precio: 30,stock:"8",  img: "../public/kitsilverado.png", idCategoria: "1"},
    {id: "4", nombre: "KIT Bomba de Gasolina", modelo: "Spark", precio: 15,stock:"10",  img: "../public/kitspark.png", idCategoria: "1"},
    {id: "5", nombre: "KIT Bomba de Gasolina", modelo: "Spark01", precio: 18,stock:"6",  img: "../public/kitspark-O1.png", idCategoria: "1"},
    {id: "6", nombre: "KIT Bomba de Gasolina", modelo: "Swin", precio: 15, stock:"12", img: "../public/kitswin.png", idCategoria: "1"},
    {id: "7", nombre: "KIT Bomba de Gasolina", modelo: "Spectrum", precio: 20, stock:"3", img: "../public/kitspectrun.png", idCategoria: "1"},
    {id: "8", nombre: "Filtro de Gasolina", modelo: "Optra", precio: 8,stock:"6",  img: "../public/filtrooptra.png", idCategoria:"2"},
    {id: "9", nombre: "Filtro de Gasolina", modelo: "Corsa", precio: 8,stock:"8",  img: "../public/filtrocorsa.png", idCategoria:"2"},     
    {id: "10", nombre: "Filtro de Gasolina", modelo: "Aveo", precio: 5,stock:"7",  img: "../public/filtroexternoaveo.png", idCategoria:"2"},     
    {id: "11", nombre: "Filtro de Gasolina", modelo: "LU D-Max", precio: 12, stock:"10", img: "../public/filtroluvdmax.png", idCategoria:"2"},
    
]

export const getRepuestos = () => {
    return new Promise((res)=> {
        setTimeout( ()=> {
            res(misRespuestos)
        },2000)    
    })
   
}


export const getUnRepuestos = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const repuesto = misRespuestos.find(repto => repto.id === id)
            resolve(repuesto)
        },2000)
    })    
   
}

export const getRepuestosCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout( () => {
            const repuestosCategoria = misRespuestos.filter(repto => repto.idCategoria === idCategoria)
            resolve(repuestosCategoria)
        },200)
        
    })
}





