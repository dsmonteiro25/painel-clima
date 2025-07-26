import { WiDaySunny, WiCloud, WiRain, WiThunderstorm, WiFog, WiSnow } from "react-icons/wi";
import './ForecastCard.css';

function getWeatherIcon(description) {
  const desc = description.toLowerCase();
  if (desc.includes("sun")) return <WiDaySunny size={30} />;
  if (desc.includes("cloud")) return <WiCloud size={30} />;
  if (desc.includes("rain")) return <WiRain size={30} />;
  if (desc.includes("thunder") || desc.includes("storm")) return <WiThunderstorm size={30} />;
  if (desc.includes("fog") || desc.includes("mist")) return <WiFog size={30} />;
  if (desc.includes("snow")) return <WiSnow size={30} />;
  return <WiDaySunny size={30} />; // padrão
}

const ForecastCard = ({ day, index }) => {
  const date = new Date(day.date).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });
  const condition = day.hourly[0].weatherDesc[0].value;
  const maxTemp = day.maxtempC;
  const minTemp = day.mintempC;

  return (
    <div className="forecast-card">
      <h4>{index === 0 ? 'Hoje' : index === 1 ? 'Amanhã' : date}</h4>
      <div className="weather-icon">{getWeatherIcon(condition)}</div>
      <p>{condition}</p>
      <p>Max: {maxTemp}°C</p>
      <p>Min: {minTemp}°C</p>
    </div>
  );
};

export default ForecastCard;