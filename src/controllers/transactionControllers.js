const axios = require('axios');
const Transaction = require('../models/transactionModel');

const getTransactions = async (req, res) => {
  const { address } = req.body;
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${process.env.ETHERSCAN_API_KEY}`;

  try {
    const response = (await axios.get(url)).data;
    const last5Transactions = response.result.slice(0, 5);

    const transactionData = new Transaction({
      address,
      transactions: last5Transactions,
    });

    await transactionData.save();
    res.status(201).json(transactionData);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving transactions', details: err.message });
  }
};

module.exports = { getTransactions };
