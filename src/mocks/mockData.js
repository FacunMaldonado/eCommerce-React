import buzoPrueba from "./img/buzoPrueba.jpg"

const productos = [
    {   id:'1',
        name:'Buzo H1',
        category:'Hoodie',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam maxime repellat temporibus. Ipsum consectetur perspiciatis esse eaque quaerat libero cum, porro deserunt est itaque dolorum velit eos modi necessitatibus eius.",
        price:7000,
        img:buzoPrueba,
        stock: 5
    },
    {id:'2', name:'Buzo H2', category:'Hoodie', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", price:7500, img:'', stock: 8
    },
    {id:'3', name:'Buzo H3', category:'Hoodie', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", price:7000, img:'', stock: 6},
    {id:'4', name:'Remera Tukson', category:'Remera', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", price:7000, img:'', stock: 10},
    {id:'5', name:'Remera Deletutez', category:'Remera', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", price:7000, img:'', stock: 10},
    {id:'6', name:'Joggin 1', category:'Joggin', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", price:8000, img:'', stock: 5},
    {id:'7', name:'Joggin 2', category:'Joggin', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", price:8000, img:'', stock: 7}
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