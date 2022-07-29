import styled from "styled-components";

export const Container = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  @media (min-width: 768px) {
    margin-right: 50px;
    margin-left: 50px;
  }
  @media (min-width: 1024px) {
    margin-right: 80px;
    margin-left: 80px;
  }
  @media (min-width: 1440px) {
    margin-right: calc((100vw - 1350px) / 2);
    margin-left: calc((100vw - 1350px) / 2);
  }
`;

export const HeroContainer = styled.div`
  background: linear-gradient(
    90deg,
    #ffffff 40.52%,
    rgba(255, 255, 255, 1) 51.28%,
    rgba(255, 255, 255, 0.73) 57.22%,
    rgba(255, 255, 255, 0) 87.25%
  );
  position: relative;
  color: #333333;
  padding-bottom: 140px;
  > img {
    position: absolute;
    right: 0;
    z-index: -1;
  }
  > h1 {
    padding-top: 180px;
    font-weight: 300;
    font-size: 72px;
    > span {
      font-weight: 700;
    }
  }
  > h3 {
    font-weight: 300;
    font-size: 36px;
    line-height: 58px;
  }
`;
export const HeroButton = styled.button`
  background: #f44a25;
  border-radius: 25px;
  padding: 10px 24px 11px;
  width: 220px;
  height: 50px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  border: 1px solid #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-out;
  margin-top: 36px;
  &:hover {
    transition: all 0.3s ease-in;
    color: #f44a25;
    background: #fff;
    border: 1px solid #f44a25;
  }
`;

export const ContainerTrending = styled.div`
  color: #333333;
  margin-bottom: 40px;
  > h2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 74px;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 24px;
  }
`;

export const ContainerTrendingPizzas = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const CardTrendingPizza = styled.div`
  border: 0.801676px solid #bdbdbd;
  background: #fffdfd;
  border-radius: 30px;
  width: 30%;
  max-width: 290px;
  overflow: hidden;
  > img {
    width: 100%;
    max-height: 230px;
  }
  > div {
    text-align: center;
    padding: 16px;
    > h3 {
      color: #000000;
      font-weight: 600;
      font-size: 23px;
      line-height: 32px;
    }
    > .description {
      font-weight: 300;
      font-size: 14px;
      line-height: 18px;
      margin-top: 6px;
    }
    > .value {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      margin-top: 22px;
    }
  }
`;
export const CardTrendingButton = styled.button`
  background: #f44a25;
  border-radius: 25px;
  width: 90%;
  padding: 10px 24px 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 60px;
  border: 1px solid transparent;
  transition: all 0.2s ease-out;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in;
    background: #fff;
    color: #f44a25;
    border: 1px solid #f44a25;
  }
`;
