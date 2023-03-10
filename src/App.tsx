import "./styles/index.scss"
import {Routes, Route, Link} from "react-router-dom"
import MainPageAsync from "./pages/MainPage/MainPage.async"
import AboutPageAsync from "./pages/AboutPage/AboutPage.async"
import { Suspense} from "react"
import { useTheme } from "./styles/theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"



const App = () => {  

    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={
                <div>Loading...</div>
            }>
                <Routes>
                <Route path={"/about"} element={<AboutPageAsync/>}></Route>
                <Route path={"/"} element={<MainPageAsync/>}></Route>
            </Routes>
            </Suspense>
            
        </div>
    )
}

export default App;