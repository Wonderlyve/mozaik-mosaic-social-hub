# Mozaik React Native

Application mobile native pour Mozaik utilisant React Native et Expo.

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Démarrer le serveur de développement :
```bash
npx expo start
```

3. Scanner le QR code avec l'app Expo Go (iOS/Android) ou appuyer sur :
   - `i` pour ouvrir sur simulateur iOS
   - `a` pour ouvrir sur émulateur Android
   - `w` pour ouvrir dans le navigateur

## Structure du projet

```
native/
├── src/
│   ├── components/     # Composants réutilisables
│   ├── screens/        # Écrans de l'application
│   ├── types/          # Types TypeScript
│   └── data/           # Données de test
├── assets/             # Images et ressources
└── App.tsx             # Point d'entrée
```

## Fonctionnalités

- ✅ Mosaïque d'images avec différents formats
- ✅ Visualisation des posts en modal
- ✅ Stories avec gradient border
- ✅ Bouton flottant pour créer des instants
- ✅ Lecture automatique des vidéos
- ✅ Support des filtres visuels
- 🚧 Caméra pour créer des instants
- 🚧 Chat en temps réel
- 🚧 Profils utilisateurs

## Technologies

- React Native
- Expo
- TypeScript
- React Navigation
- Expo Image
- Expo AV (vidéos)
- Linear Gradient

## Prochaines étapes

1. Intégration de la caméra (expo-camera)
2. Système de navigation entre stories
3. Interface de chat
4. Profils utilisateurs complets
5. Authentification
6. Backend avec Supabase