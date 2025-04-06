import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

// eslint-disable-next-line jsdoc/require-jsdoc
export const Internal_LandingHeader: VariableFC<'header'> = ({
  className,
  children,
  ...props
}) => {
  return (
    <header
      className={cn(className)}
      {...props}
    >
      {children}
    </header>
  );
};
