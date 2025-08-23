const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const tasksRoute = require('./routes/tasks');
const goalsRoute = require('./routes/goals');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Personal Task Planner Agent API is running'));
app.use('/tasks', tasksRoute);
app.use('/goals', goalsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
