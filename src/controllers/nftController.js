const Web3 = require('web3'); // Correct Web3 import
const NFT = require('../models/nftModel'); // Import NFT model

// Get NFT metadata
const getNFTMetadata = async (req, res) => {
  try {
    const { contractAddress, tokenId } = req.body;
    const web3 = new Web3(process.env.WEB3_PROVIDER); // Correct Web3 instantiation
    const contract = new web3.eth.Contract(JSON.parse(process.env.NFT_ABI), contractAddress);

    const tokenUri = await contract.methods.tokenURI(tokenId).call();
    const metadataResponse = await fetch(tokenUri);
    const metadata = await metadataResponse.json();

    const nft = new NFT({ contractAddress, tokenId, ...metadata });
    await nft.save();

    res.status(200).json(nft);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch metadata for the given NFT.' });
  }
};

module.exports = { getNFTMetadata };
