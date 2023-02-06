import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './store/action';

import { Home } from './pages/Home/Home';
import { Header } from './components/Header/Header';
import { ToDo } from './components/ToDo/ToDo';
import { Route, Routes } from 'react-router-dom';
import { LinkedImg } from './components/LinkedImg/LinkedImg';
import { SwiperComp } from './components/Swiper/Swiper';

function App() {
  const dispatch = useDispatch()

  return (
    <div>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linked/:id" element={<LinkedImg />} />
        <Route path="/test" element={<SwiperComp />} />
      </Routes>  
        <ToDo />

    </div>

  );
}

export default App;
