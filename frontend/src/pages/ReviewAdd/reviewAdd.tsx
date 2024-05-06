import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReviewAdd = () => {
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
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/review/add`,
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
        ></input>
        <p color="red">
          {titleError}
        </p>
        <br />
        <label>Content: </label>
        <textarea
          style={{ marginTop: "8px" }}
          rows={3}
          cols={30}
          name="content"
          id="title"
          onChange={(e) => handleChange(e)}
        ></textarea>
        <p>{contentError}</p>
        <br />
        <button
          type="submit"
          style={{ background: "lightgreens", marginTop: "8px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewAdd;
