import { NavLink } from "react-router-dom";
export default function MainMenu() {
    return (
        <nav className="navigazione">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/ChiSiamo">chi siamo</NavLink>
            <NavLink to="/Posts">Posts</NavLink>
        </nav>
    )
}