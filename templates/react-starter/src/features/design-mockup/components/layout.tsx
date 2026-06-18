import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { Copy, Pencil, Save, Settings, Share2, Trash2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { CheckboxGroup } from '~/components/ui/checkbox-group';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible';
import { Drawer } from '~/components/ui/drawer';
import { menuItemClassName, menuSeparatorClassName } from '~/components/ui/menu/shared';
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from '~/components/ui/menubar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '~/components/ui/navigation-menu';
import { Toggle, ToggleGroup } from '~/components/ui/toggle';
import { cn } from '~/lib/cn';

import { DemoCard } from './mockup-card';

const ParentChildBoxesDemo = () => {
  const [value, setValue] = useState<string[]>(['html']);
  return (
    <div className="flex flex-col gap-2">
      <CheckboxGroup allValues={['html', 'css', 'js']} value={value} onValueChange={setValue}>
        <label className="flex cursor-pointer select-none items-center gap-2 text-[13px] font-medium text-text">
          <Checkbox parent />
          <span>All technologies</span>
        </label>
        <div className="ml-5 flex flex-col gap-2">
          <label className="flex cursor-pointer select-none items-center gap-2 text-[13px] text-text">
            <Checkbox name="html" />
            <span>HTML</span>
          </label>
          <label className="flex cursor-pointer select-none items-center gap-2 text-[13px] text-text">
            <Checkbox name="css" />
            <span>CSS</span>
          </label>
          <label className="flex cursor-pointer select-none items-center gap-2 text-[13px] text-text">
            <Checkbox name="js" />
            <span>JavaScript</span>
          </label>
        </div>
      </CheckboxGroup>
    </div>
  );
};

const CollapsibleDemo = () => (
  <Collapsible className="w-full max-w-sm">
    <CollapsibleTrigger>What is OKLCH?</CollapsibleTrigger>
    <CollapsibleContent>
      A perceptually uniform color space. Pastel uses it as the source of truth, with sRGB and P3
      fallbacks computed via culori.
    </CollapsibleContent>
  </Collapsible>
);

const ToggleDemo = () => {
  const [pressed, setPressed] = useState(false);
  const [view, setView] = useState<string[]>(['grid']);
  const [formatting, setFormatting] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Toggle pressed={pressed} onPressedChange={setPressed}>
          <Save className="size-3.5" />
          Auto-save
        </Toggle>
        <span className="text-[12px] text-text-tertiary">{pressed ? 'on' : 'off'}</span>
      </div>
      <ToggleGroup value={view} onValueChange={setView}>
        <Toggle value="grid">Grid</Toggle>
        <Toggle value="list">List</Toggle>
        <Toggle value="board">Board</Toggle>
      </ToggleGroup>
      <ToggleGroup multiple value={formatting} onValueChange={setFormatting}>
        <Toggle value="bold">B</Toggle>
        <Toggle value="italic">I</Toggle>
        <Toggle value="underline">U</Toggle>
      </ToggleGroup>
    </div>
  );
};

const DrawerDemo = () => (
  <div className="flex gap-2">
    <Drawer
      description="Sliding from the bottom edge with a handle and swipe-to-dismiss."
      title="Bottom drawer"
      trigger={<Button variant="secondary">Bottom</Button>}
    >
      <p>Best for mobile sheets and quick context.</p>
    </Drawer>
    <Drawer
      description="Sliding from the right edge."
      side="right"
      title="Right drawer"
      trigger={<Button variant="secondary">Right</Button>}
    >
      <p>Great for filters, settings panels, or detail views.</p>
    </Drawer>
  </div>
);

const fileItems = [
  { icon: <Save className="size-3.5 text-text-tertiary" />, label: 'Save', shortcut: '⌘S' },
  { icon: <Copy className="size-3.5 text-text-tertiary" />, label: 'Duplicate', shortcut: '⌘D' },
  { icon: <Share2 className="size-3.5 text-text-tertiary" />, label: 'Share' },
];

