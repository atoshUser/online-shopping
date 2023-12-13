
import { IRegisterProps } from '@/interfaces'
import { redirect } from 'next/navigation'
import React from 'react'

const Home = () => {
  
      if (typeof window !== 'undefined') {
        let isExistUser:IRegisterProps  = JSON.parse(localStorage.getItem('user') as string) || {} as IRegisterProps    
       if(!Object.keys(isExistUser).length){
        redirect('register-form')
         }
      }
    
     
  return (
  <>
    <div>Home</div>
    </>
  )
}

export default Home