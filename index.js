/**
 * GraphQL Server Documentation
 * 
 * This server sets up a GraphQL API for a simple e-commerce system, providing operations to query and mutate data related to categories, customers, payments, products, and orders.
 */

// Import necessary modules
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


// Import database and schema
import db from './_db.js';
import { typeDefs } from "./schema.js";

// Import helper functions
import generateRandomID from './functions.js';

// Define resolvers to handle GraphQL queries and mutations
const resolvers = {

  // Root Endpoints
  Query: {
    /**
     * Retrieve all categories.
     * @returns {Array} Array of category objects.
     */
    categories() {
      return db.categories
    },

    /**
     * Retrieve a category by its ID.
     * @param {Object} parent - The parent object.
     * @param {Object} args - Arguments passed to the query.
     * @returns {Object} Category object matching the provided ID.
     */
    category(_, args) {
      return db.categories.find((category) => category.id === args.id)
    },
    /**
     * Retrieve all customers.
     * @returns {Array} Array of customer objects.
     */
    customers() {
      return db.customers
    },
    
    /**
     * Retrieve a customer by their ID.
     * @param {Object} parent - The parent object.
     * @param {Object} args - Arguments passed to the query.
     * @returns {Object} Customer object matching the provided ID.
     */
    customer(_, args) {
      console.log(db.customers.find((customer) => customer.id === args.id))
      return db.customers.find((customer) => customer.id === args.id)
    },

    /**
     * Retrieve all payments.
     * @returns {Array} Array of payment objects.
     */
    payments() {
      return db.payments
    },

    /**
     * Retrieve a payment by its ID.
     * @param {Object} parent - The parent object.
     * @param {Object} args - Arguments passed to the query.
     * @returns {Object} Payment object matching the provided ID.
     */
    payment(_, args) {
      return db.categories.find((payment) => payment.id === args.id)
    },

    /**
     * Retrieve all products.
     * @returns {Array} Array of product objects.
     */
    products() {
      return db.products
    },

    /**
     * Retrieve a product by its ID.
     * @param {Object} parent - The parent object.
     * @param {Object} args - Arguments passed to the query.
     * @returns {Object} Product object matching the provided ID.
     */
    product(_, args) {
      return db.products.find((product) => product.id === args.id)
    },

    /**
     * Retrieve all orders.
     * @returns {Array} Array of order objects.
     */
    orders() {
      return db.orders
    },

    /**
     * Retrieve an order by its ID.
     * @param {Object} parent - The parent object.
     * @param {Object} args - Arguments passed to the query.
     * @returns {Object} Order object matching the provided ID.
     */
    order(_, args) {
      return db.orders.find((order) => order.id === args.id);
    }
  },

  // Nested Queries/Endpoints
  Order: {
    /**
     * Retrieve the customer associated with the order.
     * @param {Object} parent - The parent object.
     * @returns {Object} Customer object associated with the order.
     */
    customer(parent) {
      return db.customers.find((customer) => customer.id === parent.customer);
    },

    /**
     * Retrieve the order items associated with the order.
     * @param {Object} parent - The parent object.
     * @returns {Array} Array of order item objects belonging to the order.
     */
    order_items(parent) {
      return parent.order_items.map(itemId => db.orderItems.find(item => item.id === itemId));
    }
  },
  OrderItem: {
    /**
     * Retrieve the product associated with the order item.
     * @param {Object} parent - The parent object.
     * @returns {Object} Product object associated with the order item.
     */
    product(parent) {
      return db.products.find((product) => product.id === parent.product)
    }
  },
  Category: {
    /**
     * Retrieve the products belonging to the category.
     * @param {Object} parent - The parent object.
     * @returns {Array} Array of product objects belonging to the category.
     */
    products(parent) {
      return parent.products.map(itemId => db.products.find(item => item.id === itemId))
    }
  },
  Product: {
    /**
     * Retrieve the category to which the product belongs.
     * @param {Object} parent - The parent object.
     * @returns {Object} Category object to which the product belongs.
     */
    category(parent) {
      return db.categories.find((category) => category.id === parent.category)
    }
  },
  Payment: {
    /**
     * Retrieve the order associated with the payment.
     * @param {Object} parent - The parent object.
     * @returns {Object} Order object associated with the payment.
     */
    order(parent) {
      return db.orders.find((order) => order.id === parent.order)
    }
  },

  // Mutation
  Mutation: {
    // Customers
    /**
     * Delete a customer from the system.
     * @param {Object} parent - The parent object.
     * @param {Object} args - Arguments passed to the mutation.
     * @returns {Array} Updated array of customer objects after deletion.
     */
    deleteCustomer(_, args) {
      db.customers = db.customers.filter((customer) => customer.id !== args.id);

      return db.customers;
    },

    /**
     * Add a new customer to the system.
     * @param {Object} parent - The parent object.
     * @param {Object} args - Arguments passed to the mutation.
     * @returns {Object} Newly added customer object.
     */
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
    /**
     * Update details of an existing customer in the system.
     * @param {Object} parent - The parent object.
     * @param {Object} args - Arguments passed to the mutation.
     * @returns {Object} Updated customer object.
     */
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


// Create ApolloServer instance
const server = new ApolloServer({
  typeDefs,
  resolvers
})

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

// Debugging Server
console.log(`Server ready at port ${4000}`);




