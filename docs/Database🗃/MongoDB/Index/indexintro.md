# MongoDB Index
MongoDB中有許多不同種類、不同特性的Index。

以下會介紹部分官方文件上的種類，某些較難理解的會開新的分頁說明。

## What is index?
Index為一種資料結構，儲存了Collection中某個或某些field的value，並依照順序排序。

- 假設在Person Collection上幫name field加上Index，Index資料結構看起來會像是

| Name  | _id |
| ----- | --- |
| Amy   | 3   |
| Bob   | 25  |
| Carol | 1   |
...
因此，當我們要查詢`db.Person.find({name: "Bob"})`，透過Index有排序的特性，我們可以快速的找到Bob的資料(利用類似Binary search的方法)


建立Index可以幫助某些Read Query更有效的被執行。
一般的Query是使用Collection Scan，也就是要在某個Collection找到某個特定條件的資料時，需要掃過整個Collection才能找到(因為不知道在哪，以及符合條件的有多少)。

## Index type
### Single Field Index
為某個field加上Index，就如同上述例子。

語法:
> `db.Person.createIndex({ name: 1})`

為Embedded document field加index也可以
`db.Person.createIndex({ "Embedded.name": 1})`。這樣Query`Embedded.name`時就可以利用Index了。

### [Compound index](compoundIndex.md)
### [MultiKey Index](multikeyIndex.md)


### Hashed Index
把Index field value做Hash後存起來。

背後使用Hash data structure當作index，而不是B-tree。

優點是提供O(1)快速查詢，而不用像B-tree要遍歷樹。

可以用在Hashed base sharding上，可以利用Hash的特性讓資料能夠更平均的分佈在不同Shard之中。

## Index Properties
### TTL Index
可以設定Document的expiration time，當過期時間到了，MongoDB會自動把資料刪掉。

語法:
>  `db.Person.createIndex( { "createdAt": 1 }, { expireAfterSeconds: 3600 } )`

Note: Index的欄位型態必須是Date，因此上述語法的過期時間為`createdAt`欄位的時間加上`expireAfterSeconds`。如果型態不是Date則不會過期。

- 刪除方法
  - MongoDB會跑background job，每60秒檢查Document是否過期。

### Unique index
確保Index的value為unique
E.g. 像是`_id`欄位就是一個預設建立的unique index。

### Sparse index
Sparse index只會對有該field的document建立Index。藉此，可能可以減少Index資料結構的大小。

### Partial index
Partial index只會對符合某指定條件的document建立Index。

語法:
> `db.Person.createIndex(
   { name: 1 },
   { partialFilterExpression: { age: { $gt: 5 } } }
)`

以上語法只有age大於5的document才會被存在Index裡面。條件指定的field可以跟index field不一樣。

#### TradeOff
雖然Partial Index可以減少index size，但是該index只能被用在query 包含設定的條件範圍內的Document。

- E.g. `db.Person.find( { age: { $gt: 8}})`
  - 這筆query可以使用上述設定的partial index，因為query的範圍在條件內(`$gt: 5`)
- `db.Person.find( { age: { $lt: 8}})`
  - 這筆Query則無法利用上述的Partial index，因為可能會有資料不在index內
- `db.Person.find( { name: "Bob", age: { $gt: 8}})`
  - 同樣地這筆也不行，因為不確定`name: Bob`的是否都在index內

Note: Sparse index為partial index的子集合。

## Common question
- 如果某個field有不同type時，index如何建立
  - [Solution](https://stackoverflow.com/questions/4887727/mongodb-index-on-different-types)
## Reference
- https://www.mongodb.com/docs/manual/indexes/