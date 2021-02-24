import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XccMXd7HgE3tqJYtehHqzu3Z2HYeUX4r-6ApOVV0WFA",
  },
});
