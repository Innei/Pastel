import { cn } from '~/lib/cn';

export const popupTransitionClassName = cn(
  'origin-(--transform-origin) transition-[transform,opacity] duration-150 ease-out',
  'data-[starting-style]:scale-[0.97] data-[starting-style]:opacity-0',
  'data-[ending-style]:scale-[0.97] data-[ending-style]:opacity-0',
);

export const menuPopupClassName = cn(
  'z-50 min-w-44 rounded-[10px] bg-background p-1.5 outline-none',
  'shadow-(--shadow-notion-popup)',
  popupTransitionClassName,
);

export const menuItemClassName = cn(
  'flex cursor-default select-none items-center gap-2 rounded-[5px] px-2.5 py-1.5 text-[13px] text-text outline-none',
  'transition-colors',
  'data-[highlighted]:bg-fill-secondary data-[disabled]:pointer-events-none data-[disabled]:opacity-40',
);

export const menuDangerItemClassName = cn(
  'text-red data-[highlighted]:bg-red/10 data-[highlighted]:text-red',
);

export const menuSeparatorClassName = 'mx-1.5 my-1 h-px bg-border';

export const menuGroupLabelClassName = cn(
  'px-2.5 pt-2 pb-1 text-[11px] font-medium uppercase tracking-wide text-text-tertiary',
);
