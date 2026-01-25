import Button from "./components/btnAddExpenses";
import TableDinamic from "./components/tableDinamic";
import Desplegable from "./components/desplegable";
export default function Home() {

  return (
    <div className="min-h-screen font-mono">
      <h1 className="text-2xl text-center m-5">Expenses List</h1>
      <Button />
      <section className="m-2">
        <Desplegable/>
        <TableDinamic/> 
      </section>
    </div>
  );
}

