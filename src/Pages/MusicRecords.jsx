import React from "react";
import Styled from "styled-components";
import FilterSort from "../Components/FilterSort";
import MusicAlbums from "../Components/MusicAlbums";
const MusicRecords = () => {
  return (
    <Wrapper color="green">
      <WrapperFilterSort>
        <FilterSort />
      </WrapperFilterSort>
      <WrapperMusicAlbum>
        <MusicAlbums />
      </WrapperMusicAlbum>
    </Wrapper>
  );
};
const Wrapper = Styled.div`
border:${({ color }) => `0px solid ${color};`} ;
display:flex;
min-height:100vh;
position:sticky;
over-flow:hidden;


`;

const WrapperFilterSort = Styled.div`
width:240px;
border:1px solid black;
box-sizing:border-box;
padding-left:20px;
`;
const WrapperMusicAlbum = Styled.div`
border:0px solid red;
width:100%;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,max-content));
justify-content:center;
grid-gap:10px;
over-flow:scroll;
text-align:center;
padding-right:20px;
paddding-left:20px;
padding-top:20px;
`;
export default MusicRecords;
