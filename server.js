import express, { json } from 'express';
const app = express();
const port = 5000;

// In-memory data store (array)
let contacts = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" }
];

// API route to get contacts
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

// API route to add a new contact
app.post('/contacts', json(), (req, res) => {
  const newContact = req.body;
  newContact.id = contacts.length + 1;
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
