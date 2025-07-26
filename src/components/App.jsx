import { useState, useEffect } from "react";
import { WiDaySunny, WiCloud, WiRain, WiThunderstorm, WiFog, WiSnow } from "react-icons/wi";
import "./App.css";
import ForecastCard from "./ForecastCard";

function getWeatherIcon(description) {
  const desc = description.toLowerCase();
  if (desc.includes("sun")) return <WiDaySunny size={40} />;
  if (desc.includes("cloud")) return <WiCloud size={40} />;
  if (desc.includes("rain")) return <WiRain size={40} />;
  if (desc.includes("thunder") || desc.includes("storm")) return <WiThunderstorm size={40} />;
  if (desc.includes("fog") || desc.includes("mist")) return <WiFog size={40} />;
  if (desc.includes("snow")) return <WiSnow size={40} />;
  return <WiDaySunny size={40} />; // padrão
}

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Função para buscar dados climáticos
  const fetchWeather = async (query, isGeolocation = false) => {
    setLoading(true);
    setWeather(null);
    setForecast([]);
    setError("");
    try {
      const res = await fetch(`https://wttr.in/${query}?format=j1`);
      const data = await res.json();

      if (!data.current_condition || !data.weather) {
        setWeather("not_found");
        setError("Não foi possível obter os dados climáticos.");
        return;
      }

      if (!isGeolocation) {
        const apiReturnedCity = data?.nearest_area?.[0]?.areaName?.[0]?.value?.toLowerCase();
        const userCity = query.toLowerCase().trim();
        if (!apiReturnedCity || !apiReturnedCity.includes(userCity)) {
          setWeather("not_found");
          setError("Cidade não encontrada. Verifique o nome e tente novamente.");
          return;
        }
      }

      setWeather(data);
      setForecast(data.weather.slice(0, 3));

      if (isGeolocation) {
        const apiCity = data?.nearest_area?.[0]?.areaName?.[0]?.value || "Sua Localização";
        setCity(apiCity);
      }

      // Define a classe de fundo com base na condição climática
      const condition = data.current_condition[0].weatherDesc[0].value.toLowerCase();
      document.body.className = "";
      document.body.classList.add(
        condition.includes("sun") ? "sunny" :
        condition.includes("cloud") ? "cloudy" :
        condition.includes("rain") ? "rainy" :
        condition.includes("thunder") || condition.includes("storm") ? "stormy" :
        condition.includes("fog") || condition.includes("mist") ? "foggy" :
        condition.includes("snow") ? "snowy" : "default"
      );
    } catch (error) {
      console.error("Erro ao buscar clima:", error);
      setWeather("not_found");
      setError("Erro ao buscar dados climáticos. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Geolocalização automática
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const lat = latitude.toFixed(4);
          const lon = longitude.toFixed(4);
          await fetchWeather(`${lat},${lon}`, true);
        },
        () => {
          fetchWeather("São Luís");
          setCity("São Luís");
          setError("Geolocalização não permitida. Usando São Luís como padrão.");
        }
      );
    } else {
      fetchWeather("São Luís");
      setCity("São Luís");
      setError("Geolocalização não suportada pelo navegador. Usando São Luís como padrão.");
    }
  }, []);

  // Manipula a busca manual
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setError("Por favor, digite uma cidade.");
      return;
    }
    await fetchWeather(city);
  };

  return (
    <div className="container">
      <h1>🌤️ Painel de Clima</h1>
      <form onSubmit={handleSearch} className="search">
        <input
          type="text"
          placeholder="Digite uma cidade..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {/* 🔄 Loading */}
      {loading && (
        <div className="loader">
          <div className="spinner"></div>
          <p>Carregando...</p>
        </div>
      )}

      {/* ❌ Erro */}
      {error && <p className="error">❌ {error}</p>}

      {/* ✅ Dados do clima */}
      {weather && weather !== "not_found" && (
        <div className="weather-card">
          <h2>{city.toUpperCase()}</h2>
          <div className="weather-icon">
            {getWeatherIcon(weather.current_condition[0].weatherDesc[0].value)}
          </div>
          <p>
            <strong>Condição:</strong>{" "}
            {weather.current_condition[0].weatherDesc[0].value}
          </p>
          <p>
            <strong>Temperatura:</strong>{" "}
            {weather.current_condition[0].temp_C} °C
          </p>
          <p>
            <strong>Umidade:</strong> {weather.current_condition[0].humidity}%
          </p>
          <p>
            <strong>Vento:</strong>{" "}
            {weather.current_condition[0].windspeedKmph} km/h
          </p>
        </div>
      )}

      {/* 📅 Previsão do tempo */}
      {forecast.length > 0 && (
        <div className="forecast-container">
          <h3>Previsão para os Próximos Dias</h3>
          <div className="forecast-list">
            {forecast.map((day, index) => (
              <ForecastCard key={index} day={day} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;