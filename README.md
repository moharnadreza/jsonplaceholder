# Persian JSONPlaceholder

[Persian JSONPlaceholder](https://jsonplaceholder.ir) is a simple Persian fake REST API for testing and prototyping.

Read [this post on Virgool.io](https://virgool.io/raychat/persianjsonplaceholder-mtwhgc0poehp) for more information about it.

## Why?

Most of the time when trying a new library, hacking a prototype or following a tutorial, I found myself in need of some Persian data, So I decided to make Persian version of https://jsonplaceholder.typicode.com.

You can find it running here and are free to use it in your developments: https://jsonplaceholder.ir. 

I hope you will find it useful.

## Available resources

Let's start with resources, JSONPlaceholder provides the usual suspects:

* Posts https://jsonplaceholder.ir/posts/1
* Comments https://jsonplaceholder.ir/comments/1
* Albums https://jsonplaceholder.ir/albums/1
* Photos https://jsonplaceholder.ir/photos/1
* Users https://jsonplaceholder.ir/users/1
* Todos https://jsonplaceholder.ir/todos/1

## How to

Here's some code using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) showing what can be done with JSONPlaceholder.

### Showing a resource

```js
fetch('https://jsonplaceholder.ir/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))
```

### Listing resources

```js
fetch('https://jsonplaceholder.ir/posts')
  .then(response => response.json())
  .then(json => console.log(json))
```

### Creating a resource

```js
// POST adds a random id to the object sent
fetch('https://jsonplaceholder.ir/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

/* will return
{
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}
*/
```

Note: the resource will not be really created on the server but it will be faked as if. 

### Updating a resource

```js
fetch('https://jsonplaceholder.ir/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

/* will return
{
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
}
*/
```

```js
fetch('https://jsonplaceholder.ir/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo'
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

/* will return
{
  id: 1,
  title: 'foo',
  body: 'quia et suscipit [...]',
  userId: 1
}
*/
```

Note: the resource will not be really updated on the server but it will be faked as if. 

### Deleting a resource

```js
fetch('https://jsonplaceholder.ir/posts/1', {
  method: 'DELETE'
})
```

Note: the resource will not be really deleted on the server but it will be faked as if. 

### Filtering resources

Basic filtering is supported through query parameters.

```js
// Will return all the posts that belong to the first user
fetch('https://jsonplaceholder.ir/posts?userId=1')
  .then(response => response.json())
  .then(json => console.log(json))
```

### Nested resources

One level of nested route is available.

```js
// equivalent to /comments?postId=1
fetch('https://jsonplaceholder.ir/posts/1/comments')
  .then(response => response.json())
  .then(json => console.log(json))
```

Here's the list of available nested routes:

* https://jsonplaceholder.ir/posts/1/comments
* https://jsonplaceholder.ir/albums/1/photos
* https://jsonplaceholder.ir/users/1/albums
* https://jsonplaceholder.ir/users/1/todos
* https://jsonplaceholder.ir/users/1/posts



### Use JSONPlaceholder with GraphQL 

All of the requests are available in https://jsonplaceholder.ir/graphql with different queries, get needed params for each one :)


```js
// For example:get all data for one topic
let queryAllPosts = "{ posts { title body } }"
let queryAllComments = "{ comments { name email } }"
let queryAllAlbums = "{ albums { userId title } }"
let queryAllPhotos = "{ photos { title url } }"
let queryAllTodos = "{ todos { title completed } }"
let queryAllUsers = "{ users { username email } }"

// For example:get specific data by id
let queryOnePost = "{ post(id:2)  { title body } }"
let queryOneComment = "{ comment(id:3) { name email } }"
let queryOneAlbum = "{ album(id:4) { userId title } }"
let queryOnePhoto = "{ photo(id:5) { title url } }"
let queryOneTodo = "{ todo(id:6) { title completed } }"
let queryOneUser = "{ user(id:7) { username email } }"
// and ...



// Fetch data as JSON file format
const request = require('request');

request({
    method: 'POST',
    url: 'https://jsonplaceholder.ir/graphql',
    json: {
        "query": queryOnePhoto
    }
}, (err, res, data) => {
    console.log(data)
})



// Or use request package to fetch data as JSON file format
fetch('https://jsonplaceholder.ir/graphql', {
    method: 'POST',
    body: JSON.stringify(queryOneUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

```
