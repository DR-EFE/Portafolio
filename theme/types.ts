export interface ThemeColorToken {
  rgb: string;
  hex: string;
}

export interface ThreeSceneTokens {
  sphereColor: string;
  pointLightColor: string;
  ambientLightIntensity: number;
  pointLightIntensity: number;
  directionalLightIntensity: number;
  distort: number;
  speed: number;
  roughness: number;
  metalness: number;
}

export interface ThemeTokens {
  background: ThemeColorToken;
  surface: ThemeColorToken;
  card: ThemeColorToken;
  primary: ThemeColorToken;
  secondary: ThemeColorToken;
  text: ThemeColorToken;
  muted: ThemeColorToken;
  border: ThemeColorToken;
  three: ThreeSceneTokens;
}
