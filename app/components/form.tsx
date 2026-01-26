'use client';
import { useState } from 'react';

type ExpensesForm = {
  date?: string;
  description: string;
  category: string;
  amount: string;
};

export default function FormAdd () {
  const [form, setForm] = useState <ExpensesForm> ({
    date: '',
    description: '',
    category: '',
    amount: ''
  });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataForm = Object.fromEntries (new window.FormData(event.target as HTMLFormElement));
    const date = new Date().toLocaleDateString ();
    dataForm.date = date;
    setForm (dataForm as ExpensesForm);
    try {
      const response = await fetch (('api/expenses'), {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify (dataForm),
      })
      console.log (response.status);
      if (response.ok) {
        console.log ('Expenses Added');
        setForm ({
          date: '',
          description: '',
          category: '',
          amount: ''
        });  
      }
    } catch (error) {
      console.error('Error Page form:', error);
    }
  }
  return (
    <section className="w-75 flex justify-center relative">
      <form onSubmit={handleSubmit} className="form w-full flex flex-col mx-2 gap-4">
        <div className="flex gap-2 items-center mb-1">
          <label htmlFor="description">Concepto:</label>
          <input className="border border-gray-300 rounded-2xl text-center " type="text" name="description" />
        </div>
        <label> Categoria:
          <select className="border border-gray-300 rounded-2xl text-center ml-2 w-30 p-1" name="category">
            <option value="meat">Mercado</option>
            <option value="car">Auto</option>  
            <option value="others">Otros</option>
          </select>
        </label>
        <div className="flex gap-2 items-center mb-1">
          <label htmlFor="amount">Monto:</label>
          <input className="border border-gray-300 rounded-2xl text-center " type="number" name="amount" placeholder="22" />
        </div>
        <button className="absolute top-9 right-0 border-2 rounded-2xl p-2" type="submit">
          Add
        </button>
      </form>   
    </section>
  )
}