import Nav from './Nav.jsx'
import {Head} from "@inertiajs/react";

export default function Layout(props) {
    return (
        <>
        <Head>
            <title>Gestión alumnos</title>
            <meta name="description"
                  content="Google recomienda entre 150-160 caracteres de descripcion para obtener una buena indexación por los robots que gestionan en internet: más son truncados)" />
        </Head>
        <header
            className='bg-gradient-to-r from-[#1a759f] to-[#3a5a40] text-white h-10 md:h-16 border-b border-white/70'>
            <Nav/>
        </header>
        <main>
            {props.children}
        </main>


    </>
);
}
