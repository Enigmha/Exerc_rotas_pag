import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Promocao from "./routes/Promocao";



export default function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />}/>
     <Route index element={<Home />} />
     <Route path="home" element={<Home />} />
     <Route path="promocao" element={<Promocao />} />


     </Routes> 
    </BrowserRouter>
  
  );
}
