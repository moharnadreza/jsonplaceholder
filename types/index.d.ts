import { methods, resolvers } from "consts";

export type Resolver = typeof resolvers[number];
export type Method = typeof methods[number];
