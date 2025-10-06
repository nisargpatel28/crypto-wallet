const keyPairs = [key1, key2, key3];
const pubKeys = keyPairs.map(k => k.publicKey);
const { address, redeem } = bitcoin.payments.p2sh({
  redeem: bitcoin.payments.p2ms({ m: 2, pubkeys: pubKeys, network }),
  network,
});
