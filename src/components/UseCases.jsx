// import { motion } from "framer-motion";
// import { useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const useCases = [
//   {
//     title: "Community Fundraisers",
//     description:
//       "Easily gather resources for local projects like park renovations, clean-up drives, and social causes. Reach your target audience directly and keep everyone informed with real-time updates.",
//     img: "/community.jpg",
//   },
//   {
//     title: "Event Crowdfunding",
//     description:
//       "FundPilot makes it easy to fund community events, workshops, and festivals. Supporters can contribute seamlessly, and organizers can monitor progress at every stage.",
//     img: "/event.jpg",
//   },
//   {
//     title: "Educational Campaigns",
//     description:
//       "Support education with FundPilot, allowing contributors to sponsor students, fund learning resources, or back scholarship programs with clear, transparent metrics.",
//     img: "/students.jpg",
//   },
//   {
//     title: "Healthcare Support",
//     description:
//       "From medical emergencies to ongoing healthcare needs, FundPilot allows communities to rally support quickly and easily, with secure transactions and transparent tracking.",
//     img: "/patient.jpg",
//   },
// ];

// export default function UseCases() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % useCases.length);
//   };

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? useCases.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div id="usecases" className="bg-gray-50 py-16 px-6 md:px-8 lg:px-12">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8">Use Cases</h2>
//         <p className="text-lg text-gray-600 mb-12">
//           Discover how FundPilot can transform community and individual-driven campaigns across various needs.
//         </p>
//       </div>

//       <div className="relative max-w-4xl mx-auto flex items-center">
//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 p-3 bg-white rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all"
//         >
//           <FiChevronLeft size={24} />
//         </button>

//         {/* Animated Use Case Content */}
//         <motion.div
//           key={activeIndex}
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -50 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col items-center text-center px-6 py-8 bg-white shadow-lg rounded-lg w-full"
//         >
//           <img
//             src={useCases[activeIndex].img}
//             alt={useCases[activeIndex].title}
//             className="w-48 h-48 object-cover rounded-full mb-6"
//           />
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//             {useCases[activeIndex].title}
//           </h3>
//           <p className="text-gray-600 text-lg max-w-lg">
//             {useCases[activeIndex].description}
//           </p>
//         </motion.div>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           className="absolute right-0 p-3 bg-white rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all"
//         >
//           <FiChevronRight size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }



import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const useCases = [
  {
    title: "Community Fundraisers",
    description:
      "Easily gather resources for local projects like park renovations, clean-up drives, and social causes. Reach your target audience directly and keep everyone informed with real-time updates.",
    img: "/community.jpg",
  },
  {
    title: "Event Crowdfunding",
    description:
      "FundPilot makes it easy to fund community events, workshops, and festivals. Supporters can contribute seamlessly, and organizers can monitor progress at every stage.",
    img: "/event.jpg",
  },
  {
    title: "Educational Campaigns",
    description:
      "Support education with FundPilot, allowing contributors to sponsor students, fund learning resources, or back scholarship programs with clear, transparent metrics.",
    img: "/students.jpg",
  },
  {
    title: "Healthcare Support",
    description:
      "From medical emergencies to ongoing healthcare needs, FundPilot allows communities to rally support quickly and easily, with secure transactions and transparent tracking.",
    img: "/patient.jpg",
  },
];

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % useCases.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? useCases.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="usecases" className="bg-gray-50 py-16 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Use Cases</h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover how FundPilot can transform community and individual-driven campaigns across various needs.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 p-3 bg-white rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all z-10"
        >
          <FiChevronLeft size={28} />
        </button>

        {/* Animated Use Case Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center text-center px-6 py-8 bg-white shadow-lg rounded-lg w-full overflow-hidden"
          >
            <img
              src={useCases[activeIndex].img}
              alt={useCases[activeIndex].title}
              className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-6 md:mb-0 md:mr-8"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {useCases[activeIndex].title}
              </h3>
              <p className="text-gray-600 text-lg max-w-lg">
                {useCases[activeIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 p-3 bg-white rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all z-10"
        >
          <FiChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
