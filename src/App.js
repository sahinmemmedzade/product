import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Jewelry from './pages/Jewelry';
import Accessories from './pages/accessories';
import About from './pages/About';
import New from './pages/New';
import Men from './pages/men';
import Women from './pages/women';
import Error1 from './pages/error';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Checkout from './component/basketaddlocal';

function App() {
    return (
        <div>
          <Header />
            <Routes>
<Route path="/" element={< New/>} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/jewelry' element={<Jewelry />} />
<Route path="/accessories" element={<Accessories />} />
<Route path="/about" element={<About />} />

                <Route path='/men' element={<Men />} />
                <Route path='/women' element={<Women />} />

                <Route path='*' element={<Error1/>} />
                <Route path='/checkout' element={<Checkout/>} />

            </Routes>
           <div><Footer></Footer></div>
        </div>
    );
}

export default App;