import { Button } from '~/components/ui/button';
import { toast } from '~/components/ui/toast';

import { DemoCard } from './mockup-card';

export const ToastSection = () => (
  <section className="space-y-4">
    <div className="space-y-1">
      <h2 className="text-base font-semibold text-text">Toast</h2>
      <p className="text-[12px] text-text-tertiary">
        sonner-backed, themed with Notion-soft tokens (10px radius, soft toast shadow)
      </p>
    </div>
    <DemoCard
      wide
      description="toast() · toast.success / .error / .promise"
      title="Variants"
    >
      <Button variant="secondary" onClick={() => toast('A plain notification')}>
        toast()
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.success('Saved successfully', { description: 'All changes are persisted.' })
        }
      >
        toast.success()
      </Button>
      <Button variant="secondary" onClick={() => toast.error('Something went wrong')}>
        toast.error()
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
            error: 'Failed',
            loading: 'Uploading…',
            success: 'Uploaded',
          })
        }
      >
        toast.promise()
      </Button>
    </DemoCard>
  </section>
);
