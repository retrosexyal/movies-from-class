import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './store/action';

import { Home } from './pages/Home/Home';
import { Header } from './components/Header/Header';
import { ToDo } from './components/ToDo/ToDo';
import { Route, Routes } from 'react-router-dom';
import { LinkedImg } from './components/LinkedImg/LinkedImg';
import Favorit from './pages/Favorit/Favorit';
import { useState, useEffect } from 'react';
/* import { SwiperComp } from './components/Swiper/Swiper.tsx'; */
import { GlobalStyles } from "./download/GlobalStyles"
import { lightTheme, darkTheme } from "./download/theme"
import { ThemeProvider } from "styled-components"
import Info from './components/Info/Info';

function App() {
  const dispatch = useDispatch()
  const [isTheme, setIsTheme] = useState("")
  const setColor = (color) => localStorage.setItem("Color", color);
  const themeToggle = (e) => {
    setColor(e.target.value)
    setIsTheme(localStorage.getItem('Color'));
    localStorage.getItem("Color");
  }
  useEffect(() => {
      setIsTheme(localStorage.getItem('Color'));  
  })

  const theme = isTheme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Header handleChangeTheme={themeToggle} selected={localStorage.getItem('Color')} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linked/:id" element={<LinkedImg />} />
          <Route path="/favorit" element={<Favorit />} />
          <Route path="/info/:id" element={<Info />} />
          {/* <Route path="/test" element={<SwiperComp />} /> */}
        </Routes>
        <ToDo />

      </div>
    </ThemeProvider>
  );
}

export default App;
