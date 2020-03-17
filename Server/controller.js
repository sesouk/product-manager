const axios = require('axios')

module.exports = {
  getProducts: (req, res) => {
    db = req.app.get('db')

    db.all_products()
      .then(products => res.status(200).send('Endpoint testing'))
      .catch(error => res.status(500).send(error, "Sorry an unknown error occured")
    );
  }
}