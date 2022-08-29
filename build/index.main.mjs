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
              const [v102, v103] = svs;
              return (await ((async () => {
                
                
                return v103;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v102, v103, v110] = svs;
              return (await ((async () => {
                
                
                return v103;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v102, v103] = svs;
              return (await ((async () => {
                
                
                return v103;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0],
      3: [ctc0, ctc1]
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
export async function offTaker(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for offTaker expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for offTaker expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v103], secs: v105, time: v104, didSend: v28, from: v102 } = txn1;
  ;
  const v109 = stdlib.protect(ctc1, await interact.confirmPurchase(v103), {
    at: './index.rsh:37:69:application',
    fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:13:function exp)'],
    msg: 'confirmPurchase',
    who: 'offTaker'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v102, v103, v109],
    evt_cnt: 1,
    funcNum: 1,
    lct: v104,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v111], secs: v113, time: v112, didSend: v41, from: v110 } = txn2;
      
      ;
      if (v111) {
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
    tys: [ctc4, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v111], secs: v113, time: v112, didSend: v41, from: v110 } = txn2;
  ;
  if (v111) {
    const txn3 = await (ctc.sendrecv({
      args: [v102, v103, v110],
      evt_cnt: 0,
      funcNum: 2,
      lct: v112,
      onlyIf: true,
      out_tys: [],
      pay: [v103, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v121, time: v120, didSend: v58, from: v119 } = txn3;
        
        sim_r.txns.push({
          amt: v103,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v121, time: v120, didSend: v58, from: v119 } = txn3;
    ;
    const v124 = stdlib.addressEq(v110, v119);
    stdlib.assert(v124, {
      at: './index.rsh:45:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'offTaker'
      });
    stdlib.protect(ctc2, await interact.reportPayment(v103), {
      at: './index.rsh:46:44:application',
      fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:19:function exp)'],
      msg: 'reportPayment',
      who: 'offTaker'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v130], secs: v132, time: v131, didSend: v73, from: v129 } = txn4;
    ;
    const v133 = stdlib.addressEq(v102, v129);
    stdlib.assert(v133, {
      at: './index.rsh:50:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'offTaker'
      });
    ;
    stdlib.protect(ctc2, await interact.reportTransfer(v103), {
      at: './index.rsh:54:45:application',
      fs: ['at ./index.rsh:54:7:application call to [unknown function] (defined at: ./index.rsh:54:19:function exp)'],
      msg: 'reportTransfer',
      who: 'offTaker'
      });
    
    stdlib.protect(ctc2, await interact.reportproperty(v130), {
      at: './index.rsh:55:28:application',
      fs: ['at ./index.rsh:55:28:application call to [unknown function] (defined at: ./index.rsh:55:28:function exp)', 'at ./index.rsh:55:28:application call to "liftedInteract" (defined at: ./index.rsh:55:28:application)'],
      msg: 'reportproperty',
      who: 'offTaker'
      });
    
    return;
    
    
    
    
    }
  else {
    stdlib.protect(ctc2, await interact.reportCancellation(), {
      at: './index.rsh:41:51:application',
      fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:21:function exp)'],
      msg: 'reportCancellation',
      who: 'offTaker'
      });
    
    return;
    }
  
  
  
  };
export async function trader(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for trader expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for trader expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  
  
  const v98 = stdlib.protect(ctc0, interact.price, 'for trader\'s interact field price');
  const v99 = stdlib.protect(ctc1, interact.property, 'for trader\'s interact field property');
  
  const txn1 = await (ctc.sendrecv({
    args: [v98],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v103], secs: v105, time: v104, didSend: v28, from: v102 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v103], secs: v105, time: v104, didSend: v28, from: v102 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.reportReady(v103), {
    at: './index.rsh:33:25:application',
    fs: ['at ./index.rsh:33:25:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)', 'at ./index.rsh:33:25:application call to "liftedInteract" (defined at: ./index.rsh:33:25:application)'],
    msg: 'reportReady',
    who: 'trader'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v111], secs: v113, time: v112, didSend: v41, from: v110 } = txn2;
  ;
  if (v111) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v121, time: v120, didSend: v58, from: v119 } = txn3;
    ;
    const v124 = stdlib.addressEq(v110, v119);
    stdlib.assert(v124, {
      at: './index.rsh:45:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'trader'
      });
    stdlib.protect(ctc2, await interact.reportPayment(v103), {
      at: './index.rsh:46:44:application',
      fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:19:function exp)'],
      msg: 'reportPayment',
      who: 'trader'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v102, v103, v99],
      evt_cnt: 1,
      funcNum: 3,
      lct: v120,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:50:5:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v130], secs: v132, time: v131, didSend: v73, from: v129 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v102,
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
      tys: [ctc4, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v130], secs: v132, time: v131, didSend: v73, from: v129 } = txn4;
    ;
    const v133 = stdlib.addressEq(v102, v129);
    stdlib.assert(v133, {
      at: './index.rsh:50:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'trader'
      });
    ;
    stdlib.protect(ctc2, await interact.reportTransfer(v103), {
      at: './index.rsh:54:45:application',
      fs: ['at ./index.rsh:54:7:application call to [unknown function] (defined at: ./index.rsh:54:19:function exp)'],
      msg: 'reportTransfer',
      who: 'trader'
      });
    
    return;
    
    
    
    
    }
  else {
    stdlib.protect(ctc2, await interact.reportCancellation(), {
      at: './index.rsh:41:51:application',
      fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:21:function exp)'],
      msg: 'reportCancellation',
      who: 'trader'
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
  appApproval: `BiAFAAEDAiAmAgEAACI1ADEYQQH8KWRJIls1AYEIWzUCNhoAF0lBAEoiNQQjNQaBiJ6ayQ4SRDQBSSUMQAAkSSQMQAAQJBJEKGRJNQNXIAg1B0IBtEgoZEk1A1cgCDUHQgGmIxJEKGRJNQNXIAg1B0IBljYaAhc1BDYaAzYaARdJJQxAAJxJJAxAAEgkEkQkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BTX+gARiekO4NP5QsDT/MQASRLEisgE0AyEEW7III7IQNP+yB7NCAO1IJTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf6ABEGxQE2wNP6IAS00A1coIDEAEkQ0/zT+FlAoSwFXAChnSCQ1ATIGNQJCALtJIwxAAFhIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf5JNQUXNf2ABA+/xjQ0/RZRBwhQsDT9QQAbNP80/hZQMQBQKEsBVwBIZ0glNQEyBjUCQgBgQgBBSIGgjQaIAKYiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAxADT/FlAoSwFXAChnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
                "internalType": "uint256",
                "name": "v103",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
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
                "internalType": "uint256",
                "name": "v103",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
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
                "name": "v111",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "internalType": "struct T8",
                "name": "v130",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                "name": "v111",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
        "internalType": "struct T7",
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
                "internalType": "struct T8",
                "name": "v130",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000e5e38038062000e5e8339810160408190526200002691620001b8565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156008620000e8565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000df926002929091019062000112565b50505062000297565b816200010e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000120906200025a565b90600052602060002090601f0160209004810192826200014457600085556200018f565b82601f106200015f57805160ff19168380011785556200018f565b828001600101855582156200018f579182015b828111156200018f57825182559160200191906001019062000172565b506200019d929150620001a1565b5090565b5b808211156200019d5760008155600101620001a2565b6000818303604080821215620001cd57600080fd5b80518082016001600160401b038082118383101715620001fd57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021757600080fd5b8351945060208501915084821081831117156200024457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200026f57607f821691505b602082108114156200029157634e487b7160e01b600052602260045260246000fd5b50919050565b610bb780620002a76000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c35780639a3e3912146100d8578063ab53f2c6146100eb578063f662edcc1461010e57005b80631e93b0f1146100775780632d09dcdf1461009b5780637eea518c146100b057005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100a757600080fd5b50610088610121565b6100756100be366004610966565b6102ac565b3480156100cf57600080fd5b50600154610088565b6100756100e6366004610966565b61044c565b3480156100f757600080fd5b50610100610607565b604051610092929190610989565b61007561011c3660046109e6565b6106a4565b6000600160005414156101d85760006002805461013d906109f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610169906109f8565b80156101b65780601f1061018b576101008083540402835291602001916101b6565b820191906000526020600020905b81548152906001019060200180831161019957829003601f168201915b50505050508060200190518101906101ce9190610a49565b6020015192915050565b60026000541415610283576000600280546101f2906109f8565b80601f016020809104026020016040519081016040528092919081815260200182805461021e906109f8565b801561026b5780601f106102405761010080835404028352916020019161026b565b820191906000526020600020905b81548152906001019060200180831161024e57829003601f168201915b50505050508060200190518101906101ce9190610aae565b6003600054141561029d5760006002805461013d906109f8565b6102a960006007610853565b90565b6102bc600260005414600e610853565b6102d6813515806102cf57506001548235145b600f610853565b6000808055600280546102e8906109f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610314906109f8565b80156103615780601f1061033657610100808354040283529160200191610361565b820191906000526020600020905b81548152906001019060200180831161034457829003601f168201915b50505050508060200190518101906103799190610aae565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516103ac929190610b31565b60405180910390a16103c581602001513414600c610853565b60408101516103e0906001600160a01b03163314600d610853565b6040805180820182526000808252602080830182815285516001600160a01b031680855286830151825260039093554360015584518083019390935251828501528351808303850181526060909201909352805191926104469260029290910190610878565b50505050565b61045c600160005414600a610853565b6104768135158061046f57506001548235145b600b610853565b600080805560028054610488906109f8565b80601f01602080910402602001604051908101604052809291908181526020018280546104b4906109f8565b80156105015780601f106104d657610100808354040283529160200191610501565b820191906000526020600020905b8154815290600101906020018083116104e457829003601f168201915b50505050508060200190518101906105199190610a49565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f4915338360405161054c929190610b31565b60405180910390a161056034156009610853565b6105706040830160208401610b66565b156105ed5760408051606080820183526000808352602080840182815284860183815287516001600160a01b03908116808852898501518452338352600295869055436001558851808601919091529251838901529051168185015285518082039094018452608001909452815192936104469391920190610878565b60008080556001819055610603906002906108fc565b5050565b60006060600054600280805461061c906109f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610648906109f8565b80156106955780601f1061066a57610100808354040283529160200191610695565b820191906000526020600020905b81548152906001019060200180831161067857829003601f168201915b50505050509050915091509091565b6106b46003600054146012610853565b6106ce813515806106c757506001548235145b6013610853565b6000808055600280546106e0906109f8565b80601f016020809104026020016040519081016040528092919081815260200182805461070c906109f8565b80156107595780601f1061072e57610100808354040283529160200191610759565b820191906000526020600020905b81548152906001019060200180831161073c57829003601f168201915b50505050508060200190518101906107719190610a49565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201529091507fa36ef91336808a08b41f0a1d54d2c69d66104f8d893714b0c4667a15a935389a9060c00160405180910390a16107e734156010610853565b80516107ff906001600160a01b031633146011610853565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561083c573d6000803e3d6000fd5b5060008080556001819055610603906002906108fc565b816106035760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610884906109f8565b90600052602060002090601f0160209004810192826108a657600085556108ec565b82601f106108bf57805160ff19168380011785556108ec565b828001600101855582156108ec579182015b828111156108ec5782518255916020019190600101906108d1565b506108f8929150610939565b5090565b508054610908906109f8565b6000825580601f10610918575050565b601f0160209004906000526020600020908101906109369190610939565b50565b5b808211156108f8576000815560010161093a565b60006040828403121561096057600080fd5b50919050565b60006040828403121561097857600080fd5b610982838361094e565b9392505050565b82815260006020604081840152835180604085015260005b818110156109bd578581018301518582016060015282016109a1565b818111156109cf576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561096057600080fd5b600181811c90821680610a0c57607f821691505b6020821081141561096057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610a4457600080fd5b919050565b600060408284031215610a5b57600080fd5b6040516040810181811067ffffffffffffffff82111715610a8c57634e487b7160e01b600052604160045260246000fd5b604052610a9883610a2d565b8152602083015160208201528091505092915050565b600060608284031215610ac057600080fd5b6040516060810181811067ffffffffffffffff82111715610af157634e487b7160e01b600052604160045260246000fd5b604052610afd83610a2d565b815260208301516020820152610b1560408401610a2d565b60408201529392505050565b80358015158114610a4457600080fd5b6001600160a01b038316815281356020808301919091526060820190610b58908401610b21565b151560408301529392505050565b600060208284031215610b7857600080fd5b61098282610b2156fea2646970667358221220729a1ab2eacca692edce53de73f7a7e17f8b5d8bb7514722d0fb06214d884e4964736f6c634300080c0033`,
  BytecodeLen: 3678,
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
    at: './index.rsh:35:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:43:20:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:47:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:40:13:after expr stmt semicolon',
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
  "offTaker": offTaker,
  "trader": trader
  };
export const _APIs = {
  };
