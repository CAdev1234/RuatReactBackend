import MainBoard from "../MainBoard"
import Sidebar from "../Sidebar"

const Layout = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <MainBoard />
            </div>
            
        </>
    )
}

export default Layout