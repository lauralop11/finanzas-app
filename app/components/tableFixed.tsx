
export default function TableFixed () {
  const expenses = [
    {date: '01/01/2024', concept: 'Arriendo', category: 'Gastos basicos', amount: '$1.404'},
    {date: '03/01/2024', concept: 'Seguro casa', category: 'Gastos basicos', amount: '$35.69'},
    {date: '04/01/2024', concept: 'Seguro moto', category: 'Gastos basicos', amount: '$17'},
    {date: '15/01/2024', concept: 'Cuota iphone Alejita', category: 'Gastos basicos', amount: '$53.50'},
    {date: '18/01/2024', concept: 'Cuota iphone Felipe', category: 'Gastos basicos', amount: '$53.50'},
    {date: '15/01/2024', concept: 'Fizz Felipe', category: 'Gastos basicos', amount: '$33'},
    {date: '08/01/2024', concept: 'Internet y datos Bell', category: 'Gastos basicos', amount: '$108'},
    {date: '15/01/2024', concept: 'Suscripcion apple', category: 'Gastos basicos', amount: '$25'}, 
  ]
  return (
    <table className="w-full">
      <thead>
        <tr>
            <th className="w-1/5">Fecha</th>
            <th className="w-1/5">Concepto</th>
            <th className="w-1/5">Categoría</th>
            <th className="w-1/5">Monto</th>
            <th className="w-1/5">Pagado</th>
          </tr>
      </thead>
      <tbody>
        {expenses.map((expenses, index)=> (
          <tr key={index}>
            <td className="text-center w-1/5">{expenses.date}</td>
            <td className="text-center w-1/5">{expenses.concept}</td>
            <td className="text-center w-1/5">{expenses.category}</td>
            <td className="text-center w-1/5">{expenses.amount}</td>
            <td className="text-center w-1/5 cursor-pointer">
              <label >
                <input type="checkbox" name="paie" className="peer hidden"/>
                <span className="px-3 py-1 rounded-full text-white bg-red-400 peer-checked:bg-green-400"></span>
              </label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  )
}