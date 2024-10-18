import express from 'express';

const router = express.Router();

//route
router.get("/register", (req, res) => {
    res.send("register router");
  });
 
export default router;