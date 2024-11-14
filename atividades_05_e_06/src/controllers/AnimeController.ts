import { Request, Response } from "express";
import AnimeService from "../services/animeService";

class AnimeController {
  static async listarAnimes(req: Request, res: Response) {
    try {
      const animes = await AnimeService.listarAnimes();
      res.json(animes);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async obterAnime(req: Request, res: Response) {
    try {
      const anime = await AnimeService.obterAnime(req.params.id);
      if (anime) {
        res.json(anime);
      } else {
        res.status(404).json({ message: "Anime not found" });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async criarAnime(req: Request, res: Response) {
    try {
      const anime = await AnimeService.criarAnime(req.body);
      res.status(201).json(anime);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async atualizarAnime(req: Request, res: Response) {
    try {
      const anime = await AnimeService.atualizarAnime(req.params.id, req.body);
      if (anime) {
        res.json(anime);
      } else {
        res.status(404).json({ message: "Anime not found" });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async deletarAnime(req: Request, res: Response) {
    try {
      const sucesso = await AnimeService.deletarAnime(req.params.id);
      if (sucesso) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Anime not found" });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default AnimeController;
