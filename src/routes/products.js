const express = require('express');
const router  = express.Router();
const productController = require('../controller/products');
const {validateProducts} = require('../middleware/common')

const {protect} = require('../middleware/Auth');
const upload = require('../middleware/Multer');

router.get('/', productController.getAllProduct);
router.get('/:id', productController.getDetailProduct);
router.post('/', upload, validateProducts, productController.createProduct);
router.put('/:id',  upload, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;