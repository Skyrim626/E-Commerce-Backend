export const typeDefs = `#graphql
  type Customer {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    address: String!
    phone_number: String!
  }
  type Cart {
    id: ID!
    quantity: Int
    products: [Product!]
    customer: Customer!
  }
  type Order {
    id: ID!
    customer: Customer!
    order_date: String!
    total_price: Float!
    order_items: [OrderItem!]!
  }
  type OrderItem {
    id: ID!
    product: Product!
    quantity: Int!
    order: Order!
    price: Float!
  }
  type Payment {
    id: ID!
    customer: Customer!
    order: Order!
    payment_date: String!
    payment_method: String!
    amount: Float!
  }
  type Category {
    id: ID!
    category_name: String!
    products: [Product!]
  }
  type Product {
    id: ID!
    product_name: String!
    description: String!
    category: Category
    price: Float!
    stock: Int!
  }
  type Query {
    categories: [Category]
    category(id: ID!): Category
    customers: [Customer]
    customer(id: ID!): Customer
    payments: [Payment]
    payment(id: ID!): Payment
    products: [Product]
    product(id: ID!): Product
    orders: [Order]
    order(id: ID!): Order
    carts: [Cart]
    cart(id: ID!): Cart
  }
  type Mutation {
    addCustomer(customer: AddCustomerInput): Customer
    deleteCustomer(id: ID!): [Customer]
    updateCustomer(id: ID!, edits: EditCustomerInput!): Customer
  }
  input AddCustomerInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    address: String!
    phone_number: String!
  }
  input EditCustomerInput {
    first_name: String
    last_name: String
    address: String
    phone_number: String
  }
`
