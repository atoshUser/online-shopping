

// Here register props interfaces

export interface IRegisterProps {
    username:string
    email:string
    password:string
}


export interface IProductProps {
    id:number
    title:string
    price:string
    description:string
    image:string
    category:string
    quantity:number
    rating:{
        rate:number
        count:number
    }
}

// interface ICategory {
//     id:number
//     name:string
//     image:string
//     creationAt:string
//     updatedAt:string
// }