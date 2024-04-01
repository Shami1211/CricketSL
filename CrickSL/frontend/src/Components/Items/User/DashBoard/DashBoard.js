import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Item.css";
import { Link } from "react-router-dom";
const URL = "http://localhost:8080/items";

function DashBoard() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(URL);
      setItems(response.data.items);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleSearch = () => {
    const filteredItems = items.filter((item) =>
      Object.values(item).some((field) =>
        field.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setItems(filteredItems);
    setNoResults(filteredItems.length === 0);
  };

  return (
    <div className="itmdetails">
      <div className="itm_nav_bar_full">
        <div className="itm_nav_bar">
          <button
            className="itm_nav_bar_btn_admin"
            onClick={() => (window.location.href = "/admin/itemdash")}
          >
            Admin
          </button>
          <button
            className="itm_nav_bar_btn"
            onClick={() => (window.location.href = "/")}
          >
            Home
          </button>
          <button
            className="itm_nav_bar_btn"
            onClick={() => (window.location.href = "/balldetails")}
          >
            Ball
          </button>
          <button
            className="itm_nav_bar_btn"
            onClick={() => (window.location.href = "/batdetails")}
          >
            Bat
          </button>
          <button
            className="itm_nav_bar_btn"
            onClick={() => (window.location.href = "/glovesdetails")}
          >
            Gloves
          </button>
          <button
            className="itm_nav_bar_btn"
            onClick={() => (window.location.href = "/helmetdetails")}
          >
            Helmets
          </button>
          <button
            className="itm_nav_bar_btn"
            onClick={() => (window.location.href = "/padsdetails")}
          >
            Pads
          </button>
          <button
            className="itm_nav_bar_btn"
            onClick={() => (window.location.href = "/shooesdetails")}
          >
            Shoes
          </button>
        </div>
      </div>
      <div className="userhomebk">
        <p className="topic_para">
          "Acquire Your Premium Cricket<br></br> Equipment Today"
        </p>
        <h1 className="topic_home">Crick </h1>
        <h1 className="topic_home2">SL</h1>
      </div>
      <div className="item_details_body">
        <div className="search_box">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            name="search"
            className="serch_ipt"
            placeholder="Search Items"
          />
          <button onClick={handleSearch} className="serchbtn">
            Search
          </button>
        </div>
        <br></br>
        <br></br>
        <div className="card_set_item">
          {noResults ? (
            <h1 className="item-topic">
              No results <span className="item-us">found</span>
            </h1>
          ) : (
            items.map((item) => (
              <div>
                <div className="">
                  <div key={item._id} className="card_item ">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt="Item_Image"
                        className="itm_img"
                      />
                    )}
                    <p className="itmname">{item.name}</p>
                    <div className="details_card_itm">
                      <p className="card_details">
                        <b>Quantity:</b> {item.quantity}
                      </p>
                      <p className="card_details">
                        <b>Size:</b> {item.size}
                      </p>
                      <p className="card_details">
                        <b>Company:</b> {item.company}
                      </p>
                    </div>
                    <div className="btn_box">
                      <button
                        className="serchbtn"
                        onClick={() => (window.location.href = "/getitem")}
                      >
                        Add List
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
