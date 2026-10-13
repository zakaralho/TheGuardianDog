# The Guardian Dog

Aplicativo de monitoramento e proteção para pets.

## Funcionalidades
- Cronômetro de passeio em tempo real
- Card de serviço ativo
- Rankings de passeadores
- Sino com notificações e badge
- Tela de emergência com botão SOS
- Mapa e localização real do pet
- Tela de serviços e pacotes
- Perfil do usuário

## Requisitos
- Node.js 18+
- Expo CLI
- Android Studio / Xcode (opcional)

## Instalação
```bash
npm install
```

## Rodar o app
```bash
npx expo start
```

## Rodar o backend mock
```bash
npm run server
```

## Estrutura
- `app/` — telas e componentes do app
- `server/` — backend mock para alertas e notificações
- `assets/` — imagens e ícones

## Observações
A versão atual inclui mock local e geolocalização com `expo-location` para permitir a base do app para evolução real.
