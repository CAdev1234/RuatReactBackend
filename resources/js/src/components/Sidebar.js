import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    BsFillHouseFill,
    BsNewspaper
} from './Icon/IconImage'


const Sidebar = () => {
    let navLi = [
        {title: 'Dashboard', link: '/dashboard', icon: <BsFillHouseFill />},
        {title: 'News', link: '/dashboard/news', icon: <BsNewspaper />}
    ]
    
    const [navIdx, setNavIdx] = useState(0)
    const navItemHandler = (idx) => {
        setNavIdx(idx)
        // return <NavLink to={`${navLi[idx].link}`} />
    }
    return (
        <>
            {/* Desktop sidebar */}
            <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
                <div className="py-4 text-gray-500 dark:text-gray-400">
                    <NavLink className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="/">
                        DASHBOARD
                    </NavLink>
                    <div className='mt-6'>
                        {navLi.map((item, idx) => {
                            return (
                                <ul key={`nav_${idx}`} className="">
                                    <li className="relative px-6 py-3">
                                        <span className={`absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg ${navIdx === idx ? 'bg-purple-600' : 'bg-transparent'}`} aria-hidden="true"></span>
                                        <NavLink
                                            className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                                            to={item.link}
                                            onClick={() => {navItemHandler(idx)}}
                                        >
                                            {item.icon}
                                            <span className="ml-4">{item.title}</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar