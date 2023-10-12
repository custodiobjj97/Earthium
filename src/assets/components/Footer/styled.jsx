import styled from "styled-components";

export const Footer = styled.footer`
border-top: 1px solid var(--primary-color);
padding: 60px 12px;
display: grid;
grid-template-columns: 1fr;

.contact{
  color: #fff;

}
h3{
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.contact ul{
  margin-bottom: 2rem;
  
}

 ul li a{
  color: #fff;
  margin: .30rem;
}

.contatc img{
  display: block;
  margin-bottom: 2rem;
}

.box-input{
  display: flex;
  align-items: center;
  gap: 30px;
}

.copy{
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 1rem;
}

@media(min-width:920px){
  grid-template-columns: repeat(4,1fr);
  gap: 50px;
}

.copy{
  grid-column: 1 / - 1;
}
`