import {Link} from "@inertiajs/react";
import {useState} from "react";

export default function Table({fields, rows, name}) {
    console.log(fields);
    const sort = (campo) => {
        console.log("ordenando por " + campo)
        setOrden((ordenActual) => ({
            field: campo,
            up: ordenActual.field === campo ? !ordenActual.up : true
        }));
    }

    const [orden, setOrden] = useState({
        field: fields[0], up: true
    });

    const filasOrdenadas = [...rows].sort((a, b) => {
            const valorA = a[orden.field];
            const valorB = b[orden.field];
            if (valorA < valorB)
                return orden.up ? -1 : 1;
            if (valorA > valorB)
                return orden.up ? 1 : -1;
            return 0;
        }
    );
    return (

        <>
            <div className='flex flex-row justify-center space-x-8'>
                <h1 className="text-center text-2xl font-bold">Listado de {name}</h1>
                <Link href={route('alumnos.create')} className='text-2xl btn  btn-glass'>Crear {name}</Link>
            </div>

            {/* ✅ Wrapper ensures the table is inside the viewport */}
            <div className="w-full max-h-full flex flex-col justify-center items-center">
                {/* ✅ Ensure the table has its own scrolling */}
                <div className="max-h-[80vh]  overflow-auto border border-gray-400 rounded-lg shadow-lg">
                    <table className="w-full border-collapse">
                        <thead className="bg-blue-200 sticky top-0">
                        <tr className="text-xl text-blue-600 uppercase">
                            {fields.map((field, index) => (<th key={index} className="p-2 border border-gray-300">
                                <button onClick={() => sort(field)}>
                                    {field}
                                    {console.log(orden.field)}
                                    {orden.field == field && (orden.up ? ' ▲' : ' ▼')}
                                </button>
                            </th>))}
                            <th className="p-2 border border-gray-300"></th>
                            <th className="p-2 border border-gray-300"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {filasOrdenadas.map((row, index_row) => (<tr key={index_row} className="even:bg-gray-100 odd:bg-white">
                            {fields.map((field, index) => (
                                <td key={index} className="p-2 border border-gray-300 text-xl text-center">
                                    {row[field]}
                                </td>))}
                            <td className=" btn btn-glass p-2 border border-gray-300 text-xl text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
                                </svg>
                            </td>
                            <td className="btn btn-glass  p-2 border border-gray-300 text-xl text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
                                </svg>
                            </td>
                        </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>);
}
