import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 50px 0 20px 0;

  @media only screen and (max-width: 835px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  /* margin: 0 10px; */

  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(odd) {
        background: #f5f5f5;
      }
    }
  }

  .buttons-container {
    display: flex;
    padding: 2px 4px;

    button {
      flex: 1;
      height: 45px;
      font-size: 1rem;
      font-weight: bold;

      &:nth-child(even) {
        margin-left: 3px;
      }
    }
  }
`;
