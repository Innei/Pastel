import { Button } from '~/components/ui/button';
import {
  confirmModal,
  createModal,
  ModalBackdrop,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalPopup,
  ModalPortal,
  ModalRoot,
  ModalTitle,
  ModalTrigger,
} from '~/components/ui/modal';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { Tooltip } from '~/components/ui/tooltip';

import { DemoCard } from './mockup-card';

export const OverlaysSection = () => (
  <section className="space-y-4">
    <div className="space-y-1">
      <h2 className="text-base font-semibold text-text">Overlays</h2>
      <p className="text-[12px] text-text-tertiary">Modal · Popover · Tooltip</p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      <DemoCard
        description="Composable parts: ModalRoot, ModalTrigger, ModalPopup…"
        title="Modal · declarative"
      >
        <ModalRoot>
          <ModalTrigger render={<Button variant="secondary">Open modal</Button>} />
          <ModalPortal>
            <ModalBackdrop />
            <ModalPopup>
              <ModalHeader>
                <ModalTitle>Declarative modal</ModalTitle>
                <ModalClose />
              </ModalHeader>
              <ModalContent>
                Soft 10px radius, layered shadow, 30% backdrop with blur. Feels like a Notion
                sheet.
              </ModalContent>
            </ModalPopup>
          </ModalPortal>
        </ModalRoot>
      </DemoCard>
      <DemoCard
        description="createModal() and confirmModal() from anywhere"
        title="Modal · imperative"
      >
        <Button
          variant="secondary"
          onClick={() =>
            createModal({
              content: 'Opened via createModal(). The instance can close / update itself.',
              title: 'Imperative modal',
            })
          }
        >
          createModal()
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            confirmModal({
              content: 'This action cannot be undone.',
              danger: true,
              onOk: () => new Promise((resolve) => setTimeout(resolve, 800)),
              title: 'Delete item?',
            })
          }
        >
          confirmModal()
        </Button>
      </DemoCard>
      <DemoCard description="Anchored floating panel" title="Popover">
        <Popover>
          <PopoverTrigger render={<Button variant="secondary">Open popover</Button>} />
          <PopoverContent>
            <p className="text-[13px] font-semibold text-text">Quick details</p>
            <p className="mt-1 text-[12.5px] text-text-secondary">
              Anchored content with the same soft surface as menus.
            </p>
          </PopoverContent>
        </Popover>
      </DemoCard>
      <DemoCard description="Warm-grey body, white text, 5px radius" title="Tooltip">
        <Tooltip title="Saved to library">
          <Button variant="ghost">Top</Button>
        </Tooltip>
        <Tooltip side="right" title="Hover me">
          <Button variant="ghost">Right</Button>
        </Tooltip>
        <Tooltip side="bottom" title="Anchored below">
          <Button variant="ghost">Bottom</Button>
        </Tooltip>
        <Tooltip side="left" title="Anchored left">
          <Button variant="ghost">Left</Button>
        </Tooltip>
      </DemoCard>
    </div>
  </section>
);
