import { TableDataEntry } from './components';
import clients from '@/app/data/clients.json';
const newClientArray = [...clients];
const sort = 'Name';



export default function DataTable({
  array,
}: {
  array: Array<{
    name: string;
    location: { city: string; area: string };
    img: string;
    to: { time: string; date: string };
    from: { time: string; date: string };
    service: string;
    status: string;
  }>;
}) {
  return (
    <>
    {array.map((item, index) => (
      // <td>{item.name}</td>
       <TableDataEntry client={item} sortby={sort} key={index} />
    ))}
    </>
  );
}
