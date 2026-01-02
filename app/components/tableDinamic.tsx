
 type Props = {
  id?: number;
  date?: string;
  concept: string;
  category: string;
  amount: number;
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
            {data.map((item)=> (
              <tr key={item.id} className="text-center border-b border-gray-200">
                <td className="py-2">{item.data.date}</td>
                <td className="py-2">{item.data.description}</td>
                <td className="py-2">{item.data.category}</td>
                <td className="py-2">{item.data.amount}</td>
            </tr>))}
          </tbody>
        </table>
  )
}