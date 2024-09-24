import { useState, useEffect } from "react";

const images = [
  "public/assets/7.webp",
  "public/assets/2.webp",
  "public/assets/3.webp",
  "public/assets/8.webp",
  "public/assets/1.webp",
  // Add more image paths as needed
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative max-w-full h-[700px] mx-auto overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className="flex-shrink-0 w-full h-full" key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* <div className="absolute top-1/2 left-5 transform -translate-y-1/2 flex justify-between w-90%">
        <button
          className="w-12 h-12 rounded-full bg-white bg-opacity-50 text-black font-bold"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="w-12 h-12 rounded-full bg-white bg-opacity-50 text-black font-bold"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div> */}

      <ul className="absolute bottom-2 left-0 flex justify-center w-full">
        {images.map((_, index) => (
          <li
            key={index}
            className={`list-none w-2 h-2 mx-2 rounded-full bg-white transition-all duration-1000 ${
              index === currentIndex ? "w-6" : ""
            }`}
          />
        ))}
      </ul>
    </div>
  );
}
