import React from "react";
import { Route, Routes } from "react-router-dom";
import EditMusicRecord from "./EditMusicRecord";
import Login from "./Login";
import MusicRecords from "./MusicRecords";
import ReqAuth from "./ReqAuth";
import SingleMusicRecord from "./SingleMusicRecord";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicRecords />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/music/:id/edit"
        element={
          <ReqAuth>
            <EditMusicRecord />
          </ReqAuth>
        }
      />
      <Route path="/music/:id" element={<SingleMusicRecord />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default MainRoutes;
