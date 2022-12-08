import { Home, ProductCard, DetailProduct, Profile, Login, Register, Payment } from "@pages";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Formulir } from "./pages";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listproduct' element={<ProductCard />} />
        <Route path='/detailproduct/:id' element={<DetailProduct />} />
        <Route path='/profile' element={<Profile />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/formulir' element={<Formulir />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
