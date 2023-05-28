// create a database name shop
use shop

// create a collection name products and insert one book with price

db.products.insertOne({ name: "A book", price: 12.99 })

db.products.find()

// insert one more product

db.products.insertOne({ title: "T-Shirt", seller: { name: "Max", age: 29 } })

db.products.find()

// output

[
  {
    _id: ObjectId("6432391d6fa3615abcae55d4"),
    name: 'A book',
    price: 12.99
  },
  {
    _id: ObjectId("6432398d6fa3615abcae55d5"),
    title: 'T-Shirt',
    seller: { name: 'Max', age: 29 }
  }
]

// we can able to store completly different data in same collection in mongodb

// delete all products

db.products.deleteMany({})

// insert two products in collection

db.products.insertMany([{ name: "A book", price: 12.99 }, { name: "A T-Sirt", price: 20.99 }])

// insert one more product with extra field

db.products.insertOne({ name: "A Computer", price: 1299, details: { cpu: "Intel i7 8770" } })

db.products.find()
     
    // output
[
  {
    _id: ObjectId("64323e8f6fa3615abcae55d6"),
    name: 'A book',
    price: 12.99
  },
  {
    _id: ObjectId("64323e8f6fa3615abcae55d7"),
    name: 'A T-Sirt',
    price: 20.99
  },
  {
    _id: ObjectId("64323f056fa3615abcae55d8"),
    name: 'A Computer',
    price: 1299,
    details: { cpu: 'Intel i7 8770' }
  }
]

// delete all products

db.products.deleteMany({})

// to maintain same structre in collection

// we need to assign null value which field doesnot require

db.products.insertMany([
    { name: "A book", price: 12.99, details: null },
    { name: "A T-Shirt", price: 20.99, details: null },
    { name: 'A Computer', price: 1299, details: { cpu: "Intel i7 8770" } }
])


db.products.find()
      
    // output
[
  {
    _id: ObjectId("643240fc6fa3615abcae55d9"),
    name: 'A book',
    price: 12.99,
    details: null
  },
  {
    _id: ObjectId("643240fc6fa3615abcae55da"),
    name: 'A T-Shirt',
    price: 20.99,
    details: null
  },
  {
    _id: ObjectId("643240fc6fa3615abcae55db"),
    name: 'A Computer',
    price: 1299,
    details: { cpu: 'Intel i7 8770' }
  }
]

