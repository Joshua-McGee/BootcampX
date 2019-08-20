-- get the total number of assistance_requests for teachers
-- Select the teacher's name and the total assistance requests.
-- Since this query needs to work with any specific teacher name, use 'Waylon Boehm' for the teacher's name here.


SELECT count(assistance_requests) as total_assistances, name
FROM teachers
  JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
  WHERE teachers.name = 'Waylon Boehm'
  GROUP BY teachers.name;
  

