import buzoPrueba from "../img/buzoPrueba.jpg"

export const productos = [
    {name:'Buzo H2', category:'Hoodie', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", price:7500, img:'', stock: 8
    },
    {name:'Buzo H3', category:'Hoodie', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", price:7000, img:'', stock: 6},
    {name:'Remera Tukson', category:'Remera', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", price:7000, img:'', stock: 10},
    {name:'Remera Deletutez', category:'Remera', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", price:7000, img:'', stock: 10},
    {name:'Joggin 1', category:'Jogging', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", price:8000, img:'', stock: 5},
    {name:'Joggin 2', category:'Jogging', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", price:8000, img:'', stock: 7}
    ];




    const dataPromise = new Promise ((resolve, reject) => {
        //acciones
        let condition = true
        setTimeout(()=> {
            if (condition){
                resolve (productos)
            } else {
                reject('Algo salio mal... tukson')
            }
        },3000)
    })

    export {dataPromise}