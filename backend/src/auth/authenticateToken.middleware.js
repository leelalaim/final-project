import { jwtService } from './jwtToken.service';

function extractToken(req) {
  const authHeader = req.headers['authorization'];
  if (authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7, authHeader.length);
  }

  return null;
}

export function authenticateToken (req, res, next) {
  const token = extractToken(req);

  if (token == null || token === 'null') {
    return res.sendStatus(401);
  }

  try {
    req.user = jwtService.getAuthTokenData(token);
    next();
  } catch(e) {
    res.sendStatus(403);
  }
};