import { useState } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import { AlertDialog } from '~/components/ui/alert-dialog';
import { Avatar } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Progress } from '~/components/ui/progress';
import { Separator } from '~/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

import { DemoCard } from './mockup-card';

const TabsDemo = () => (
  <Tabs defaultValue="overview">
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="activity">Activity</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      <p className="text-[13px] text-text-secondary">
        Underline indicator slides between tabs, just like a Notion page header.
      </p>
    </TabsContent>
    <TabsContent value="activity">
      <p className="text-[13px] text-text-secondary">Activity feed lives here.</p>
    </TabsContent>
    <TabsContent value="settings">
      <p className="text-[13px] text-text-secondary">Workspace settings panel.</p>
    </TabsContent>
  </Tabs>
);

const AccordionDemo = () => (
  <Accordion className="w-full">
    <AccordionItem value="a">
      <AccordionTrigger>How does dark mode work?</AccordionTrigger>
      <AccordionContent>
        Pastel ships OKLCH variables that flip automatically through{' '}
        <code>data-theme</code>.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="b">
      <AccordionTrigger>Can I theme individual components?</AccordionTrigger>
      <AccordionContent>
        Yes — each primitive composes with semantic tokens (bg-background, text-text, …).
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="c">
      <AccordionTrigger>Where do new components go?</AccordionTrigger>
      <AccordionContent>
        Drop them into <code>~/components/ui/&lt;name&gt;/</code> with an{' '}
        <code>index.ts</code> barrel.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const AvatarDemo = () => (
  <div className="flex items-center gap-3">
    <Avatar fallback="IN" size="sm" />
    <Avatar fallback="JS" size="md" />
    <Avatar fallback="AT" size="lg" />
    <Avatar fallback="SQ" shape="square" size="md" />
    <Avatar
      alt="Demo"
      fallback="?"
      size="md"
      src="https://avatars.githubusercontent.com/u/41265413"
    />
  </div>
);

const SeparatorDemo = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <div className="flex items-center gap-3 text-[13px] text-text">
      <span>Pastel</span>
      <Separator className="flex-1" />
      <span className="text-text-tertiary">v1</span>
    </div>
    <div className="flex h-8 items-center gap-3 text-[12px] text-text-secondary">
      <span>Item</span>
      <Separator orientation="vertical" />
      <span>Item</span>
      <Separator orientation="vertical" />
      <span>Item</span>
    </div>
  </div>
);

const ProgressDemo = () => {
  const [value, setValue] = useState(40);
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex w-full max-w-sm flex-col gap-1.5">
        <Progress value={value} />
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-text-tertiary">Determinate</span>
          <span className="text-[12px] text-text-tertiary tabular-nums">{value}%</span>
        </div>
      </div>
      <div className="flex w-full max-w-sm flex-col gap-1.5">
        <Progress value={null} />
        <span className="text-[12px] text-text-tertiary">Indeterminate</span>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="ghost" onClick={() => setValue((v) => Math.max(0, v - 20))}>
          -20
        </Button>
        <Button size="sm" variant="ghost" onClick={() => setValue((v) => Math.min(100, v + 20))}>
          +20
        </Button>
      </div>
    </div>
  );
};

const AlertDialogDemo = () => (
  <AlertDialog
    danger
    confirmText="Delete"
    description="This action is permanent and cannot be undone."
    title="Delete workspace?"
    trigger={<Button variant="secondary">Delete workspace…</Button>}
    onConfirm={() => console.info('deleted')}
  />
);

export const DisplaySection = () => (
  <section className="space-y-4">
    <div className="space-y-1">
      <h2 className="text-base font-semibold text-text">Display & navigation</h2>
      <p className="text-[12px] text-text-tertiary">
        Tabs · Accordion · Avatar · Separator · Progress · AlertDialog
      </p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      <DemoCard wide description="Underline indicator slides between tabs" title="Tabs">
        <TabsDemo />
      </DemoCard>
      <DemoCard wide description="Single-open by default · chevron rotates" title="Accordion">
        <AccordionDemo />
      </DemoCard>
      <DemoCard description="Image with fallback · 3 sizes · square option" title="Avatar">
        <AvatarDemo />
      </DemoCard>
      <DemoCard description="Horizontal & vertical · 1px hairline" title="Separator">
        <SeparatorDemo />
      </DemoCard>
      <DemoCard description="Determinate + indeterminate" title="Progress">
        <ProgressDemo />
      </DemoCard>
      <DemoCard description="Force-action confirm flow" title="AlertDialog">
        <AlertDialogDemo />
      </DemoCard>
    </div>
  </section>
);
