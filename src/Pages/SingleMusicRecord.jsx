import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getMusicRecord } from "../Redux/AppReducer/action";
import Helmet from "react-helmet";

const SingleMusicRecord = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { musicRecords } = useSelector((store) => {
    return store.appReducer;
  });
  useEffect(() => {
    if (musicRecords.length === 0) {
      dispatch(getMusicRecord());
    }
  }, [dispatch]);
  // if(musicRecords.length!==0){
  const currentMusic = musicRecords.find((el) => el.id === id);
  console.warn(currentMusic);
  return (
    <>
      <Helmet>
        <title>Music App | Single Music</title>
      </Helmet>
      <h2 style={{ textAlign: "center" }}>Single Musing page</h2>
      {musicRecords.length > 0 && (
        <div
          style={{
            width: "40%",
            margin: "auto",
            border: "1px solid black",
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h5>{currentMusic.artist}</h5>
          <div>
            <img src={currentMusic.img} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <p>{currentMusic.genre}</p>
            <p>{currentMusic.year}</p>
          </div>
          <h3>{currentMusic.name}</h3>
        </div>
      )}
      <Link to="/">
        {" "}
        <button
          style={{
            display: "block",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          Home
        </button>
      </Link>
    </>
  );
};

export default SingleMusicRecord;
