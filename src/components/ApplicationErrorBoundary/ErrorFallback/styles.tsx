import styled from 'styled-components';

export const ErrorContainer = styled.div`
  background-color: #2e2e2e;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 50px auto;
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ReloadButton = styled.button`
  background-color: #ff4757;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e84118;
  }
`;
