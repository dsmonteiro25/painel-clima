🌤️ Painel de Clima — React App
Uma aplicação web moderna desenvolvida com React e Vite que permite consultar informações meteorológicas em tempo real de qualquer cidade do mundo, com suporte a geolocalização automática e previsão para os próximos dias. Os dados são obtidos da API pública wttr.in, que não requer chave de API.
O design é elegante, com um painel branco semitransparente, ícones SVG, animações suaves e uma imagem de fundo personalizada, proporcionando uma experiência visual atraente e responsiva.


🚀 Funcionalidades

Busca de Cidade: Pesquise o clima de qualquer cidade digitando seu nome.
Geolocalização Automática: Exibe o clima da sua localização atual ao carregar a página (com permissão do usuário).
Previsão do Tempo: Mostra a previsão para os próximos 3 dias (hoje, amanhã e depois de amanhã).
Dados Climáticos:
Temperatura atual (°C)
Condição climática com ícones SVG dinâmicos
Umidade (%)
Velocidade do vento (km/h)


Interface Moderna:
Painel branco semitransparente com sombra suave.
Imagem de fundo personalizada cobrindo toda a tela.
Animações de fade-in e slide-up para cartões de clima e previsão.
Fonte Poppins para tipografia elegante.
Layout responsivo para dispositivos móveis e desktops.


Feedback Visual:
Spinner animado durante o carregamento.
Mensagens de erro claras para cidades inválidas ou falhas na geolocalização.


🛠️ Tecnologias Utilizadas


React: Biblioteca para construção da interface.
Vite: Ferramenta de build rápida e moderna.
wttr.in: API pública para dados climáticos.
react-icons: Ícones SVG para condições climáticas.
Google Fonts (Poppins): Tipografia moderna e elegante.
CSS Puro: Estilização com animações e layout responsivo.


📦 Instalação e Uso
Pré-requisitos

Node.js (versão 16 ou superior)
npm ou yarn

Passos

Clone o repositório:git clone https://github.com/dsmonteiro25/painel-clima.git


Entre na pasta do projeto:cd painel-clima


Instale as dependências:npm install


Inicie o servidor de desenvolvimento:npm run dev


Acesse no navegador:Abra http://localhost:5173.


Nota: Certifique-se de que a imagem de fundo está em src/assets/background.jpg. Caso use outro nome ou formato (ex.: background.png), atualize o caminho no arquivo src/components/App.css.


📸 Exemplo de Uso
🌤️ São Paulo

Condição: Partly cloudy ☁️
Temperatura: 22°C
Umidade: 65%
Vento: 12 km/h

📅 Previsão para os Próximos Dias
Hoje: Partly cloudy ☁️, Max: 24°C, Min: 18°C
Amanhã: Sunny ☀️, Max: 26°C, Min: 19°C
Quarta, 27 Jul: Rain 🌧️, Max: 21°C, Min: 17°C


💡 Como Contribuir

Faça um fork do repositório.
Crie uma branch para sua feature (git checkout -b feature/nova-funcionalidade).
Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade').
Push para a branch (git push origin feature/nova-funcionalidade).
Abra um Pull Request.

Sugestões de melhorias:

Adicionar um toggle de modo escuro/claro.
Implementar histórico de buscas com localStorage.
Adicionar suporte a outras unidades (ex.: Fahrenheit, mph).
Integrar imagens de fundo dinâmicas via API (ex.: Unsplash).


📌 Autor
Desenvolvido por Daniel Monteiro👨‍💻
Este é o quarto projeto do meu portfólio como desenvolvedor front-end.
