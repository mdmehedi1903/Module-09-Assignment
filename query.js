use("mystore");


// Create a new collection.
db.createCollection("myPosts");


// Removes a collection from the database.
db.myPosts.drop();


// Inserts a single document into a collection.
db.myPosts.insertOne({
    Title: "How to create post on WordPress?",
    Category: "Web Development",
    Tag: "wordpress post",
    Date: "12 Sep, 2023"
  });
  

// Delete/remove a single document from the collection.
db.myPosts.deleteOne({ Title: "How to create post on WordPress?" }); 
//   or
db.myPosts.deleteOne({ Category: "Web Development" });
//   or
db.myPosts.deleteOne({ Tag: "wordpress post" });
//   or
db.myPosts.deleteOne({ Date: "12 Sep, 2023" });

