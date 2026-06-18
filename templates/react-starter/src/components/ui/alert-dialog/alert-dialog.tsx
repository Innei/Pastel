import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog';
import type { ReactNode } from 'react';

import { cn } from '~/lib/cn';

import { Button } from '../button';

export interface AlertDialogProps {
  cancelText?: ReactNode;
  children?: ReactNode;
  confirmText?: ReactNode;
  danger?: boolean;
  description?: ReactNode;
  loading?: boolean;
  onConfirm?: () => void | Promise<void>;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  title: ReactNode;
  trigger?: ReactNode;
}

export const AlertDialog = ({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  danger,
  loading,
  onConfirm,
}: AlertDialogProps) => (
  <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    {trigger && <AlertDialogPrimitive.Trigger render={trigger as React.ReactElement} />}
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Backdrop
        className={cn(
          'fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]',
          'transition-opacity duration-150',
          'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
        )}
      />
      <AlertDialogPrimitive.Popup
        className={cn(
          'fixed top-1/2 left-1/2 z-50 flex w-[min(420px,calc(100dvw-2rem))] -translate-x-1/2 -translate-y-1/2 flex-col',
          'rounded-[10px] bg-background outline-none',
          'shadow-(--shadow-notion-modal)',
          'transition-[transform,opacity] duration-200 ease-out',
          'data-[starting-style]:scale-[0.98] data-[starting-style]:opacity-0',
          'data-[ending-style]:scale-[0.98] data-[ending-style]:opacity-0',
        )}
      >
        <div className="flex flex-col gap-1 px-4 pt-3.5 pb-2">
          <AlertDialogPrimitive.Title className="text-[14px] font-semibold text-text">
            {title}
          </AlertDialogPrimitive.Title>
          {description && (
            <AlertDialogPrimitive.Description className="text-[13px] text-text-secondary">
              {description}
            </AlertDialogPrimitive.Description>
          )}
        </div>
        {children && <div className="px-4 pb-2 text-[13px] text-text">{children}</div>}
        <div className="flex items-center justify-end gap-1.5 px-4 pt-1 pb-3.5">
          <AlertDialogPrimitive.Close
            render={
              <Button size="sm" variant="ghost">
                {cancelText}
              </Button>
            }
          />
          <Button
            loading={loading}
            size="sm"
            variant={danger ? 'danger' : 'primary'}
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>
      </AlertDialogPrimitive.Popup>
    </AlertDialogPrimitive.Portal>
  </AlertDialogPrimitive.Root>
);

export { AlertDialogPrimitive };
