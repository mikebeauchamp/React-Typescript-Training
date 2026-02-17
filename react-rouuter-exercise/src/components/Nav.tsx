import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className="w-full bg-gray-200">
                <div className="flex py-4">
                    <ul className="flex gap-4 px-4">
                        <li>
                            <NavLink
                                to="/"
                                // isActive is a boolean provided by React Router's NavLink component
                                // It's true when the current URL matches this link's "to" prop, false otherwise
                                // This allows dynamic styling based on the active route
                                className={({ isActive }) =>
                                    `hover:text-blue-500 ${isActive ? 'text-blue-700 font-bold' : 'text-gray-500'}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                // isActive is a boolean provided by React Router's NavLink component
                                // It's true when the current URL matches this link's "to" prop, false otherwise
                                // This allows dynamic styling based on the active route
                                className={({ isActive }) =>
                                    `hover:text-blue-500 ${isActive ? 'text-blue-700 font-bold' : 'text-gray-500'}`
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `hover:text-blue-500 ${isActive ? 'text-blue-700 font-bold' : 'text-gray-500'}`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav
