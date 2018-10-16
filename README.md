
# Introduction

The intention of this repository is to create a Smart contract with UI to store and retrieve TimeSeries Data in BLOCK CHAIN. This contains both Metamask and WITHOUT Metamask approaches.

# Tools used

a) Ethereum Remix  b) MetaMask  c) Visual Studio Code  d) NodeJS

# Technology Stack

  1. Solidity
  2. NodeJS
  3. Bootstrap
  4. Ajax
  5. JQuery
  6. JavaScript

# Deployment Steps

1. Deploy the Smart contract via Remix (make sure Metamask is installed)
2. Fetch the contract Address
3. Update the html file with the contract address and ABI
4. Host the html file in IIS (make sure Metamask is installed) -- > This is required or else the web3js will not find the MetaMask

# Important terms for future references 

1. Remix IDE
2. Metamask 
3. Solidity
4. Etherscan
5. ABI - Application Binary Interface
6. dAPP
7. web3
8. NodeJS
  
# Development Steps - MetaMask Approach

1. Install metamask addin based on your browser - https://metamask.io/
2. Sign in to Metamask and select the Ropsten Test network. This is a Test network and no need to pay anything for the Ethers
3. Buy some ethers, as I mentioned you dont need to pay anything as long as you are using Ropsten Test Network.
4. Write your logic or contract using an IDE. I have used - https://remix.ethereum.org
5. Compile and Publish your smart contract via Remix IDE.
6. You will get the Smart contract address and ABI after the deployment
7. Create the HTML page and use the Web3JS library.
8. Use the Contract Address and the ABI and Function names as per the contract. You have completed the development by now
9. Create a Virtual Directory in IIS
10. MOve the HTML file and necessary JS files there.
11. Open the URL and make sure, you have the MetaMask addon enabled. All Set, Play around with the Contract Functions :)

# Good Usecase for a better BlockChain application

1. If your application requires a shared database with multiple writing parties
2. If the writing parties trust each other
3. If you dont want to involve a third party to store or verify your data or transactions.

# My experience with different Frameworks and Tools (unfortunately most of them failed when metamask is not available)

Below tools requires nodejs, which can be downloaded from https://nodejs.org/en/ 
Once nodejs is installed use below commands via npm install

1. TestRPC   -- > npm install -g ethereumjs-testrpc
2. Ganache-cli  -- > npm install -g ganache-cli
3. Truffle  -- > npm install -g truffle

I have tried all the above options, but cannot make the Signed Trasanction. So I went ahead with a different approach of having a NodeJS REST Webservice.

# Steps to do a signed Transaction without Metamask

1. Install NodeJS
2. Create a directory and copy the contents inside the Node folder 
3. Navigate to that directory via command prompt and install below packages  (side note - I just read if the packages.json is avilable,    then NPM INSTALL will install below packages automatically. I havnt tried this though.After the installation, make sure you have        web3,ethereumtx,express and coder folders in the node_module folder. If you have any issues related to git, please install the same      from https://git-scm.com/download/win 
4. Install web3js version 0.20.0 -- > This is very important, since web3js 1.0 is having a lot of issues.-- > npm install web3@0.20.0
5. Install ethereumjs-tx -- > npm install ethereumjs-tx
6. Install express  -- > npm install express
7. Open the api.js file using Visual Studio Code and make sure you have the right values for below fields.
      1. Ropsten- Infura link address. For this, signup with infura and then whitelist the smartcontract address, which will give you            the link
      2. Contract Address- This is the published smart contract address.
      3. ABI - This is the ABI after the remix publish mechanism
      4. Account - Once you signup with Metamask you will get an address. Believe me, MetaMask is not needed, just the address is enough
      5. Private Key - Signup with MetaMask you will get the private key.
8. start the webservice by running node api.js. This will start a webserver with port 3000.
9. Create a Virtual directory in IIS and copy the html, css files.
10.  Open the Ether_UI.html file and make sure you have right configurations.
      1. Ropsten- Infura link address 
      2. Smart contract address
      3. ABI
      4. Correct REST API url as per step 8
      5. Correct TraceLink. This is a fancy item which will show all the transactions. Thanks to https://ropsten.etherscan.io
11. Start the IIS, and navigate to the Ether_UI.html
12. When you are doing a signed transaction, you can see the transaction ID in the node JS console. Copy that and do a search in             https://ropsten.etherscan.io, you can find the transaction proress. You will get the From address from this page, so that you can       update the above 10.5 link.

# Rinkeby Account setup and Get free Ether

1. Install MetaMask
2. Switch to Rinkeby Test Network
3. Click on Buy which will redirect to the Rinkeby Page
4. Click on the Crypto Faucet
5. Copy the MetaMask Account and post a Tweet in twitter and get the address
6. Paste the address in step 4 above, and click on the get ether. Wait for sometime, you will get the Free Ethers.

# Final Working Code

1. Node/ API_New.js is the latest WebService
2. Final.html , Read_Final.html are the final HTML files
