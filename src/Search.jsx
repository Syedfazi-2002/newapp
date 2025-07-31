// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function CocktailSearch() {
//   const [searchTerm, setSearchTerm] = useState(""); // State to store user input
//   const [cocktails, setCocktails] = useState([]); // State to store fetched cocktails
//   const [loading, setLoading] = useState(false); // State to handle loading
//   const [error, setError] = useState(null); // State to handle errors

//   // Function to fetch cocktails from the API
//   const fetchCocktails = async (term) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get(
//         `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
//       );
//       setCocktails(response.data.drinks || []); // Handle null response
//     } catch (err) {
//       console.error("Error fetching cocktails:", err);
//       setError("Something went wrong while fetching the data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Trigger API call when the searchTerm changes
//   useEffect(() => {
//     if (searchTerm) {
//       fetchCocktails(searchTerm);
//     } else {
//       setCocktails([]); // Clear results if search term is empty
//     }
//   }, [searchTerm]);

//   // Handle input change
//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div>
//       <h1>Cocktail Search</h1>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a cocktail..."
//           value={searchTerm}
//           onChange={handleInputChange}
//           className="search-input"
//         />
//       </div>

//       {loading && <p>Loading...</p>}

//       {error && <p className="error">{error}</p>}

//       <div className="cocktails-list">
//         {cocktails.length > 0 ? (
//           <ul>
//             {cocktails.map((cocktail) => (
//               <li key={cocktail.idDrink}>
//                 <h2>{cocktail.strDrink}</h2>
//                 <img
//                   src={cocktail.strDrinkThumb}
//                   alt={cocktail.strDrink}
//                   style={{ width: "150px", borderRadius: "8px" }}
//                 />
//               </li>
//             ))}
//           </ul>
//         ) : (
//           !loading && searchTerm && <p>No cocktails found for "{searchTerm}"</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CocktailSearch;
