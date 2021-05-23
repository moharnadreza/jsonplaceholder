import { FC } from "react";

import { CopyButton } from "components";

interface Props {
  sampleCode: string;
  onCopy?: () => void;
}

const SampleCode: FC<Props> = ({ sampleCode, onCopy }): JSX.Element => {
  return (
    <div className="p-4 md:p-8 rounded-lg bg-gray-800 text-xs md:text-sm relative mt-4 text-left">
      <pre className="overflow-auto leading-loose">{sampleCode}</pre>
      <CopyButton
        onClick={onCopy}
        className="absolute z-10 right-8 top-8 hidden md:block"
      />
    </div>
  );
};

export default SampleCode;
