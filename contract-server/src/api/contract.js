const express = require("express");

const ContractController = require("../controller/ContractController");

const router = express.Router();

router.post("/upload", ContractController.uploadContract);
router.get("/", ContractController.getContract);

module.exports = router;
