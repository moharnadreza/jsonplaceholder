import { FC, useCallback, useState } from "react";

import { Button } from "components";

interface Props {
  className?: string;
  onClick?: () => void;
}

const Copy: FC<Props> = ({ className, onClick }): JSX.Element => {
  const [label, setLabel] = useState("Copy");

  const setLabelToCopy = useCallback(() => {
    setTimeout(() => {
      setLabel("Copy");
    }, 2500);
  }, []);

  const handleButtonClick = useCallback(() => {
    setLabel("Copied!");
    onClick?.();

    setLabelToCopy();
  }, [onClick, setLabelToCopy]);

  return (
    <Button
      size="small"
      variant="secondary"
      onClick={handleButtonClick}
      className={className}
    >
      {label}
    </Button>
  );
};

export default Copy;
