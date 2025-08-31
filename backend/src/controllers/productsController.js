export function getProducts(req, res) {
  res.status(200).json({ message: "get products" });
}
export function createProduct(req, res) {
  res.status(201).json({ message: "create product" });
}
export function updateProduct(req, res) {
  res.status(200).json({ message: "update product" });
}
export function deleteProduct(req, res) {
  res.status(200).json({ message: "delete product" });
}
