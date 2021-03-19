import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto, getComments, addComment } from "../../store/actions/actions";
import { Link, useHistory } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
function FeedPicture() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getPhoto());
    dispatch(getComments());
  }, []);

  const photoDetails = useSelector((state) => state.photosReducer.data);
  console.log(photoDetails);
  return (
    <div className="center">
      <div className="navbar">
        <button>
          <img
            className="camera"
            src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png"
            alt="camera"
            width="15%"
          />
        </button>
        <img
          className="insta"
          src="https://thepracticaldev.s3.amazonaws.com/i/9dgus6e6o80pv1gx8y7t.png"
          alt="logo"
          width="25%"
        />
        <button>
          <img
            className="send"
            src="https://pngimage.net/wp-content/uploads/2018/06/send-button-icon-png-6.png"
            alt="dm"
          />{" "}
        </button>
      </div>
      <div className="profile">
        {photoDetails.length > 0 &&
          photoDetails.map((img) => {
            return (
              <div style={{ margin: "40px" }}>
                <p>{img.author}</p>

                <img
                  onClick={() =>
                    history.push({
                      pathname: `/dashboard/${img.id}`,
                      state: img,
                    })
                  }
                  src={img.download_url}
                  alt="images"
                  width="100%"
                  height="10vh"
                />
              </div>
            );
          })}
      </div>
      <div className="navbar2">
        <img className="bar" />
      </div>
    </div>
  );
}

export default FeedPicture;
