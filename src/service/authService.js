process.loadEnvFile(".env")
const TOKEN = process.env.TOKEN // Get env value.

class authService {
  // Compare token value.
  validateToken(token) {
    if (token != TOKEN) {
      return false
    }
    return true
  }
}
export default new authService