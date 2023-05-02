# Multikey Index
## Introduction
當某個field為一個array時，可以使用Multikey index。

Multikey Index會把array內的每個值都存到Index內[1]。

假設有個`Person` collection，如下表

| Name  | company      |
| ----- | ------------ |
| Amy   | [Acer, Asus] |
| Bob   | [Dell]       |
| Carol | [Acer, Dell] |

當在`company` field建立multikey index後，index的存法可能為

| Index | _id          |
| ----- | ------------ |
| Acer  | [Amy, Carol] |
| Asus  | [Amy]        |
| Dell  | [Bob, Carol] |

這樣當Query為: 找到所有包含company "Acer"的Document時，就可以利用index
```
db.Person.createIndex({ company: 1})。
db.Person.find({ company: "Acer"})。
```
若array裡面為embedded document，則multikey index也可以建立在embedded doc的某個field上面。
```
db.Person.createIndex({ company.name: 1})

db.Person.find({ company.name: "Acer"})。
```
---
> Note: 若multikey index為`{company: 1}`，則上述Query`db.Person.find({ company.name: "Acer"})`會無法利用index，因為這時的index value為整個embedded document。


## Reference:
- [1]https://stackoverflow.com/questions/7396219/mongodb-multikey-indexing-structure
- [2]https://stackoverflow.com/questions/4059126/how-does-mongodb-index-arrays