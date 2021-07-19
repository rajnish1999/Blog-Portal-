const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema.graphql')
const db = require('./db.js')
const Query  = require('./resolvers/Query.js')
const Mutation  = require('./resolvers/Mutation.js')
const User  = require('./resolvers/User.js')
const Post  = require('./resolvers/Post.js')
const Comment  = require('./resolvers/Comment.js')

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Post,
        User,
        Comment
    },
    context: {
        db
    }
})

server.listen({ port : 4000 }).then(({ url }) => {
    console.log(`Server running at ${url}`);
})