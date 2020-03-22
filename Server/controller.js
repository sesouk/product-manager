module.exports = {
  getProducts: (req, res, next) => {
    const db = req.app.get('db')

    db
      .all_products()
      .then(products => res.status(200).send(products))
      .catch(error => console.log(error))
  },

  editProduct: (req, res, next) => {
    const db = req.app.get('db')
    console.log(req.params.id);
    
    const { params, body } = req
    db
      .edit_product([
        params.id,
        body.name,
        body.price,
        body.img
      ])
      .then(products => res.status(200).send(products))
      .catch(error => console.log(error))
  },

  createProduct: (req, res, next) => {
    const db = req.app.get("db");
    const { name, price, img } = req.body;

    db
    .create_product(name, price, img)
    .then(products => res.status(200)
    .send(products)).catch(error => console.log(error))
  },

  deleteProduct: (req, res, next) => {
    const db = req.app.get('db')
    const { params } = req
    
    db
    .delete_product([params.id])
    .then(products => res.status(200)
    .send(products)).catch(error => console.log(error))
  }
}