import { Tooltip, TooltipProps } from '@material-ui/core';
import React from 'react';

const OverflowTooltip = ({ title, children }: TooltipProps) => {
  const [overflow, setOverflow] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (
      ref &&
      ref.current &&
      ref.current.scrollWidth > ref.current.clientWidth
    ) {
      setOverflow(true);
    }
  }, [ref]);

  return (
    <Tooltip title={title} disableHoverListener={!overflow}>
      {React.cloneElement(children, { ref })}
    </Tooltip>
  );
};

export default OverflowTooltip;
