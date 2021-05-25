import data from "../../../data.json";

export const resolvers = {
  Query: {
    posts: () => {
      return data["posts"];
    },
    comments: () => {
      return data["comments"];
    },
    photos: () => {
      return data["photos"];
    },
    todos: () => {
      return data["todos"];
    },
    users: () => {
      return data["users"];
    },
    post: (_: unknown, args: { id: number }) => {
      return data["posts"].find(({ id }) => id === args.id);
    },
    comment: (_: unknown, args: { id: number }) => {
      return data["comments"].find(({ id }) => id === args.id);
    },
    photo: (_: unknown, args: { id: number }) => {
      return data["photos"].find(({ id }) => id === args.id);
    },
    todo: (_: unknown, args: { id: number }) => {
      return data["todos"].find(({ id }) => id === args.id);
    },
    user: (_: unknown, args: { id: number }) => {
      return data["users"].find(({ id }) => id === args.id);
    },
  },
};
