import TableFixed from "./components/tableFixed";
export default function Home() {
 

  return (
    <div>
      <h1 className="text-2xl text-center m-5">Control gastos</h1>
      <section className="m-2">
        <TableFixed />
      </section>
    </div>
  );
}

