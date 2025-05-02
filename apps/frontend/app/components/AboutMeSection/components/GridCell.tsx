import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

interface GridCellProps {
  gridArea?: string;
}

export const GridCell: VariableFC<'div', GridCellProps> = ({
  className,
  style,
  children,
  gridArea,
  ...props
}) => {
  return (
    <div
      className={cn('rounded-[.8em] bg-primary-bg p-[1em]', className)}
      style={{
        ...style,
        gridArea,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
