import type { ColorValidationResult, ContrastRatio,OKLCH, RGB } from './types/utilities';
import { rgb, oklch, p3 } from 'culori';
import type { ColorValue } from './types';

export function mapHexToRGBString(hex: string): string {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return `rgb(${r} ${g} ${b})`;
}

export function addAlphaToHex(hex: string, alpha: number): string {
  const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0');
  return hex + alphaHex;
}

export function parseOKLCH(oklchString: string): OKLCH | null {
  const match = oklchString.match(/oklch\(([\d.]+)%?\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\)/);
  if (!match) return null;
  
  const l = Number.parseFloat(match[1]) / (match[1].includes('%') ? 100 : 1);
  const c = Number.parseFloat(match[2]);
  const h = Number.parseFloat(match[3]);
  const a = match[4] ? Number.parseFloat(match[4]) : 1;
  
  return { l, c, h, a };
}

export function formatOKLCH(oklch: OKLCH): string {
  const { l, c, h, a = 1 } = oklch;
  if (a < 1) {
    return `oklch(${l} ${c} ${h} / ${a})`;
  }
  return `oklch(${l} ${c} ${h})`;
}

export function parseRGB(rgbString: string): RGB | null {
  const match = rgbString.match(/rgba?\(([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\)/);
  if (!match) return null;
  
  const r = Number.parseInt(match[1]);
  const g = Number.parseInt(match[2]);
  const b = Number.parseInt(match[3]);
  const a = match[4] ? Number.parseFloat(match[4]) : 1;
  
  return { r, g, b, a };
}

export function formatRGB(rgb: RGB): string {
  const { r, g, b, a = 1 } = rgb;
  if (a < 1) {
    return `rgba(${r} ${g} ${b} / ${a})`;
  }
  return `rgb(${r} ${g} ${b})`;
}

export function validateColor(colorValue: string): ColorValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  if (colorValue.startsWith('oklch(')) {
    const oklch = parseOKLCH(colorValue);
    if (!oklch) {
      errors.push('Invalid OKLCH format');
    } else {
      if (oklch.l < 0 || oklch.l > 1) {
        errors.push('Lightness must be between 0 and 1');
      }
      if (oklch.c < 0 || oklch.c > 0.37) {
        errors.push('Chroma must be between 0 and 0.37');
      }
      if (oklch.h < 0 || oklch.h >= 360) {
        errors.push('Hue must be between 0 and 360');
      }
      if (oklch.c > 0.3) {
        warnings.push('Chroma values above 0.3 may not display correctly in sRGB');
      }
    }
  } else if (colorValue.startsWith('rgb')) {
    const rgb = parseRGB(colorValue);
    if (!rgb) {
      errors.push('Invalid RGB format');
    } else {
      if (rgb.r < 0 || rgb.r > 255 || rgb.g < 0 || rgb.g > 255 || rgb.b < 0 || rgb.b > 255) {
        errors.push('RGB values must be between 0 and 255');
      }
    }
  } else {
    errors.push('Unknown color format');
  }
  
  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}

export function calculateRelativeLuminance(rgb: RGB): number {
  const rsRGB = rgb.r / 255;
  const gsRGB = rgb.g / 255;
  const bsRGB = rgb.b / 255;
  
  const r = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
  const g = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
  const b = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);
  
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function calculateContrastRatio(rgb1: RGB, rgb2: RGB): ContrastRatio {
  const l1 = calculateRelativeLuminance(rgb1);
  const l2 = calculateRelativeLuminance(rgb2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  const ratio = (lighter + 0.05) / (darker + 0.05);
  
  return {
    ratio,
    passes: {
      aa: ratio >= 4.5,
      aaa: ratio >= 7,
      largeTextAa: ratio >= 3,
      largeTextAaa: ratio >= 4.5
    }
  };
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function toFixed(value: number, precision = 3): number {
  return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
}

/**
 * Generate color formats from OKLCH string
 */
export function createColorFromOKLCH(oklchString: string): ColorValue {
  // Parse OKLCH string manually to get the raw values
  const match = oklchString.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\)/);
  if (!match) {
    throw new Error(`Invalid OKLCH format: ${oklchString}`);
  }

  const l = Number.parseFloat(match[1]);
  const c = Number.parseFloat(match[2]);
  const h = Number.parseFloat(match[3]);
  const alpha = match[4] ? Number.parseFloat(match[4]) : 1;

  // Create culori OKLCH object with proper mode
  const oklchColor = { mode: 'oklch' as const, l, c, h, alpha };
  
  // Convert to sRGB
  const srgbColor = rgb(oklchColor);
  const srgbString = srgbColor ? 
    `rgb(${Math.max(0, Math.min(255, Math.round(srgbColor.r * 255)))} ${Math.max(0, Math.min(255, Math.round(srgbColor.g * 255)))} ${Math.max(0, Math.min(255, Math.round(srgbColor.b * 255)))})` :
    'rgb(0 0 0)';
  
  // Convert to P3
  const p3Color = p3(oklchColor);
  const p3String = p3Color ? 
    `color(display-p3 ${toFixed(p3Color.r, 3)} ${toFixed(p3Color.g, 3)} ${toFixed(p3Color.b, 3)})` :
    undefined;

  return {
    oklch: oklchString,
    srgb: srgbString,
    p3: p3String
  };
}

/**
 * Generate color formats from sRGB string
 */
export function createColorFromSRGB(srgbString: string): ColorValue {
  // Parse sRGB string
  const match = srgbString.match(/rgba?\((\d+)\s+(\d+)\s+(\d+)(?:\s*\/\s*([\d.]+))?\)/);
  if (!match) {
    throw new Error(`Invalid sRGB format: ${srgbString}`);
  }

  const r = Number.parseInt(match[1]) / 255;
  const g = Number.parseInt(match[2]) / 255;
  const b = Number.parseInt(match[3]) / 255;
  const alpha = match[4] ? Number.parseFloat(match[4]) : 1;

  // Create culori RGB object with proper mode
  const rgbColor = { mode: 'rgb' as const, r, g, b, alpha };
  
  // Convert to OKLCH
  const oklchColor = oklch(rgbColor);
  const oklchString = oklchColor ? 
    `oklch(${toFixed(oklchColor.l, 3)} ${toFixed(oklchColor.c, 3)} ${toFixed(oklchColor.h || 0, 0)})` :
    'oklch(0 0 0)';
  
  // Convert to P3
  const p3Color = p3(rgbColor);
  const p3String = p3Color ? 
    `color(display-p3 ${toFixed(p3Color.r, 3)} ${toFixed(p3Color.g, 3)} ${toFixed(p3Color.b, 3)})` :
    undefined;

  return {
    oklch: oklchString,
    srgb: srgbString,
    p3: p3String
  };
}

/**
 * Create color from either OKLCH or sRGB input
 */
export function createColor(input: string): ColorValue {
  if (input.startsWith('oklch(')) {
    return createColorFromOKLCH(input);
  } else if (input.startsWith('rgb')) {
    return createColorFromSRGB(input);
  } else {
    throw new Error(`Unsupported color format: ${input}. Use oklch() or rgb() format.`);
  }
}