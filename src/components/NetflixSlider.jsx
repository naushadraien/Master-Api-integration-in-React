import React from 'react';
import styled from 'styled-components';

const NetflixSlider = ({mainData}) => {
  const {jawSummary} = mainData;
  const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
  return (
    <Wrapper>
    <div className="card" style={{width: '18rem'}}>
  <img src={jawSummary.backgroundImage.url} className="card-img-top" alt={jawSummary.title}/>
  <div className="card-body">
    <h1 className="card-title">{jawSummary.title}</h1>
    <p className="card-text">{jawSummary.synopsis}</p>
  </div>
</div>
    </Wrapper>
  )
}

export default NetflixSlider;