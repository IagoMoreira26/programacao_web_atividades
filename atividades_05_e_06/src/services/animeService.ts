import AnimeRepository from "../repositories/animeRepository";

class AnimeService {
  static async listarAnimes() {
    return await AnimeRepository.findAll();
  }

  static async obterAnime(id: string) {
    return await AnimeRepository.findById(id);
  }

  static async criarAnime(animeData: any) {
    return await AnimeRepository.create(animeData);
  }

  static async atualizarAnime(id: string, animeData: any) {
    return await AnimeRepository.update(id, animeData);
  }

  static async deletarAnime(id: string) {
    return await AnimeRepository.delete(id);
  }
}

export default AnimeService;
