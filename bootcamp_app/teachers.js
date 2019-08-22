const { Pool } = require('pg');

// creates new class Pool to connect to our database
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv.slice(2)[0];

// our first query below
pool.query(
`SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort, count(assistance_requests.id) AS total_assistances
  FROM teachers
  JOIN assistance_requests ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE '%${cohort}%'
  GROUP BY teachers.name, cohorts.name
  ORDER BY teachers.name;`
)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));

