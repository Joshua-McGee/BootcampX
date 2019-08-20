SELECT cohorts.name as name, avg(completed_at - started_at) as average_assistance_time
 FROM cohorts
 JOIN students ON cohort_id = cohorts.id
 JOIN assistance_requests ON student_id = students.id
 GROUP BY cohorts.name
 ORDER BY average_assistance_time;

 -- need to get all the students in each cohort then grab the average and group by cohorts
 -- get ave assistance of all the students then group by cohorts