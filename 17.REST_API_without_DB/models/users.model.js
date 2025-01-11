const {v4:uuidv4} = require("uuid");
const users = [
    {
        id: uuidv4(),
        username: "Debjit Roy",
        email: "royritudebjit@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Bishal Sen",
        email: "bishalroy@gmail.com"
    }
]

module.exports = users;