import { Routes, Route } from 'react-router-dom'
import DashboardPage from "../pages/dashboard/DashboardPage"
import NewsPage from '../pages/dashboard/NewsPage'
import Header from "./Header"

const MainBoard = () => {
    return (
        <>
            <div className="flex flex-col flex-1 w-full">
                <Header />

                <main className="h-full overflow-y-auto">
                    <Routes>
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/dashboard/news" element={<NewsPage />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default MainBoard