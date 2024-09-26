import CopyToClipboard from "components/CopyToClipboard";
import Link from "components/Link";
import { SAMPLE_CODE } from "consts";

const Home = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col text-center py-12 md:py-32 max-w-xl m-auto">
        <h1>jsonplaceholder</h1>
        <p className="leading-loose max-w-md m-auto mt-8">
          RTL fake REST/GraphQL API for testing and prototyping, based on{" "}
          <Link
            label="{JSON}Placeholder"
            href="https://github.com/typicode/jsonplaceholder"
            title="A simple online fake REST API server by @typicode."
          />
          .
        </p>

        <div className="w-full flex flex-wrap flex-col md:flex-row items-center justify-center mt-8 space-y-6 md:space-y-0 md:space-x-6">
          <Link
            variant="button"
            label="GraphQL Playground"
            href="/graphql"
            className="!bg-graphql-light hover:!bg-graphql-dark"
          />
        </div>

        <div className="flex flex-col mt-12 md:mt-32 w-full">
          <div className="flex flex-col text-left">
            <p className="leading-loose flex-initial items-center">
              Try GET, POST or other HTTP methods on /posts, /comments, /photos,
              /todos or /users. Check
              <Link
                label="how to"
                href="https://github.com/moharnadreza/jsonplaceholder#how-to"
                title="README.md | How to?"
                className="mx-2"
              />
              for more examples.
            </p>
          </div>

          <div className="p-4 md:p-8 rounded-lg bg-gray-800 text-xs md:text-sm relative mt-4 text-left">
            <pre className="overflow-auto leading-loose">{SAMPLE_CODE}</pre>
            <CopyToClipboard
              textToCopy={SAMPLE_CODE}
              className="absolute z-10 right-8 top-8 hidden md:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
