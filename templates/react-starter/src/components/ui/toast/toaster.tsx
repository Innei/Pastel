import { useTheme } from 'next-themes';
import type { CSSProperties } from 'react';
import { Toaster as Sonner } from 'sonner';

export const Toaster = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Sonner
      richColors
      className="group"
      theme={resolvedTheme as 'light' | 'dark' | undefined}
      style={
        {
          '--normal-bg': 'var(--color-background)',
          '--normal-border': 'var(--color-border)',
          '--normal-text': 'var(--color-text)',
          '--success-bg': 'var(--color-background)',
          '--success-border': 'var(--color-border)',
          '--success-text': 'var(--color-green)',
          '--error-bg': 'var(--color-background)',
          '--error-border': 'var(--color-border)',
          '--error-text': 'var(--color-red)',
          '--border-radius': '10px',
        } as CSSProperties
      }
      toastOptions={{
        classNames: {
          description: '!text-text-secondary',
          toast: '!shadow-(--shadow-notion-toast)',
        },
      }}
    />
  );
};
