export default function About() {
  return (
    <div className="bg-[url(/assets/2.webp)] bg-center bg-no-repeat bg-cover  top-0 w-full h-[100vh] ">
      <div className="container mx-auto">
        <div className="absolute Hero-section mt-12 h-full container flex-col flex items-center justify-center mx-auto px-12 text-white leading-none">
          <h1
            className="text-[150px] font-extrabold uppercase tracking-wider"
            style={{ fontFamily: "Oswald" }}
          >
            About us
          </h1>
          <p className="w-[700px] text-center leading-loose mt-8">
            Experience comfort and convenience with our expertly curated hostel
            listings, designed to match students with their perfect living
            space.
          </p>
          <div className="images grid grid-cols-4 items-center gap-4 h-52 mt-8">
            <div className="h-52 w-auto shadow-2xl">
              <img
                className="rounded-2xl h-full"
                src="/assets/3.webp"
                alt="images"
              />
            </div>
            <div>
              <img
                className="rounded-2xl shadow-2xl "
                src="/assets/4.webp"
                alt="images"
              />
            </div>
            <div className="h-52 w-auto shadow-2xl">
              <img
                className="rounded-2xl h-full"
                src="/assets/5.webp"
                alt="images"
              />
            </div>
            <div>
              <img
                className="rounded-2xl shadow-2xl"
                src="/assets/10.webp"
                alt="images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
