import session from "express-session";
import mongoSession from "connect-mongodb-session";
const { DB_STRING, SESSION_SECRET } = process.env;
const MongoDBStore = mongoSession(session);

const store = new MongoDBStore({
  uri: DB_STRING,
  collection: `loginSessions`,
});

const session_ = session({
  secret: SESSION_SECRET,
  name: `memberSessionId`,
  resave: false,
  saveUninitialized: false,
  store,
  cookie: {
    signed: true,
  },
});

export { session_ };
