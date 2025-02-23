import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Privacy</a>
                <a className="link link-hover">Terms</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="#" className="text-blue-400 text-2xl hover:text-blue-500 transition-transform transform hover:scale-110 duration-300">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-blue-400 text-2xl hover:text-blue-500 transition-transform transform hover:scale-110 duration-300">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-blue-600 text-2xl hover:text-blue-700 transition-transform transform hover:scale-110 duration-300">
                        <FaLinkedin />
                    </a>
                    <a href="#" className="text-black text-2xl  transition-transform transform hover:scale-110 duration-300">
                        <FaGithub />
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Nadim Mostofa</p>
            </aside>
        </footer>
    )
}

export default Footer