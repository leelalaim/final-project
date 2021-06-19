import { jwtService } from './jwtToken.service';

export function isAuthenticated (req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401);

  try {
    jwtService.getAuthTokenData(token);
    next();
  } catch(e) {
    console.log(e);
    res.sendStatus(403);
  }
};