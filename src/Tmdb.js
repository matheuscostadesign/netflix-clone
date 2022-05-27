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
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      // {
      //   slug: "trending",
      //   title: "Recomendados para Você",
      //   items: await basicFetch(`/trending/movie/week&language=pt-BR&api_key=${API_KEY}`)
      // },
      // {
      //   slug: "toprated",
      //   title: "Em alta",
      //   items: await basicFetch(`/movie/top_rated&language=pt-BR&api_key=${API_KEY}`)
      // },
      {
        slug: "action",
        title: "Ação",
        items: basicFetch(`/discover/movie?with_genres=288&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "horror",
        title: "Terror",
        items: basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "romance",
        title: "Romance",
        items: basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ]
  }
}