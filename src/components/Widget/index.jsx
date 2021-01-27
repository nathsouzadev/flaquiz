import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.wrong};
  background-image: linear-gradient(rgba(100, 0, 0, 1),rgba(0, 0, 0, 0.6));
  border-radius: 5px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 32px 0;
    input {
      margin-bottom: 25px;
      height: 38px;
      border-radius: ${({ theme }) => theme.borderRadius};
      background-image: linear-gradient(rgba(100, 0, 0, 1),rgba(0, 0, 0, 0.2));
      border: 1px solid #FF4500;
      outline: none;
      padding: 0 16px;
      color: white;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
    }
    button {
      height: 38px;
      outline: none;
      border: 1px solid #FF4500;
      border-radius: ${({ theme }) => theme.borderRadius};
      background-color: #363636;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
        0px 2px 2px rgba(0, 0, 0, 0.24);
      span {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        text-transform: uppercase;
        color: #ffffff;
      }
      :enabled {
        background-color: red;
        cursor: pointer;
      }
    }
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: black;
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
