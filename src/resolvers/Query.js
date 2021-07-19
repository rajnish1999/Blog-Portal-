const Query = {
    users: (parent, args, { db }, info) => {
        if(!args.inputQuery){
            return db.usersArr;
        }
        return db.usersArr.filter(user => 
            user.name.toLowerCase().includes(args.inputQuery.toLowerCase()));
    },
    posts: (parent, args, { db }, info) => {
        if(!args.inputQuery){
            return db.postsArr;
        }
        return db.postsArr.filter(post => 
            post.title.toLowerCase().includes(args.inputQuery.toLowerCase()) ||
            post.body.toLowerCase().includes(args.inputQuery.toLowerCase())
            );
    },
    comments: (parent, args, { db }, info) => {
        return db.commentsArr;
    },
    me: () => ({
        id: '123',
        name: 'Rajnish',
        email: 'raj@gmail.com',
        age: '23',
    }),
    post: () => ({
        id: '892',
        title: 'Shawshank Redemption',
        body: 'body',
        published: false
    }),
}

module.exports = Query