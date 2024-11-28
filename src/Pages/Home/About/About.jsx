// import person from "../../../assets/images/about_us/person.jpg";
// import parts from "../../../assets/images/about_us/parts.jpg";

// const About = () => {
//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row">
//         <div className="lg:w-1/2 relative">
//           <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
//           <img
//             src={parts}
//             className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
//           />
//         </div>
//         <div className="lg:w-1/2 space-y-5 p-6">
//           <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
//           <h1 className="text-5xl font-bold">
//             We are qualified & of experience in this field
//           </h1>
//           <p className="">
//             There are many variations of passages of Lorem Ipsum available, but
//             the majority have suffered alteration in some form, by injected
//             humour, or randomised words which do not look even slightly
//             believable.
//           </p>

//           <p className="">
//             The majority have suffered alteration in some form, by injected
//             humour, or randomised words which do not look even slightly
//             believable.
//           </p>
//           <button className="btn btn-warning text-white font-bold">
//             Get More Info
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="hero-content flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 border-4 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-4 sm:space-y-5 p-4 sm:p-6">
          <h3 className="text-2xl sm:text-3xl text-orange-500 font-bold">
            About Us
          </h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            We are qualified & experienced in this field
          </h1>
          <p className="text-sm sm:text-base">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>

          <p className="text-sm sm:text-base">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn btn-warning text-white font-bold text-sm sm:text-base">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
