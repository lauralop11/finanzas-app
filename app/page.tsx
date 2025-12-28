'use client';
import { useState, useEffect } from "react";

type Props = {
  id?: number;
  date?: string;
  concept: string;
  category: string;
  amount: number;
};

export default function Home() {
  const [data, setData] = useState<Props[]>([]);
  const date = new Date();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/expenses");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
 console.log(data);

  return (
    <div>
      <h1 className="text-2xl text-center m-5">Control gastos</h1>
      <section className="w-full flex justify-center relative text-sm">
        <form action="" className="w-full flex flex-col mx-2">
          <div className="flex gap-2 items-center mb-1">
            <label htmlFor="description">Concepto:</label>
            <input className="border border-gray-300 rounded-2xl text-center " type="text" name="description" />
          </div>
          <div className="flex gap-2 items-center mb-1">
            <label htmlFor="category">Categoria:</label>
            <select className="border border-gray-300 rounded-2xl text-center " name="category" id="category">
              <option value="meat" disabled selected>Mercado</option>
              <option value="car">Auto</option>  
              <option value="gastos-fijos">Gastos fijos</option>
              <option value="restaurants">Restaurantes</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="others">Otros</option>
            </select>
          </div>
          <div className="flex gap-2 items-center mb-1">
            <label htmlFor="amount">Monto:</label>
            <input className="border border-1 border-gray-300 rounded-2xl text-center " type="number" name="amount" placeholder="22" />
          </div>
          <button className="w-full flex justify-end pr-5 absolute top-5 left-0" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </form>
        
      </section>
      <section className="m-2">
        <table className="w-full">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Concepto</th>
              <th>Categoría</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((item)=> (<tr key={item.data.id}className="text-center border-b border-gray-200">
              <td className="py-2">{item.data.date}</td>
              <td className="py-2">{item.data.description}</td>
              <td className="py-2">{item.data.category}</td>
              <td className="py-2">{item.data.amount}</td>
            </tr>))}
          </tbody>
        </table>
      </section>
      
    </div>
  );
}

