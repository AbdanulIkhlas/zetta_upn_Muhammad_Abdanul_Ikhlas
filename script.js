let buyBook = function (name, price, discount, tax, pay) {
  //! Calculate and assignt the parameter to variabel
  const theTax = (tax / 100) * price;
  const theDiscount = (discount / 100) * price;
  const totalPrice = price - theDiscount + theTax;
  let canBuyBook = function (pay) {
    if (pay >= totalPrice) {
      return true;
    } else {
      return false;
    }
  };
  let changeMoney = pay - totalPrice;
  let thanks = "Thank you for buying this book";

  //! Display
  console.log("Name book : " + name);
  console.log("Price book : Rp " + price);
  console.log(
    "the discount : " + discount + "% from the price -> Rp " + theDiscount
  );
  console.log("Price after discount is : Rp " + (price - theDiscount));
  console.log("the tax : " + tax + "% from the price -> Rp " + theTax);
  console.log("Price after adding tax is : Rp " + totalPrice);
  console.log("So the total price to be paid is " + totalPrice);
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
