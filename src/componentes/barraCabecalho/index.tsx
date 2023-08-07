import { Link } from "react-router-dom";
import "./styles.css";

export default function BarraCabecalho(){

    return(
        <header className="cab-header-container">
            <div className="cab-container">
            <Link style={{textDecoration: 'none'}} to={"/"}>
            <h1>Meu Site</h1>
            </Link>
            </div>
        </header>

    );
}