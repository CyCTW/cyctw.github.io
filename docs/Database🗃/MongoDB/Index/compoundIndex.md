# Compound Index
Compound index為對多個field建立的index。

## Introduction
Compound index的先後順序很重要，因為index會依照先後順序去做排序。
- 先依照第一個key排序，若遇到一樣的則依照第二個key排序

E.g. compound index `{ a: 1, b: 1}`與`{ b: 1, a: 1}`的意思是不一樣的。

## Sort order
當建立了一個compound index `{name: 1, age: -1}`，則以下兩種排序的Query都可以利用index
- `db.Person.find().sort( { name: 1, age: -1 } )`
- `db.Person.find().sort( { name: -1, age: 1 } )`
  - 此Query只需把index倒過來就好

然而，以下排序的Query無法利用index
- `db.Person.find().sort( { name: 1, age: 1 } )`
- `db.Person.find().sort( { name: -1, age: -1 } )`

## Prefix
若有個compound index `{name: 1, age: -1}`，則以下Query可以利用此index
- `db.Person.find( { name: 1 } )`
- `db.Person.find( { name: 1, age: 1 } )`

原因為`{name: 1}`為該index的**Prefix**。

因此，若需要在name建立index，同時也需要建立compound index`{name: 1, age: 1}`，則只需要建立compound index就好。