import axios from "axios";

export default {
  getService: function(){
    return axios.get("/api/service");
  }
};
