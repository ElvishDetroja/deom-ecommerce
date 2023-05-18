const mongoose = require("mongoose");

const { Schema } = mongoose;


async function main() {
  await mongoose.connect(process.env.mongo_url);
  console.log("database connected");
}

main().catch((err) => {
  console.log(err);
});

const productSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: {
    type: Number,
    min: [0, "your rating should be more than 0"],
    max: [10, "your rating should be less than 10"],
    default: 5,
  },
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

const Product = mongoose.model("Product", productSchema);

exports.Product = Product;