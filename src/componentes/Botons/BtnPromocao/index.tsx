import { Link } from "react-router-dom";
import "./styles.css";

export default function BtnPromocao() {
  return (
    <div className=" fundoBtn">
    <button className="cab-btn">
      <Link to={"/promocao"}>
      <p>ver promocao</p>
      </Link>
    </button>
    </div>

  );
}
