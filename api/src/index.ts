import { ApolloServer } from "apollo-server-express";
import jsonServer from "json-server";
import clone from "clone";
import cors from "cors";

import data from "../../data.json";

import { devMode, port } from "./consts";
import { typeDefs, resolvers } from "./graphql";

const app = jsonServer.create();

const router = jsonServer.router(clone(data));

// graphQL stuff
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// apply app to apollo server
apolloServer.applyMiddleware({ app });

// enabling cors
app.use(cors());

app.use((req, _, next) => {
  if (req.path === "/") {
    return next();
  }

  router.db.setState(clone(data));
  next();
});

app.use(
  jsonServer.defaults({
    logger: devMode,
    static: "./api/public",
  })
);

app.use(router);

app.listen(port, () => {
  console.log(
    `✅ ${
      devMode ? "Development" : "Production"
    } server is running on http://localhost:${port}`
  );
});
