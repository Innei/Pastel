import { Dialog } from '@base-ui/react/dialog';
import { X } from 'lucide-react';
import { AnimatePresence, m } from 'motion/react';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { use, useCallback, useEffect, useMemo, useState } from 'react';

import { cn } from '~/lib/cn';

import { ModalContext } from './context';

const softEase = [0.32, 0.72, 0, 1] as const;
const exitEase = [0.4, 0, 1, 1] as const;

type DialogRootProps = React.ComponentProps<typeof Dialog.Root>;

export interface ModalRootProps extends Omit<DialogRootProps, 'modal'> {
  onExitComplete?: () => void;
}

export const ModalRoot = ({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  onExitComplete,
  children,
  ...rest
}: ModalRootProps) => {
  const [innerOpen, setInnerOpen] = useState(defaultOpen);
  const open = openProp ?? innerOpen;
  const [present, setPresent] = useState(open);

  useEffect(() => {
    if (open) setPresent(true);
  }, [open]);

  const handleOpenChange = useCallback<NonNullable<DialogRootProps['onOpenChange']>>(
    (next, eventDetails) => {
      setInnerOpen(next);
      onOpenChange?.(next, eventDetails);
    },
    [onOpenChange],
  );

  const close = useCallback(() => {
    setInnerOpen(false);
    onOpenChange?.(false, { reason: 'imperative' } as never);
  }, [onOpenChange]);

  const exitComplete = useCallback(() => {
    setPresent(false);
    onExitComplete?.();
  }, [onExitComplete]);

  const context = useMemo(() => ({ close, exitComplete, open }), [close, exitComplete, open]);

  return (
    <ModalContext value={context}>
      <Dialog.Root modal {...rest} open={open || present} onOpenChange={handleOpenChange}>
        {children}
      </Dialog.Root>
    </ModalContext>
  );
};

export const ModalTrigger = Dialog.Trigger;
export const ModalPortal = Dialog.Portal;

export const ModalBackdrop = ({
  className,
  ...rest
}: React.ComponentProps<typeof Dialog.Backdrop>) => {
  const { open } = useModalAnimation();
  return (
    <Dialog.Backdrop
      {...rest}
      className={cn(
        'fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]',
        className as string,
      )}
      render={
        <m.div
          animate={{ opacity: open ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: softEase }}
        />
      }
    />
  );
};

export interface ModalPopupProps extends Omit<
  React.ComponentProps<typeof Dialog.Popup>,
  'className' | 'style'
> {
  className?: string;
  style?: CSSProperties;
  width?: number | string;
}

export const ModalPopup = ({ className, style, width, children, ...rest }: ModalPopupProps) => {
  const { open, exitComplete } = useModalAnimation();
  return (
    <Dialog.Popup
      {...rest}
      className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4 outline-none"
    >
      <AnimatePresence onExitComplete={exitComplete}>
        {open && (
          <m.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.97 }}
            key="modal-panel"
            style={{ maxWidth: width, ...style }}
            transition={{ duration: 0.22, ease: softEase }}
            className={cn(
              'pointer-events-auto relative flex max-h-[calc(100dvh-4rem)] w-full max-w-md flex-col overflow-hidden',
              'rounded-[10px] bg-background shadow-(--shadow-notion-modal)',
              className,
            )}
            exit={{
              opacity: 0,
              scale: 0.98,
              transition: { duration: 0.12, ease: exitEase },
            }}
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </Dialog.Popup>
  );
};

export const ModalHeader = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div
    {...rest}
    className={cn('flex items-center justify-between px-3.5 pb-0.5 pt-3', className)}
  />
);

export const ModalTitle = ({ className, ...rest }: React.ComponentProps<typeof Dialog.Title>) => (
  <Dialog.Title
    {...rest}
    className={cn('text-sm font-semibold text-text', className as string)}
  />
);

export const ModalDescription = Dialog.Description;

export const ModalClose = ({
  className,
  children,
  ...rest
}: React.ComponentProps<typeof Dialog.Close>) => (
  <Dialog.Close
    {...rest}
    className={cn(
      'flex size-6 items-center justify-center rounded-[5px] text-text-tertiary',
      'transition-colors hover:bg-fill-secondary hover:text-text',
      'focus-visible:outline-none focus-visible:shadow-(--shadow-notion-ring)',
      className as string,
    )}
  >
    {(children as ReactNode) ?? <X className="size-4" />}
  </Dialog.Close>
);

export const ModalContent = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div {...rest} className={cn('overflow-y-auto px-3.5 py-2.5 text-[13px] text-text', className)} />
);

export const ModalFooter = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div
    {...rest}
    className={cn('flex items-center justify-end gap-1.5 px-3.5 pb-3 pt-0.5', className)}
  />
);

function useModalAnimation() {
  const context = use(ModalContext);
  if (!context) throw new Error('Modal parts must be used inside <ModalRoot>');
  return context;
}
