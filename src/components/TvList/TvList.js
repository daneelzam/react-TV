import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sort from '../Sort/Sort';
import Tv from '../Tv/Tv';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostList = styled.div`
`;

function TvList({ catalog }) {
  const [sortedList, setSortedList] = useState(null);
  useEffect(() => setSortedList(catalog), [catalog]);

  return (
    <Container>
      <Sort catalog={catalog} setSortedList={setSortedList} />
      <PostList>
        {sortedList && sortedList.map((tv) => <Tv key={tv.Name + tv.Specifications} tv={tv} />)}
      </PostList>
    </Container>
  );
}

export default TvList;
