import axios from "axios";

const API_KEY = "wJA7kmkOU_F_VWYbGRPkmzafUarT8fl2SmxuxevEkYs";

// get all image

export const getAllImage = async () => {
  try {
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?query=wolf&per_page=30&client_id=${API_KEY}`
    );
    console.log(data);

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

// search image

export const searchImage = async (search) => {
  try {
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?query=${search}&client_id=${API_KEY}`
    );

    return data.results;
  } catch (error) {
    console.log(error);
  }
};
