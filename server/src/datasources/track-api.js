const { RESTDataSource } = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
    baseURL = "https://catstronauts-api.up.railway.app/";

    getTracksForHome() {
        return this.get("tracks");
    }

    getAuthor(authorId) {
        return this.get(`authors/${authorId}`);
    }
}

module.exports = TrackAPI;