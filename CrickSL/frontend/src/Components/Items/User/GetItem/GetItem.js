import React, { useState } from "react";
import axios from "axios";

function GetItem() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    studentId: "",
    quantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { quantity } = formData;

    try {
      const response = await axios.post(
        "http://localhost:8080/getitems",
        formData
      );
      alert("Added successfully:", response.data);

      setFormData({
        name: "",
        address: "",
        phoneNumber: "",
        studentId: "",
        quantity: 0,
      });
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <div>
      <div className="rate-full-box">
        <div>
          <h1 className="item-topic">
            Get <span className="item-us">Item</span>
          </h1>
          <form onSubmit={handleSubmit} className="item-full-box-form">
            <div>
              <label className="item-full-box-label">Item ID</label>
              <br></br>
              <input
                type="text"
                name="itemit"
                readOnly
                className="item-full-box-input"
              />
              <label className="item-full-box-label">Item Name</label>
              <br></br>
              <input
                type="text"
                readOnly
                name="itemname"
                className="item-full-box-input"
              />
            </div>

            <label className="item-full-box-label">Full Name</label>
            <br></br>
            <input
              type="text"
              name="name"
              className="item-full-box-input"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <label className="item-full-box-label">Address</label>
            <br></br>
            <input
              type="text"
              name="address"
              className="item-full-box-input"
              value={formData.address}
              onChange={handleChange}
            />
            <br />
            <label className="item-full-box-label">Phone Number</label>
            <br></br>
            <input
              type="text"
              name="phoneNumber"
              className="item-full-box-input"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <br />
            <label className="item-full-box-label">Your Student Id</label>
            <br></br>
            <input
              type="text"
              name="studentId"
              className="item-full-box-input"
              value={formData.studentId}
              onChange={handleChange}
            />
            <br />
            <label className="item-full-box-label">You Need Quantity</label>
            <br></br>
            <input
              type="number"
              name="quantity"
              className="item-full-box-input"
              value={formData.quantity}
              onChange={handleChange}
            />
            <button type="submit" className="item-add-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetItem;
