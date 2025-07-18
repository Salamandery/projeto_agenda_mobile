# 📱 Projeto Agenda Mobile

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-0.63.2-61DAFB?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/Expo-39.0.2-000020?style=for-the-badge&logo=expo"/>
  <img src="https://img.shields.io/badge/TypeScript-3.9.5-3178C6?style=for-the-badge&logo=typescript"/>
  <img src="https://img.shields.io/badge/React%20Navigation-5.7.3-6C52EE?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/Axios-0.21.0-5A29E4?style=for-the-badge&logo=axios"/>
  <img src="https://img.shields.io/badge/Expo%20Vector%20Icons-10.0.0-000020?style=for-the-badge&logo=expo"/>
</p>

<div align="center">
  <b>🇧🇷 Português | <a href="#english-version">🇺🇸 English below</a></b>
</div>

---

## 📑 Sumário | Table of Contents
- [Sobre o Projeto | About](#sobre-o-projeto--about)
- [Tecnologias | Technologies](#tecnologias--technologies)
- [Funcionalidades | Features](#funcionalidades--features)
- [Estrutura | Structure](#estrutura--structure)
- [Rotas | Routes](#rotas--routes)
- [Instalação e Execução | Setup & Run](#instalação-e-execução--setup--run)
- [Configurações | Configuration](#configurações--configuration)
- [Autor | Author](#autor--author)

---

## Sobre o Projeto | About

**PT-BR:**
> Aplicativo mobile desenvolvido em React Native com Expo para gerenciamento de agenda médica. Permite login de usuários, visualização de exames, localização de hospitais, agendamento de consultas e gerenciamento de dados cadastrais do paciente.

**EN:**
> Mobile application developed in React Native with Expo for medical appointment management. Allows user login, exam viewing, hospital location, appointment scheduling, and patient registration data management.

---

## 🚀 Tecnologias | Technologies

**PT-BR:**
- **React Native 0.63.2**: Framework para desenvolvimento de aplicações mobile multiplataforma
- **Expo 39.0.2**: Plataforma e ferramentas para desenvolvimento React Native
- **TypeScript 3.9.5**: Superset do JavaScript com tipagem estática
- **React Navigation 5.7.3**: Biblioteca para navegação entre telas
- **Axios 0.21.0**: Cliente HTTP para requisições à API
- **Expo Vector Icons 10.0.0**: Biblioteca de ícones para React Native

**EN:**
- **React Native 0.63.2**: Framework for cross-platform mobile application development
- **Expo 39.0.2**: Platform and tools for React Native development
- **TypeScript 3.9.5**: JavaScript superset with static typing
- **React Navigation 5.7.3**: Library for screen navigation
- **Axios 0.21.0**: HTTP client for API requests
- **Expo Vector Icons 10.0.0**: Icon library for React Native

---

## ✨ Funcionalidades | Features

**PT-BR:**
- 🔐 **Sistema de Login**: Autenticação de usuários com validação de credenciais
- 🏠 **Tela Inicial**: Menu principal com acesso às funcionalidades
- 🧪 **Exames**: Visualização e gerenciamento de exames médicos
- 🏥 **Hospitais**: Localização e informações de hospitais
- 📅 **Agendamento**: Sistema de agendamento de consultas médicas
- 👤 **Dados Cadastrais**: Gerenciamento completo de informações do paciente
- 🎨 **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- 🌙 **Tema Escuro/Claro**: Suporte a temas claro e escuro

**EN:**
- 🔐 **Login System**: User authentication with credential validation
- 🏠 **Home Screen**: Main menu with access to features
- 🧪 **Exams**: View and manage medical exams
- 🏥 **Hospitals**: Hospital location and information
- 📅 **Scheduling**: Medical appointment scheduling system
- 👤 **Registration Data**: Complete patient information management
- 🎨 **Responsive Interface**: Design adaptable to different screen sizes
- 🌙 **Dark/Light Theme**: Support for light and dark themes

---

## 🗂️ Estrutura | Structure
```
projeto_agenda_mobile/
├── App.tsx                 # Componente principal da aplicação
├── assets/                 # Recursos estáticos (imagens, fontes)
│   ├── fonts/
│   └── images/
├── components/             # Componentes reutilizáveis
│   ├── ButtonDefault.tsx
│   ├── StyledText.tsx
│   └── Themed.tsx
├── constants/              # Constantes da aplicação
│   ├── Colors.ts
│   └── Layout.ts
├── hooks/                  # Custom hooks
│   ├── useCachedResources.ts
│   └── useColorScheme.ts
├── navigation/             # Configuração de navegação
│   ├── index.tsx
│   ├── BottomTabNavigator.tsx
│   └── LinkingConfiguration.ts
├── screens/                # Telas da aplicação
│   ├── Login/
│   ├── TabOneScreen.tsx
│   └── TabTwoScreen.tsx
├── services/               # Serviços e APIs
│   └── api.ts
├── types.tsx               # Definições de tipos TypeScript
└── package.json
```

---

## 🛣️ Rotas | Routes

**PT-BR:**
- **Login**: Tela de autenticação do usuário
- **Root**: Navegação principal com tabs
  - **TabOne (Início)**: Menu principal com funcionalidades
    - Exames
    - Hospitais
    - Agendamento
    - Sair
  - **TabTwo (Dados Cadastrais)**: Gerenciamento de informações pessoais
    - Nome completo
    - Idade
    - Data de nascimento
    - Tipo sanguíneo
    - E-mail
    - Peso
    - Alergias
    - Doenças crônicas
    - Endereço residencial

**EN:**
- **Login**: User authentication screen
- **Root**: Main navigation with tabs
  - **TabOne (Home)**: Main menu with features
    - Exams
    - Hospitals
    - Scheduling
    - Logout
  - **TabTwo (Registration Data)**: Personal information management
    - Full name
    - Age
    - Date of birth
    - Blood type
    - Email
    - Weight
    - Allergies
    - Chronic diseases
    - Residential address

---

## ⚙️ Instalação e Execução | Setup & Run

**PT-BR:**
1. **Pré-requisitos:** Node.js 16+ e npm/yarn
2. **Instale o Expo CLI globalmente:**
   ```bash
   npm install -g expo-cli
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```
4. **Inicie o aplicativo:**
   ```bash
   npm start
   # ou
   expo start
   ```
5. **Execute no dispositivo:**
   - Instale o app Expo Go no seu dispositivo
   - Escaneie o QR code que aparece no terminal
   - Ou execute emulador: `npm run android` ou `npm run ios`

**EN:**
1. **Prerequisites:** Node.js 16+ and npm/yarn
2. **Install Expo CLI globally:**
   ```bash
   npm install -g expo-cli
   ```
3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
4. **Start the app:**
   ```bash
   npm start
   # or
   expo start
   ```
5. **Run on device:**
   - Install Expo Go app on your device
   - Scan the QR code that appears in the terminal
   - Or run emulator: `npm run android` or `npm run ios`

---

## ⚙️ Configurações | Configuration

**PT-BR:**
- **API Base URL**: Configurada em `services/api.ts`
  - Produção: `https://agendapj.herokuapp.com/`
  - Desenvolvimento: `http://localhost:3333`
- **Temas**: Suporte a tema claro e escuro automático
- **Navegação**: Stack Navigator para login e Tab Navigator para funcionalidades
- **Ícones**: Utiliza Expo Vector Icons (MaterialIcons, Ionicons)

**EN:**
- **API Base URL**: Configured in `services/api.ts`
  - Production: `https://agendapj.herokuapp.com/`
  - Development: `http://localhost:3333`
- **Themes**: Automatic light and dark theme support
- **Navigation**: Stack Navigator for login and Tab Navigator for features
- **Icons**: Uses Expo Vector Icons (MaterialIcons, Ionicons)

---

## 👨‍💻 Autor | Author

**PT-BR:**

<div align="center">

**Rodolfo M. F. Abreu**  
Desenvolvedor de software apaixonado por tecnologia, aprendizado contínuo e boas práticas de programação. Sempre em busca de novos desafios e oportunidades para colaborar em projetos inovadores.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Sinta-se à vontade para entrar em contato para dúvidas, sugestões ou colaborações!

</div>

**EN:**

<div align="center">

**Rodolfo M. F. Abreu**  
Software developer passionate about technology, continuous learning, and best programming practices. Always looking for new challenges and opportunities to collaborate on innovative projects.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Feel free to get in touch for questions, suggestions, or collaborations!

</div>

---

<div align="center">
  <b>Feito com 💙 para estudos de React Native, Expo e desenvolvimento mobile multiplataforma.<br/>
  Made with 💙 for React Native, Expo and cross-platform mobile development studies.</b>
</div>

---

<div align="center" id="english-version">
  <b>🇺🇸 English version above | <a href="#top">🇧🇷 Versão em português acima</a></b>
</div>