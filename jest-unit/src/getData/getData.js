const axios = require("axios");
const mapArrToStrings = require("../helpers/mapArrToStrings/mapArrToStrings");

const getData = async () => {
   try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const userIds = response.data.map((user) => user.id);

      return mapArrToStrings(userIds);
   } catch (error) {
      console.error(error.message);
   }
};

module.exports = getData;
