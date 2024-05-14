import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = () => {
  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    cost: "",
    address: "",
    rating: "",
    description: ""
  });
  const [images, setImages] = useState(Array.from({ length: 4 }, () => ({ original: "" })));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendHouse = (e) => {
    e.preventDefault();
    const newHouse = {
      id: formData.id, // Use the entered ID
      img: file ? URL.createObjectURL(file) : "",
      name: formData.name,
      cost: formData.cost,
      address: formData.address,
      rating: formData.rating,
      description: formData.description,
      images: images
    };
    console.log(newHouse);
    setFile("");
    setFormData({
      id: "",
      name: "",
      cost: "",
      address: "",
      rating: "",
      description: ""
    });
    setImages(Array.from({ length: 4 }, () => ({ original: "" })));
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new House</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="right">
            <form>
              
              <div className="formInput">
                <label>ID:</label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formInput">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formInput">
                <label>Cost:</label>
                <input
                  type="text"
                  name="cost"
                  value={formData.cost}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formInput">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formInput">
                <label>Rating:</label>
                <input
                  type="text"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formInput">
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              {images.map((image, index) => (
                <div className="formInput" key={index}>
                  <label>Image {index + 1}:</label>
                  <input
                    type="file"
                    onChange={(e) => {
                      const newImages = [...images];
                      newImages[index] = { original: URL.createObjectURL(e.target.files[0]) };
                      setImages(newImages);
                    }}
                  />
                </div>
              ))}

              <button onClick={sendHouse}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
