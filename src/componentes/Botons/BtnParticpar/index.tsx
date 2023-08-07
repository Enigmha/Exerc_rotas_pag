import { Link } from "react-router-dom";
import "./styles.css";

export default function BtnParticipar() {
  return (
    <div className=" fundoBtn">
    <button className="cab-btn">
        <Link to={"/home"}>
      <p>Quero participar</p>
      </Link>

    </button>
    </div>

  );
}