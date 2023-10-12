import styled from "styled-components";

export const Section = styled.section`
padding: 120px 12px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

h2{
  color: #fff;
  font-size: 2.55rem;
  margin-bottom: 1.1rem;
}
span{
  color: #fff;
  display: inline-block;
  margin-bottom: 2rem;
}
.group-box{
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
}
.box{
  padding: 1rem;
  background-color: #02033B;
  color: #fff;
  border: 2px solid #02033B;
  border-radius: 4px;
  transition: .4s;
}



.box:hover{
  border: 2px solid var(--primary-color);
}
.box img{
  width: 100%;
}

@media (min-width:920px){
  .group-box{
    grid-template-columns: repeat(3,300px);
    gap: 40px;
}

}
`