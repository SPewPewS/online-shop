import axios from "axios";

export const catsApi = {
    getCats() {
        return axios.get("https://62fe7327a85c52ee4837d33f.mockapi.io/cats")
            .then(response => response.data)

    }
}