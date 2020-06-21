import axios from "axios";

// Contact actions

export const contactEmail = async (content) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await axios.post("/api/email", content, config);
};
