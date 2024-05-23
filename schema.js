/**
 * GraphQL Schema Documentation
 * 
 * This schema defines types and operations for a simple e-commerce system.
 */

// Define GraphQL type definitions
export const typeDefs = `#graphql

  """
  Type representing a customer in the system.
  This type contains information about a customer, including their unique identifier, name, email, password, address, and phone number.
  """
  type Customer {
    id: ID!                 # Unique identifier for the customer
    first_name: String!     # First name of the customer
    last_name: String!      # Last name of the customer
    email: String!          # Email of the customer
    password: String!       # Password of the customer
    address: String!        # Address of the customer
    phone_number: String!   # Phone number of the customer
  }

  """
  Type representing a cart in the system.
  This type contains information about a shopping cart, including its unique identifier, the list of products contained within it, and the customer who owns the cart.
  """
  type Cart {
    id: ID!                 # Unique identifier for the customer 
    products: [Product!]    # List of products(type definitions) inside the cart
    customer: Customer!     # Customer Object owns the cart
  }

  """
  Type representing an order in the system.
  This type contains information about an order placed by a customer, including its unique identifier, the customer who placed the order, the date of the order, the total price, and the list of items ordered.
  """
  type Order {
    id: ID!                       
    customer: Customer!         # Unique identifier for the order
    order_date: String!         # Order Date of the order
    total_price: Float!         # Total Price of the order
    order_items: [OrderItem!]!  # List of Ordered Items in the order 
  }

  """
  Type representing an order item in the system.
  This type contains information about an item included in an order, including its unique identifier, the product being ordered, the quantity, the order it belongs to, and the price.
  """
  type OrderItem {
    id: ID!             # Unique identifier for the Order Item
    product: Product!   # Product Object for the Order Item
    quantity: Int!      # Quantity for the Order Item
    order: Order!       # Order Object for the Order Item
    price: Float!       # Price for the Order Item
  }
  
  """
  Type representing an payment item in the system.
  This type contains information about a payment made for an order, including its unique identifier, the customer who made the payment, the order for which the payment was made, the date of the payment, the payment method used, and the amount paid.
  """
  type Payment {
    id: ID!                   # Unique identifier for the payment 
    customer: Customer!       # Customer Object associated with the payment
    order: Order!             # Order Object associated with the payment
    payment_date: String!     # Date when the payment was made
    payment_method: String!   # Payment method used
    amount: Float!            # Amount of the payment
  }

  """
  Type representing a category in the system.
  This type contains information about a category of products, including its unique identifier, name, and the list of products belonging to the category.
  """
  type Category {
    id: ID!                  # Unique identfier for the category
    category_name: String!   # Name of the category
    products: [Product!]     # List of products in the category
  }

  """
  Type representing a product in the system.
  This type contains information about a product available for sale, including its unique identifier, name, description, category it belongs to, price, and stock quantity.
  """
  type Product {
    id: ID!                 # Unique identifier for the product 
    product_name: String!   # Name of the product
    description: String!    # Description of the product
    category: Category      # Category Object to which the product belongs
    price: Float!           # Price of the product
    stock: Int!             # Stock quantity of the product
  }

  """
  Query operations for fetching data from the system.
  """
  type Query {
    categories: [Category]        # Retrieve all categories in the system
    category(id: ID!): Category   # Retrieve a category by its ID
    customers: [Customer]         # Retrieve all customers in the system
    customer(id: ID!): Customer   # Retrieve a customer by its ID
    payments: [Payment]           # Retrieve all payments in the system
    payment(id: ID!): Payment     # Retrieve a payment by its ID
    products: [Product]           # Retrieve all products in the system
    product(id: ID!): Product     # Retrieve a product by its ID
    orders: [Order]               # Retrieve all orders in the system
    order(id: ID!): Order         # Retrieve an order by its ID
    carts: [Cart]                 # Retrieve all carts in the system
    cart(id: ID!): Cart           # Retrieve a cart by its ID
  }

  """
  Mutation operations for modifying data in the system.
  """
  type Mutation {
    addProduct(product: AddProductInput): Product
    updateProduct(id: ID!, edits: EditProductInput): Product
    deleteProduct(id: ID!): [Product]
    addCustomer(customer: AddCustomerInput): Customer               # Add a new customer in the system
    deleteCustomer(id: ID!): [Customer]                             # Delete a customer by its ID
    updateCustomer(id: ID!, edits: EditCustomerInput!): Customer    # Update a customer by its ID
  }

  input AddProductInput {   
    product_name: String!   # Required to input product name of the product
    description: String!    # Required to input description of the product
    category: String!       # Required to input category ID of the product
    price: Float!           # Required to input price of the product
    stock: Int!             # Required to input stock of the product
  }

  input EditProductInput {
    product_name: String        # Can modify product name of the customer
    description: String         # Can modify description of the customer
    category: String            # Can modify category ID of the customer
    price: Int                  # Can modify price of the customer
    stock: Int                  # Can modify stock of the customer
  }

  input AddCustomerInput {
    first_name: String!       # Required to input first name of the customer
    last_name: String!        # Required to input last name of the customer
    email: String!            # Required to input email of the customer
    password: String!         # Required to input password of the customer
    address: String!          # Required to input address of the customer
    phone_number: String!     # Required to input phone number of the customer
  }
  input EditCustomerInput {
    first_name: String        # Can modify first name of the customer
    last_name: String         # Can modify last name of the customer
    address: String           # Can modify address of the customer
    phone_number: String      # Can modify phone number of the customer
  }
`
