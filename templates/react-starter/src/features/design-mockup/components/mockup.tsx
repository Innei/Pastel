import { cn } from '~/lib/cn';

import { AdvancedSection } from './advanced';
import { ControlsSection } from './controls';
import { DisplaySection } from './display';
import { FormsSection } from './forms';
import { LayoutSection } from './layout';
import { MenusSection } from './menus';
import { OverlaysSection } from './overlays';
import { ToastSection } from './toast';

interface TokenRow {
  field: string;
  value: string;
}

const TOKENS: TokenRow[] = [
  { field: 'Popup radius', value: '10px' },
  { field: 'Control radius', value: '6px' },
  { field: 'Menu item radius', value: '5px' },
  { field: 'Popup shadow', value: 'shadow-(--shadow-notion-popup) — soft 3-layer + hairline' },
  { field: 'Modal shadow', value: 'shadow-(--shadow-notion-modal) — deeper drop' },
  { field: 'Toast shadow', value: 'shadow-(--shadow-notion-toast)' },
  { field: 'Modal backdrop', value: 'bg-black/30 + backdrop-blur-[2px]' },
  { field: 'Menu item padding', value: 'px-2.5 py-1.5 (6px row)' },
  { field: 'Menu popup padding', value: 'p-1.5' },
  { field: 'Tooltip surface', value: 'oklch(0.3 0.005 286) · dark → bg-fill text-text' },
  { field: 'Focus ring', value: 'shadow-(--shadow-notion-ring) — 3px accent/18 soft glow' },
  { field: 'Control height', value: 'h-8 (32px) · sm h-7 · lg h-9' },
];

const TokenTable = () => (
  <div className={cn('rounded-[12px] border border-border bg-background-secondary/50')}>
    <div className="grid grid-cols-[180px_1fr] gap-x-4 border-b border-border px-4 py-2.5 text-[11px] font-medium uppercase tracking-wide text-text-tertiary">
      <span>Token</span>
      <span>Value</span>
    </div>
    {TOKENS.map((row) => (
      <div
        className="grid grid-cols-[180px_1fr] gap-x-4 border-b border-border px-4 py-2.5 text-[12.5px] last:border-b-0"
        key={row.field}
      >
        <span className="font-medium text-text">{row.field}</span>
        <span className="text-text-secondary">{row.value}</span>
      </div>
    ))}
  </div>
);

export const Mockup = () => (
  <div className="space-y-12 pb-16">
    <section className="space-y-4 pt-4">
      <div className="space-y-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background-secondary px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-text-secondary">
          UI kit · Notion-soft
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-text">Pastel UI kit</h1>
        <p className="max-w-2xl text-[13.5px] text-text-secondary">
          Every <code className="text-text">~/components/ui/*</code> primitive rendered live.
          Built on Base UI, themed with the Pastel color system, restyled to a soft Notion-leaning
          density.
        </p>
      </div>
      <TokenTable />
    </section>

    <ControlsSection />
    <FormsSection />
    <DisplaySection />
    <AdvancedSection />
    <LayoutSection />
    <OverlaysSection />
    <MenusSection />
    <ToastSection />
  </div>
);
