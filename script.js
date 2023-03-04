let buyBook = function (name, price, discount, tax, pay) {
  const theTax = (tax / 100) * price;
  let theDiscount = (discount / 100) * price;
  let totalPrice = price - theDiscount + theTax;
  let canBuyBook = function (pay) {
    if (pay >= totalPrice) {
      return true;
    } else {
      return false;
    }
  };

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
  } else {
    console.log("You can't buy this book because payment is not enough");
  }
};
