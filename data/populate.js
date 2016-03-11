const User = require('mongoose').model('User');
const Channel = require('mongoose').model('Channel');

function populate(next) {
  console.log('Poulate database ....');
  // Drop database
  return Promise.all([
    User.remove({}),
    Channel.remove({}),
  ]).then(() => {
      User.create({username : 'Antoine', password: 'antoine'});
      User.create({username : 'Sébastien', password: 'seb', google:{id: 'toto'}});
  });
}


module.exports = populate;
