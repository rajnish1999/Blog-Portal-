let usersArr = [{
    id: '1',
    name: 'Rajnish',
    email: 'r@gmail.com',
    age: '23'
},{
    id: '2',
    name: 'Shashi',
    email: 's@gmail.com'
},{
    id: '3',
    name: 'priya',
    email: 'p@gmail.com'
}]

let postsArr = [{
    id: '10',
    title: 'title1',
    body: 'body1',
    published: true,
    author: '1'    
}, {
    id: '20',
    title: 'title2',
    body: 'body2',
    published: false,
    author: '2'
}, {
    id: '30',
    title: 'title3',
    body: 'body3',
    published: false,
    author: '3'
}]

let commentsArr = [{
    id: 'c1',
    text: 'comment-text-1',
    author: '1',
    post: '10'
},
{
    id: 'c2',
    text: 'comment-text-2',
    author: '1',
    post: '10'
},
{
    id: 'c3',
    text: 'comment-text-3',
    author: '2',
    post: '20'
},
{
    id: 'c4',
    text: 'comment-text-4',
    author: '3',
    post: '20'
}]

const db = {
    usersArr,
    postsArr,
    commentsArr
}

module.exports = db