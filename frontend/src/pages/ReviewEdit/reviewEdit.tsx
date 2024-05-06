import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ReviewEdit = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [titleError, setTitleError] = useState<string>();
  const [contentError, setContentError] = useState<string>();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.title === "") {
      setTitleError("Title can not be empty");
    }
    if (formData.content === "") {
      setContentError("Content can not be empty");
    } else {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/review/update/${pathname.split(":")[1]}`,
        { formData }
      );
      if (response.status === 200) {
        navigate("/");
      } else {
        alert("Something went wrong");
      }
    }
  };
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const getSpecificReview = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/review/getOne/${pathname.split(":")[1]}`
    );
    if (response.status === 200) {
      setFormData(response.data[0]);
    }
  };

  const handleReset =()=>{
    setFormData({title:"",content:""})
  }
  useEffect(() => {
    getSpecificReview();
  }, []);
  return (
    <div>
      <h2 style={{ color: "grey" }}>Add Review</h2>

      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => handleChange(e)}
          value={formData && formData.title}
        ></input>
        <p color="red">{titleError}</p>
        <br />
        <label>Content: </label>
        <textarea
          style={{ marginTop: "8px" }}
          rows={3}
          cols={30}
          name="content"
          id="title"
          onChange={(e) => handleChange(e)}
          value={formData && formData.content}
        ></textarea>
        <p color="red">{contentError}</p>
        <br />
        <button
          type="submit"
          style={{ background: "lightgreens", marginTop: "8px" }}
        >
          Submit
        </button>
        <button
          type="button"
          style={{ background: "lightgreens", marginTop: "8px" }}
          onClick={()=>handleReset()}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default ReviewEdit;
