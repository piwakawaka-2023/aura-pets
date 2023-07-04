import { expressjwt as jwt, GetVerificationKey } from 'express-jwt'
import type { Request } from 'express'
import type { ParamsDictionary } from 'express-serve-static-core'
import type { JwtPayload } from 'jsonwebtoken'
import jwks from 'jwks-rsa'

const domain = 'https://piwakwaka-2023-james.au.auth0.com'
const audience = 'https://pets/api'

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }) as GetVerificationKey,
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

export default checkJwt

export interface JwtRequest<TReq = any, TRes = any>
  extends Request<ParamsDictionary, TRes, TReq> {
  auth?: JwtPayload
}
