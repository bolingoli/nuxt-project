const express = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP
const { buildSchema } = require('graphql')
const cors = require('cors')
const { getProducts, addProduct } = require('./data/products')

// Construct a schema, using GraphQL schema language
const schema1 = buildSchema(`
  type Product {
    id: Int,
    title: String,
    src: String,
    price: String,
  },
  type Query {
    hello: String,
    products: [Product],
    product(id: Int!): Product,
  },
  type Mutation {
    createProduct(name: String!, description: String!): String,
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!'
  },
  products: () => {
    return getProducts()
  },
  product: ({ id }) => {
    const products = getProducts()
    return products.find(p => p.id === id)
  },
  createProduct: (args) => {
    const { name, description } = args
    const newProduct = addProduct(name, description)
    return `Created: ${newProduct.id} ${newProduct.name} - ${
      newProduct.description
    }`
  }
}

const app = express()
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema1,
    rootValue: root,
    graphiql: true
  })
)
app.listen(4002)
// eslint-disable-next-line no-console
console.log('Running a GraphQL API server at localhost:4000/graphql')

// query with list CHECK
// query with param, CHECK
// mutator, CREATE, DELETE, UPDATE , CHECK

// correct broken images on NGRX
