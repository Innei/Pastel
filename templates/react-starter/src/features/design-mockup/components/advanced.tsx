import { Bold, Italic, Link as LinkIcon, Strikethrough, Underline } from 'lucide-react';
import { useState } from 'react';

import { Avatar } from '~/components/ui/avatar';
import { Combobox } from '~/components/ui/combobox';
import { Meter } from '~/components/ui/meter';
import { NumberField } from '~/components/ui/number-field';
import { PreviewCard, PreviewCardContent, PreviewCardTrigger } from '~/components/ui/preview-card';
import { ScrollArea } from '~/components/ui/scroll-area';
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarLink,
  ToolbarSeparator,
} from '~/components/ui/toolbar';

import { DemoCard } from './mockup-card';

const NumberFieldDemo = () => (
  <div className="flex items-center gap-4">
    <NumberField defaultValue={4} max={20} min={0} />
    <span className="text-[12px] text-text-tertiary">min=0 max=20 step=1</span>
  </div>
);

const PreviewCardDemo = () => (
  <PreviewCard>
    <PreviewCardTrigger
      render={
        <a className="text-[13px] font-medium text-accent underline-offset-4 hover:underline" href="#preview">
          @innei
        </a>
      }
    />
    <PreviewCardContent>
      <div className="flex items-start gap-3">
        <Avatar fallback="IN" size="md" />
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <span className="text-[13px] font-semibold text-text">Innei</span>
            <span className="text-[12px] text-text-tertiary">@innei</span>
          </div>
          <p className="text-[12.5px] text-text-secondary">
            Designing OKLCH-based palettes for the modern web.
          </p>
        </div>
      </div>
    </PreviewCardContent>
  </PreviewCard>
);

const longText = Array.from({ length: 20 }, (_, i) => (
  <p className="px-3 py-1.5 text-[13px] text-text" key={i}>
    Line {i + 1} — soft, thin scrollbar appears on hover only.
  </p>
));

const ScrollAreaDemo = () => (
  <ScrollArea className="h-40 w-full max-w-sm rounded-[8px] border border-border">
    <div className="py-1">{longText}</div>
  </ScrollArea>
);

const ToolbarDemo = () => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarButton aria-label="Bold">
        <Bold className="size-3.5" />
      </ToolbarButton>
      <ToolbarButton aria-label="Italic">
        <Italic className="size-3.5" />
      </ToolbarButton>
      <ToolbarButton aria-label="Underline">
        <Underline className="size-3.5" />
      </ToolbarButton>
      <ToolbarButton aria-label="Strikethrough">
        <Strikethrough className="size-3.5" />
      </ToolbarButton>
    </ToolbarGroup>
    <ToolbarSeparator />
    <ToolbarGroup>
      <ToolbarButton>
        <LinkIcon className="size-3.5" />
        Link
      </ToolbarButton>
    </ToolbarGroup>
    <ToolbarSeparator />
    <ToolbarLink href="#help">Help</ToolbarLink>
  </Toolbar>
);

const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Apricot', value: 'apricot' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blackberry', value: 'blackberry' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
  { label: 'Fig', value: 'fig' },
  { label: 'Grape', value: 'grape' },
];

const ComboboxDemo = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Combobox
        options={fruits}
        placeholder="Search a fruit…"
        value={value}
        onValueChange={setValue}
      />
      {value && (
        <span className="text-[12px] text-text-tertiary">
          Selected: <span className="text-text">{value}</span>
        </span>
      )}
    </div>
  );
};

const MeterDemo = () => (
  <div className="flex w-full flex-col gap-3">
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <Meter value={72} />
      <div className="flex items-center justify-between">
        <span className="text-[12px] text-text-tertiary">Storage used</span>
        <span className="text-[12px] text-text-tertiary tabular-nums">72 / 100 GB</span>
      </div>
    </div>
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <Meter value={18} />
      <div className="flex items-center justify-between">
        <span className="text-[12px] text-text-tertiary">CPU</span>
        <span className="text-[12px] text-text-tertiary tabular-nums">18%</span>
      </div>
    </div>
  </div>
);

export const AdvancedSection = () => (
  <section className="space-y-4">
    <div className="space-y-1">
      <h2 className="text-base font-semibold text-text">Advanced</h2>
      <p className="text-[12px] text-text-tertiary">
        NumberField · PreviewCard · ScrollArea · Toolbar · Combobox · Meter
      </p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      <DemoCard description="Increment/decrement · scrub · keyboard" title="NumberField">
        <NumberFieldDemo />
      </DemoCard>
      <DemoCard description="Hover-triggered floating card" title="PreviewCard">
        <div className="text-[13px] text-text-secondary">
          Hover over <PreviewCardDemo /> to see a quick profile preview.
        </div>
      </DemoCard>
      <DemoCard wide description="Thin, hover-revealed scrollbar" title="ScrollArea">
        <ScrollAreaDemo />
      </DemoCard>
      <DemoCard wide description="Composed groups + separator + link" title="Toolbar">
        <ToolbarDemo />
      </DemoCard>
      <DemoCard description="Autocomplete + filtering" title="Combobox">
        <ComboboxDemo />
      </DemoCard>
      <DemoCard description="Quantitative gauge (vs Progress = in motion)" title="Meter">
        <MeterDemo />
      </DemoCard>
    </div>
  </section>
);
