let db = require('./models/index')
 
db.status.create({
    name: 'InWarehouse'
  })
  db.holder.create({
     name: 'Enkei'
 })
 db.unit.create({
     producer: 1,
     holder:2,
     status:2,
     producerid: 32,
     producerspecification: "within Speficiation"
 })