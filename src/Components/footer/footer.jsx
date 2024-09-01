import { useEffect, useState } from "react";
import styled from "styled-components";
export const FooterContainer = ({ className }) => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=768bb8a9caf51079197ec0fa14483a5c"
    )
      .then((res) => res.json())
      .then(({ name, main, weather }) => {
        setCity(name);
        setTemp(Math.round(main.temp));
        setWeather(weather[0].description);
      });
  }, []);
  return (
    <>
      <div className={className}>
        <div>
          <div>Блог веб-разработчика</div>
          <div>web@developer.ru</div>
        </div>
        <div>
          <div>
            {city},{" "}
            {new Date().toLocaleString("ru", {
              day: "numeric",
              month: "long",
            })}
          </div>
          <div>
            {temp} градусов, {weather}
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer = styled(FooterContainer)`
display: flex;
justify-content: space-between;
align-items: center
height: 120px;
box-shadow: 0px 2px 17px;
width: 1000px;
padding: 20px 40px;
font-weight: bold;

`;
