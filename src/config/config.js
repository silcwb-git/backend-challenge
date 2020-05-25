const connect_db =
  "mongodb+srv://write:write@cluster0-zanqa.mongodb.net/test?retryWrites=true&w=majority";
const db_opt = {
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 5,
  useNewUrlParser: true
};

module.exports = { connect_db, db_opt };
