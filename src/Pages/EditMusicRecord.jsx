import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getMusicRecord, updateMusicRecord } from "../Redux/AppReducer/action";
import "../Styles/EditStyles.css";
import Helmet from "react-helmet";

const EditMusicRecord = () => {
  const [musicName, setMusicName] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { musicRecords } = useSelector((store) => {
    return store.appReducer;
  });
  useEffect(() => {
    if (musicRecords.length === 0) {
      dispatch(getMusicRecord());
    }
  }, [musicRecords]);
  useEffect(() => {
    if (id) {
      let currentMusic = musicRecords.find((el) => el.id === id);
      if (currentMusic) {
        setMusicName(currentMusic.name);
      }
    }
  }, [id, musicRecords]);
  const handleUpdate = () => {
    if (musicName) {
      const payload = {
        name: musicName,
      };
      dispatch(updateMusicRecord(id, payload)).then((r) => {
        navigate("/");
      });
    }
    // console.log("updateddd ", musicName);
  };
  // console.log("state:::", musicRecords);
  return (
    <div className="editBox">
      <Helmet>
        <title>Music App Edit</title>
      </Helmet>
      <input
        type="text"
        value={musicName}
        placeholder="edit Name"
        onChange={(e) => setMusicName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditMusicRecord;
