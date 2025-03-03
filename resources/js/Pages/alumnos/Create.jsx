import Layout from "@/Layouts/Layout.jsx";
import {useForm} from "@inertiajs/react";

export default function Create(props) {

    const {data, setData, post, errors, processing} = useForm({
        name: "",
        surname: "",
        dni: "",
        email: "",
        fnac: "",
        address: ""
    });
    const handleSubmit = () => {
        e.preventDefault();
        post(route("alumnos.store"));
    }

    return (
        <Layout>
            <div className="max-w-lg mx-auto p-6 mt-10 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-4">Crear Alumno</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input type="text" value={data.name} onChange={e => setData("name", e.target.value)}
                               className="mt-1 block w-full p-2 border rounded-md"
                               />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    {/* Surname */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Apellido</label>
                        <input type="text" value={data.surname} onChange={e => setData("surname", e.target.value)}
                               className="mt-1 block w-full p-2 border rounded-md"
                               required/>
                        {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
                    </div>

                    {/* DNI */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">DNI</label>
                        <input type="text" value={data.dni} onChange={e => setData("dni", e.target.value)}
                               className="mt-1 block w-full p-2 border rounded-md"
                               required/>
                        {errors.dni && <p className="text-red-500 text-sm">{errors.dni}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                        <input type="email" value={data.email} onChange={e => setData("email", e.target.value)}
                               className="mt-1 block w-full p-2 border rounded-md"
                               required/>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    {/* Date of Birth (fnac) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                        <input type="date" value={data.fnac} onChange={e => setData("fnac", e.target.value)}
                               className="mt-1 block w-full p-2 border rounded-md"
                               required/>
                        {errors.fnac && <p className="text-red-500 text-sm">{errors.fnac}</p>}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Dirección</label>
                        <input type="text" value={data.address} onChange={e => setData("address", e.target.value)}
                               className="mt-1 block w-full p-2 border rounded-md"
                               required/>
                        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                                disabled={processing}>
                            {processing ? "Guardando..." : "Guardar Alumno"}
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
