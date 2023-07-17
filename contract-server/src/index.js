const Mongoose = require("mongoose");

const app = require("./app");

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  Mongoose.connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log(`Listening: http://localhost:${port}`);
    })
    .catch((err) => {
      console.log(err);
    });

  /* eslint-enable no-console */
});
