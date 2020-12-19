const app = require("express")();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    return res.send({
        message: "Update with pm2 running and workflow script change, pm2 watch"
    });
});

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`);
});
