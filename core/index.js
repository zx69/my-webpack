const Complier = require('./Complier');

function webpack(options){
  const complier = new Complier(options);
  return complier;
}

module.exports = webpack;