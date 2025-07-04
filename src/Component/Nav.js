import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

import dark from '../icons/contrast_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import light from '../icons/dark_mode_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'

/* eslint-disable jsx-a11y/anchor-is-valid */
function Nav() {

    const { theme, setTheme } = useContext(ThemeContext);
    console.log(theme);

    let themeStyle = {}
    if (theme === 'light') {
        themeStyle = {
            background: "#DDA0DD",
            color: 'yellow'
        }
    }
    if (theme === 'dark') {
        themeStyle = {
            background: "#9400D3",
            color: 'white'
        }
    }
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm" style={themeStyle} >
                    {/* onClick={() => setTheme('dark')}> */}

                    <div className="container-fluid">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About Us</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product">Product</NavLink>

                            </li>

                            {
                                theme === 'light' ?
                                    (
                                        <img src={dark} onClick={() => setTheme('dark')} />
                                    ) :
                                    (
                                        <img src={light} onClick={() => setTheme('light')} />
                                    )
                            }
                        </ul>
                    </div>

                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
}
export default Nav;