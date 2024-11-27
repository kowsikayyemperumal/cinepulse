// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// // Sample database
// const users = [
//     { username: 'kowsik', password: 'kowsik@143' },
// ];

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;

//     const user = users.find(u => u.username === username && u.password === password);
//     if (user) {
//         res.json({ success: true, message: 'Login successful!' });
//     } else {
//         res.json({ success: false, message: 'Invalid credentials' });
//     }
// });

// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });
