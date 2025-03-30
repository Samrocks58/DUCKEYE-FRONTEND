import { useNavigate } from "react-router";
import React, { useEffect, useState, useRef } from "react";
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import './geocoder-styles.css';

const JobSearch = () => {
  const navigate = useNavigate();

  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [setLocationData] = useState(null);
  const autocompleteContainerRef = useRef(null);
  const autocompleteRef = useRef(null);

  const handleSubmit = () => {
    navigate("/results", { state: { position, location } });
  };

  useEffect(() => {
    if (autocompleteContainerRef.current && !autocompleteRef.current) {
      autocompleteRef.current = new GeocoderAutocomplete(
        autocompleteContainerRef.current,
        '96f059f577864f4cbdcfe8aa6051e3dd',
        { placeholder: 'Enter Location', 
          filterByType: ['city', 'state', 'county'],
        }
      );

    autocompleteRef.current.on('select', (locationResult) => {
      if (locationResult && locationResult.properties) {
        const cityState = locationResult.properties.city || '';
        const state = locationResult.properties.state || '';
        const country = locationResult.properties.country || '';
        
        // Create a cleaner format for display
        const formattedLocation = [cityState, state, country].filter(Boolean).join(', ');
        
        setLocation(formattedLocation);
        
        console.log("Selected location:", locationResult);
      }
  });
}
}, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Job Search</h2>
      
      {/* Position Input */}
      <input
        type="text"
        placeholder="Enter Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        style={styles.input}
      />

      {/* Location Input */}
        <div ref={autocompleteContainerRef} style={styles.autocompleteContainer}></div>

      {/* Submit Button */}
      <div style={styles.buttonContainer}>
        <button onClick={handleSubmit} style={styles.button}>
          Submit
        </button>
      </div>
    </div>
  );
};

// CSS-in-JS Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  input: {
    width: "300px",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "300px",
  },
  autocompleteContainer: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
},
  autocompleteInput:{
    height: "50px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    marginRight:"100px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default JobSearch;
