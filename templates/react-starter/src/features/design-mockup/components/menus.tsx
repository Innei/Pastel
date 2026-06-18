import { Copy, Pencil, Settings, Share2, Trash2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '~/components/ui/button';
import { ContextMenu, showContextMenu } from '~/components/ui/context-menu';
import { DropdownMenu } from '~/components/ui/dropdown-menu';
import type { MenuItem } from '~/components/ui/menu';
import { Select } from '~/components/ui/select';

import { DemoCard } from './mockup-card';

const menuItems: MenuItem[] = [
  {
    type: 'group',
    label: 'Actions',
    children: [
      { icon: <Pencil />, label: 'Rename', onClick: () => console.info('rename') },
      { icon: <Copy />, label: 'Duplicate' },
      {
        children: [
          { label: 'Copy link' },
          { label: 'Email' },
          { label: 'Embed code' },
        ],
        icon: <Share2 />,
        label: 'Share',
      },
    ],
  },
  { type: 'separator' },
  { danger: true, icon: <Trash2 />, label: 'Delete' },
];

export const MenusSection = () => {
  const [fruit, setFruit] = useState<string>();

  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-base font-semibold text-text">Menus & Select</h2>
        <p className="text-[12px] text-text-tertiary">
          Dropdown · Context · Select — shared 10px surface, 5px items, soft shadow
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <DemoCard description="Submenu · group label · danger" title="Dropdown menu">
          <DropdownMenu items={menuItems}>
            <Button variant="secondary">
              <Settings className="size-3.5" />
              Actions
            </Button>
          </DropdownMenu>
        </DemoCard>
        <DemoCard description="Declarative wrapper or showContextMenu()" title="Context menu">
          <ContextMenu items={menuItems}>
            <div className="flex h-24 w-full items-center justify-center rounded-[10px] border border-dashed border-border text-[12.5px] text-text-tertiary">
              Right click · declarative
            </div>
          </ContextMenu>
          <button
            className="flex h-24 w-full items-center justify-center rounded-[10px] border border-dashed border-border text-[12.5px] text-text-tertiary"
            type="button"
            onContextMenu={(event) => {
              event.preventDefault();
              showContextMenu(menuItems);
            }}
          >
            Right click · imperative
          </button>
        </DemoCard>
        <DemoCard wide description="Soft focus ring · check indicator" title="Select">
          <Select
            placeholder="Pick a fruit"
            value={fruit}
            options={[
              { label: 'Apple', value: 'apple' },
              { label: 'Banana', value: 'banana' },
              { label: 'Cherry', value: 'cherry' },
              { disabled: true, label: 'Durian (sold out)', value: 'durian' },
            ]}
            onValueChange={setFruit}
          />
        </DemoCard>
      </div>
    </section>
  );
};
