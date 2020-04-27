module.exports = app => {
    const posts = require("../controller/post.controller.js");

    // Create a new Post
    app.post("/posts", posts.create);

    // Retrieve all Posts
    app.get("/posts", posts.findAll);

    // Retrieve a single Post with PostId
    app.get("/posts/:postId", posts.findOne);

    // Update a Post with PostId
    app.put("/posts/:postId", posts.update);

    // Delete a Post with PostId
    app.delete("/posts/:postId", posts.delete);

    // Create a new Post
    app.delete("/posts", posts.deleteAll);
};