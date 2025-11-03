# 🎯 FocusTimer

Um temporizador de foco (Pomodoro) com sons ambientes para ajudar na concentração e produtividade.

## 📋 Sobre o Projeto

O FocusTimer é uma aplicação web que combina a técnica Pomodoro com sons ambientes relaxantes, criando o ambiente perfeito para foco e produtividade. Com uma interface limpa e intuitiva, você pode gerenciar seu tempo de trabalho enquanto ouve sons da natureza ou ambientes que ajudam na concentração.

## ✨ Funcionalidades

- ⏱️ **Temporizador Personalizável**
  - Iniciar, pausar e parar o timer
  - Adicionar 5 minutos ao tempo
  - Reduzir 5 minutos do tempo
  - Tempo padrão de 25 minutos (Pomodoro)

- 🎵 **Sons Ambientes**
  - Floresta 🌲
  - Chuva 🌧️
  - Cafeteria ☕
  - Lareira 🔥
  - Controle individual de volume para cada som

- 🎨 **Modos de Cor**
  - Modo claro
  - Modo escuro
  - Alternância suave entre temas

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Google Fonts (Roboto)

## 📁 Estrutura do Projeto

```
FocusTimer/
├── assets/
│   ├── audios/          # Arquivos de áudio dos sons ambientes
│   ├── controls/        # Ícones dos controles do timer
│   └── icons/           # Ícones da interface
├── js/
│   ├── index.js         # Arquivo principal da aplicação
│   ├── timer.js         # Lógica do temporizador
│   ├── controls.js      # Controles do timer
│   ├── sounds.js        # Gerenciamento dos sons
│   ├── volume.js        # Controle de volume
│   ├── colorModes.js    # Alternância de temas
│   ├── elements.js      # Elementos do DOM
│   └── events.js        # Gerenciamento de eventos
├── index.html           # Página principal
├── style.css            # Estilos da aplicação
└── README.md            # Documentação do projeto
```

## 💻 Como Usar

### Pré-requisitos

Você pode acessar através [desse link](https://evans-costa.github.io/FocusTimer/) OU em desenvolvimento:

- Um navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado para desenvolvimento)


### Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/evans-costa/FocusTimer.git
```

2. Navegue até o diretório do projeto:
```bash
cd FocusTimer
```

3. Abra o arquivo `index.html` em seu navegador, ou use um servidor local:

**Opção 1: Servidor Python**
```bash
python -m http.server 8000
```

**Opção 2: Servidor Node.js (http-server)**
```bash
npx http-server
```

**Opção 3: Live Server (VS Code)**
- Instale a extensão "Live Server"
- Clique com o botão direito no `index.html`
- Selecione "Open with Live Server"

4. Acesse no navegador:
```
http://localhost:8000
```

## 🎮 Como Usar a Aplicação

1. **Iniciar o Timer**: Clique no botão ▶️ (play) para iniciar o temporizador
2. **Pausar**: Clique no botão ⏸️ (pause) para pausar
3. **Parar**: Clique no botão ⏹️ (stop) para parar e resetar o timer
4. **Ajustar Tempo**: Use os botões + e - para adicionar ou remover 5 minutos
5. **Sons Ambientes**: Clique em um dos ícones de som (floresta, chuva, cafeteria, lareira) para ativar o som ambiente
6. **Volume**: Use o slider abaixo de cada ícone de som para ajustar o volume
7. **Tema**: Clique no ícone ☀️ ou 🌙 no canto da tela para alternar entre modo claro e escuro

## 🎨 Características de Design

- Interface minimalista e moderna
- Responsiva e adaptável
- Transições suaves entre estados
- Feedback visual para interações
- Paleta de cores cuidadosamente selecionada para ambos os temas

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto é de código aberto e está disponível para uso pessoal e educacional.

## 👨‍💻 Autor

**Evans Costa**

- GitHub: [@evans-costa](https://github.com/evans-costa)

## 🙏 Agradecimentos

- Técnica Pomodoro criada por Francesco Cirillo
- Sons ambientes para foco e concentração
- Comunidade open source

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
