import { Settings } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { Form, FormControl, FormDescription, FormError, FormField, FormLabel } from '~/components/ui/form';
import { Input, Textarea } from '~/components/ui/input';

import { DemoCard } from './mockup-card';

const FormDemo = () => (
  <Form
    className="flex w-full max-w-sm flex-col gap-3.5"
    onFormSubmit={(values) => console.info('submitted', values)}
  >
    <FormField name="email">
      <FormLabel>Email</FormLabel>
      <FormControl required placeholder="you@example.com" render={<Input />} type="email" />
      <FormDescription>We&apos;ll never share your email.</FormDescription>
      <FormError />
    </FormField>
    <FormField name="message">
      <FormLabel>Message</FormLabel>
      <FormControl render={<Textarea placeholder="Say something nice" />} />
    </FormField>
    <Button className="self-start" type="submit">
      Submit
    </Button>
  </Form>
);

export const ControlsSection = () => (
  <section className="space-y-4">
    <div className="space-y-1">
      <h2 className="text-base font-semibold text-text">Controls</h2>
      <p className="text-[12px] text-text-tertiary">Button · Input · Textarea · Form</p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      <DemoCard description="primary · secondary · ghost · danger" title="Button · variants">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </DemoCard>
      <DemoCard description="sm · md · lg · loading · disabled" title="Button · sizes & states">
        <Button size="sm" variant="secondary">
          Small
        </Button>
        <Button size="md" variant="secondary">
          Medium
        </Button>
        <Button size="lg" variant="secondary">
          Large
        </Button>
        <Button loading>Loading</Button>
        <Button disabled variant="secondary">
          Disabled
        </Button>
        <Button variant="secondary">
          <Settings className="size-3.5" />
          With icon
        </Button>
      </DemoCard>
      <DemoCard description="Soft focus ring · 32px height" title="Input & Textarea">
        <div className="flex w-full max-w-xs flex-col gap-2">
          <Input placeholder="Single line input" />
          <Input disabled placeholder="Disabled" />
          <Textarea placeholder="Multi-line textarea" />
        </div>
      </DemoCard>
      <DemoCard description="Base UI Form + Field, native validation" title="Form">
        <FormDemo />
      </DemoCard>
    </div>
  </section>
);
