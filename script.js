let buyBook = function (
  name,
  price,
  discount,
  tax,
  stock,
  amountOfBooks,
  termOfCredit
) {
  const theTax = (tax / 100) * price;
  const theDiscount = (discount / 100) * price;
  let totalPrice = price - theDiscount + theTax;

  let thanks = "Thank you for buying this book";

  console.log("Name book : " + name);
  console.log("Price book : Rp " + price);
  console.log(
    "the discount : " + discount + "% from the price -> Rp " + theDiscount
  );
  console.log("Price after discount is : Rp " + (price - theDiscount));
  console.log("the tax : " + tax + "% from the price -> Rp " + theTax);
  console.log("Price after adding tax is : Rp " + totalPrice);
  console.log("Amount of stock : " + stock);
  console.log("Amount of purchase book : " + amountOfBooks);
  let tempTotal = totalPrice;
  totalPrice = 0;
  for (let i = 0; i < amountOfBooks; i++) {
    if (stock <= 0) {
      console.log("Amount of book is already out of stock!!!");
      console.log("You can only buy " + i + " books");
      break;
    } else {
      stock--;
      totalPrice += tempTotal;
    }
  }
  let monthlyFee = totalPrice / termOfCredit;
  let arrayCreditDue = Array.from({ length: termOfCredit }, (value, i) => ({
    month: i + 1,
    amount: monthlyFee,
  }));
  console.log("The total price to be paid is " + totalPrice);
  console.log("Monthly payment amount : Rp " + monthlyFee);
  console.log("\nCredit Due : ");
  arrayCreditDue.forEach((payment) => {
    console.log(
      "Payment amount for month " + payment.month + " is Rp " + payment.amount
    );
  });

  console.log("Remaining books : " + stock);
  console.log("\n" + thanks);
};
