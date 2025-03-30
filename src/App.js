import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import MainPage from "./MainPage";
import JobResultsTable from "./JobResultsTable";
import ChatBotPage from "./ChatBotPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/start" element={<MainPage />} />
        <Route path="/results" element={<JobResultsTable />} />
        <Route path="/chat" element={<ChatBotPage />} />
      </Routes>
    </Router>
  );
}

export default App;


// import React from "react";
// import Home from "./Home";

// function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

// export default App;