import Home from '../pages/home';
import Orders from '../pages/orders';
import { Route, Routes } from 'react-router-dom';

export default function App() {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/orders' element={<Orders />} />
      </Routes>
   );
}
