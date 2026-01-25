'use client';
import { useEffect, useState } from "react";

 type Props = {
  id?: number;
  data: {
    date?: string;
    description: string;
    category: string;
    amount: number | string;
  }
};
export default function TableDinamic () {
  const [data, setData] = useState<Props[]>([]);

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
    <section className="overflow-hidden">
      <table className="w-full mt-9">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Concepto</th>
          <th>Categoría</th>
          <th>Monto</th>
        </tr>
      </thead>
      <tbody className="">
        {data.map((item)=> (
          <tr key={item.id} className="text-center border-b border-gray-200">
            <td className="py-2">{item.data.date}</td>
            <td className="py-2">{item.data.description}</td>
            <td className="py-2">{item.data.category}</td>
            <td className="py-2">{item.data.amount}</td>
          </tr>))}
        </tbody>
      </table>
    </section>

  )
}