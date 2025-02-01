import fs from "fs";

class jsonService { 
  // Return .json file content.
  getJsonData(path = "description.json") {
    const jsonObj = JSON.parse(fs.readFileSync(path, 'utf-8'));

    return jsonObj
  }
}

export default new jsonService
