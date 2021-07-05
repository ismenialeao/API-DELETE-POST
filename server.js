const app = require("./src/app");
const port = 8080   //mudou por port o 8080

app.listen(port, () => {
    console.log(`Servidor rodando na porta 8080 ${port}`);
});