// create support database

use support

// create questionThreads collection and insertData

db.questionThreads.insertOne({ creator: "Max", question: "How does that all work?", answers: ["q1a1", "q1a2"] })

db.questionThreads.find()
     
    // output
[
  {
    _id: ObjectId("6432a9a0fd4e74928eee922a"),
    creator: 'Max',
    question: 'How does that all work?',
    answers: [ 'q1a1', 'q1a2' ]
  }
]

// create answer collection

db.answers.insertMany([{ _id: "q1a1", text: "It works like that." }, { _id: "q1a2", text: "Thanks!" }])

db.answers.find()
     // output
[
  { _id: 'q1a1', text: 'It works like that.' },
  { _id: 'q1a2', text: 'Thanks!' }
]

// delete questionThreads collection

db.questionThreads.deleteMany({})
 
// insert new data in questionThreads collection

db.questionThreads.insertOne({ creator: "Max", question: "How does that work?", answers: [{ text: "Liked that." }, { text: "Thanks!" }] })

db.questionThreads.find()
     // output
[
  {
    _id: ObjectId("6432abaefd4e74928eee922b"),
    creator: 'Max',
    question: 'How does that work?',
    answers: [ { text: 'Liked that.' }, { text: 'Thanks!' } ]
  }
]

// create a new database called cityData

use cityData

// create a collection cities and add data

db.cities.insertOne({name: "New York City", coordinates: {lat: 21, lng: 55}})

db.cities.find()
    // output
[
  {
    _id: ObjectId("6432adda3ba60293f50a6b39"),
    name: 'New York City',
    coordinates: { lat: 21, lng: 55 }
  }
]

// create a collection citizens and add data

db.citizens.insertMany([{ name: "Max Kumar", cityId: ObjectId("6432adda3ba60293f50a6b39") }, { name: "Sunil Kumar", cityId: ObjectId("6432adda3ba60293f50a6b39") }])

db.citizens.find()
     // output
[
  {
    _id: ObjectId("6432aefe3ba60293f50a6b3a"),
    name: 'Max Kumar',
    cityId: ObjectId("6432adda3ba60293f50a6b39")
  },
  {
    _id: ObjectId("6432aefe3ba60293f50a6b3b"),
    name: 'Sunil Kumar',
    cityId: ObjectId("6432adda3ba60293f50a6b39")
  }
]

