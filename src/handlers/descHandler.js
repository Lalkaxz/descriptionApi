import jsonService from "../service/jsonService.js";
import authService from "../service/authService.js";

export default (req, res) => {
  // Check token property.
  if(!req.token) {
    res.statusCode = 500
    return res.json({"error": "Internal server error."})
  }
    
  if(!authService.validateToken(req.token)) {
    res.statusCode = 401
    return res.json({"error": "Invalid token."})
  }

  // Send description.
  res.json(jsonService.getJsonData())
}