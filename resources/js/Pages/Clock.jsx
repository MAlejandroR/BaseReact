import Layout from "@/Layouts/Layout.jsx";
import { useState, useEffect } from "react";

export default function Index() {
    // Estado del cronómetro
    const [clock, setClock] = useState({ min: 0, sec: 0 });

    // Estado de ejecución del cronómetro
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setClock((prevClock) => {
                    let { min, sec } = prevClock;
                    return sec === 59 ? { min: min + 1, sec: 0 } : { min, sec: sec + 1 };
                });
            }, 10);
        }

        return () => {
            clearInterval(interval); // Limpia el intervalo al desmontar el efecto
        };
    }, [running]);

    const handleStart = () => {
        setRunning(true);
    };

    const handleStop = () => {
        setRunning(false);
    };

    return (
        <Layout>

            <main className="min-h-screen bg-gradient-to-r from-[#1a759f] to-[#3a5a40] text-white flex flex-col items-center justify-center space-y-4">
                <h1 className="text-4xl font-bold">{clock.min}:{clock.sec.toString().padStart(2, "0")}</h1>
                <div className="space-x-4">
                    <button onClick={handleStart} className="px-4 py-2 bg-green-500 rounded-lg">Start</button>
                    <button onClick={handleStop} className="px-4 py-2 bg-red-500 rounded-lg">Stop</button>
                </div>
            </main>
        </Layout>
    );
}
