export const QualityAssuarance = () => {
  return (
    <>
      <div className="only-the-best-quality-for-you py-16">
        <div className="grid grid-cols-12 container mx-auto px-12 gap-8">
          <div className="left-section w-full col-span-4">
            <h2
              data-aos="fade-up"
              className="text-7xl font-bold mb-16"
              style={{ fontFamily: "Oswald" }}
            >
              Only The Best Quality For You
            </h2>
            <p data-aos="fade-up" className="">
              From finding the perfect hostel to ensuring a smooth stay, we
              offer top-notch services designed just for students. Take a look
              at our numbers to see why students trust us for their
              accommodation needs.
            </p>
          </div>
          <div data-aos="fade-up" className="w-full rounded-2xl col-span-6">
            <img
              className="rounded-2xl h-full w-full"
              src="/assets/2.webp"
              alt="bed image"
            />
          </div>
          <div className="properties w-max col-span-2 flex flex-col justify-between">
            <div data-aos="fade-up" className="py-4 border-b-2">
              <h2 className="font-semibold text-2xl">5+</h2>
              <p className="text-sm">years of experience</p>
            </div>
            <div data-aos="fade-up" className="py-4 border-b-2">
              <h2 className="font-semibold text-2xl">25+</h2>
              <p className="text-sm">destination districts</p>
            </div>
            <div data-aos="fade-up" className="py-4 border-b-2">
              <h2 className="font-semibold text-2xl">20+</h2>
              <p className="text-sm">hostels associated</p>
            </div>
            <div data-aos="fade-up" className="py-4">
              <h2 className="font-semibold text-2xl">100+</h2>
              <p className="text-sm">students enrolled</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
