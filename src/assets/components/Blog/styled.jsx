import styled from "styled-components";

export const Section = styled.section`
padding: 120px 12px;
display: grid;
grid-template-columns: 1fr;
align-items: center;

.blog-image img{
  width: 100%;
}

.blog-text1 h2{
  color: #fff;
  font-size: 2.66rem;
  text-align: right;
}

@media (min-width:920px){
 grid-template-columns: 1fr 1fr;
 gap: 10px;
}
.blog-image img{
  width: 90%;
}
`