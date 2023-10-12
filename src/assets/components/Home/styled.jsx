import styled from "styled-components";
import backgroundIMG  from '../../../../public/img/background.png'
export const Section = styled.section`
padding: 120px 12px;
display: grid;
grid-template-columns: 1fr;
align-items: center;
background: url(${backgroundIMG}) no-repeat center;
background-size: cover;
color: #fff;

.home-text{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
}
.home-text h1{
  font-size: 2.77rem;
  margin-bottom: 1.5rem;
}

.home-text p{
  font-size: .90rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
.home-text > .btn{
  max-width: 250px;
  gap: 7px;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
} 
.color{
  color: var(--primary-color);
}

.home-image img{
  width: 100%;
}

@media (min-width:920px){
  grid-template-columns: 1fr 1fr;
  gap: 100px;
   
  .home-text h1{
    font-size: 4rem;
  }
  .home-text p{
    font-size: 1.11rem;
  }
}
`