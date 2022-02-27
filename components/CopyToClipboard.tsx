import Button from "components/Button";
import { useCallback, useState } from "react";

type Props = {
  className?: string;
  textToCopy: string;
};

const CopyToClipboard = ({ className, textToCopy }: Props): JSX.Element => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopy = useCallback(async () => {
    await navigator.clipboard.writeText(textToCopy);
  }, [textToCopy]);

  const handleButtonClick = useCallback(() => {
    setIsCopied(true);
    onCopy();

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  }, [onCopy]);

  return (
    <Button
      size="small"
      variant="secondary"
      onClick={handleButtonClick}
      className={className}
    >
      {isCopied ? "Copied!" : "Copy"}
    </Button>
  );
};

export default CopyToClipboard;
