// import { FaArrowRight } from "react-icons/fa";

// const ServiceCard = ({ service }) => {
//   const { title, img, price } = service;

//   return (
//     <div className="card bg-base-100 w-96 shadow-xl">
//       <figure className="px-10 pt-10">
//         <img src={img} alt="Shoes" className="rounded-xl" />
//       </figure>
//       <div className="card-body relative">
//         <h2 className="card-title">{title}</h2>
//         <p className="text-orange-500 font-bold">Price : ${price}</p>
//         <div className="card-actions">
//           <button className="btn absolute right-4 bottom-2 text-orange-500">
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-4 pt-4 sm:px-6 sm:pt-6">
        <img
          src={img}
          alt={title}
          className="rounded-xl w-full h-48 object-cover sm:h-56 md:h-64"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg sm:text-xl">{title}</h2>
        <p className="text-orange-500 font-bold text-base sm:text-lg">
          Price : ${price}
        </p>
        <div className="card-actions flex justify-end">
          <Link
            to={`/bookings/${_id}`}
            className="btn btn-outline border-none hover:bg-orange-500 hover:text-white text-orange-500"
          >
            <FaArrowRight className="text-lg sm:text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
