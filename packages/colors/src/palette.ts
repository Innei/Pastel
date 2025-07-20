import { applicationColors,highContrastColors, kawaiiColors, regularColors } from './colors';
import { backgroundColors, elementColors, fillColors, materialColors } from './semantic';
import type { ColorPalette,ColorSystem } from './types';

export const kawaiiColorSystem: ColorSystem = {
  regular: regularColors,
  regularHighContrast: highContrastColors,
  regularKawaii: kawaiiColors,
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