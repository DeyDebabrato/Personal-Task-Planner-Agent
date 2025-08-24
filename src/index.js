import express from 'express';
import goalsRouter from './routes/goals.js';
import tasksRouter from './routes/tasks.js';
import taskRoutesRouter from './routes/taskRoutes.js';
import { scheduleEmail } from './utils/email.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount routers
app.use('/api/goals', goalsRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/task-routes', taskRoutesRouter);

app.get('/', (req, res) => {
  res.send('AI Goal Planner API is running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  
  // Example of scheduling a recurring email when the server starts
  // Sends an email every Monday at 9 AM.
  // console.log('🕒 Scheduling weekly summary email...');
  // scheduleEmail(
  //   '0 9 * * 1', 
  //   'admin@example.com', 
  //   'Weekly Report', 
  //   'This is your automated weekly report.'
  // );
});