const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'root'
});

let q = "INSERT INTO user (id, username, email, password) values ?";

let data = [];
for (let i = 1; i <= 100; i++) {
    data.push(getRandomUser()); // 100 fake users data
}

try {
    connection.query(q, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}

connection.end();

function getRandomUser() {
    return [
        faker.datatype.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}
