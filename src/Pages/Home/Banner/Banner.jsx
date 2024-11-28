import image1 from "../../../assets/images/banner/1.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";
import image5 from "../../../assets/images/banner/5.jpg";
import image6 from "../../../assets/images/banner/6.jpg";
import Carousel from "../../../components/Carousel";

const Banner = () => {
  const images = [
    { src: image1, alt: "Banner 1" },
    { src: image2, alt: "Banner 2" },
    { src: image3, alt: "Banner 3" },
    { src: image4, alt: "Banner 4" },
    { src: image5, alt: "Banner 5" },
    { src: image6, alt: "Banner 6" },
  ];

  return (
    <div className="w-full">
      <Carousel images={images} />
    </div>
  );
};

export default Banner;
