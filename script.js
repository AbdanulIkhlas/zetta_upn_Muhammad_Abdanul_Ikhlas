const express = require("express");
const app = express();
const fs = require("fs");

const data = fs.readFileSync("request.json");
const body = JSON.parse(data);

// Middleware for basic authentication
const basicAuth = require("express-basic-auth");
app.use(
  basicAuth({
    users: { username: "password" },
    unauthorizedResponse: { message: "Unauthorized" },
  })
);

app.post("/buyBook", (req, res) => {
  // Retrieve parameters from request body
  const { name, price, discount, tax, stock, amountOfBooks, termOfCredit } =
    body;

  // Perform calculations
  const theTax = (tax / 100) * price;
  const theDiscount = (discount / 100) * price;
  let totalPrice = price - theDiscount + theTax;
  let thanks = "Thank you for buying this book";

  // Calculate the price based on the number of books purchased
  let tempTotal = totalPrice;
  totalPrice = 0;
  for (let i = 0; i < amountOfBooks; i++) {
    if (stock <= 0) {
      return res.status(400).send({
        message:
          "Amount of book is already out of stock!!! You can only buy " +
          i +
          " books",
      });
    } else {
      stock--;
      totalPrice += tempTotal;
    }
  }

  // Initialize monthly fee
  let monthlyFee = totalPrice / termOfCredit;

  // Initialize credit due with array object
  let arrayCreditDue = Array.from({ length: termOfCredit }, (i) => ({
    month: i + 1,
    amount: monthlyFee,
  }));

  // Prepare response
  const response = {
    name: name,
    price: price,
    discount: discount,
    priceAfterDiscount: price - theDiscount,
    tax: tax,
    priceAfterTax: totalPrice,
    stock: stock,
    amountOfBooks: amountOfBooks,
    totalPrice: totalPrice,
    monthlyFee: monthlyFee,
    creditDue: arrayCreditDue,
    remainingStock: stock,
    message: thanks,
  };

  return res.status(200).send(response);
});

// Start server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
