```javascript
const query = { name: /John/i }; // Case-insensitive search

// Incorrect usage of $regex with case-insensitive flag
db.collection('users').find( { name: { $regex: 'John', $options: 'i' } } ).toArray((err, docs) => {
  console.log(docs);
});
```