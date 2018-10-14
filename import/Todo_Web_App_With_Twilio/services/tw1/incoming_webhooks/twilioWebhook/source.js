exports = function(args) {
    var db = context.services.get("mongodb-atlas").db("todo");
    var user = db.collection("users").findOne({
        "phone_number": args.From
    });

    if (user) {
        db.collection("items").insertOne({
            "text": args.Body,
            "owner_id": user._id
        });
    }
}


// exports = function(args) {
//   const db = context.services.get("mongodb-atlas").db("todo");
//   const users = db.collection("users");
//   const items = db.collection("items");
//
//   users.findOne({ phone_number: args.From }).then(user => {
//     const todo = { "text": args.Body, "owner_id": user._id };
//     return items.insertOne(todo);
//   });
// };
