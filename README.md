# 🌤️ Painel de Clima — React App

Uma aplicação web moderna desenvolvida com **React** e **Vite** que permite consultar informações meteorológicas em tempo real de qualquer cidade do mundo.  
Os dados são obtidos via [wttr.in](https://wttr.in), uma API pública que **não requer chave de API**.

✨ O painel possui design elegante com imagem de fundo personalizada, painel semitransparente, animações suaves, ícones climáticos e layout responsivo.

---

## 🚀 Funcionalidades

### 🔍 Consulta Climática
- Busca por nome de cidade.
- Previsão para os próximos **3 dias**: hoje, amanhã e depois de amanhã.
- Dados exibidos:
  - Temperatura atual (°C)
  - Condição climática com ícones visuais (☀️, 🌧️, ❄️...)
  - Umidade (%)
  - Velocidade do vento (km/h)

### 📍 Geolocalização
- Consulta automática do clima com base na sua **localização atual**, ao carregar a página (com permissão do navegador).

### 💡 Interface Moderna
- Painel branco **semi-transparente** com sombra suave.
- **Imagem de fundo** personalizada cobrindo a tela.
- Animações de **fade-in** e **slide-up**.
- Tipografia com **Google Fonts (Poppins)**.
- Layout **totalmente responsivo**.

### 🛎️ Feedback Visual
- Spinner animado durante carregamento.
- Mensagens claras para cidades inválidas ou erros de geolocalização.

---

## 🛠️ Tecnologias Utilizadas

- **React** — Interface declarativa
- **Vite** — Bundler moderno e ultra rápido
- **wttr.in API** — Dados climáticos sem necessidade de chave
- **react-icons** — Ícones SVG climáticos
- **Google Fonts (Poppins)** — Tipografia moderna
- **CSS puro** — Estilização e animações

---

## 📦 Instalação e Uso

### ✅ Pré-requisitos
- [Node.js](https://nodejs.org) (versão 16 ou superior)
- npm ou yarn

### 🔧 Passos

```bash
# Clone o repositório
git clone https://github.com/dsmonteiro25/painel-clima.git

# Acesse a pasta
cd painel-clima

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
Acesse em seu navegador: http://localhost:5173

🔔 Importante: Certifique-se de que a imagem de fundo está localizada em src/assets/background.jpg.
Se usar outro nome/formato (ex.: background.png), atualize o caminho em src/components/App.css.

📸 Exemplo de Uso
🌤️ São Paulo
Condição: ☁️ Partly cloudy
Temperatura: 22°C
Umidade: 65%
Vento: 12 km/h

📅 Previsão
Hoje: ☁️ Partly cloudy — Max: 24°C / Min: 18°C

Amanhã: ☀️ Sunny — Max: 26°C / Min: 19°C

Quarta, 27 Jul: 🌧️ Rain — Max: 21°C / Min: 17°C

💡 Como Contribuir
Faça um fork do projeto

Crie uma branch com sua feature: git checkout -b feature/nova-funcionalidade

Commit suas mudanças: git commit -m 'feat: adiciona nova funcionalidade'

Push para sua branch: git push origin feature/nova-funcionalidade

Abra um Pull Request

💭 Melhorias Futuras (sugestões)
🌗 Alternância entre modo escuro/claro

🕓 Histórico de buscas com localStorage

🌡️ Suporte a unidades imperiais (Fahrenheit, mph)

🖼️ Imagens de fundo dinâmicas via API (ex.: Unsplash)

👨‍💻 Autor
Desenvolvido por Daniel Monteiro
Este é o quarto projeto do meu portfólio como desenvolvedor Front-End.

📌 Sinta-se à vontade para sugerir melhorias ou reportar problemas abrindo uma issue ou pull request.
