import AnimeController from "../controllers/AnimeController";
import express from "express";

const routes = express.Router();

routes.get("/animes", AnimeController.listarAnimes);
routes.get("/animes/:id", AnimeController.obterAnime);
routes.post("/animes", AnimeController.criarAnime);
routes.put("/animes/:id", AnimeController.atualizarAnime);
routes.delete("/animes/:id", AnimeController.deletarAnime);

export default routes;
