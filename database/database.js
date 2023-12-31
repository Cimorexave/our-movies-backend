import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: String,
    genres: Array,
})

const movies = mongoose.model("Movies", movieSchema);

class Database {
    constructor(url) {
        this.url = url;
        this.connection = this.connect(url);
        this.model = movies;
    }
    async connect(url) {
        return await mongoose.connect(url,);
    }
    async post(props) {
        const newMember = new this.model({ ...props });
        return await newMember.save();
    }
}

export default Database;