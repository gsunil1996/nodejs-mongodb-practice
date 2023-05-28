// create a database called companyData
use companyData

// create comapanies collection and insert data

db.companies.insertOne({ name: "Fresh Apples Inc", isStartup: true, employees: 33, funding: 12345678901234567890, details: { ceo: "Mark Super" }, tags: [{ title: "super" }, { title: "perfect" }], foundingDate: new Date(), insertedAt: new Timestamp() })
 
db.companies.find()
     
    // output
[
  {
    _id: ObjectId("643251971e147fba26a103e3"),
    name: 'Fresh Apples Inc',
    isStartup: true,
    employees: 33,
    funding: 12345678901234567000,
    details: { ceo: 'Mark Super' },
    tags: [ { title: 'super' }, { title: 'perfect' } ],
    foundingDate: ISODate("2023-04-09T05:48:07.554Z"),
    insertedAt: Timestamp({ t: 1681019287, i: 1 })
  }
]

// create a new collection name numbers

companyData > db.numbers.insertOne({ a: 1 })

db.numbers.find()
    // output
[{ _id: ObjectId("643252ea1e147fba26a103e4"), a: 1 }]


db.stats()
 
// output
{
  db: 'companyData',
  collections: 2,
  views: 0,
  objects: 2,
  avgObjSize: 130.5,
  dataSize: 261, // take the note, if a: 1
  storageSize: 40960,
  indexes: 2,
  indexSize: 40960,
  totalSize: 81920,
  scaleFactor: 1,
  fsUsedSize: 177169629184,
  fsTotalSize: 510938574848,
  ok: 1
}

// drop companies collection

db.companies.drop()
 show collections
 // output
numbers

// delete data in numbers collection

db.numbers.deleteMany({})
 
db.stats()
// output
{
  db: 'companyData',
  collections: 1,
  views: 0,
  objects: 0,
  avgObjSize: 0,
  dataSize: 0,
  storageSize: 20480,
  indexes: 1,
  indexSize: 20480,
  totalSize: 40960,
  scaleFactor: 1,
  fsUsedSize: 177172131840,
  fsTotalSize: 510938574848,
  ok: 1
}

// insert new data
db.numbers.insertOne({ a: NumberInt(1) })

db.stats()
 
// output
{
  db: 'companyData',
  collections: 1,
  views: 0,
  objects: 1,
  avgObjSize: 29,
  dataSize: 29, // the datasize is shrinked, instead of a: 1, we write a: NumberInt(1)
  storageSize: 24576,
  indexes: 1,
  indexSize: 24576,
  totalSize: 49152,
  scaleFactor: 1,
  fsUsedSize: 177170771968,
  fsTotalSize: 510938574848,
  ok: 1
}

// to check type

db.numbers.find()
[{ _id: ObjectId("6432546f1e147fba26a103e5"), a: 1 }]

companyData > typeof db.numbers.findOne().a
// output
number

// create a database name hospital and insert data

db.patients.insertOne({ name: "Max", age: 29, diseaseSummary: "summary-max-1" })

hospital > db.patients.find()
    // output
[
  {
    _id: ObjectId("64325fd9fc98f062ae492d46"),
    name: 'Max',
    age: 29,
    diseaseSummary: 'summary-max-1'
  }
]

// create one more collection called dieseaseSummaries and insert data

db.diseaseSummaries.insertOne({ _id: "summary-max-1", diseases: ["cold", "broken leg"] })

db.diseaseSummaries.find()
[ { _id: 'summary-max-1', diseases: [ 'cold', 'broken leg' ] } ]


// patients data
db.patients.find()
    // output
[
  {
    _id: ObjectId("64325fd9fc98f062ae492d46"),
    name: 'Max',
    age: 29,
    diseaseSummary: 'summary-max-1'
  }
]


db.patients.findOne().diseaseSummary
// output 
summary-max-1

var dsid = db.patients.findOne().diseaseSummary
dsid

// output
summary-max-1

// we can also pass reference like this from one collection to another collection
db.diseaseSummaries.findOne({ _id: dsid })
 // output
{ _id: 'summary-max-1', diseases: [ 'cold', 'broken leg' ] }