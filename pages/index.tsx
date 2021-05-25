import { useCallback, useState, useMemo } from "react";

import { Link } from "components";
import { SampleCode, SampleCodePlayground } from "sections";
import { getSampleCode, copyToClipboard } from "utils";
import { methods } from "consts";
import type { Method, Resolver } from "types";

const Home = (): JSX.Element => {
  const [method, setMethod] = useState<Method>(methods[0]);
  const [resolver, setResolver] = useState<Resolver>("users");

  const sampleCode = useMemo(() => getSampleCode({ resolver, method }), [
    method,
    resolver,
  ]);

  const handleCopy = useCallback(() => {
    copyToClipboard(sampleCode);
  }, [sampleCode]);

  const handleMethodChange = useCallback((method: Method) => {
    setMethod(method);
  }, []);

  const handleResolverChange = useCallback((resolver: Resolver) => {
    setResolver(resolver);
  }, []);

  return (
    <>
      <div className="flex flex-col text-center py-12 md:py-32 max-w-xl m-auto">
        <h1>jsonplaceholder</h1>
        <p className="leading-loose max-w-md m-auto mt-8">
          RTL fake REST/GraphQL API for testing and prototyping, based on{" "}
          <Link
            label={`{JSON}Placeholder`}
            href="https://github.com/typicode/jsonplaceholder"
            title="A simple online fake REST API server by @typicode."
          />
          .
        </p>
        <div className="w-full flex flex-wrap flex-col md:flex-row items-center justify-center mt-8 space-y-6 md:space-y-0 md:space-x-6">
          <Link
            variant="button"
            label="GraphQL Playground"
            href="http://jsonplaceholder.ir/graphql"
            className="bg-graphql-light hover:bg-graphql-dark"
          />
          <Link
            variant="button"
            label="Donation"
            href="http://zarinp.al/@moharnadreza"
          />
        </div>
        <div className="flex flex-col mt-12 md:mt-32 w-full">
          <SampleCodePlayground
            onMethodChange={handleMethodChange}
            onResolverChange={handleResolverChange}
          />
          <SampleCode sampleCode={sampleCode} onCopy={handleCopy} />
        </div>
      </div>
    </>
  );
};

export default Home;
