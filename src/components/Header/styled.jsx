import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 80px;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 150px;
  margin-right: 3rem;
`;

export const Icon = styled.img`
  width: 20px;
  margin: 0 0.25rem;
`;

export const SearchInput = styled.div`
  width: 30vw;
  display: flex;
  border-bottom: 1px solid #7a7a7a;

  & input {
    flex-grow: 1;
    border: 0;
  }

  & input:focus {
    outline: 0;
  }
`;

export const CartItemCount = styled.span`
  background-color: #f8475f;
  border-radius: 50%;
  width: 14px;
  padding: 1px;
  font-size: 10px;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
