const app = require("express")();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    return res.send({
        message: "Hello, there from Node Github actions application"
    });
});

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`);
});
