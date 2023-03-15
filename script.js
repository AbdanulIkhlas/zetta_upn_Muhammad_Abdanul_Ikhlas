let buyBook = function (name, price, discount, tax, pay, stock, amountOfBooks) {
  const theTax = (tax / 100) * price;
  const theDiscount = (discount / 100) * price;
  const totalPrice = price - theDiscount + theTax;
  const max = stock * 10;
  let canBuyBook = function (pay) {
    if (pay >= totalPrice) {
      return true;
    } else {
      return false;
    }
  };
  let changeMoney = pay - totalPrice;
  let thanks = "Thank you for buying this book";

  console.log("Name book : " + name);
  console.log("Price book : Rp " + price);
  console.log(
    "the discount : " + discount + "% from the price -> Rp " + theDiscount
  );
  console.log("Price after discount is : Rp " + (price - theDiscount));
  console.log("the tax : " + tax + "% from the price -> Rp " + theTax);
  console.log("Price after adding tax is : Rp " + totalPrice);
  console.log("So the total price to be paid is " + totalPrice);

  // for (i = 0; i < max; i++) {
  //   if (stock == 0) {
  //     console.log("Book stock is running out");
  //     break;
  //   }
  //   if (amountOfBooks <= stock) {
  //     console.log("existing book stock : " + stock);
  //     console.log("the number of books you want to buy : " + amountOfBooks);
  //   } else {
  //     console.log("insufficient stock of books!!");
  //     i = max + 1;
  //   }
  // }

  console.log("amount of money for payment : " + pay);
  if (canBuyBook(pay)) {
    console.log("You can buy this book");
    if (pay > totalPrice) {
      console.log("The change : Rp " + changeMoney);
    }
    console.log("\n" + thanks);
  } else {
    console.log("You can't buy this book because payment is not enough");
  }
};
