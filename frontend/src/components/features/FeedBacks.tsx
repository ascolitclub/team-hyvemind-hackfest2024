import { useState } from "react";
import { RenderStar } from "../dynamic renderer/RenderStar";

export default function FeedBacks() {
  const feedbacks = [
    {
      name: "John Doe",
      location: "Kapan, Kathmandu",
      rating: 4,
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vitae iure laudantium nemo totam magnam aperiam mollitia tempore magni illo.",
    },
    {
      name: "Jane Smith",
      location: "Thamel, Kathmandu",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestias minima enim error iusto et deserunt distinctio a.",
    },
    {
      name: "Michael Brown",
      location: "Jorpati, Kathmandu",
      rating: 3,
      feedback:
        "Recusandae vitae iure laudantium nemo totam magnam aperiam mollitia tempore magni illo. Ducimus molestias minima enim error iusto et deserunt distinctio.",
    },
    {
      name: "Lisa Green",
      location: "Bhaktapur, Kathmandu",
      rating: 4,
      feedback:
        "Recusandae vitae iure laudantium nemo totam magnam aperiam mollitia tempore magni illo. Ducimus molestias minima enim error iusto et deserunt distinctio.",
    },
    {
      name: "Sam Wilson",
      location: "Lalitpur, Kathmandu",
      rating: 3,
      feedback:
        "Recusandae vitae iure laudantium nemo totam magnam aperiam mollitia tempore magni illo. Ducimus molestias minima enim error iusto et deserunt distinctio.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Total number of cards visible at once (3)
  const visibleCards = 3;

  // Handle next slide
  const nextSlide = () => {
    if (currentIndex < feedbacks.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="px-12 container mx-auto ">
        <div className="relative rounded-xl  bg-gray-300 px-4 py-12 mb-10">
          <div className="relative flex flex-col items-center justify-center ">
            <h1
              data-aos="fade-up"
              className="text-[120px] text-white font-mono font-semibold uppercase"
              style={{ fontFamily: "Oswald" }}
            >
              Testimonial
            </h1>
            <h2
              data-aos="fade-up"
              className="absolute tracking-widest text-center text-xl top-[47%] text-[--primary-color] font-sans uppercase"
            >
              Take a look at our
            </h2>
          </div>
          {/* Wrapper for feedback cards */}
          <div data-aos="fade-up" className="py-8 px-4 overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {feedbacks.map((feedback, index) => (
                <div
                  key={index}
                  className="bg-[#fff] rounded-2xl p-8 relative overflow-hidden shadow-xl cursor-pointer w-[33.333%] flex-shrink-0"
                >
                  <div data-aos="fade-up">{RenderStar(feedback.rating)}</div>
                  <p data-aos="fade-up" className="mt-4 mb-4">
                    {feedback.feedback}
                  </p>
                  <div className="location mt-4">
                    <h3
                      data-aos="fade-up"
                      className="text-[20px] font-semibold"
                    >
                      {feedback.name}
                    </h3>
                    <p data-aos="fade-up" className="text-[#a7a7a7]">
                      {feedback.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="absolute -left-7 top-[60%] z-30">
            <span
              className="text-[40px] hover:cursor-pointer active:translate-y-1  rounded-full bg-[--btn-primary] text-white p-3 flex items-center justify-center w-[60px] h-[60px]"
              onClick={prevSlide}
            >
              &lt;
            </span>
          </div>
          <div className="absolute -right-7 top-[60%]">
            <span
              className="text-[40px] hover:cursor-pointer active:translate-y-1 rounded-full bg-[--btn-primary] text-white p-3 flex items-center justify-center w-[60px] h-[60px]"
              onClick={nextSlide}
            >
              &gt;
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
