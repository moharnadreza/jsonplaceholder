export const methods = [
  {
    method: "GET",
    body: `{
  method: 'GET',
}`,
  },
  {
    method: "POST",
    body: `{
  method: 'POST',
  body: JSON.stringify({ name: "Mohammadreza" })
}`,
  },
] as const;

export const resolvers = [
  "posts",
  "comments",
  "photos",
  "todos",
  "users",
] as const;
