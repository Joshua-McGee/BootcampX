const { Pool } = require('pg');

// creates new class Pool to connect to our database
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv.slice(2)[0]; // grab first element (from terminal line)
const limit = process.argv.slice(2)[1]; // grabs second element (from terminal line)

// our first query below
pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;`, [`%${cohort}%`, limit]
)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));
