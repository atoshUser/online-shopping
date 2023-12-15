import { IProductProps } from "@/interfaces"
import {toast} from "react-toastify"

type style = 'add' | 'remove'

export const setProduct = (product:IProductProps,style:style) => {
 
    const products:IProductProps[] = JSON.parse(localStorage.getItem('products') as string) || [] 
   
    
      if (products.length) {
      
        const isExistProduct = products.find((card) => card.id == product.id)
            if(isExistProduct){

                    if (isExistProduct.quantity < 1) {
                      const  changedProducts = products.filter((card) => card.id !== isExistProduct.id)
                      localStorage.setItem('products',JSON.stringify(changedProducts))
                      toast.warn('Product deleted')
                    }else {
                    const  changedProducts = products.map((card) => {  
                        if (card.id == isExistProduct.id) {

                                   switch(style){
                                  case 'add': 
                                     return {
                                      ...card,
                                      quantity:card.quantity + 1
                                     }
                                     case 'remove':{
                                       return {
                                        ...card,quantity:card.quantity - 1
                                       }
                                      
                                     }
                                     default:
                                      return card
                                 }
                                
                        }else {
                          return card
                        }                       
                      
                    
                 })
                 localStorage.setItem('products',JSON.stringify(changedProducts))
                 toast.info('Product changed !')
                    }

          
            }else {
              localStorage.setItem('products',JSON.stringify([...products,{...product,quantity:1}]))
               toast.success('Product added!')
            }
      }else {
        const newProduct = {...product,quantity:1}
        localStorage.setItem('products',JSON.stringify([newProduct]))
        toast.success('1 product added!')
        
      }

    
}