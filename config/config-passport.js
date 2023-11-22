import passport from "passport";
import passportJWT from "passport-jwt";
import { User } from "../service/schemas/user.js";
import { configDotenv } from "dotenv";
configDotenv();

const secret = process.env.SECRET;

export function setJWTStrategy() {
  const ExtractJWT = passportJWT.ExtractJwt;
  const Strategy = passportJWT.Strategy;
  const params = {
    secretOrKey: secret,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  };

  passport.use(
    new Strategy(params, async function (payload, done) {
      try {
        const user = User.findOne({ _id: payload.id }).lean();
        if (!user) {
          return done(new Error("User not found"));
        }
        return done(null, user);
      } catch (e) {
        return done(e);
      }
    })
  );
}
