"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

// Conecta ao banco
mongoose.connect(
);

// Carrega os models
const Product = require("./models/product");
// Carrega as rotas
const indexRoute = require("./routes/index");
const productRoute = require("./routes/product");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;
