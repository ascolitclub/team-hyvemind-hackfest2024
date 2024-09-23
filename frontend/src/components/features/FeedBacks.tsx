import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";

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
          <div className="text-center mb-8 flex-col flex">
            <h2 className="text-[45px] font-extrabold">
              Our Customer{" "}
              <span className="text-[--primary-color]">Feedbacks</span>
            </h2>
            <p className="w-full lg:w-[60%] mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio perspiciatis amet eaque molestias saepe ipsam ad
              consequuntur iure error? Ducimus?
            </p>
          </div>

          {/* Wrapper for feedback cards */}
          <div className="py-8 px-4 overflow-hidden">
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
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        style={{
                          color: i < feedback.rating ? "yellow" : "gray",
                        }}
                      />
                    ))}
                  </div>
                  <p className="mb-5">{feedback.feedback}</p>
                  <div className="grid grid-cols-2 overflow-x-clip">
                    <div>
                      <h3 className="text-[20px] font-semibold">
                        {feedback.name}
                      </h3>
                      <p className="text-[#a7a7a7]">{feedback.location}</p>
                    </div>
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
