const app = require("./src/app");
const connect = require("./src/db/db");

connect(); 

app.get('/', (req, res) => {
    res.render('index'); 
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
