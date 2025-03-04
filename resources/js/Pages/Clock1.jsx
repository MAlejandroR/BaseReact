import {useEffect, useState} from "react";
import Layout from "@/Layouts/Layout.jsx";

export default function Clock1() {
    const [time, setTime] = useState({
        sec: 0, min: 0
    });
    const [running, setRunning] = useState(false)

    useEffect(() => {
        let interval
        if (running) {
            interval = setInterval(() => {
                setTime((previousTime) => {
                        let {sec, min} = previousTime;
                        return sec === 59 ? {sec: 0, min: min + 1} : {sec: sec + 1, min: min}
                })

            }, 10)
        }
        return  ()=>clearInterval(interval)


    }, [running]);

    const handleStart = () => {
        console.log("Valor de running "+running);
        setRunning(true)
    }
    const handleReset = () => {
        setTime({min:0, sec:0})
        setRunning(false)
        console.log("Valor de running "+running);

    }
    const handleStop = () => {
        console.log("Valor de running "+running);
        setRunning(false)
    }


    return (
        <Layout>
            <main className='min-h-screen bg-gradient-to-r from-[#1a759f] to-[#3a5a40] text-white'>
                <div className="max-w-[1400px] px-4 mx-auto md:grid md:grid-cols-2 min-h-[calc(100vh-5rem)]">
                    <div className="flex flex-col justify-center h-full py-8 ">
                        <div className='bg-white p-4 rounded-2'>
                            <h1 className="text-4xl font-bold text-center text-green-800">
                                {time.min}:{time.sec}
                            </h1>
                            <div className='flex flex-row justify-center'>
                                <button onClick={handleStart} className='btn btn-sm btn-success'>Start</button>
                                <button disabled={!running} onClick={handleStop} className='btn btn-sm btn-warning'>Stop</button>
                                <button onClick={handleReset} className='btn btn-sm btn-warning'>Reset</button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

        </Layout>
    );
}
