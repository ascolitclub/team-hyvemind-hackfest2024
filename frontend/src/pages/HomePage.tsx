import { useEffect } from "react";
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
      <div className="h-[80vh] w-full flex flex-shrink-0 items-center justify-center overflow-hidden">
        <img className="object-cover" src="/assets/7.webp" alt="background" />
      </div>
    </>
  );
}
