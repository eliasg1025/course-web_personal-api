const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require('./config');

mongoose.set('useFindAndModify', false);

mongoose.connect(
  `mongodb+srv://${IP_SERVER}/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log('La conexion a la base de datos es correcta \n');

      app.listen(port, () => {
        console.log('#####################################');
        console.log('############# API REST ##############');
        console.log('##################################### \n');
        console.log(`http://localhost:${port}/api/${API_VERSION}`);
      });
    }
  }
);
