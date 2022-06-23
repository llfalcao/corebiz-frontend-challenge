import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid red;
  position: relative;
  /* overflow: hidden; */
  height: 430px;
`;

export const Base = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, black, transparent);
  color: #ffffff;

  & div {
    width: 420px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20%;
    color: #ffffff;
    text-shadow: 1px 1px 4px #000000;
    font-size: 22px;
  }

  & h1 {
    font-weight: 700;
  }
`;

export const Banner = styled.img`
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
  margin: 0 0 0 auto;
`;
