import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      delay: 100, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        className="container mx-auto px-12 text-xl text-black font-bold "
        style={{ fontFamily: "Pacifico" }}
      >
        {/* Mero Hostel Mate */}
        <img className="h-14" src="/assets/mhmlogo.png" alt="logo" />
      </div>
      <Link to={"/about"}>
        <button>GO TO ABOUT PAGE</button>
      </Link>
    </>
  );
}
