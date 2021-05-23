import type { Method, Resolver } from "types";

interface Params {
  resolver: Resolver;
  method: Method;
}

export const getSampleCode = ({ resolver, method }: Params): string => {
  return `fetch('https://jsonplaceholder.ir/${resolver}', ${method.body})
  .then(response => response.json())
  .then(json => console.log(json))`;
};
