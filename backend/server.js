import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

app.get("/api/news", async (req, res) => {
  try {
    const query = req.query.q || "india";
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
