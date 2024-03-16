const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/query");
const { Mutation } = require("./resolvers/mutation");
const { Category } = require("./resolvers/category");
const { Product } = require("./resolvers/product");
const { db } = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Product,
  },
  context: { db },
});

server.listen().then(({ url }) => {
  console.log("Server is ready at", url);
});
