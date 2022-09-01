// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      Main: {
        price: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v100, v102] = svs;
              return (await ((async () => {
                
                
                return v102;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v100, v102, v109] = svs;
              return (await ((async () => {
                
                
                return v102;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function OffTaker(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for OffTaker expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for OffTaker expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v101, v102], secs: v104, time: v103, didSend: v32, from: v100 } = txn1;
  ;
  const v108 = stdlib.protect(ctc2, await interact.confirmPurchase(v101, v102), {
    at: './index.rsh:43:69:application',
    fs: ['at ./index.rsh:43:9:application call to [unknown function] (defined at: ./index.rsh:43:13:function exp)'],
    msg: 'confirmPurchase',
    who: 'OffTaker'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v100, v102, v108],
    evt_cnt: 1,
    funcNum: 1,
    lct: v103,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v110], secs: v112, time: v111, didSend: v45, from: v109 } = txn2;
      
      ;
      if (v110) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v110], secs: v112, time: v111, didSend: v45, from: v109 } = txn2;
  ;
  if (v110) {
    const txn3 = await (ctc.sendrecv({
      args: [v100, v102, v109],
      evt_cnt: 0,
      funcNum: 2,
      lct: v111,
      onlyIf: true,
      out_tys: [],
      pay: [v102, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v120, time: v119, didSend: v62, from: v118 } = txn3;
        
        sim_r.txns.push({
          amt: v102,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'from',
          to: v100,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc1, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v120, time: v119, didSend: v62, from: v118 } = txn3;
    ;
    const v123 = stdlib.addressEq(v109, v118);
    stdlib.assert(v123, {
      at: './index.rsh:51:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'OffTaker'
      });
    stdlib.protect(ctc3, await interact.reportPayment(v102), {
      at: './index.rsh:52:44:application',
      fs: ['at ./index.rsh:52:7:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
      msg: 'reportPayment',
      who: 'OffTaker'
      });
    
    ;
    stdlib.protect(ctc3, await interact.reportTransfer(v102), {
      at: './index.rsh:56:45:application',
      fs: ['at ./index.rsh:56:7:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
      msg: 'reportTransfer',
      who: 'OffTaker'
      });
    
    stdlib.protect(ctc3, await interact.reportProperty(v101), {
      at: './index.rsh:57:28:application',
      fs: ['at ./index.rsh:57:28:application call to [unknown function] (defined at: ./index.rsh:57:28:function exp)', 'at ./index.rsh:57:28:application call to "liftedInteract" (defined at: ./index.rsh:57:28:application)'],
      msg: 'reportProperty',
      who: 'OffTaker'
      });
    
    return;
    
    
    }
  else {
    stdlib.protect(ctc3, await interact.reportCancellation(), {
      at: './index.rsh:47:51:application',
      fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)'],
      msg: 'reportCancellation',
      who: 'OffTaker'
      });
    
    return;
    }
  
  
  
  };
export async function Trader(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Object({
    price: ctc0,
    property: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Bool;
  
  
  const v95 = stdlib.protect(ctc2, await interact.getPropertyInfo(), {
    at: './index.rsh:36:68:application',
    fs: ['at ./index.rsh:35:9:application call to [unknown function] (defined at: ./index.rsh:35:13:function exp)'],
    msg: 'getPropertyInfo',
    who: 'Trader'
    });
  const v96 = v95.price;
  const v97 = v95.property;
  
  const txn1 = await (ctc.sendrecv({
    args: [v97, v96],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v101, v102], secs: v104, time: v103, didSend: v32, from: v100 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v101, v102], secs: v104, time: v103, didSend: v32, from: v100 } = txn1;
  ;
  stdlib.protect(ctc3, await interact.reportReady(v101, v102), {
    at: './index.rsh:39:25:application',
    fs: ['at ./index.rsh:39:25:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at ./index.rsh:39:25:application call to "liftedInteract" (defined at: ./index.rsh:39:25:application)'],
    msg: 'reportReady',
    who: 'Trader'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v110], secs: v112, time: v111, didSend: v45, from: v109 } = txn2;
  ;
  if (v110) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v120, time: v119, didSend: v62, from: v118 } = txn3;
    ;
    const v123 = stdlib.addressEq(v109, v118);
    stdlib.assert(v123, {
      at: './index.rsh:51:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Trader'
      });
    stdlib.protect(ctc3, await interact.reportPayment(v102), {
      at: './index.rsh:52:44:application',
      fs: ['at ./index.rsh:52:7:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
      msg: 'reportPayment',
      who: 'Trader'
      });
    
    ;
    stdlib.protect(ctc3, await interact.reportTransfer(v102), {
      at: './index.rsh:56:45:application',
      fs: ['at ./index.rsh:56:7:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
      msg: 'reportTransfer',
      who: 'Trader'
      });
    
    return;
    
    
    }
  else {
    stdlib.protect(ctc3, await interact.reportCancellation(), {
      at: './index.rsh:47:51:application',
      fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)'],
      msg: 'reportCancellation',
      who: 'Trader'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [`Main_price()uint64`],
    sigs: [`Main_price()uint64`]
    },
  appApproval: `BiAEAAECICYCAQAAIjUAMRhBAZ4pZEkiWzUBgQhbNQI2GgAXSUEANiI1BCM1BoGInprJDhJENAFJJAxAABAkEkQoZEk1A1cgCDUHQgFcIxJEKGRJNQNXIAg1B0IBTDYaAhc1BDYaAzYaARdJIwxAAKRJJAxAAEckEkQkNAESRDQESSISTDQCEhFEKGRJNQMlWzX/gARBsUBNsDT/iAEwNANXKCAxABJEsSKyATT/sggjshA0A1cAILIHs0IApEgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8lWzX+STUFFzX9gAQPv8Y0NP0WUQcIULA0/UEAGzT/NP4WUDEAUChLAVcASGdIJDUBMgY1AkIAbEIATUiBoI0GiACyIjQBEkQ0BEkiEkw0AhIRREk1BUlXAIA1/4GAAVs1/oAEV8wEWDT/UDT+FlCwMQA0/hZQKEsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T2",
                "name": "v101",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T2",
                "name": "v101",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v110",
                "type": "bool"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Main_price",
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
    "name": "_reachCreationTime",
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
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v110",
                "type": "bool"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000cd738038062000cd783398101604081905262000026916200024a565b600080554360035560408051338152825160208083019190915280840151805180518486015280830151606080860191909152818601516080860152015160a0840152015160c082015290517ff132aef681434da119060a8f65dd0ae3c3756b67bfdad93d6c6ba12ed2d3454a9181900360e00190a1620000aa3415600862000112565b60408051808201825260006020808301828152338085528683015183015182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926200010992600292909101906200013c565b50505062000328565b81620001385760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200014a90620002eb565b90600052602060002090601f0160209004810192826200016e5760008555620001b9565b82601f106200018957805160ff1916838001178555620001b9565b82800160010185558215620001b9579182015b82811115620001b95782518255916020019190600101906200019c565b50620001c7929150620001cb565b5090565b5b80821115620001c75760008155600101620001cc565b604080519081016001600160401b03811182821017156200021357634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200021357634e487b7160e01b600052604160045260246000fd5b600081830360c08112156200025e57600080fd5b62000268620001e2565b83518152601f198201915060a08212156200028257600080fd5b6200028c620001e2565b60808312156200029b57600080fd5b620002a562000219565b92506020850151835260408501516020840152606085015160408401526080850151606084015282815260a0850151602082015280602083015250809250505092915050565b600181811c908216806200030057607f821691505b602082108114156200032257634e487b7160e01b600052602260045260246000fd5b50919050565b61099f80620003386000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632d09dcdf146100835780637eea518c1461009857806383230757146100ab5780639a3e3912146100c0578063ab53f2c6146100d357005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b506100706100f6565b61005d6100a6366004610760565b610267565b3480156100b757600080fd5b50600154610070565b61005d6100ce366004610760565b6103f3565b3480156100df57600080fd5b506100e86105b0565b60405161007a929190610783565b6000600160005414156101ad57600060028054610112906107e0565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906107e0565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610831565b6020015192915050565b60026000541415610258576000600280546101c7906107e0565b80601f01602080910402602001604051908101604052809291908181526020018280546101f3906107e0565b80156102405780601f1061021557610100808354040283529160200191610240565b820191906000526020600020905b81548152906001019060200180831161022357829003601f168201915b50505050508060200190518101906101a39190610896565b6102646000600761064d565b90565b610277600260005414600e61064d565b6102918135158061028a57506001548235145b600f61064d565b6000808055600280546102a3906107e0565b80601f01602080910402602001604051908101604052809291908181526020018280546102cf906107e0565b801561031c5780601f106102f15761010080835404028352916020019161031c565b820191906000526020600020905b8154815290600101906020018083116102ff57829003601f168201915b50505050508060200190518101906103349190610896565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610367929190610919565b60405180910390a161038081602001513414600c61064d565b604081015161039b906001600160a01b03163314600d61064d565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156103d8573d6000803e3d6000fd5b50600080805560018190556103ef90600290610672565b5050565b610403600160005414600a61064d565b61041d8135158061041657506001548235145b600b61064d565b60008080556002805461042f906107e0565b80601f016020809104026020016040519081016040528092919081815260200182805461045b906107e0565b80156104a85780601f1061047d576101008083540402835291602001916104a8565b820191906000526020600020905b81548152906001019060200180831161048b57829003601f168201915b50505050508060200190518101906104c09190610831565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f491533836040516104f3929190610919565b60405180910390a16105073415600961064d565b610517604083016020840161094e565b1561059a5760408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015184523383526002958690554360015588518086019190915292518389015290511681850152855180820390940184526080019094528151929361059493919201906106af565b50505050565b600080805560018190556103ef90600290610672565b6000606060005460028080546105c5906107e0565b80601f01602080910402602001604051908101604052809291908181526020018280546105f1906107e0565b801561063e5780601f106106135761010080835404028352916020019161063e565b820191906000526020600020905b81548152906001019060200180831161062157829003601f168201915b50505050509050915091509091565b816103ef5760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461067e906107e0565b6000825580601f1061068e575050565b601f0160209004906000526020600020908101906106ac9190610733565b50565b8280546106bb906107e0565b90600052602060002090601f0160209004810192826106dd5760008555610723565b82601f106106f657805160ff1916838001178555610723565b82800160010185558215610723579182015b82811115610723578251825591602001919060010190610708565b5061072f929150610733565b5090565b5b8082111561072f5760008155600101610734565b60006040828403121561075a57600080fd5b50919050565b60006040828403121561077257600080fd5b61077c8383610748565b9392505050565b82815260006020604081840152835180604085015260005b818110156107b75785810183015185820160600152820161079b565b818111156107c9576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806107f457607f821691505b6020821081141561075a57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461082c57600080fd5b919050565b60006040828403121561084357600080fd5b6040516040810181811067ffffffffffffffff8211171561087457634e487b7160e01b600052604160045260246000fd5b60405261088083610815565b8152602083015160208201528091505092915050565b6000606082840312156108a857600080fd5b6040516060810181811067ffffffffffffffff821117156108d957634e487b7160e01b600052604160045260246000fd5b6040526108e583610815565b8152602083015160208201526108fd60408401610815565b60408201529392505050565b8035801515811461082c57600080fd5b6001600160a01b038316815281356020808301919091526060820190610940908401610909565b151560408301529392505050565b60006020828403121561096057600080fd5b61077c8261090956fea264697066735822122056458b9fd7e7de027eabfce6830b5fa8bdfd6cd1927a82c82f3f70c97ddf403d64736f6c634300080c0033`,
  BytecodeLen: 3287,
  Which: `oD`,
  version: 7,
  views: {
    Main: {
      price: `Main_price`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:49:20:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:54:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:46:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "OffTaker": OffTaker,
  "Trader": Trader
  };
export const _APIs = {
  };
