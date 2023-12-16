"use client"
import { IRegisterProps } from '@/interfaces'
import { useRouter } from 'next/navigation'
import React from 'react'
import {useForm} from "react-hook-form"
const RegisterPage = () => {
    const {register,handleSubmit,formState:{errors,isValid}} =
     useForm({defaultValues:{username:'',email:'',password:''}})
   const router = useRouter()
    const submitForm = (data:IRegisterProps) => {
         localStorage.setItem('user',JSON.stringify(data))
       router.push('/')
    }
  return (
    <div className='relative'>
       <div className='absolute bg-black px-3  md:px-0 text-black inset-0 h-screen flex justify-center items-center'>
        <div className="border-2  w-[450px] space-y-3 h-[250px] rounded-md  bg-white p-2">
            <h2 className='mb-2 text-indigo-600 font-bold text-[20px] md:text-[30px]'>Register form</h2>
            <form action="post" className='flex flex-col space-y-6' onSubmit={handleSubmit((data) => submitForm(data))}>
  

<div className='flex flex-col '>
<label
  htmlFor="Username"
  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="text"
    {...register('username',{required:'Name required',minLength:{message:'Min character 5',value:5}})}
    id="Username"
    autoComplete='off'
    className="peer py-1  pl-2 text-[14px] border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
    placeholder="Username"
  />
 
  <span
    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
  >
    Username
  </span>
</label>
<p className='text-red-500 text-[14px] md:text-[16px]'>{errors.username?.message}</p>
</div>
<div className="flex flex-col">
<label
  htmlFor="email"
  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="email"
    id="email"
    {...register('email',{required:'Email required!',})}
    autoComplete='off'
    className="peer pl-2 py-1 text-[14px] border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
    placeholder="example@gmail.com"
  />
  
  <span
    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
  >
   Email
  </span>
</label>
<p className='text-red-500 text-[14px] md:text-[16px]'>{errors.email?.message}</p>
</div>
<div className="flex flex-col">
<label
  htmlFor="password"
  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="password"
    id="password"
    {...register('password',{required:'Password required!'
    ,minLength:{message:'Password should be more than 5 character',value:5}})}
    autoComplete='off'
    className="peer pl-2 border-none text-[14px] py-1 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
    placeholder="security key"
  />
  

  <span
    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2
     bg-white p-0.2 text-xs text-gray-700  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
  >
   Pin code
  </span>
</label>
<p className='text-red-500 text-[14px] md:text-[16px]'>{errors.password?.message}</p>
</div>
{isValid ? (
  <button  type='submit' className={ `py-1  md:py-2 text-center rounded-md text-white font-bold bg-indigo-500`}>Confirm</button>
) : null}
            </form>
        </div>
       </div>

    </div>
  )
}

export default RegisterPage