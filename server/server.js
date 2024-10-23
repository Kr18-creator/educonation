import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import path from "path";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Create express app
const app = express();

// Apply middlewares
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
});

// Dynamically import all route files from the routes folder
const routesDir = "./routes";

// Define the port
const port = process.env.PORT || 8000;

// Function to set up routes
const setupRoutes = async () => {
  const files = readdirSync(routesDir);
  // console.log("Files found in routes directory:", files);

  for (const file of files) {
    const route = await import(path.resolve(routesDir, file));
    // console.log("Route imported:", route);
    app.use("/api", route.default); // Use route.default since ES modules use `default` export
  }
};

// Connect to the database and then set up routes
mongoose
  .connect(process.env.DATABASE)
  .then(async () => {
    console.log("**DB CONNECTED**");
    await setupRoutes(); // Call the function to set up routes after DB connection
    app.listen(port, () =>
      console.log(`Server is running on http://localhost:${port}`)
    );
  })
  .catch((err) => console.log("DB CONNECTION ERR => ", err));
