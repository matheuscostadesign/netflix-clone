const API_KEY = "7c0b7d3bcb99019c5c63096d28e97722";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(`/discover/tv`)
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