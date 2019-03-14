import web3 from "./web3";
//Your contract address
const address =
  "0x62ed27e9438f8cffae5d440d224ee5c9ce4900e09ed356f7b29e0bd626d6ea81";
//Your contract ABI
const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "x",
        type: "string"
      }
    ],
    name: "setHash",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getHash",
    outputs: [
      {
        name: "x",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
export default new web3.eth.Contract(abi, address);
