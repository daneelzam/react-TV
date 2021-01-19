import React from 'react';
import styled from 'styled-components';
import TvList from './components/TvList/TvList';
import catalog from './db/CATALOG.json';

const Container = styled.div`
  margin: 0 auto;
  max-width: 60%;
`;

function App(props) {
  return (
    <Container>
      <TvList catalog={catalog}/>
    </Container>
  );
}

export default App;