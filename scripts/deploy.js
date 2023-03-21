const { ethers } = require("hardhat");

const main = async () => {
    const Market = await ethers.getContractFactory("NFTMarket");
    const market = await Market.deploy();

    await market.deployed();
    const marketAddress = market.address;

    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(marketAddress);
    const nftAddress = nft.address;
    await nft.deployed();

    console.log("Contract NFT marketplace deployed at: ", marketAddress);
    console.log("Contract NFT deployed at: ", nftAddress);

}

main().catch((error) => console.error(error));

// nft marketplace at: 0x87371a979355db1a08530129a7fEA60c3516b7Af
// nft contract at: 0x0afEf5962E9Cc7A5254609310eDfE103f02810a2