const express = require("express");
const connectDB = require("./config/db.js");
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: "config/config.env" });
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
app.use(express.static("client/build"));

//db
connectDB();
//route
app.use("/api/pop", require("./routes/population/popRoute"));
app.use(
  "/api/popMiddleYear",
  require("./routes/populationMiddleYear/popMiddleRoute")
);
app.use("/api/quali", require("./routes/qualification/qualiRoute"));
app.use("/api/edu-drop", require("./routes/edu-drop/eduRoute"));
app.use("/api/edu-drop-age", require("./routes/edu-drop-age/eduRoute"));
app.use("/api/family", require("./routes/family/familyRoute"));
app.use("/api/grade", require("./routes/grade/gradeRoute"));
app.use("/api/ages", require("./routes/ages/ageRoute"));
app.use("/api/housing", require("./routes/housing/housingRoute"));
app.use(
  "/api/housing-reason",
  require("./routes/housing-reason/housingReasonRoute")
);
app.use("/api/status", require("./routes/status-marride/statusRoute"));
app.use("/api/total-edu", require("./routes/total-edu/total"));
//total
app.use("/api/total/ages", require("./routes/total/totalRoute"));
//total/date
app.use("/api/total/date", require("./routes/total/totalDate"));
//build

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api is running...");
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server running");
});
