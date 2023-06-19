const SERVER_KEY = 'asda66sdh4422jjkas45hdja'

const passport = require('passport')
const passportJwt = require('passport-jwt')
const jwtStrategy = passportJwt.Strategy
const extractJwt = passportJwt.ExtractJwt

passport.use(
    new jwtStrategy(
        {
            jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: SERVER_KEY
        },
        (jwtPayload, done) => {
            const user = jwtPayload
            return done(null, user)
        }
    )
)

const auth = passport.authenticate('jwt', { session: false })

const isAdmin = (req, res, next) => {
    return passport.authenticate('jwt', { session: false }, (err, user)=> {
        if (err) {
            console.log(err)
            return next(err)
        }

        if(user.user === 'admin') {
            req.user = user
            return next()
        }

        res.status(401).json({error: 'User is not an Admin'})
    })(req, res, next)
}

module.exports = { SERVER_KEY, auth, isAdmin }

