module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get('db')

    db
      .all_products()
      .then(products => res.status(200).send(products))
      .catch(error => {
        res.status(500).send(error, "Sorry an unknown error occured")
      })
  },

  editProduct: (req, res) => {
    const db = req.app.get('db')
    const { params, body } = req
    db
      .edit_product([
        params.id,
        body.name,
        body.price,
        body.img
      ])
      .then(products => res.status(200).send(products))
      .catch(error =>
        res.status(500).send({errorMessage: "Sorry an unknown error occured"})
      )
  },

  createProduct: (req, res, next) => {
    const db = req.app.get("db");
    const { name, price, img } = req.body;

    db
      .create_product([name, price, img])
      .then(products => res.status(200).send(products))
      .catch(error =>
        res.status(500).send({errorMessage: "Sorry an unknown error occured"})
      );
  },
}