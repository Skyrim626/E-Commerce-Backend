import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db
import db from './_db.js';

// types
import { typeDefs } from "./schema.js";

// functions
import generateRandomID from './functions.js';

// Resolvers 
const resolvers = {

  // Root Endpoints
  Query: {
    categories() {
      return db.categories
    },
    category(_, args) {
      return db.categories.find((category) => category.id === args.id)
    },
    customers() {
      return db.customers
    },
    customer(_, args) {
      return db.categories.find((customer) => customer.id === args.id)
    },
    payments() {
      return db.payments
    },
    payment(_, args) {
      return db.categories.find((payment) => payment.id === args.id)
    },
    products() {
      return db.products
    },
    product(_, args) {
      return db.products.find((product) => product.id === args.id)
    },
    orders() {
      return db.orders
    },
    order(_, args) {
      return db.orders.find((order) => order.id === args.id);
      
    }
  },

  // Nested Queries/Endpoints
  Order: {
    customer(parent) {
      return db.customers.find((customer) => customer.id === parent.customer);
    },
    order_items(parent) {
      return parent.order_items.map(itemId => db.orderItems.find(item => item.id === itemId));
    }
  },
  OrderItem: {
    product(parent) {
      return db.products.find((product) => product.id === parent.product)
    }
  },
  Category: {
    products(parent) {
      return parent.products.map(itemId => db.products.find(item => item.id === itemId))
    }
  },
  Product: {
    category(parent) {
      return db.categories.find((category) => category.id === parent.category)
    }
  },
  Payment: {
    order(parent) {
      return db.orders.find((order) => order.id === parent.order)
    }
  },

  // Mutation
  Mutation: {
    // Customers
    deleteCustomer(_, args) {
      db.customers = db.customers.filter((customer) => customer.id !== args.id);

      return db.customers;
    },
    addCustomer(_, args) {
      let customer = {
        ...args.customer,
        id: generateRandomID() // Generate Random ID
      }

      // Add new Customer data 
      db.customers.push(customer);

      // Return New Customer
      return customer;
    },
    updateCustomer(_, args) {
      db.customers = db.customers.map((customer) => {
        if(customer.id === args.id) {

          // Override/Overwrite the customer data
          return {...customer, ...args.edits}
        }
        
        // Return default customer
        return customer;
      })

      // Returns the customer that is updated
      return db.customers.find((customer) => customer.id === args.id);

    }
  }
}


// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers
})

// Server Launch
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

// Check Server
console.log(`Server ready at port ${4000}`);




