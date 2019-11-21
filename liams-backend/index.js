const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;
const moment = require("moment");

app.use(cors());
app.use(express.json());

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "library"
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
});

app.get("/book/all", (req, res) => {
  connection.query(
    "SELECT BOOK.Isbn, BOOK.Title, BOOK.Cover, BOOK.Publisher, BOOK.Pages, GROUP_CONCAT(AUTHOR.Name) Name, GROUP_CONCAT(AUTHOR.Author_id) Author_id FROM BOOK NATURAL JOIN BOOK_AUTHOR NATURAL JOIN AUTHOR GROUP BY BOOK.Isbn ORDER BY Isbn LIMIT 100",
    function(error, results, fields) {
      if (error) {
        res.json({ error: error });
        console.log(error);
        throw error;
      } else {
        res.json({ results: results });
      }
    }
  );
});

app.post("/book/checkout", (req, res) => {
  const dateOut = moment().toISOString();
  const dateDue = moment()
    .add(2, "weeks")
    .toISOString();

  const query = `SELECT *  FROM book_loan WHERE Card_id = ${req.body.Card_no} AND Date_in = ''`;
  const query2 = `SELECT *  FROM book_loan WHERE Isbn = ${req.body.Isbn} AND Date_in = ''`;
  const createQuery = `INSERT INTO BOOK_LOAN VALUES (default,'${req.body.Isbn}',${req.body.Card_no},'${dateOut}','${dateDue}','');`;

  connection.query(query, function(error, results, fields) {
    // First, check to make sure that the user has no more than three books checked out at once
    if (error) {
      res.json({ message: error });
      console.log(error);
      throw error;
    } else {
      console.log(results.length);
      if (results.length > 2) {
        res.json({
          message:
            "You already have three books checked out. Please return a book before checking out a new one."
        });
      } else {
        // Next, check that no one has this book checked out already
        connection.query(query2, function(error, results, fields) {
          if (error) {
            res.json({ message: error });
            console.log(error);
            throw error;
          } else {
            if (results.length > 0) {
              res.json({
                message:
                  "Someone has this book checked out already. Please try again later."
              });
            } else {
              // Finally, check out the book if the other tests pass
              connection.query(createQuery, function(error, results, fields) {
                if (error) {
                  res.json({ message: error });
                  console.log(error);
                  throw error;
                } else {
                  res.json({ message: "Successfully borrowed book!" });
                }
              });
            }
          }
        });
      }
    }
  });
});

app.post("/book/checkin", (req, res) => {});