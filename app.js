/**
 * if you want to get all data of one topic you have to send query like this
 */
const queryAllPosts="{posts {title body}}"
const queryAllComments="{comments {name email}}"
const queryAllAlbums="{albums {userId title}}"
const queryAllPhotos="{photos {title url}}"
const queryAllTodos="{todos {title completed}}"
const queryAllUsers="{users {username email}}"


const queryOnePost="{post(id:2) {title body}}"
const queryOneComment="{comment(id:3) {name email}}"
const queryOneAlbum="{album(id:4) {userId title}}"
const queryOnePhoto="{photo(id:5) {title url}}"
const queryOneTodo="{todo(id:6) {title completed}}"
const queryOneUser="{user(id:7) {username email}}"




const request=require('request');

request({
    method:'POST',
    url:'http://localhost:3000/graphql',
    json:{
        "query":queryOneComment
    }
},(err,res,body)=>{
    console.log(body['data']['comment'])
})