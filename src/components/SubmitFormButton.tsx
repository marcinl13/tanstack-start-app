'use client';

import { Loader2 } from 'lucide-react';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

type Props = ComponentProps<typeof Button> & {
  isLoading: boolean;
};

export function SubmitFormButton({
  children,
  className,
  isLoading,
  ...props
}: Props) {
  return (
    <Button
      type="submit"
      className={cn(className, 'hover:cursor-pointer')}
      aria-disabled={isLoading}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="size-4 animate-spin" /> : children}
    </Button>
  );
}
