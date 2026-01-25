'use client'
import { useState } from "react";
import TableFixed from "./tableFixed";

export default function Desplegable () {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full">
      <article className="flex gap-3 items-center justify-center">
        <button className="cursor-pointer" onClick={()=> setIsOpen(!isOpen)} >Gastos Fijos Basicos 
      </button>
      <span className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all`}>v</span> 
      </article>
      <article className={`overflow-hidden transition-all duration-500 flex justify-center mt-9 ${isOpen ? 'max-h-full' : 'max-h-0'}`}>
        <TableFixed/>
      </article>
    </section>
  )
}