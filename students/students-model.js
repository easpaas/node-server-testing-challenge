const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  remove,
};

async function insert(student) {
  return {...student};
}

function remove(id) {
  return null;
}
