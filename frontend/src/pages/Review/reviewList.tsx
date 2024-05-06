import axios from "axios";
import React, { useEffect, useState } from "react";
import { reviewList } from "./types/review.type";
import { useNavigate } from "react-router-dom";

const ReviewList = () => {
  const navigate = useNavigate();
  const [reviewData, setReviewData] = useState<reviewList[]>([]);
  const getReviewList = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/review/getAll`
    );
    if (response?.status === 200) {
      setReviewData(response?.data);
    }
  };
const handleDelete =async (id)=>{
    const response =await axios.delete(`${process.env.REACT_APP_API_URL}/review/delete/:${id}`)
    if(response.status === 200 ){
        getReviewList()
    }
}
  useEffect(() => {
    getReviewList();
  }, []);
  return (
    <div>
      <h2 style={{ color: "grey" }}>ReviewList</h2>
      <button style={{background:"lightgreen", padding:"8px",
        margin:"8px"
      }} type="button" onClick={()=>navigate("/new")}>Add Review</button>
      <table style={{ border: "1px solid black", borderCollapse: "collapse", margin:"0 auto"}}>
        <thead style={{ border: "1px solid black"}}>
          <tr >
            <th style={{ border: "1px solid black", padding:"8px"}}  >ID</th>
            <th style={{ border: "1px solid black", padding:"8px"}}>Title</th>
            <th style={{ border: "1px solid black", padding:"8px"}}>Content</th>
            <th style={{ border: "1px solid black", padding:"8px"}}>Create(Date and Time)</th>
            <th style={{ border: "1px solid black", padding:"8px"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {reviewData && reviewData.length > 0 ? (
            reviewData &&
            reviewData?.map((item: reviewList, _index: number) => {
              return (
                <tr key={item.uuid}>
                  <td style={{ border: "1px solid black", padding:"8px"}}>{item.uuid}</td>
                  <td style={{ border: "1px solid black", padding:"8px"}}>{item.title}</td>
                  <td style={{ border: "1px solid black", padding:"8px"}}>{item.content}</td>
                  <td style={{ border: "1px solid black", padding:"8px"}}>{item.created_at}</td>
                  <td style={{ border: "1px solid black", padding:"8px"}}>
                    <button
                      type="button"
                      onClick={() => navigate(`/:${item.uuid}`)}
                      style={{marginRight:"4px"}}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(`/:${item.uuid}`)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5}>
                <h2>Data not found</h2>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewList;
