const User = {
    posts: (parent, args, { db }, info) => {
        return db.postsArr.filter((post) => {
            return post.author === parent.id 
        })
    },
    comments: (parent, args, { db }, info) => {
        return db.commentsArr.filter((comment) => parent.id === comment.author)
    } 
}

module.exports = User