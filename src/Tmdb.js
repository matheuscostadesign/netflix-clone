const API_KEY = "7c0b7d3bcb99019c5c63096d28e97722";
const API_BASE = "https://api.themoviedb.org/3";

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: []
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: []
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: []
      },
      {
        slug: "action",
        title: "Ação",
        items: []
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: []
      },
      {
        slug: "horror",
        title: "Terror",
        items: []
      },
      {
        slug: "romance",
        title: "Romance",
        items: []
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: []
      },
    ]
  }
}