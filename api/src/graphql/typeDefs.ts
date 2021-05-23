import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    posts: [Post]
    comments: [Comment]
    photos: [Photo]
    todos: [Todo]
    users: [User]
    post(id: Int!): Post
    comment(id: Int!): Comment
    photo(id: Int!): Photo
    todo(id: Int!): Todo
    user(id: Int!): User
  }

  type Post {
    userId: Int
    id: Int
    title: String
    body: String
  }

  type Comment {
    postId: Int
    id: Int
    name: String
    email: String
    body: String
  }

  type Photo {
    albumId: Int
    id: Int
    title: String
    url: String
    thumbnailUrl: String
  }

  type Todo {
    userId: Int
    id: Int
    title: String
    completed: Boolean
  }

  type User {
    id: Int
    name: String
    username: String
    email: String
    password: String
    avatar: String
    address: Address
    phone: String
    website: String
    company: String
  }

  type Address {
    country: String
    city: String
    street: String
    alley: String
    number: Int
    geo: Geo
  }

  type Geo {
    lat: String
    lng: String
  }
`;
