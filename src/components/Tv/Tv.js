import React from 'react';
import styled from 'styled-components';

const Post = styled.div`
    width: 100%;
    height: 300px;
    margin: 5px;
    padding: 5px;
    background-color: #02315a9c;
    display: flex;
`;

const Picture = styled.div`
    height: 100%; 
    width: 50%;
    background-repeat: no-repeat;
    background-size: contain;
`;

const LeftSide = styled.div`
    margin: 0 5px;
    color: white;
    height: 100%; 
    width: 50%;
`;

const Inner = styled.div`
    margin-top: 5px;
    color: white;
`;

function Tv({ tv }) {
  return (
    tv
        && (
        <Post>
          <Picture style={{ backgroundImage: `url(${tv.Picture})` }} />
          <LeftSide>
            <Inner>{tv.Name}</Inner>
            <Inner>{tv.Price}</Inner>
            <Inner>{tv.Size}</Inner>
            <Inner>{tv['Size(cm)']}</Inner>
            <Inner>{tv.Specifications}</Inner>
          </LeftSide>
        </Post>
        )
  );
}

export default Tv;
