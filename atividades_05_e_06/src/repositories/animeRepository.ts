import { v4 as uuidv4 } from "uuid";

interface Anime {
  id: string;
  name: string;
  genre: string;
  studio: string;
}

class AnimeRepository {
  private static animes: Anime[] = [];

  static async findAll() {
    return this.animes;
  }

  static async findById(id: string) {
    return this.animes.find((anime) => anime.id === id);
  }

  static async create(animeData: Omit<Anime, "id">) {
    const newAnime: Anime = { id: uuidv4(), ...animeData };
    this.animes.push(newAnime);
    return newAnime;
  }

  static async update(id: string, animeData: Partial<Omit<Anime, "id">>) {
    const index = this.animes.findIndex((anime) => anime.id === id);
    if (index !== -1) {
      this.animes[index] = { ...this.animes[index], ...animeData };
      return this.animes[index];
    }
    return null;
  }

  static async delete(id: string) {
    const index = this.animes.findIndex((anime) => anime.id === id);
    if (index !== -1) {
      this.animes.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default AnimeRepository;
