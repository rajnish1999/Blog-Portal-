const Post = {
    author: (parent, args, { db }, info) => {
        return db.usersArr.find((user) => {
            return parent.author === user.id;
        })
    },
    comments: (parent, args, { db }, info) => {
        return db.commentsArr.filter((comment) => {
            return parent.id === comment.post
        })
    }
    
}

module.exports = Post