import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/dbcon.js";
import route from "./Route/Url.js";
import Url from "./model/User.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;


app.use("/url", route);


app.get("/:shortid", async (req, res) => {
  try {
    const shortId = req.params.shortid;

  
    const entry = await Url.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      },
    
    );

    
    res.redirect(entry.redirectUrl);
  } catch (error) {
    console.error("Error in redirect route:", error);
    res.status(500).json({ error: "Server error" });
  }
});


app.listen(PORT, async () => {
  await connectdb();
  console.log(`🚀 Server running on PORT ${PORT}`);
});
