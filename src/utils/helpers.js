export const Colors = {
  normal: "#a8a878",
  fire: "#f08030",
  fighting: "#c03028",
  water: "#6890f0",
  flying: "#a890f0",
  grass: "#78c850",
  poison: "#a040a0",
  electric: "#f8d030",
  ground: "#e0c068",
  psychic: "#f85888",
  rock: "#b8a038",
  ice: "#98d8d8",
  bug: "#a8b820",
  dragon: "#7038f8",
  ghost: "#705898",
  dark: "#705848",
  steel: "#b8b8d0",
  fairy: "#ee99ac",
};

const capitalizeString = (string) => {
  if (string === "hp") return "HP";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatNumber = (number) => {
  return (number / 10).toFixed(2);
};

const formatString = (string, char = "-") => {
  return string
    .split(char)
    .map((char) => capitalizeString(char))
    .join(" ");
};

export const formatID = (id) => {
  return String(id).padStart(3, "0");
};

export const BackgroundColor = (types) => {
  const [colorLeft, colorRight] = types.map((type) => Colors[type]);

  if (colorRight === undefined) {
    return `linear-gradient(to right, ${colorLeft},50%, ${colorLeft})`;
  }
  return `linear-gradient(to right, ${colorLeft},50%, ${colorRight})`;
};

export const findData = (data, id) => {
  return data.find((entry) => entry.id === id);
};

export const getFirstType = (data) => (data ? data.types[0].type.name : null);

export const getImage = (data) => {
  const sprite =
    data.sprites.other.dream_world.front_default || data.sprites.front_default;
  return sprite;
};

export const getName = (data) => {
  const name = capitalizeString(data.name);
  return name;
};

export const getTypes = (data) => {
  const types = data.types.map((type) => type.type.name);
  return types;
};

export const getBio = (specie) => {
  const findEnLang = specie.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  );
  const bio = findEnLang.flavor_text;
  return bio;
};

export const getStats = (data) => {
  const stats = data.stats.map((stat) => {
    const name = formatString(stat.stat.name);
    return {
      name: name,
      value: stat.base_stat,
    };
  });
  return stats;
};

export const getSpecies = (pokemon, specie) => {
  const findEnLang = specie.genera.find(
    (entry) => entry.language.name === "en"
  );
  const genus = findEnLang.genus;
  const height = `${formatNumber(+pokemon.height)} m`;
  const weight = `${formatNumber(+pokemon.weight)} kg`;
  const generation = formatString(specie.generation.name);
  const habitat = capitalizeString(specie.habitat.name);
  const shape = capitalizeString(specie.shape.name);
  return [
    { name: "Genus", value: genus },
    { name: "Height", value: height },
    { name: "Weight", value: weight },
    { name: "Generation", value: generation },
    { name: "Habitat", value: habitat },
    { name: "Shape", value: shape },
  ];
};

export const getTraining = (pokemons, species) => {
  const base_experience = pokemons.base_experience;
  const base_happiness = species.base_happiness;
  const capture_rate = species.capture_rate;
  const growth_rate = formatString(species.growth_rate.name);
  const abilities = pokemons.abilities.map((ability) =>
    capitalizeString(ability.ability.name)
  );
  return [
    { name: "Base Experience", value: base_experience },
    { name: "Base Happiness", value: base_happiness },
    { name: "Capture Rate", value: capture_rate },
    { name: "Growth Rate", value: growth_rate },
    { name: "Abilities", value: abilities },
  ];
};
