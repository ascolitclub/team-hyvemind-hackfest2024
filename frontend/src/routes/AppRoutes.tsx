import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import About from '../pages/About';
import HomePage from '../pages/HomePage';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import Login from '../pages/Login';
import { Test } from '../pages/Test';

export default function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    };

    handleScroll();

    const timer = setTimeout(handleScroll, 100);

    return () => clearTimeout(timer);
  }, [location]);

  const noNavbarFooterRoutes = [''];

  const hideNavbarFooter = noNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}
