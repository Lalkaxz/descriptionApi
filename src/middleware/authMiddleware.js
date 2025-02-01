
export default (req, res, next) => {
  // Check if authorization header does not exists.
  if (!req.headers.authorization) {
    res.statusCode = 400
    return res.json({"error": "Missing Authorization header."})
  }
  const authHeader = req.headers.authorization
  // Check authorization token format.
  if (!authHeader.startsWith("Bearer ")) {
    res.statusCode = 400
    return res.json({"error": "Invalid token format. Expected 'Bearer <token>'"})
  }
  // Save token value.
  req.token = authHeader.split(" ")[1]
  next()
}