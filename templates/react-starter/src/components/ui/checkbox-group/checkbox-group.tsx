import { CheckboxGroup as CheckboxGroupPrimitive } from '@base-ui/react/checkbox-group';

import { cn } from '~/lib/cn';

export const CheckboxGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxGroupPrimitive>) => (
  <CheckboxGroupPrimitive
    {...props}
    className={cn('flex flex-col gap-2', className as string)}
  />
);

export { CheckboxGroupPrimitive };
