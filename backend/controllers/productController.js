const Product = require("../models/productModel")


//create a product
exports.createProduct = async(req, res, next)=> {
try {
   const product = await Product.create(req.body);
   res.status(201).json({
      success: true,
      product
   });
} catch (error) {
   console.log(error);
}
};



//GET ALL PRODUCTS
exports.getAllProducts = async(req, res) => {
   const productsCount = await Product.countDocuments();

  const products = await Product.find();

   res.status(200).json({
    success: true,
    products,
    productsCount,
   });
};
//Get product details
exports.getProductDetails = async(req, res, next)=> {
  try {
   const product = await Product.findById(req.params.id);
   if(!product){
      return res.status(500).json({
         success: false,
         message: "Product not found.."
      })
   }
   res.status(200).json({
      success: true,
      product,
   });
  } catch (error) {
   console.log(error);
  }
   
}
//Update product---Admin

exports.updateProduct = async(req, res, next)=> {
      let product = await Product.findById(req.params.id);

      if(!product){
         return res.status(500).json({
            success: false,
            message: "Product not found.."
         });
      };

      product = await Product.findByIdAndUpdate(req.params.id, req.body,{
         new: true,
         runValidators: true,
         useFindAndModify: false,
      });

      res.status(200).json({
         success: true,
         product
      });
};

//Delete Product
exports.deleteProduct = async(req, res, next) => {
  try {
   const product = await Product.findByIdAndDelete(req.params.id);
   
   if(!product){
      return res.status(500).json({
         success: false,
         message: "Product not found"
      });
   } else{
      return res.status(200).json({
         success: true,
         message: "Product deleted successfully"
      });
   }
  } catch (error) {
     console.log(error);
  }
 
 };
 