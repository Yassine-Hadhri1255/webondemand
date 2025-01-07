import Link from "next/link"
import Newsletter from '../Newsletter'

const navigation = [
    { name: "Features", href: "/#features" },
    { name: "Lessons", href: "/tutorials/cs50" },
    { name: "Pricing", href: "/#pricing" },
]

const Footer = () => (
    <footer className="pt-5 sm:pt-5">
        <div className="custom-screen text-gray-600 dark:text-gray-300">
          
            <div className="mt-10 py-10 border-t dark:border-gray-800 flex-row-reverse items-center justify-between sm:flex">
               
                <p className="mt-6 sm:mt-0">© 2023  Webondemand. All rights reserved.</p>
            </div>
        </div>
    </footer>
)

export default Footer