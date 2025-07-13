import { ColorSystem, DarkModeConfig } from './index';

export interface OKLCH {
  l: number;
  c: number;
  h: number;
  a?: number;
}

export interface RGB {
  r: number;
  g: number;
  b: number;
  a?: number;
}

export interface ColorValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export interface ContrastRatio {
  ratio: number;
  passes: {
    aa: boolean;
    aaa: boolean;
    largeTextAa: boolean;
    largeTextAaa: boolean;
  };
}

export type ColorFormat = 'oklch' | 'srgb' | 'p3' | 'hex';

export interface ColorConversionOptions {
  format: ColorFormat;
  fallback?: boolean;
  precision?: number;
}

export interface GeneratorConfig {
  colors: ColorSystem;
  darkMode?: DarkModeConfig;
  prefix?: string;
  formatOptions?: {
    colorSpace?: ColorFormat;
    includeP3?: boolean;
    includeFallbacks?: boolean;
    precision?: number;
  };
}