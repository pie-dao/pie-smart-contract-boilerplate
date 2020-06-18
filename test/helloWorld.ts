import chai, {expect} from "chai";
import {deployContract, solidity} from "ethereum-waffle";
import {Signer, Wallet} from "ethers";
import {ethers} from "@nomiclabs/buidler";

chai.use(solidity);

describe("HelloWorld", function () {
    this.timeout(300000);

    let signers: Signer[];

    beforeEach(async() => {
        signers = await ethers.getSigners();
        
    })
})