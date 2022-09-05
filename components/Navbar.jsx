import style from "./Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <>
            <nav className={style.nav}>
                <a className={style.nav_logo}>Brand</a>
                <ul
                    className={`${style.nav_menu} ${
                        isMenuOpen && style.nav_menu_active
                    }`}
                >
                    <li className={style.nav_item}>
                        <Link href="/">
                            <a
                                className={style.nav_link}
                                onClick={closeMobileMenu}
                            >
                                About
                            </a>
                        </Link>
                    </li>
                    <li className={style.nav_item}>
                        <Link href="/projects">
                            <a
                                className={style.nav_link}
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </a>
                        </Link>
                    </li>
                    <li className={style.nav_item}>
                        <Link href="/blogs">
                            <a
                                className={style.nav_link}
                                onClick={closeMobileMenu}
                            >
                                Blogs
                            </a>
                        </Link>
                    </li>
                </ul>
                <div
                    className={`${style.nav_hamburger} ${
                        isMenuOpen && style.nav_hamburger_active
                    }`}
                    onClick={toggleMenu}
                >
                    <span className={style.nav_hamburger_bar}></span>
                    <span className={style.nav_hamburger_bar}></span>
                    <span className={style.nav_hamburger_bar}></span>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
