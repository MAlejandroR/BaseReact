import Layout from "@/Layouts/Layout.jsx";

export default function Index() {


    return (
        <Layout>
            <main className='min-h-screen bg-gradient-to-r from-[#1a759f] to-[#3a5a40] text-white'>
                <div className="max-w-[1400px] px-4 mx-auto md:grid md:grid-cols-2 min-h-[calc(100vh-5rem)]">
                    <div className="flex flex-col justify-center h-full py-8">
                        <h1 className='fadeInTop transition-all delay-1000 font-bold uppercase text-3xl md:text-7xl tracking-tight'>
                            Gestión de alumnos</h1>
                        <p className='text-xl md:text-2xl color-white/70'>React dentro de Laravel gracias a Inertia.</p>
                        <img width='300px'  className='items-center' src="images/students.png" alt="Alumnos"/>
                    </div>
                    <div className="relative">


                        <div
                            className="w-1/3 h-1/3 absolute bottom-0 right-0 border-b-2 border-r-2 border-white/70"></div>
                    </div>
                </div>
            </main>

        </Layout>
    );
}
