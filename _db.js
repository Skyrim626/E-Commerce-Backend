
const customers = [
  {
    id: "1",
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    password: "password123",
    address: "123 Main St, Springfield, IL 62701",
    phone_number: "555-123-4567"
  },
  {
    id: "2",
    first_name: "Jane",
    last_name: "Smith",
    email: "jane.smith@example.com",
    password: "securepass456",
    address: "456 Elm St, Springfield, IL 62702",
    phone_number: "555-987-6543"
  },
  {
    id: "3",
    first_name: "Robert",
    last_name: "Johnson",
    email: "robert.johnson@example.com",
    password: "mypassword789",
    address: "789 Oak St, Springfield, IL 62703",
    phone_number: "555-456-7890"
  },
  {
    id: "4",
    first_name: "Emily",
    last_name: "Davis",
    email: "emily.davis@example.com",
    password: "password321",
    address: "321 Pine St, Springfield, IL 62704",
    phone_number: "555-321-6547"
  },
  {
    id: "5",
    first_name: "Michael",
    last_name: "Brown",
    email: "michael.brown@example.com",
    password: "pass1234word",
    address: "654 Cedar St, Springfield, IL 62705",
    phone_number: "555-654-3210"
  }
];

// Payments
const payments = [
  {
    id: "1",
    customer: "1",
    order: "1",
    payment_date: "2024-05-24",
    payment_method: "Debit Card",
    amount: "5000"
  }
]

// Order 
const orders = [
  {
    id: "1",
    customer: "1",
    order_date: "2024-05-24",
    total_price: 123,
    order_items: ["1", "2", "3", "4", "5", "6", "7"]
  },
  {
    id: "2",
    customer: "2",
    order_date: "2024-05-24",
    total_price: 123,
    order_items: ["8", "9", "10", "11", "12", "13", "14", "15"]
  }
]


// Order Items Data
const orderItems = [
  {
    id: "1",
    product: "1",
    quantity: 2,
    order: "1",
    price: 699.99
  },
  {
    id: "2",
    product: "2",
    quantity: 1,
    order: "1",
    price: 89.99
  },
  {
    id: "3",
    product: "3",
    quantity: 3,
    order: "1",
    price: 49.99
  },
  {
    id: "4",
    product: "4",
    quantity: 5,
    order: "1",
    price: 12.99
  },
  {
    id: "5",
    product: "5",
    quantity: 4,
    order: "1",
    price: 24.99
  },
  {
    id: "6",
    product: "6",
    quantity: 2,
    order: "1",
    price: 29.99
  },
  {
    id: "7",
    product: "7",
    quantity: 1,
    order: "1",
    price: 14.99
  },
  {
    id: "8",
    product: "8",
    quantity: 1,
    order: "1",
    price: 129.99
  },
  {
    id: "9",
    product: "9",
    quantity: 3,
    order: "1",
    price: 19.99
  },
  {
    id: "10",
    product: "10",
    quantity: 6,
    order: "1",
    price: 9.99
  },
  {
    id: "11",
    product: "11",
    quantity: 10,
    order: "1",
    price: 11.99
  },
  {
    id: "12",
    product: "12",
    quantity: 1,
    order: "1",
    price: 39.99
  },
  {
    id: "13",
    product: "13",
    quantity: 3,
    order: "1",
    price: 24.99
  },
  {
    id: "14",
    product: "14",
    quantity: 1,
    order: "1",
    price: 79.99
  },
  {
    id: "15",
    product: "15",
    quantity: 1,
    order: "1",
    price: 199.99
  }
];


// Products Data
const products = [
  {
    id: "1",
    product_name: "Smartphone",
    description: "Latest model with advanced features",
    category: "1",
    price: 699.99,
    stock: 50
  },
  {
    id: "2",
    product_name: "Running Shoes",
    description: "Comfortable and durable running shoes",
    category: "2",
    price: 89.99,
    stock: 100
  },
  {
    id: "3",
    product_name: "Blender",
    description: "High-speed blender for smoothies and more",
    category: "3",
    price: 49.99,
    stock: 30
  },
  {
    id: "4",
    product_name: "Shampoo",
    description: "Organic shampoo for all hair types",
    category: "4",
    price: 12.99,
    stock: 200
  },
  {
    id: "5",
    product_name: "Yoga Mat",
    description: "Non-slip yoga mat with extra cushioning",
    category: "5",
    price: 24.99,
    stock: 150
  },
  {
    id: "6",
    product_name: "Board Game",
    description: "Fun and engaging board game for all ages",
    category: "6",
    price: 29.99,
    stock: 75
  },
  {
    id: "7",
    product_name: "Novel",
    description: "Bestselling fiction novel",
    category: "7",
    price: 14.99,
    stock: 120
  },
  {
    id: "8",
    product_name: "Car Battery",
    description: "High-performance car battery",
    category: "8",
    price: 129.99,
    stock: 40
  },
  {
    id: "9",
    product_name: "Vitamin Supplements",
    description: "Daily multivitamins for better health",
    category: "9",
    price: 19.99,
    stock: 80
  },
  {
    id: "10",
    product_name: "Organic Honey",
    description: "Pure organic honey from local farms",
    category: "10",
    price: 9.99,
    stock: 60
  },
  {
    id: "11",
    product_name: "Printer Paper",
    description: "High-quality printer paper for office use",
    category: "11",
    price: 11.99,
    stock: 500
  },
  {
    id: "12",
    product_name: "Garden Tools Set",
    description: "Complete set of tools for gardening",
    category: "12",
    price: 39.99,
    stock: 25
  },
  {
    id: "13",
    product_name: "Dog Food",
    description: "Nutritious dog food for all breeds",
    category: "13",
    price: 24.99,
    stock: 70
  },
  {
    id: "14",
    product_name: "Baby Monitor",
    description: "High-resolution baby monitor with night vision",
    category: "14",
    price: 79.99,
    stock: 45
  },
  {
    id: "15",
    product_name: "Acoustic Guitar",
    description: "High-quality acoustic guitar for beginners and professionals",
    category: "15",
    price: 199.99,
    stock: 20
  }
];


// Categories Data
const categories = [
  {
    id: "1",
    category_name: "Electronics",
    products: ['1']
  },
  {
    id: "2",
    category_name: "Clothing",
    products: ['2'],
  },
  {
    id: "3",
    category_name: "Home & Kitchen",
    products: ['3'],
  },
  {
    id: "4",
    category_name: "Beauty & Personal Care",
    products: ['4']
  },
  {
    id: "5",
    category_name: "Sports & Outdoors",
    products: ['5']
  },
  {
    id: "6",
    category_name: "Toys & Games",
    products: ['6']
  },
  {
    id: "7",
    category_name: "Books",
    products: ['7']
  },
  {
    id: "8",
    category_name: "Automotive",
    products: ['8']
  },
  {
    id: "9",
    category_name: "Health & Wellness",
    products: ['9']
  },
  {
    id: "10",
    category_name: "Grocery & Gourmet Food",
    products: ['10']
  },
  {
    id: "11",
    category_name: "Office Supplies",
    products: ['11']
  },
  {
    id: "12",
    category_name: "Garden & Outdoor",
    products: ['12']
  },
  {
    id: "13",
    category_name: "Pet Supplies",
    products: ['13']
  },
  {
    id: "14",
    category_name: "Baby Products",
    products: ['14']
  },
  {
    id: "15",
    category_name: "Musical Instruments",
    products: ['15']
  }
];


// Export Variables
export default { customers, categories, orderItems, products, orders, payments }