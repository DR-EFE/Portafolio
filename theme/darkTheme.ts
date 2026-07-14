import { ThemeTokens } from './types';

export const darkTheme: ThemeTokens = {
  background: {
    rgb: '5 5 5',
    hex: '#050505',
  },
  surface: {
    rgb: '10 10 10',
    hex: '#0a0a0a',
  },
  card: {
    rgb: '17 17 17',
    hex: '#111111',
  },
  primary: {
    rgb: '0 243 255',
    hex: '#00f3ff',
  },
  secondary: {
    rgb: '112 0 255',
    hex: '#7000ff',
  },
  text: {
    rgb: '224 224 224',
    hex: '#e0e0e0',
  },
  muted: {
    rgb: '133 133 133',
    hex: '#858585',
  },
  border: {
    rgb: '255 255 255',
    hex: '#ffffff',
  },
  three: {
    sphereColor: '#00f3ff',
    pointLightColor: '#00f3ff',
    ambientLightIntensity: 0.5,
    pointLightIntensity: 1.5,
    directionalLightIntensity: 1.0,
    distort: 0.4,
    speed: 1.5,
    roughness: 0.2,
    metalness: 0.8,
  },
};