const MenubarDemo = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        {fileItems.map((item) => (
          <MenuPrimitive.Item className={menuItemClassName} key={item.label}>
            {item.icon}
            <span className="flex-1">{item.label}</span>
            {item.shortcut && (
              <span className="text-[11.5px] text-text-tertiary">{item.shortcut}</span>
            )}
          </MenuPrimitive.Item>
        ))}
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenuPrimitive.Item className={menuItemClassName}>
          <Pencil className="size-3.5 text-text-tertiary" />
          <span className="flex-1">Rename</span>
        </MenuPrimitive.Item>
        <MenuPrimitive.Item className={menuItemClassName}>
          <Settings className="size-3.5 text-text-tertiary" />
          <span className="flex-1">Preferences</span>
        </MenuPrimitive.Item>
        <MenuPrimitive.Separator className={menuSeparatorClassName} />
        <MenuPrimitive.Item className={cn(menuItemClassName, 'text-red')}>
          <Trash2 className="size-3.5" />
          <span className="flex-1">Delete</span>
        </MenuPrimitive.Item>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenuPrimitive.Item className={menuItemClassName}>Zoom in</MenuPrimitive.Item>
        <MenuPrimitive.Item className={menuItemClassName}>Zoom out</MenuPrimitive.Item>
        <MenuPrimitive.Item className={menuItemClassName}>Reset zoom</MenuPrimitive.Item>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

const NavigationMenuDemo = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent className="grid w-72 grid-cols-1 gap-1">
          <NavigationMenuLink href="#colors">
            <span className="text-[13px] font-semibold">Pastel colors</span>
            <span className="text-[12px] text-text-tertiary">OKLCH palette + sRGB / P3</span>
          </NavigationMenuLink>
          <NavigationMenuLink href="#tailwind">
            <span className="text-[13px] font-semibold">Tailwind theme</span>
            <span className="text-[12px] text-text-tertiary">Auto dark mode CSS</span>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
        <NavigationMenuContent className="grid w-72 grid-cols-1 gap-1">
          <NavigationMenuLink href="#install">
            <span className="text-[13px] font-semibold">Install</span>
            <span className="text-[12px] text-text-tertiary">Add to your project</span>
          </NavigationMenuLink>
          <NavigationMenuLink href="#tokens">
            <span className="text-[13px] font-semibold">Design tokens</span>
            <span className="text-[12px] text-text-tertiary">Semantic + element scales</span>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
    <NavigationMenuPortal>
      <NavigationMenuPositioner>
        <NavigationMenuPopup>
          <NavigationMenuViewport />
        </NavigationMenuPopup>
      </NavigationMenuPositioner>
    </NavigationMenuPortal>
  </NavigationMenu>
);

export const LayoutSection = () => (
  <section className="space-y-4">
    <div className="space-y-1">
      <h2 className="text-base font-semibold text-text">Composition</h2>
      <p className="text-[12px] text-text-tertiary">
        CheckboxGroup · Collapsible · Toggle · Drawer · Menubar · NavigationMenu
      </p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      <DemoCard description="Parent ↔ child sync · indeterminate when partial" title="CheckboxGroup">
        <ParentChildBoxesDemo />
      </DemoCard>
      <DemoCard description="Single-section expand/collapse" title="Collapsible">
        <CollapsibleDemo />
      </DemoCard>
      <DemoCard wide description="Pressed button + single/multiple groups" title="Toggle">
        <ToggleDemo />
      </DemoCard>
      <DemoCard description="Slides from any edge · swipe to dismiss" title="Drawer">
        <DrawerDemo />
      </DemoCard>
      <DemoCard wide description="App-style horizontal menu" title="Menubar">
        <MenubarDemo />
      </DemoCard>
      <DemoCard wide description="Hover-driven nav with animated viewport" title="NavigationMenu">
        <NavigationMenuDemo />
      </DemoCard>
    </div>
  </section>
);
