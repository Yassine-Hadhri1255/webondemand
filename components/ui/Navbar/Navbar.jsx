import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

const Navbar = () => {

    const menuBtnEl = useRef()
    const [state, setState] = useState(false)
    const { pathname } = useRouter();

    // Always use dark mode, no need to check for path-based color
    const bgColor = "bg-gray-900"
    const brandColor = "text-white"
    const navLinkColor = "text-gray-200 hover:text-sky-500"
    const navMenuBtnColor = "text-gray-400 hover:bg-gray-800"

    useEffect(() => {

        // Close the navbar menu when click outside the menu button or when scroll
        document.onclick = (e) => {
            const target = e.target;
            if (menuBtnEl.current && !menuBtnEl.current.contains(target)) setState(false);
        };
        window.onscroll = () => setState(false);
    }, [])

    return (
        <header>
            <nav className={`${bgColor} dark:bg-gray-900 w-full md:static md:text-sm ${state ? "relative z-20" : ""}`}>
                <div className="custom-screen relative items-center mx-auto md:flex">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/" aria-label="Logo">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                {/* Logo */}
                                <Image
                                    src="/on-button.png" // Path to the logo
                                    alt="Logo"
                                    width={50} // Customize width
                                    height={50} // Customize height
                                />
                                {/* Name of the logo */}
                                <span className={`${navLinkColor} dark:text-gray-200 dark:hover:text-sky-500 duration-150`} style={{ fontSize: '25px', fontWeight: 'bold' }} >WebOnDemand</span>
                            </div>
                        </Link>

                        <div className="flex gap-x-3 items-center md:hidden">
                            <button ref={menuBtnEl} role="button" aria-label="Open the menu" className={`p-2 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 ${navMenuBtnColor}`}
                                onClick={() => setState(state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`${bgColor} dark:bg-gray-900 flex-1 md:py-0 md:block md:static md:z-0 ${state ? "absolute z-20 inset-x-0 px-4 py-6 w-full" : "hidden"}`}>
                        <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:font-medium">
                            {/* No items in the navigation array yet */}
                            <li>
                                <span className={`${"bg-gray-800"} dark:bg-gray-700 hidden w-px h-5 md:block`}></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
