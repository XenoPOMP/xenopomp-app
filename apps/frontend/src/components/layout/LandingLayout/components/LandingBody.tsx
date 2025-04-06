import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

export const Internal_LandingBody: VariableFC<'main'> = ({
  className,
  children,
  ...props
}) => {
  return (
    <main
      className={cn(className)}
      {...props}
    >
      {children}
    </main>
  );
};
