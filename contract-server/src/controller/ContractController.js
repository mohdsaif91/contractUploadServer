const contractModel = require("../model/contractModel");

exports.uploadContract = async (req, res) => {
  try {
    console.log(req.body, " JACK");
    await contractModel
      .insertMany(req.body)
      .then(() => {
        res.status(201).send("recorde inserted");
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getContract = async (req, res) => {
  try {
    const allContract = await contractModel.find({});
    console.log(allContract);
    if (!allContract) {
      throw "Database get failed";
    }
    res.status(200).send(allContract);
  } catch (error) {
    res.status(500).send(error);
  }
};
