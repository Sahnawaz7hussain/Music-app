import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMusicRecord } from "../Redux/AppReducer/action";
import Loadingpic from "../Images/loadingpic.gif";
const MusicAlbums = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { musicRecords, isLoading, isError } = useSelector((store) => {
    return store.appReducer;
  });

  useEffect(() => {
    const genre = searchParams.getAll("genre");
    const sortBy = searchParams.get("sortBy");
    if (location || musicRecords.length === 0) {
      const queryParams = {
        params: {
          genre: genre,
          _sort: "year",
          _order: sortBy,
        },
      };

      dispatch(getMusicRecord(queryParams));
    }
  }, [location.search]);
  return (
    <>
      {isLoading ? (
        <img
          width={"150px"}
          style={{ marginTop: "150px" }}
          alt="Loading..."
          src={Loadingpic}
        />
      ) : (
        musicRecords.length > 0 &&
        musicRecords.map((el) => (
          <div key={el.id}>
            <div>
              <Link to={`/music/${el.id}`}>
                {" "}
                <img src={el.img} alt={el.name} />
              </Link>
            </div>
            <h4
              style={{
                textAlign: "center",
              }}
            >
              {el.name}
            </h4>
            <div>{el.genre}</div>
            <div>{el.year}</div>
            <Link to={`music/${el.id}/edit`}>
              <button>Edit Title</button>
            </Link>
          </div>
        ))
      )}
    </>
  );
};

export default MusicAlbums;
