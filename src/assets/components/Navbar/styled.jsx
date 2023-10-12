import styled from "styled-components";

export const Header= styled.header`
padding: 1rem;
width: 100%;
height: 90px;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 22222;
background-color: var(--background-color);
box-shadow: 1px 1px 1px rgba(255,255,255,.5);
position: relative;

.logo img{
  width: 130px;
}

.list-menu{
  width: 100%;
  height: 0px;
  display: block;
  background-color: var(--background-color);
  position: absolute;
  top: 90px;
  right: 0px;
  visibility: hidden;
  opacity: 0;
  transition: .4s;
}

.list-menu.open{
  visibility: visible;
  opacity: 1;
  height: calc(60vh - 90px)
}

.list-menu li a{
  color: #fff;
  padding: .60rem;
  border-radius: 5px;
  margin: .20rem;
}
.list-menu li a:hover{
  padding: .60rem;
  background-color: var(--primary-color);
  border-radius: 5px;
  transition-duration:.4s ;
}
.active{
  background-color: var(--primary-color);
}
.flag{
  display: flex;
  align-items: center;
  gap: 10px;
}
.lock{
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--primary-color);
  padding: .90rem;
  cursor: pointer;
  color: #fff;
}

.lock:hover{
  opacity: .8;
  transition-duration: .4s;
}

.toggle{
  position: absolute;
  top: rem;
  right: 1rem;
  font-size: 2rem;
  background-color: transparent;
}


@media (min-width:920px){
  .toggle{
    display: none;
  }

  .list-menu{
    visibility: visible;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    gap:17px;
  }
}
`