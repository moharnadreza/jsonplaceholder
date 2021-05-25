<div align="center">
  <img src="https://user-images.githubusercontent.com/53334880/119559594-20fcc280-bdb8-11eb-8244-b721cc0c55a9.png" alt="React Toast" />
  <h3>jsonPlaceholder</h3>
</div>

<h6 align="center">
  RTL fake REST/GraphQL API for testing and prototyping.
</h3>

### Resources

- [`/posts`](https://jsonplaceholder.ir/posts)
- [`/comments`](https://jsonplaceholder.ir/comments)
- [`/photos`](https://jsonplaceholder.ir/photos)
- [`/todos`](https://jsonplaceholder.ir/todos)
- [`/users`](https://jsonplaceholder.ir/users)

### How to

Here's an example to get a list of fake users:

```ts
fetch("https://jsonplaceholder.ir/users")
  .then(response => response.json())
  .then(json => console.log(json)); // returns an array of users
```

#### Single resource

You can get single resource for any data group by `id` property, for example, [`/users/1`](https://jsonplaceholder.ir/users/1).

#### Filtering

Any kind of filtering is doable using query string like [`/posts?userId=2`](https://jsonplaceholder.ir/posts?userId=2) or [`/todos?completed=true`](https://jsonplaceholder.ir/todos?completed=true).

#### Nested resources

One level of nested route is available only for `/posts` and `/users` data groups, for instance [`/posts/4/comments`](https://jsonplaceholder.ir/posts/4/comments) or [`/users/1/todos`](https://jsonplaceholder.ir/users/4/todos).

### Methods

`CRUD` operations are available for all data groups, that means you can use `POST`, `GET`, `PUT`, `DELETE` or other http methods to create, read, update or delete resources, which will be faked as if.

```ts
// updating a resource

fetch("https://jsonplaceholder.ir/posts/6", {
  method: "PUT",
  body: JSON.stringify({ title: "foo", body: "bar", userId: 4 }),
})
  .then(response => response.json())
  .then(json => console.log(json));
```

### GraphQL

All of the resources are available also with GraphQL, Try out [GraphQL Playground](https://jsonplaceholder.ir/graphql) for more details.
