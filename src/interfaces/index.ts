

// Here register props interfaces

export interface IRegisterProps {
    username:string
    email:string
    password:string
}


export interface IProductProps {
    id:number
    title:string
    price:number
    description:string
    images:string[]
    creationAt:string
    updatedAt:string
    category:ICategory
}

interface ICategory {
    id:number
    name:string
    image:string
    creationAt:string
    updatedAt:string
}