/* eslint-disable react/prop-types */
const Carousel = ({ images }) => {
  return (
    <div className="carousel w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl">
      {images.map((image, index) => (
        <div
          id={`slide${index + 1}`}
          key={index}
          className="carousel-item relative w-full"
        >
          <img
            src={image.src}
            alt={image.alt || `Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute h-full bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white space-y-5 sm:space-y-7 pl-5 sm:pl-8 md:pl-12 w-full sm:w-3/4 md:w-1/2">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-sm sm:text-base md:text-lg">
                There are many variations of passages available, but the
                majority have suffered alteration in some form
              </p>

              <div>
                <button className="btn btn-warning mr-2 sm:mr-5 text-white text-xs sm:text-sm md:text-base">
                  Discover More
                </button>
                <button className="btn btn-outline btn-secondary text-xs sm:text-sm md:text-base">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-3 sm:left-5 right-3 sm:right-5 bottom-0 flex -translate-y-1/2 transform justify-between sm:justify-end">
            <a
              href={`#slide${index === 0 ? images.length : index}`}
              className="btn btn-circle mr-1 sm:mr-3 md:mr-5"
            >
              ❮
            </a>
            <a
              href={`#slide${index + 2 > images.length ? 1 : index + 2}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
