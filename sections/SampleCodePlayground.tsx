import { FC } from "react";

import { Button, Link } from "components";
import { methods, resolvers } from "consts";
import type { Method, Resolver } from "types";

interface Props {
  onMethodChange: (method: Method) => void;
  onResolverChange: (resolver: Resolver) => void;
}

// TODO: cleanup
const SampleCodePlayground: FC<Props> = ({
  onMethodChange,
  onResolverChange,
}): JSX.Element => {
  return (
    <div className="flex flex-col text-left">
      <p className="leading-loose flex-initial items-center">
        Try{" "}
        {methods.map((method, i) => (
          <>
            <Button variant="text" onClick={() => onMethodChange(method)}>
              {method.method}
            </Button>
            {i !== methods.length - 1 && ", "}
          </>
        ))}{" "}
        or other HTTP methods on{" "}
        {resolvers.map((resolver, i) => (
          <>
            {i === resolvers.length - 1 && " or "}
            <Button variant="text" onClick={() => onResolverChange(resolver)}>
              /{resolver}
            </Button>
            {i !== resolvers.length - 1 && i !== resolvers.length - 2 && ", "}
          </>
        ))}
        . Check
        <Link
          label="how to"
          href="https://github.com/moharnadreza/jsonPlaceholder#how-to"
          title="README.md | How to?"
          className="mx-2"
        />
        for more examples.
      </p>
    </div>
  );
};

export default SampleCodePlayground;
