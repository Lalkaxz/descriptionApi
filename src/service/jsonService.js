import fs from "fs";

export default (path = "../description.json") => {
    const jsonObj = JSON.parse(fs.readFileSync(path, 'utf8'));

    return jsonObj
}
