# Persian JSONPlaceholder

[Persian JSONPlaceholder](https://jsonplaceholder.ir) is a simple Persian fake REST API for testing and prototyping.


<a href="https://jsonplaceholder.ir/" target="_blank">
  <img src="./public/img/pj.png">
</a>


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
