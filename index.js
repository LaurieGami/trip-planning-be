const { ApolloServer }  = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config()
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const MONGO_DB = process.env.MONGO_DB
const PORT = process.env.PORT || 5000

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

mongoose.connect(MONGO_DB)
    .then((res) => {
        console.log(`MongoDB connected: ${res.connection.host}`)
        return server.listen({ port: PORT })
    })
    .then((res) => {
        console.log(`🚀 Server ready at ${res.url}`)
    })
    .catch(err => {
        console.log('Failed to connect to MongoDB and/or server', err);
    })