import styled from 'styled-components';

export const ContactItems = styled.li`
  align-items: center;
  background-color: transparent;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px;
  gap: 10px;
`;

export const ContactName = styled.span`
  color: black;
  font-weight: bold;
`;

export const ContactNumber = styled.a`
  color: black;
  font-weight: bold;
  cursor: pointer;

  &&:hover {
    text-decoration: underline;
  }
`;

export const EditButton = styled.button`
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 60%);
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  padding: 8px 16px;
  text-align: center;
  &&:hover {
    background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
  }
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  @media only screen and (max-width: 600px) {
    margin-right: 10px;
  }
  background: linear-gradient(90deg, #d73369 0%, #d6ae51 90%);
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  padding: 8px 16px;
  text-align: center;
  &&:hover {
    background: linear-gradient(90deg, #d53369 0%, #d5ae51 100%);
  }
`;
