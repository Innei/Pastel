import type { ColorSystem, ColorPalette } from './types';
import { regularColors, applicationColors } from './colors';
import { elementColors, backgroundColors, fillColors, materialColors } from './semantic';

export const kawaiiColorSystem: ColorSystem = {
  regular: regularColors,
  element: elementColors,
  background: backgroundColors,
  fill: fillColors,
  material: materialColors,
  application: applicationColors
};

export const colorPalette: ColorPalette = {
  colors: kawaiiColorSystem,
  meta: {
    name: 'Kawaii UI Colors',
    description: 'A cute and soft pastel color system inspired by UIKit with OKLCH support',
    theme: 'kawaii'
  }
};