```javascript
const query = { name: { $regex: 'John', $options: 'i' } }; // Correct usage of $regex with $options

db.collection('users').find(query).toArray((err, docs) => {
  console.log(docs);
});
```