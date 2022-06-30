
const SJTokenAbi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mintToken",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const SJTokenBytecode = "60806040523480156200001157600080fd5b506040518060400160405280600781526020017f534a546f6b656e000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f534a54000000000000000000000000000000000000000000000000000000000081525081600390816200008f919062000412565b508060049081620000a1919062000412565b505050620000c4620000b8620000ca60201b60201c565b620000d260201b60201c565b620004f9565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021a57607f821691505b60208210810362000230576200022f620001d2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025b565b620002a686836200025b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f3620002ed620002e784620002be565b620002c8565b620002be565b9050919050565b6000819050919050565b6200030f83620002d2565b620003276200031e82620002fa565b84845462000268565b825550505050565b600090565b6200033e6200032f565b6200034b81848462000304565b505050565b5b8181101562000373576200036760008262000334565b60018101905062000351565b5050565b601f821115620003c2576200038c8162000236565b62000397846200024b565b81016020851015620003a7578190505b620003bf620003b6856200024b565b83018262000350565b50505b505050565b600082821c905092915050565b6000620003e760001984600802620003c7565b1980831691505092915050565b6000620004028383620003d4565b9150826002028217905092915050565b6200041d8262000198565b67ffffffffffffffff811115620004395762000438620001a3565b5b62000445825462000201565b6200045282828562000377565b600060209050601f8311600181146200048a576000841562000475578287015190505b620004818582620003f4565b865550620004f1565b601f1984166200049a8662000236565b60005b82811015620004c4578489015182556001820191506020850194506020810190506200049d565b86831015620004e45784890151620004e0601f891682620003d4565b8355505b6001600288020188555050505b505050505050565b61197080620005096000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d71461028a578063a9059cbb146102ba578063dd62ed3e146102ea578063f2fde38b1461031a576100f5565b8063715018a61461021457806379c650681461021e5780638da5cb5b1461024e57806395d89b411461026c576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806370a08231146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610336565b60405161010f9190611097565b60405180910390f35b610132600480360381019061012d9190611152565b6103c8565b60405161013f91906111ad565b60405180910390f35b6101506103eb565b60405161015d91906111d7565b60405180910390f35b610180600480360381019061017b91906111f2565b6103f5565b60405161018d91906111ad565b60405180910390f35b61019e610418565b6040516101ab9190611261565b60405180910390f35b6101ce60048036038101906101c99190611152565b610421565b6040516101db91906111ad565b60405180910390f35b6101fe60048036038101906101f9919061127c565b610458565b60405161020b91906111d7565b60405180910390f35b61021c6104a0565b005b61023860048036038101906102339190611152565b610528565b60405161024591906111ad565b60405180910390f35b61025661061f565b60405161026391906112b8565b60405180910390f35b610274610649565b6040516102819190611097565b60405180910390f35b6102a4600480360381019061029f9190611152565b6106db565b6040516102b191906111ad565b60405180910390f35b6102d460048036038101906102cf9190611152565b610752565b6040516102e191906111ad565b60405180910390f35b61030460048036038101906102ff91906112d3565b610775565b60405161031191906111d7565b60405180910390f35b610334600480360381019061032f919061127c565b6107fc565b005b60606003805461034590611342565b80601f016020809104026020016040519081016040528092919081815260200182805461037190611342565b80156103be5780601f10610393576101008083540402835291602001916103be565b820191906000526020600020905b8154815290600101906020018083116103a157829003601f168201915b5050505050905090565b6000806103d36108f3565b90506103e08185856108fb565b600191505092915050565b6000600254905090565b6000610402848484610ac4565b61040d848484610b50565b600190509392505050565b60006012905090565b60008061042c6108f3565b905061044d81858561043e8589610775565b61044891906113a2565b6108fb565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104a86108f3565b73ffffffffffffffffffffffffffffffffffffffff166104c661061f565b73ffffffffffffffffffffffffffffffffffffffff161461051c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051390611444565b60405180910390fd5b6105266000610dcf565b565b60006105326108f3565b73ffffffffffffffffffffffffffffffffffffffff1661055061061f565b73ffffffffffffffffffffffffffffffffffffffff16146105a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059d90611444565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105df57600080fd5b600082116105ec57600080fd5b6105f68383610e95565b6106158333846106068733610775565b61061091906113a2565b6108fb565b6001905092915050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461065890611342565b80601f016020809104026020016040519081016040528092919081815260200182805461068490611342565b80156106d15780601f106106a6576101008083540402835291602001916106d1565b820191906000526020600020905b8154815290600101906020018083116106b457829003601f168201915b5050505050905090565b6000806106e66108f3565b905060006106f48286610775565b905083811015610739576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610730906114d6565b60405180910390fd5b61074682868684036108fb565b60019250505092915050565b60008061075d6108f3565b905061076a818585610b50565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6108046108f3565b73ffffffffffffffffffffffffffffffffffffffff1661082261061f565b73ffffffffffffffffffffffffffffffffffffffff1614610878576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086f90611444565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036108e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108de90611568565b60405180910390fd5b6108f081610dcf565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361096a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610961906115fa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d09061168c565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610ab791906111d7565b60405180910390a3505050565b6000610ad08484610775565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610b4a5781811015610b3c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b33906116f8565b60405180910390fd5b610b4984848484036108fb565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610bbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb69061178a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c259061181c565b60405180910390fd5b610c39838383610ff4565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610cbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb6906118ae565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d5291906113a2565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610db691906111d7565b60405180910390a3610dc9848484610ff9565b50505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610efb9061191a565b60405180910390fd5b610f1060008383610ff4565b8060026000828254610f2291906113a2565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f7791906113a2565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610fdc91906111d7565b60405180910390a3610ff060008383610ff9565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561103857808201518184015260208101905061101d565b83811115611047576000848401525b50505050565b6000601f19601f8301169050919050565b600061106982610ffe565b6110738185611009565b935061108381856020860161101a565b61108c8161104d565b840191505092915050565b600060208201905081810360008301526110b1818461105e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110e9826110be565b9050919050565b6110f9816110de565b811461110457600080fd5b50565b600081359050611116816110f0565b92915050565b6000819050919050565b61112f8161111c565b811461113a57600080fd5b50565b60008135905061114c81611126565b92915050565b60008060408385031215611169576111686110b9565b5b600061117785828601611107565b92505060206111888582860161113d565b9150509250929050565b60008115159050919050565b6111a781611192565b82525050565b60006020820190506111c2600083018461119e565b92915050565b6111d18161111c565b82525050565b60006020820190506111ec60008301846111c8565b92915050565b60008060006060848603121561120b5761120a6110b9565b5b600061121986828701611107565b935050602061122a86828701611107565b925050604061123b8682870161113d565b9150509250925092565b600060ff82169050919050565b61125b81611245565b82525050565b60006020820190506112766000830184611252565b92915050565b600060208284031215611292576112916110b9565b5b60006112a084828501611107565b91505092915050565b6112b2816110de565b82525050565b60006020820190506112cd60008301846112a9565b92915050565b600080604083850312156112ea576112e96110b9565b5b60006112f885828601611107565b925050602061130985828601611107565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061135a57607f821691505b60208210810361136d5761136c611313565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006113ad8261111c565b91506113b88361111c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113ed576113ec611373565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061142e602083611009565b9150611439826113f8565b602082019050919050565b6000602082019050818103600083015261145d81611421565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006114c0602583611009565b91506114cb82611464565b604082019050919050565b600060208201905081810360008301526114ef816114b3565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611552602683611009565b915061155d826114f6565b604082019050919050565b6000602082019050818103600083015261158181611545565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006115e4602483611009565b91506115ef82611588565b604082019050919050565b60006020820190508181036000830152611613816115d7565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611676602283611009565b91506116818261161a565b604082019050919050565b600060208201905081810360008301526116a581611669565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006116e2601d83611009565b91506116ed826116ac565b602082019050919050565b60006020820190508181036000830152611711816116d5565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611774602583611009565b915061177f82611718565b604082019050919050565b600060208201905081810360008301526117a381611767565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611806602383611009565b9150611811826117aa565b604082019050919050565b60006020820190508181036000830152611835816117f9565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611898602683611009565b91506118a38261183c565b604082019050919050565b600060208201905081810360008301526118c78161188b565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611904601f83611009565b915061190f826118ce565b602082019050919050565b60006020820190508181036000830152611933816118f7565b905091905056fea2646970667358221220323860a82ff2b1449167975e9b000c22f735d5a8acb22c75d9d3304bce4a166b64736f6c634300080f0033"

module.exports = {SJTokenAbi,SJTokenBytecode};