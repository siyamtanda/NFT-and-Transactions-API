const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  contractAddress: String,
  tokenId: String,
  name: String,
  description: String,
  image: String,
});

module.exports = mongoose.model('NFT', nftSchema);
