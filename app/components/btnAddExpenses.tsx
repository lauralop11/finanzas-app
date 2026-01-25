'use client';
import { useState } from "react";
import FormAdd  from "./form";
const Button = () => {
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <section>
      <article className = "absolute top-5 right-5 ">
        <button className = "p-2 bg-gray-300 rounded-lg  hover:bg-gray-400 cursor-pointer" onClick={()=> setIsOpen(!isOpen)}>Add Expenses</button>
      </article>
      <article className = {`absolute top-16 right-5 bg-gray-200 p-8 rounded-lg transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <FormAdd/>
      </article>
    </section> 
  )
}
 export default Button;