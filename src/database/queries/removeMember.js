const connection = require('../config/connection');
const removeMemberFromDb = (id) =>
  connection.query({
    text: 'delete from members where id = $1',
    values: [id],
  });

module.exports = removeMemberFromDb;
