const { v4: uuidv4 } = require('uuid');

const Mutation = {
    createUser: (parent, args, { db }, info) => {
        const emailTaken = db.usersArr.some((user) => user.email === args.email)
        
        if(emailTaken){
            throw new Error('Email taken');
        }

        const user = {
            ...args,
            id: uuidv4(),
        }

        db.usersArr.push(user);

        return user;
    },
    deleteUser: (parent, args, { db }, info) => {
        const userIndex = db.usersArr.findIndex((user) => user.id === args.id)

        if( userIndex === -1){
            throw new Error('User not found');
        }

        const deletedUsers = db.usersArr.splice(userIndex, 1);

        db.postsArr = db.postsArr.filter((post) => {
            const match = post.author === args.id

            if(match) {
                db.commentsArr = db.commentsArr.filter((comment) => comment.post !== post.id)
            }

            return !match
        })
        db.commentsArr = db.commentsArr.filter((comment) => comment.author !== args.id)

        return deletedUsers[0]
    },
    updateUser: (parent, args, { db }, info) => {
        let user = db.usersArr.find((user) => user.id === args.id)

        if(!user){
            throw new Error('User not found')
        }

        if(args.data.email){
            const emailTaken = db.usersArr.some((user) => args.data.email === user.email)
            if(emailTaken) {
                throw new Error('email taken')
            }
        }

        return Object.assign(user, args.data)
    },
    createPost: (parent, args, { db }, info) => {
        const userExists = db.usersArr.some((user) => user.id === args.author)

        if(!userExists){
            throw new Error('User not exists');
        }

        const post = {
            ...args,
            id: uuidv4(),
            
        }

        db.postsArr.push(post);

        return post;
    },
    deletePost: (parent, args, { db }, info) => {
        const postIndex = db.postsArr.findIndex((post) => post.id === args.id);
        
        if(postIndex == -1){
            throw new Error("Post doesn't exist");
        }

        deletedPost = db.postsArr.splice(postIndex,1);

        db.commentsArr = db.commentsArr.filter((comment) => args.id !== comment.post)

        return deletedPost[0];
    },
    updatePost: (parent, args, { db }, info) => {
        const post = db.postsArr.find((post) => post.id === args.id)

        if(!post){
            throw new Error("post not found")
        }

        return Object.assign(post, args.data)

    },
    createComment: (parent,args, { db }, info) => {
        const userExist = db.usersArr.some((user) => user.id === args.author);
        const postExist = db.postsArr.some((post) => post.id === args.post);

        if(!userExist) {
            throw new Error("Author doesn't exist");
        }
        if(!postExist){
            throw new Error("post doesn't exist");
        }

        const comment = {
            ...args,
            id: uuidv4(),
           
        }

        db.commentsArr.push(comment);
        return comment;
    },
    deleteComment: (parent, args, { db }, info) => {
        const commentIndex = db.commentsArr.findIndex((comment) => comment.id === args.id)

        if(commentIndex === -1){
            throw new Error("Comment doesn't exist");
        }

        return db.commentsArr.splice(commentIndex, 1)[0];
    },
    updateComment: (parent, args, { db }, info) => {

        const comment = db.commentsArr.find((comment) => comment.id === args.id)

        if(!comment){
            throw new Error('comment not found')
        }

        return Object.assign(comment, args.data)
    }
}

module.exports = Mutation