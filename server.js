const connectionString = process.env.DATABASE_URL || "postgres://bndewuawgxttzv:d1b43efe2952d153fd87882f64be443a5ce1d8e2c4f7b4656d14c8dc2957ee72@ec2-3-215-83-17.compute-1.amazonaws.com:5432/d5phtpd1n942cr?ssl=true"
const { Pool } = require('pg');
const pool = new Pool({connectionString: connectionString});


var sql = "SELECT * FROM users";

pool.query(sql, function(err, result) {
    // If an error occurred...
    if (err) {
        console.log("Error in query: ")
        console.log(err);
    }

    // Log this to the console for debugging purposes.
    console.log("Back from DB with result:");
    console.log(result.rows);


});     