import express from "express";
import cors from "cors";
import { readdirSync } from 'fs';
import path from 'path';
import morgan from "morgan";
import dotenv from 'dotenv';
dotenv.config();

// create express app
const app = express();

//apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(() => console.log("this is my own middleware"));


// Dynamically import all route files from the routes folder
const routesDir = './routes';

// Use an async IIFE (Immediately Invoked Function Expression) to await dynamic imports
(async () => {
  const files = readdirSync(routesDir);

  for (const file of files) {
    const route = await import(path.resolve(routesDir, file));
    app.use('/api', route.default); // Use route.default since ES modules use `default` export
  }
})();

//port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running on port ${port}`));
