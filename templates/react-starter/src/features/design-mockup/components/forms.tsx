import { useState } from 'react';

import { Checkbox } from '~/components/ui/checkbox';
import { Radio, RadioGroup, RadioItem } from '~/components/ui/radio';
import { Slider } from '~/components/ui/slider';
import { Switch } from '~/components/ui/switch';

import { DemoCard } from './mockup-card';

const CheckboxDemo = () => (
  <div className="flex flex-col gap-2">
    <label className="flex cursor-pointer select-none items-center gap-2 text-[13px] text-text">
      <Checkbox defaultChecked />
      <span>Checked by default</span>
    </label>
    <label className="flex cursor-pointer select-none items-center gap-2 text-[13px] text-text">
      <Checkbox />
      <span>Unchecked</span>
    </label>
    <label className="flex cursor-pointer select-none items-center gap-2 text-[13px] text-text">
      <Checkbox indeterminate />
      <span>Indeterminate (mixed)</span>
    </label>
    <label className="flex select-none items-center gap-2 text-[13px] text-text opacity-50">
      <Checkbox disabled />
      <span>Disabled</span>
    </label>
  </div>
);

const SwitchDemo = () => (
  <div className="flex flex-col gap-2">
    <label className="flex cursor-pointer select-none items-center gap-2 text-[13px] text-text">
      <Switch defaultChecked />
      <span>Notifications enabled</span>
    </label>
    <label className="flex cursor-pointer select-none items-center gap-2 text-[13px] text-text">
      <Switch />
      <span>Compact mode</span>
    </label>
    <label className="flex select-none items-center gap-2 text-[13px] text-text opacity-50">
      <Switch disabled />
      <span>Disabled</span>
    </label>
  </div>
);

const RadioDemo = () => (
  <RadioGroup defaultValue="apple">
    <RadioItem value="apple">Apple</RadioItem>
    <RadioItem value="banana">Banana</RadioItem>
    <RadioItem value="cherry">Cherry</RadioItem>
    <RadioItem disabled value="durian">
      Durian (sold out)
    </RadioItem>
  </RadioGroup>
);

const SliderDemo = () => {
  const [value, setValue] = useState(40);
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Slider value={value} onValueChange={(v) => setValue(v as number)} />
      <span className="self-end text-[12px] text-text-tertiary tabular-nums">{value}%</span>
    </div>
  );
};

export const FormsSection = () => (
  <section className="space-y-4">
    <div className="space-y-1">
      <h2 className="text-base font-semibold text-text">Form inputs</h2>
      <p className="text-[12px] text-text-tertiary">Checkbox · Switch · Radio · Slider</p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      <DemoCard description="Soft focus ring · indeterminate state" title="Checkbox">
        <CheckboxDemo />
      </DemoCard>
      <DemoCard description="Accent on · 28px wide track" title="Switch">
        <SwitchDemo />
      </DemoCard>
      <DemoCard description="Composable RadioGroup + RadioItem" title="Radio group">
        <RadioDemo />
      </DemoCard>
      <DemoCard description="Soft focus glow on thumb" title="Slider">
        <SliderDemo />
      </DemoCard>
    </div>
  </section>
);

export { Radio };
