const express = require(`express`);
const app = express();
const port = 3004;
const cors = require("cors");
app.listen(port, function () {
  console.log(`http://localhost:${port}`);
});

// Раздача статики
app.use(express.static(`./mazda-react/public`));
app.use(cors());
// Настройка POST-запроса — JSON
app.use(express.json());

// Настройка БД
let mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mazda-react");

// модель
let categoriesSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  image: String,
  title: String,
});
let mazdaSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  image: String,
  title: String,
  data: String,
});
let listSchema1 = new mongoose.Schema({
  title: String,
  price: String,
});
let listSchema2 = new mongoose.Schema({
  title: String,
  price: String,
});
let listSchema3 = new mongoose.Schema({
  title: String,
  description: String,
});
let servicesSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  title: String,
  description: String,
  service: [listSchema1],
  addService: [listSchema2],
  signs: [listSchema3],
  advice: String,
  repair1: [String],
  repair2: [String],
  image: String,
});
let entrySchema = new mongoose.Schema({
  name: String,
  phone: String
});

let Categories = mongoose.model("categories", categoriesSchema);
let Entry = mongoose.model("entry", entrySchema);
let Mazda = mongoose.model("mazda", mazdaSchema);
let Services = mongoose.model("service", servicesSchema);

app.get("/categories", async function (req, res) {
  try {
    let data = await Categories.find({});
    res.send(data);
    console.log("хуй")
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

app.get("/mazda", async function (req, res) {
  try {
    let data = await Mazda.find({});
    res.send(data);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

app.post("/service", async function (req, res) {
  try {
    let id = req.body.id;
    let data = await Services.findById(id);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

app.post("/entry", async function (req, res) {
  try {
    let phone = req.body.phone;
    console.log(phone)
    let name = req.body.name;
    let item = new Entry({
      name: name,
      phone: phone,
    });
    await item.save();

    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});
