const Comment = {
    author: (parent, args, { db }, info) => {
        return db.usersArr.find((user) => parent.author === user.id)
    },
    post: (parent, args, ctx, info) => {
        
        return db.postsArr.find((post) => {
            return parent.post === post.id;
        })
    }
}

module.exports = Comment