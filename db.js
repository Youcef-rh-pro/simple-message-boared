const formatDate= require("./formatDate")
const messages=[
    {
        text:"Hi there",
        user:"nadi",
        added: formatDate(new Date())
    },
    {
        text:"hello world",
        user:"youcef",
        added: formatDate(new Date())
    }
]
module.exports = messages
