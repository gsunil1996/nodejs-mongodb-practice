// create a db called hospital

mongosh
show dbs
use hospital

// create a collection name patient and insert 3 patient records init
    
    db.patient.insertMany(
[
{
  "firstName" : "pavan",
  "lastName": "Kumar",
  "age": 26,
  "history": [
      {
          "disease": "motions",
          "treatment": 1
      }
  ]
},
    
{
  "firstName" : "Sunil",
  "lastName": "Kumar",
  "age": 28,
  "history": [
      {
          "disease": "cold",
          "treatment": 95
      }
  ]
    },
    {
  "firstName" : "Harish",
  "lastName": "Kumar",
  "age": 30,
 "history": [
      {
          "disease": "cough",
          "treatment": 55
      }
  ]
}
        ]
)
    
db.patient.find()


// update one patient record

db.patient.updateOne({ _id: ObjectId("6431a69e3d647e6246a39ecf") }, { $set: { firstName: "Mahesh", age: 29, lastName: "Yadav", history: [{ disease: "very sad", treatment: 60 }] } })
 
// find patients whose age is greater than 27

db.patient.find({ age: { $gt: 27 } })

// delete all patients who have disease cold

db.patient.deleteMany({ "history.disease": "cold" })
 
