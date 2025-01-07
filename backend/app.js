import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// for react static files
app.use(express.static("dist"));

app.use(cors({ credentials: true, origin: process.env.SITE_URL }));
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));



app.get("/api", (req, res) => {
  res.send("SonicWave Api");
});

// for render react static files
app.get("/*", (req, res) => {
  res.sendFile(path.join(path.resolve(`${path.dirname("")}/`)));
});

app.listen(port, () => {
  console.log(`Server Started Port : ${port}`);
  ConnectDB((err, res) => {
    if (err) {
      console.log(`MongoDB Getting An Error : ${err}`);
    } else if (res) {
      console.log("MongoDB Successfully Connected");
    }
  });
});
