import React from "react";
import "./styles.css"; // Import the CSS file

const Home = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
      <div>
      {/* Header Section */}
      <header className="header">
        <div className="logo">DUCKEYE</div>
      </header>
    </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>We Will Show You Your Vision Through Our Eyes</h2>
        <p>Get insight into your future work-related questions, concerns, and more.</p>
      </section>

      {/* Process Diagram */}
      <section className="process-container">
        <div className="process-box">
          <h3>Our Process</h3>
          <div className="process-tree">
            <div><span>Problem</span></div>
            <div><span>Step 1</span></div>
            <div><span>Step 2</span></div>
            <div><span>Step 3</span></div>
            <div>Solution</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Get Started Today!</h2>
        <button>Get Started</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>About Us</p>
        <p>About Us</p>
        <p>About Us</p>
      </footer>
    </div>
  );
};

export default Home;


// import React from "react";

// const Home = () => {
//   return (
//     <div className="w-full min-h-screen bg-gray-100">
//       {/* Header Section */}
//       <header className="bg-blue-200 text-center py-8">
//         <h1 className="text-3xl font-bold">
//           <span className="bg-white px-2 py-1">DUCKEYE</span>
//         </h1>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-white py-12 text-center px-6">
//         <h2 className="text-4xl font-bold text-gray-900">
//           We Will Show You Your Vision Through Our Eyes
//         </h2>
//         <p className="text-gray-600 mt-2">
//           Get insight into your future work-related questions, concerns, and more.
//         </p>
//       </section>

//       {/* Process Diagram */}
//       <section className="py-12 bg-gray-50 flex justify-center">
//         <div className="w-1/2 p-6 border-2 border-gray-300 rounded-lg shadow-lg">
//           <h3 className="text-center font-semibold text-lg mb-4">Our Process</h3>
//           <div className="flex flex-col items-center">
//             <div className="w-full border-l-2 border-black h-20 relative">
//               <span className="absolute left-[-60px] top-2 text-gray-700">Problem</span>
//             </div>
//             <div className="flex w-full">
//               <div className="w-1/2 border-t-2 border-black h-12"></div>
//               <div className="w-1/2 border-t-2 border-black h-12 relative">
//                 <span className="absolute left-2 top-[-20px] text-gray-700">Step 1</span>
//               </div>
//             </div>
//             <div className="w-full border-l-2 border-black h-20"></div>
//             <div className="flex w-full">
//               <div className="w-1/2 border-t-2 border-black h-12 relative">
//                 <span className="absolute left-2 top-[-20px] text-gray-700">Step 2</span>
//               </div>
//               <div className="w-1/2 border-t-2 border-black h-12"></div>
//             </div>
//             <div className="w-full border-l-2 border-black h-20"></div>
//             <div className="flex w-full">
//               <div className="w-1/2 border-t-2 border-black h-12"></div>
//               <div className="w-1/2 border-t-2 border-black h-12 relative">
//                 <span className="absolute left-2 top-[-20px] text-gray-700">Step 3</span>
//               </div>
//             </div>
//             <div className="w-full border-l-2 border-black h-20"></div>
//             <div className="w-full text-center font-semibold mt-2">Solution</div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-blue-200 py-12 text-center">
//         <h2 className="text-3xl font-bold">Get Started Today!</h2>
//         <button className="mt-4 px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900 transition">
//           Get Started
//         </button>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-gray-900 text-white py-6">
//         <div className="container mx-auto grid grid-cols-3 gap-4 text-center">
//           <p>About Us</p>
//           <p>About Us</p>
//           <p>About Us</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;
