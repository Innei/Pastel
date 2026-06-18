import type { ReactNode } from 'react';

import { cn } from '~/lib/cn';

export interface DemoCardProps {
  children: ReactNode;
  description?: string;
  title: string;
  wide?: boolean;
}

export const DemoCard = ({ title, description, children, wide }: DemoCardProps) => (
  <div
    className={cn(
      'flex flex-col gap-3 rounded-[12px] border border-border bg-background-secondary/50 p-5',
      wide && 'sm:col-span-2',
    )}
  >
    <div className="space-y-0.5">
      <h3 className="text-[13px] font-semibold text-text">{title}</h3>
      {description && <p className="text-[11.5px] text-text-tertiary">{description}</p>}
    </div>
    <div className="flex flex-1 flex-wrap items-center gap-3">{children}</div>
  </div>
);
