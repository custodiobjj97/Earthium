import styled from "styled-components";


export const Section = styled.section`
padding: 120px 12px;
display: grid;
grid-template-columns: 1fr;
align-items: center;
color: #fff;

.about-text1{
  padding: 1rem;
}

h2{
  font-size: 2rem;
  text-align: left;
}


.about-image img{
  width: 100%;
}

@media (min-width:920px){
  grid-template-columns: 1fr 1fr;


  .about-image img{
  width: 90%;
}
}
`