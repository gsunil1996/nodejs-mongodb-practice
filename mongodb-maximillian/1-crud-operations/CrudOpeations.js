// Create a new collection called flights

use flights

// insertOne
// this will insert one data in flights database

db.flightData.insertOne({
...     "departureAirport": "MUC",
...     "arrivalAirport": "SFO",
...     "aircraft": "Airbus A380",
...     "distance": 12000,
...     "intercontinental": true
...   })

// output will look like this 
db.flightData.find().pretty()

[
  {
    _id: ObjectId("63f251940898a5d838ee8298"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true
  }
]

// insert one more data
db.flightData.insertOne({ departureAirport: "TXL", arrivalAirport: "LHR" })

// output
db.flightData.find().pretty()
[
  {
    _id: ObjectId("63f251940898a5d838ee8298"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true
  },
  {
    _id: ObjectId("63f252f10898a5d838ee8299"),
    departureAirport: 'TXL',
    arrivalAirport: 'LHR'
  }
]

// by the above example, it is vey clear that mongodb doesnt have schema, we can store different keys and values. these are in json format


// we can insert our own id like this

db.flightData.insertOne({ departureAirport: "TXL", arrivalAirport: "LHR", _id: "txl-lhr-1" })

// output

db.flightData.find().pretty()
[
  {
    _id: ObjectId("63f251940898a5d838ee8298"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true
  },
  {
    _id: ObjectId("63f252f10898a5d838ee8299"),
    departureAirport: 'TXL',
    arrivalAirport: 'LHR'
  },
  { _id: 'txl-lhr-1', departureAirport: 'TXL', arrivalAirport: 'LHR' }
]


// deleteOne
// we can delete one by parameter

db.flightData.deleteOne({ departureAirport: 'TXL' })
// this will remove json object containing the above element, it delete first one that matches.

// output

[
  {
    _id: ObjectId("63f251940898a5d838ee8298"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true
  },
  { _id: 'txl-lhr-1', departureAirport: 'TXL', arrivalAirport: 'LHR' }
]


// updateOne
// we can update existing data, that will add new field or modify existing field
// this will do operation on first matched element

db.flightData.updateOne({ distance: 12000 }, { $set: { marker: "delete" } })

// output
db.flightData.find().pretty()
[
  {
    _id: ObjectId("63f251940898a5d838ee8298"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true,
    marker: 'delete'
  },
  { _id: 'txl-lhr-1', departureAirport: 'TXL', arrivalAirport: 'LHR' }
]


// updateMany
// this will do operation on all data in the collection
 db.flightData.updateMany({}, {$set: {marker: "toDelete"}})
 
// outut
db.flightData.find().pretty()
[
  {
    _id: ObjectId("63f251940898a5d838ee8298"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true,
    marker: 'toDelete'
  },
  {
    _id: 'txl-lhr-1',
    departureAirport: 'TXL',
    arrivalAirport: 'LHR',
    marker: 'toDelete'
  }
]

// deleteMany
db.flightData.deleteMany({ marker: "toDelete" })
// this will remove all the json objects that satisfies condition

// insertMany
// this will take entire array as input

 db.flightData.insertMany([
...   {
...     "departureAirport": "MUC",
...     "arrivalAirport": "SFO",
...     "aircraft": "Airbus A380",
...     "distance": 12000,
...     "intercontinental": true
...   },
...   {
...     "departureAirport": "LHR",
...     "arrivalAirport": "TXL",
...     "aircraft": "Airbus A320",
...     "distance": 950,
...     "intercontinental": false
...   }
... ])

// output
db.flightData.find().pretty()
[
  {
    _id: ObjectId("63f257d00898a5d838ee829a"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true
  },
  {
    _id: ObjectId("63f257d00898a5d838ee829b"),
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false
  }
]

// find
// this method returns all the json objects that satisfy the condition

db.flightData.find({ intercontinental: true })

// output
[
  {
    _id: ObjectId("63f257d00898a5d838ee829a"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true
  }
]

// greater than
db.flightData.find({ distance: { $gt: 10000 } }).pretty()
 
// output
[
  {
    _id: ObjectId("63f257d00898a5d838ee829a"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true
  }
]


 db.flightData.find({distance: {$gt: 900}}).pretty()
[
  {
    _id: ObjectId("63f257d00898a5d838ee829a"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true
  },
  {
    _id: ObjectId("63f257d00898a5d838ee829b"),
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false
  }
]

// findOne
// this will return first element that satisfies the condition

db.flightData.findOne({ distance: { $gt: 900 } })

// output
{
  _id: ObjectId("63f257d00898a5d838ee829a"),
  departureAirport: 'MUC',
  arrivalAirport: 'SFO',
  aircraft: 'Airbus A380',
  distance: 12000,
  intercontinental: true
}

// updateOne
// it will update the first matching condition

db.flightData.updateOne({_id: ObjectId("63f257d00898a5d838ee829a")}, {$set: {delayed: true}})

// output
 db.flightData.find().pretty()
[
  {
    _id: ObjectId("63f257d00898a5d838ee829a"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true,
    delayed: true
  },
  {
    _id: ObjectId("63f257d00898a5d838ee829b"),
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false
  }
]

// update
 db.flightData.update({_id: ObjectId("63f257d00898a5d838ee829a")}, {$set: {delayed: false}})
 
 // output
 db.flightData.find().pretty()
[
  {
    _id: ObjectId("63f257d00898a5d838ee829a"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true,
    delayed: false
  },
  {
    _id: ObjectId("63f257d00898a5d838ee829b"),
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false
  }
]

// replaceOne
// this will replace the json object completely except its id

db.flightData.replaceOne({_id: ObjectId("63f257d00898a5d838ee829a")},  {
...     "departureAirport": "MUC",
...     "arrivalAirport": "SFO",
...     "aircraft": "Airbus A380",
...     "distance": 12000,
...     "intercontinental": true
...   })

// output

 db.flightData.find().pretty()
[
  {
    _id: ObjectId("63f257d00898a5d838ee829a"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true
  },
  {
    _id: ObjectId("63f257d00898a5d838ee829b"),
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false
  }
]

db.passengers.insertMany([
...   {
...     "name": "Max Schwarzmueller",
...     "age": 29
...   },
...   {
...     "name": "Manu Lorenz",
...     "age": 30
...   },
...   {
...     "name": "Chris Hayton",
...     "age": 35
...   }
])

// we need to insert passengers.json data. copy and paste whole array here
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("63f25e0d0898a5d838ee829c"),
    '1': ObjectId("63f25e0d0898a5d838ee829d"),
    '2': ObjectId("63f25e0d0898a5d838ee829e"),
    '3': ObjectId("63f25e0d0898a5d838ee829f"),
    '4': ObjectId("63f25e0d0898a5d838ee82a0"),
    '5': ObjectId("63f25e0d0898a5d838ee82a1"),
    '6': ObjectId("63f25e0d0898a5d838ee82a2"),
    '7': ObjectId("63f25e0d0898a5d838ee82a3"),
    '8': ObjectId("63f25e0d0898a5d838ee82a4"),
    '9': ObjectId("63f25e0d0898a5d838ee82a5"),
    '10': ObjectId("63f25e0d0898a5d838ee82a6"),
    '11': ObjectId("63f25e0d0898a5d838ee82a7"),
    '12': ObjectId("63f25e0d0898a5d838ee82a8"),
    '13': ObjectId("63f25e0d0898a5d838ee82a9"),
    '14': ObjectId("63f25e0d0898a5d838ee82aa"),
    '15': ObjectId("63f25e0d0898a5d838ee82ab"),
    '16': ObjectId("63f25e0d0898a5d838ee82ac"),
    '17': ObjectId("63f25e0d0898a5d838ee82ad"),
    '18': ObjectId("63f25e0d0898a5d838ee82ae"),
    '19': ObjectId("63f25e0d0898a5d838ee82af"),
    '20': ObjectId("63f25e0d0898a5d838ee82b0")
  }
}
")
  }

// output
db.passengers.find().pretty()
[
  {
    _id: ObjectId("63f25e0d0898a5d838ee829c"),
    name: 'Max Schwarzmueller',
    age: 29
  },
  {
    _id: ObjectId("63f25e0d0898a5d838ee829d"),
    name: 'Manu Lorenz',
    age: 30
  },
  {
    _id: ObjectId("63f25e0d0898a5d838ee829e"),
    name: 'Chris Hayton',
    age: 35
    }
]

// this will give only first 20 results as in mongodb

// If we want entire data, then 
db.passengers.find().toArray()
 
// output 
[
  {
    _id: ObjectId("63f25e0d0898a5d838ee829c"),
    name: 'Max Schwarzmueller',
    age: 29
  },
  {
    _id: ObjectId("63f25e0d0898a5d838ee829d"),
    name: 'Manu Lorenz',
    age: 30
  },
  {
    _id: ObjectId("63f25e0d0898a5d838ee829e"),
    name: 'Chris Hayton',
    age: 35
    }
]


// perform forEach

db.passengers.find().forEach((passengerData) => { printjson(passengerData) })

// output 
 {
  _id: ObjectId("63f25e0d0898a5d838ee829c"),
  name: 'Max Schwarzmueller',
  age: 29
}
{
  _id: ObjectId("63f25e0d0898a5d838ee829d"),
  name: 'Manu Lorenz',
  age: 30
}
{
  _id: ObjectId("63f25e0d0898a5d838ee829e"),
  name: 'Chris Hayton',
  age: 35
}

// projection
// if we want to show only certain values
db.passengers.find({}, { name: 1 }).pretty()


// output: 
[
  {
    _id: ObjectId("63f25e0d0898a5d838ee829c"),
    name: 'Max Schwarzmueller'
  },
  { _id: ObjectId("63f25e0d0898a5d838ee829d"), name: 'Manu Lorenz' },
    { _id: ObjectId("63f25e0d0898a5d838ee829e"), name: 'Chris Hayton' }
]

// if we even want to remove id
db.passengers.find({}, { name: 1, _id: 0 }).pretty()

// output will be 
[
  { name: 'Max Schwarzmueller' },
  { name: 'Manu Lorenz' },
  { name: 'Chris Hayton' },
  { name: 'Sandeep Kumar' },
  { name: 'Maria Jones' },
  { name: 'Alexandra Maier' },
  { name: 'Dr. Phil Evans' },
  { name: 'Sandra Brugge' },
  { name: 'Elisabeth Mayr' },
  { name: 'Frank Cube' },
  { name: 'Karandeep Alun' },
  { name: 'Michaela Drayer' },
  { name: 'Bernd Hoftstadt' },
  { name: 'Scott Tolib' },
  { name: 'Freddy Melver' },
  { name: 'Alexis Bohed' },
  { name: 'Melanie Palace' },
  { name: 'Armin Glutch' },
  { name: 'Klaus Arber' },
  { name: 'Albert Twostone' }
]

// embedded documents
show dbs
use flights
db.flightData.find().pretty()

// output
[
  {
    _id: ObjectId("63f257d00898a5d838ee829a"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true
  },
  {
    _id: ObjectId("63f257d00898a5d838ee829b"),
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false
  }
]

/////////////////////////
db.flightData.updateMany({}, { $set: { status: { description: "on-time", lastUpdated: "1 hour ago" } } })

// output
[
  {
    _id: ObjectId("63f257d00898a5d838ee829a"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true,
    status: { description: 'on-time', lastUpdated: '1 hour ago' }
  },
  {
    _id: ObjectId("63f257d00898a5d838ee829b"),
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false,
    status: { description: 'on-time', lastUpdated: '1 hour ago' }
  }
]

// in the above we can see nested documents, these are called embedded documents

// more nesting
db.flightData.updateMany({}, { $set: { status: { description: "on-time", lastUpdated: "1 hour ago", details: { responsible: "Sunil Kumar" } } } })

// output
[
  {
    _id: ObjectId("63f257d00898a5d838ee829a"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true,
    status: {
      description: 'on-time',
      lastUpdated: '1 hour ago',
      details: { responsible: 'Sunil Kumar' }
    }
  },
  {
    _id: ObjectId("63f257d00898a5d838ee829b"),
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false,
    status: {
      description: 'on-time',
      lastUpdated: '1 hour ago',
      details: { responsible: 'Sunil Kumar' }
    }
  }
]

// switching from one collection to another collection
db.passengers.find().pretty()

// inseting arrays in nested form

db.passengers.updateOne({ name: "Albert Twostone" }, { $set: { hobbies: ["sports", "cooking"] } });

// output
[  {
    _id: ObjectId("63f25e0d0898a5d838ee82af"),
    name: 'Albert Twostone',
    age: 68,
    hobbies: [ 'sports', 'cooking' ]
  }
]

// Accessing data
db.passengers.findOne({ name: "Albert Twostone" }).hobbies

// output 
['sports', 'cooking']

// query "Arrays" if we want to access all the data that satisfies condition
db.passengers.find({ hobbies: "sports" }).pretty()

// output 
[
  {
    _id: ObjectId("63f25e0d0898a5d838ee82af"),
    name: 'Albert Twostone',
    age: 68,
    hobbies: [ 'sports', 'cooking' ]
  }
]

// query "objects" if we want to access all the data that satisfies condition

db.flightData.find().pretty()

////////////////////
[
  {
    _id: ObjectId("63f257d00898a5d838ee829a"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true,
    status: {
      description: 'on-time',
      lastUpdated: '1 hour ago',
      details: { responsible: 'Sunil Kumar' }
    }
  },
  {
    _id: ObjectId("63f257d00898a5d838ee829b"),
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false,
    status: {
      description: 'on-time',
      lastUpdated: '1 hour ago',
      details: { responsible: 'Sunil Kumar' }
    }
  }
]

////////////////////////////
db.flightData.find({"status.description": "on-time"}).pretty
()

// output

[
  {
    _id: ObjectId("63f257d00898a5d838ee829a"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true,
    status: {
      description: 'on-time',
      lastUpdated: '1 hour ago',
      details: { responsible: 'Sunil Kumar' }
    }
  },
  {
    _id: ObjectId("63f257d00898a5d838ee829b"),
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false,
    status: {
      description: 'on-time',
      lastUpdated: '1 hour ago',
      details: { responsible: 'Sunil Kumar' }
    }
  }
]

//////////////////////
db.flightData.find({ "status.details.responsible": "Sunil Kumar" }).pretty()

// output
[
  {
    _id: ObjectId("63f257d00898a5d838ee829a"),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true,
    status: {
      description: 'on-time',
      lastUpdated: '1 hour ago',
      details: { responsible: 'Sunil Kumar' }
    }
  },
  {
    _id: ObjectId("63f257d00898a5d838ee829b"),
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false,
    status: {
      description: 'on-time',
      lastUpdated: '1 hour ago',
      details: { responsible: 'Sunil Kumar' }
    }
  }
]

