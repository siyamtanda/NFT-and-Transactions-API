# NFT and Transactions API

This API allows users to interact with an NFT smart contract on the Ethereum blockchain to retrieve metadata and store it in a MongoDB database. The application uses **Web3.js** for blockchain interactions and **Mongoose** for MongoDB operations.

## Features
- Fetch metadata of an NFT by providing its contract address and token ID.
- Store metadata in a MongoDB database.
- Support for MongoDB, Infura for Ethereum connection, and environment-based configuration.

## Technologies Used
- **Node.js**: JavaScript runtime for building the application.
- **Express**: Web framework for building the API.
- **Web3.js**: JavaScript library for interacting with the Ethereum blockchain.
- **MongoDB**: Database to store the NFT metadata and transaction records.
- **Mongoose**: ODM (Object Data Modeling) for MongoDB.
- **dotenv**: Loads environment variables from a `.env` file.
  
## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Infura API key](https://infura.io/) to connect to Ethereum's mainnet.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nft-and-transactions-api.git
   cd nft-and-transactions-api


2. Install dependencies:

    npm install
   
4. Create a .env file in the root directory of the project and add the following variables:

    WEB3_PROVIDER=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
    NFT_ABI=[YOUR_NFT_CONTRACT_ABI]
    MONGO_URI=mongodb://localhost:27017/nftAndTransactions                                                                                                                                                                   Replace YOUR_INFURA_PROJECT_ID with your actual Infura project ID.
        Replace [YOUR_NFT_CONTRACT_ABI] with the ABI of your NFT smart contract (you can retrieve this from Etherscan or your own contract).

5. Start the server: npm start 

