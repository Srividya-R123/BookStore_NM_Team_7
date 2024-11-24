import React, { useState, useEffect } from "react";
import axios from "axios";
import Unavbar from "./Unavbar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products() {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchGenre, setSearchGenre] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Fetch items and wishlist on component mount
  useEffect(() => {
    axios
      .get("http://localhost:4000/item")
      .then((response) => {
        setItems(response.data);
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Error fetching items: ", error);
      });

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      axios
        .get(`http://localhost:4000/wishlist/${user.id}`)
        .then((response) => {
          setWishlist(response.data);
        })
        .catch((error) => {
          console.error("Error fetching wishlist: ", error);
        });
    }
  }, []);

  // Search functionality
  const handleSearch = () => {
    const filteredItems = items.filter((item) => {
      const matchesTitle = searchTitle
        ? item.title.toLowerCase().includes(searchTitle.toLowerCase())
        : true;
      const matchesAuthor = searchAuthor
        ? item.author.toLowerCase().includes(searchAuthor.toLowerCase())
        : true;
      const matchesGenre = searchGenre
        ? item.genre.toLowerCase() === searchGenre.toLowerCase()
        : true;

      return matchesTitle && matchesAuthor && matchesGenre;
    });

    setSearchResults(filteredItems);
  };

  // Add item to wishlist
  const addToWishlist = async (itemId) => {
    try {
      // Find the selected item by itemId
      const selectedItem = items.find((item) => item._id === itemId);
      if (!selectedItem) throw new Error('Selected item not found');
  
      const { title, author, genre, description, price, itemImage, _id: itemId2 } = selectedItem;
      const userId = JSON.parse(localStorage.getItem('user')).id;
      const userName = JSON.parse(localStorage.getItem('user')).name;
  
      await axios.post(`http://localhost:4000/wishlist/add`, {
        itemId: itemId2,
        title,
        author,
        genre,
        description,
        price,
        itemImage,
        userId,
        userName,
      });
  
      // Refresh the wishlist
      const response = await axios.get(`http://localhost:4000/wishlist/${userId}`);
      setWishlist(response.data);
    } catch (error) {
      console.error('Error adding item to wishlist:', error);
    }
  };
  
  const removeFromWishlist = async (itemId) => {
    try {
      const userId = JSON.parse(localStorage.getItem('user')).id;
  
      // Remove item from the wishlist
      await axios.post(`http://localhost:4000/wishlist/remove`, { itemId, userId });
  
      // Refresh the wishlist items
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        const response = await axios.get(`http://localhost:4000/wishlist/${user.id}`);
        setWishlist(response.data);
      }
    } catch (error) {
      console.error('Error removing item from wishlist: ', error);
    }
  };
  
  const isItemInWishlist = (itemId) => {
    return wishlist.some((item) => item.itemId === itemId);
  };
  return (
    <div>
      <Unavbar />
      <div id="home" className="home-container">
        <p className="book-count">OVER 20,000+ BOOKS AVAILABLE</p>
        <h1 className="title">Find Your Next Favorite Book</h1>
        <div className="search-container">
          <select
            className="dropdown"
            value={searchGenre}
            onChange={(e) => setSearchGenre(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non Fiction</option>
            <option value="Science">Science</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
            <option value="Biography">Biography</option>
          </select>
          <input
            type="text"
            placeholder="Enter book title"
            className="input-field"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter book author"
            className="input-field"
            value={searchAuthor}
            onChange={(e) => setSearchAuthor(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search Now
          </button>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Books List</h2>
        {searchResults.length === 0 ? (
          <p className="text-center text-gray-700">No results found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map((item) => (
              <div key={item._id} className="bg-white p-4 rounded shadow">
                <img
                  src={`http://localhost:4000/${item.itemImage}`}
                  alt="Item Image"
                  className="rounded-t-lg"
                  style={{ height: "350px", width: "500px" }}
                />
                <div>
                  <p className="text-xl font-bold mb-2">{item.title}</p>
                  <p className="text-gray-700 mb-2">Author: {item.author}</p>
                  <p className="text-gray-700 mb-2">Genre: {item.genre}</p>
                  <p className="text-blue-500 font-bold">Price: ${item.price}</p>

                  {isItemInWishlist(item._id) ? (
                    <Button
                      style={{ backgroundColor: "red", border: "none" }}
                      onClick={() => removeFromWishlist(item._id)}
                    >
                      Remove from Wishlist
                    </Button>
                  ) : (
                    <Button
                      style={{ backgroundColor: "rebeccapurple", border: "none" }}
                      onClick={() => addToWishlist(item._id)}
                    >
                      Add to Wishlist
                    </Button>
                  )}
                  <Button
                    style={{
                      backgroundColor: "rebeccapurple",
                      border: "none",
                      marginLeft: "3px",
                    }}
                  >
                    <Link
                      to={`/uitem/${item._id}`}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      View
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
