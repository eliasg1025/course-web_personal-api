const mongoose = require('mongoose');
const app = require('./app');

const {
    API_VERSION,
    IP_SERVER,
    DB_PORT,
    PORT,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
} = require('./config');

mongoose.set('useFindAndModify', false);

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log('La conexion a la base de datos es correcta \n');

            app.listen(PORT, () => {
                console.log('#####################################');
                console.log('############# API REST ##############');
                console.log('##################################### \n');
                console.log(`http://localhost:${PORT}/api/${API_VERSION}`);
            });
        }
    }
);
