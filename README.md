
# Introduction

The intention of this repository is to create a Smart contract with UI to store and retrieve TimeSeries Data

# Tools used

a) Ethereum Remix  b) MetaMask  c) Visual Studio 

# Deployment Steps

1. Deploy the Smart contract via Remix (make sure Metamask is installed)
2. Fetch the contract Address
3. Update the html file with the contract address and ABI
4. Host the html file in IIS (make sure Metamask is installed) -- > This is required or else the web js will not find the MetaMask

# Important terms for future references 

1. Remix IDE
2. Metamask 
3. Solidity
4. Etherscan
5. ABI - Application Binary Interface
6. dAPP
7. web3
  
# Development Steps - 

1. Install metamask addin based on your browser - https://metamask.io/
2. Sign in to Metamask and select the Ropsten Test network. This is a Test network and no need to pay anything for the Ethers
3. Buy some ethers, as I mentioned you dont need to pay anything as long as you are using Ropsten Test Network.
4. Write your logic or contract using an IDE. I have used - https://remix.ethereum.org
5. Compile and Publish your smart contract via Remix IDE.
6. YOu will get the Smart contract address and ABI after the deployment
7. Create the HTML page and use the Web3 JS library.
8. Use the Contract Address and the ABI and Function names as per the contract. You have completed the development by now
9. Create a Virtual Directory in IIS
10. MOve the HTML file and necessary JS files there.
11. Open the URL and make sure, you have the MetaMask addon enabled. All Set, Play around with the Contract Functions :)

# Good Usecase for a better BlockChain application

1. If your application requires a shared database with multiple writing parties
2. If the writing parties trust each other
3. If you dont want to involve a third party to store or verify your data or transactions.
