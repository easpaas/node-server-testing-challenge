
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          id: 1, 
          Name: 'Sally Jones',
          Grade: 11, 
          Enrollment_Date: '03/10/2020'
        },
        {
          id: 2, 
          Name: 'Dana Scully',
          Grade: 13, 
          Enrollment_Date: '11/11/2019'
        },
        {
          id: 3, 
          Name: 'Fox Mulder',
          Grade: 14, 
          Enrollment_Date: '01/03/2020'
        },
        {
          id: 4, 
          Name: 'Walt Skinner',
          Grade: 16, 
          Enrollment_Date: '10/10/2019'
        },
        {
          id: 5, 
          Name: 'Brek Less',
          Grade: 12, 
          Enrollment_Date: '05/10/2019'
        }
      ]);
    });
};
