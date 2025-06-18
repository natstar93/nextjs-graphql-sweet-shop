import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import data from './db.js'

const typeDefs = `#graphql
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Int!
    pack_size: Int!
    brand: String!
    colour: String!
    img_url: String!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }
`;

const resolvers = {
  Query: {
    products: () => data.products,
    product: (_, { id }) => data.products.find(product => product.id === id),
  },

}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
