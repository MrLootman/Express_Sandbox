const mysql = require("mysql2");

// La dépendance fs (File System) est implicitement installée avec Express.js
const fs = require("fs");

// Donne accès aux variables d'environnements inscrites dans le fichier .env
require("dotenv").config();

const database = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true
});

// Tentative de liaison avec la base de donnée:
database.getConnection((error, connection) => {
    // Vérification du type d'erreur en cas de problème de liaison:
    if (error) {
        console.error("Impossible to reach the database :", error);
        return;
    }

    console.log("👍 Success, the database has been reached!");

    // Retourne le contenu du chemin spécifié, et encodage du fichier database.sql en chaîne de caractère:
    const sql = fs.readFileSync('./src/database/db.sql', 'utf-8');

    connection.query(`DROP DATABASE IF EXISTS ${process.env.DB_NAME}`);
    connection.query(`CREATE DATABASE ${process.env.DB_NAME}`);
    connection.query(`USE ${process.env.DB_NAME}`);

    connection.query(sql, (error) => {
        if (error) {
            console.error("Impossible to add data to the database");
            return;
        };

        console.log("👍 Success, the data has been added to the database!");

        connection.release(); // Libérer la connexion une fois terminée
    });
});
