import {router, usePage} from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown.jsx";
import { Link } from '@inertiajs/react'


export default function Nav() {
    const user = usePage().props.auth.user;

    console.log(user);
    // const user = auth.user;
    const handleLogin = () => router.visit("login");
    const handleRegister = () => router.visit("register");
    const handleLogout = () => router.post("logout");
    const handleProfile = () => router.visit("profile.edit");

    return (<>
        <nav className='flex items-center justify-between max-w-[1400px] px-4 mx-auto h-full'>
            <div className="font-300 text-xl">
                Logo
            </div>
            <div className="w-1/2 flex justify-between text-sm hidden md:flex items-center uppercase font-semibold">
                <ul className='flex items-center  '>
                    <li>
                        <a href="" className='p-4'>Home</a>
                    </li>
                    <li>
                        <a href="" className='p-4'>About</a>
                    </li>
                    {user && (
                        <li>
                            <Link href={route('alumnos.index')} className='p-4'>Students</Link>
                        </li>
                    )
                    }
                </ul>
                {!user && (<div className='space-x-4 '>
                    <button onClick={handleLogin} className='px-4 py-2 border uppercase btn btn-sm btn-glass'>Sign
                        up
                    </button>
                    <button onClick={handleRegister}
                            className='px-4 py-2 border uppercase btn btn-sm btn-glass'>Register
                    </button>
                </div>)}
                {user && (<div className='space-x-4 '>
                    {console.log(`Ususario -${user}-`)}
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button
                                className='px-4 py-2 border rounded-md bg-gray-800 text-white hover:bg-gray-700 flex items-center gap-2'>
                                {user.name}
                                {/* SVG Arrow Down Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Link href={route("profile.edit")}>Profile</Dropdown.Link>
                            <Dropdown.Link href={route("logout")} method="post" as="button">Logout</Dropdown.Link>

                            <button onClick={handleProfile}>Profile</button>
                        </Dropdown.Content>

                    </Dropdown>

                </div>)}


            </div>
            <button className='md:hidden'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="lucide lucide-menu"
                    viewBox="0 0 24 24"
                >
                    <path d="M4 12L20 12"></path>
                    <path d="M4 6L20 6"></path>
                    <path d="M4 18L20 18"></path>
                </svg>
            </button>
        </nav>
    </>);
}
