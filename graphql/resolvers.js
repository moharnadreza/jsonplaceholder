/**
 * function to find item in json file by Id
 */
const getDataById=require('./../graphql/getDataById');

/**
 * data
 */

const data=require('./../data.json')

/**
 * define resolvers for graphql
 */
const resolvers = {
    Query: {
        posts: () => {
            return data['posts']
        },
        comments: () => {
            return (data['comments'])
        },
        albums: () => {
            return (data['albums'])
        },
        photos: () => {
            return (data['photos'])
        },
        todos: () => {
            return (data['todos'])
        },
        users: () => {
            return (data['users'])
        },
        post: (parent, args) => {
            return (getDataById('posts', args['id']))
        },
        comment: (parent, args) => {
            return (getDataById('comments', args['id']))
        },
        album: (parent, args) => {
            return (getDataById('albums', args['id']))
        },
        photo: (parent, args) => {
            return (getDataById('photos', args['id']))
        },
        todo: (parent, args) => {
            return (getDataById('todos', args['id']))
        },
        user: (parent, args) => {
            return (getDataById('users', args['id']))
        }
    }
}


module.exports = resolvers;