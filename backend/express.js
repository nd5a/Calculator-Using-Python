import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
let dataStore = [];
app.get('/api/items', (req, res) => {
 res.json(dataStore);
});
app.get('/api/items/:id', (req, res) => {
 const id = parseInt(req.params.id);
 const item = dataStore.find((item) => item.id === id);
 if (!item) {
 return res.status(404).json({ message: 'Item not found' });
 }
 res.json(item);
});
app.post('/api/items', (req, res) => {
 const newItem = {
 id: dataStore.length + 1,
 ...req.body,
 };
 dataStore.push(newItem);
 res.status(201).json(newItem);
});
app.put('/api/items/:id', (req, res) => {
 const id = parseInt(req.params.id);
 const index = dataStore.findIndex((item) => item.id === id);
 if (index === -1) {
 return res.status(404).json({ message: 'Item not found' });
 }
 dataStore[index] = { id, ...req.body };
 res.json(dataStore[index]);
});
app.delete('/api/items/:id', (req, res) => {
 const id = parseInt(req.params.id);
 const index = dataStore.findIndex((item) => item.id === id);
 if (index === -1) {
 return res.status(404).json({ message: 'Item not found' });
 }
 const deletedItem = dataStore.splice(index, 1);
 res.send("item deleted")
});
app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});