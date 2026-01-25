export default function FormAdd () {
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataForm = Object.fromEntries (new window.FormData(event.target));
    console.log(dataForm);
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
        <button className="w-full flex justify-end pr-5 absolute top-9 left-0" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </form>   
    </section>
  )
}