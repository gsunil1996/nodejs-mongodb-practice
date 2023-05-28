// create a database called shop

use shop

// create a collection products and insert data
db.products.insertOne({ title: "A Book", price: 12.99 })

db.products.find()
    // output
[
  {
    _id: ObjectId("6432b09d1a96e6f34946f4e8"),
    title: 'A Book',
    price: 12.99
  }
]

// create a collection customers and insert data

db.customers.insertOne({ name: "Max", age: 29 })

db.customers.find()
    // output
[{ _id: ObjectId("6432b14d1a96e6f34946f4e9"), name: 'Max', age: 29 }]

// create a orders collections and insert data by relation between product and customer

db.orders.insertOne({ productId: ObjectId("6432b09d1a96e6f34946f4e8"), customerId: ObjectId("6432b14d1a96e6f34946f4e9") })

db.orders.find()
    // output
[
  {
    _id: ObjectId("6432b2051a96e6f34946f4ea"),
    productId: ObjectId("6432b09d1a96e6f34946f4e8"),
    customerId: ObjectId("6432b14d1a96e6f34946f4e9")
  }
]

// update customer details

db.customers.updateOne({}, { $set: { orders: [{ productId: ObjectId("6432b09d1a96e6f34946f4e8"), quantity: 2 }] } })

db.customers.find()
     // output
[
  {
    _id: ObjectId("6432b14d1a96e6f34946f4e9"),
    name: 'Max',
    age: 29,
    orders: [
      { productId: ObjectId("6432b09d1a96e6f34946f4e8"), quantity: 2 }
    ]
  }
]

// create a database bookRegistry
use bookRegistry

// create a collection name books and insert data

db.books.insertOne({ name: "My favorite Book", authors: [{ name: "Max Schwarz", age: 29 }, { name: "Sunil Kumar", age: 28 }] })

db.books.find()
     // output
[
  {
    _id: ObjectId("6432b72f3c5de11dccffd527"),
    name: 'My favorite Book',
    authors: [
      { name: 'Max Schwarz', age: 29 },
      { name: 'Sunil Kumar', age: 28 }
    ]
  }
]

// create a authors collection and insert data

db.authors.insertMany([{ name: "Max", age: 29, address: { street: "Main" } }, { name: "Sunil Kumar", age: 28, address: { street: "Tree" } }])

db.authors.find()
    // output
[
  {
    _id: ObjectId("6432b8713c5de11dccffd528"),
    name: 'Max',
    age: 29,
    address: { street: 'Main' }
  },
  {
    _id: ObjectId("6432b8713c5de11dccffd529"),
    name: 'Sunil Kumar',
    age: 28,
    address: { street: 'Tree' }
  }
]

db.books.find()
[
  {
    _id: ObjectId("6432b72f3c5de11dccffd527"),
    name: 'My favorite Book',
    authors: [
      { name: 'Max Schwarz', age: 29 },
      { name: 'Sunil Kumar', age: 28 }
    ]
  }

// update data in books collection by reference

db.books.updateOne({}, { $set: { authors: [ObjectId("6432b8713c5de11dccffd528"), ObjectId("6432b8713c5de11dccffd529")] } }) 

db.books.find()
[
  {
    _id: ObjectId("6432b72f3c5de11dccffd527"),
    name: 'My favorite Book',
    authors: [
      ObjectId("6432b8713c5de11dccffd528"),
      ObjectId("6432b8713c5de11dccffd529")
    ]
  }
]

// merging data with lookup and  aggregate, this will give result but do not modify existing collections data

// from : "authors" : this refers to authors collection
// localField : "authors" : this refers to authors field :  array present in the books collection
// foriegnField: "_id" : this refers to the id of target collection, that is author collection and its id
// "as" refers to name of the field

db.books.aggregate([{ $lookup: { from: "authors", localField: "authors", foreignField: "_id", as: "creators" } }])

// output

[
  {
    _id: ObjectId("6432b72f3c5de11dccffd527"),
    name: 'My favorite Book',
    authors: [
      ObjectId("6432b8713c5de11dccffd528"),
      ObjectId("6432b8713c5de11dccffd529")
    ],
    creators: [
      {
        _id: ObjectId("6432b8713c5de11dccffd528"),
        name: 'Max',
        age: 29,
        address: { street: 'Main' }
      },
      {
        _id: ObjectId("6432b8713c5de11dccffd529"),
        name: 'Sunil Kumar',
        age: 28,
        address: { street: 'Tree' }
      }
    ]
  }
]

db.books.find()
    // output
[
  {
    _id: ObjectId("6432b72f3c5de11dccffd527"),
    name: 'My favorite Book',
    authors: [
      ObjectId("6432b8713c5de11dccffd528"),
      ObjectId("6432b8713c5de11dccffd529")
    ]
  }
]