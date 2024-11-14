import app from "./src/app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando no link http://localhost:${PORT}/`);
});
