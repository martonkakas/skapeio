import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ContainerProps = {
  className?: string,
  children: ReactNode
};

const Container = ({
  className,
  children 
}: ContainerProps): ReactNode => (
  <div className={cn('flex flex-col items-start gap-8 px-4 py-32 max-w-7xl mx-auto w-full h-full', className)}>
    {children}
  </div>
);

export default Container;