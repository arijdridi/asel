import Footer from "./Footer"
import Navbar from "./Navbar"
import './index.css'
export default ({ children }) => {
    return (
        <>
            <div className="client_layout" >
                <div>
                    <Navbar />
                </div>
                <div className="client_main" >
                    {children}
                </div>
                <div>
                    <Footer />
                </div>
            </div>

        </>
    )
}