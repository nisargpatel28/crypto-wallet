const txb = new bitcoin.TransactionBuilder(network);
txb.addInput('your_utxo_txid', 0);
txb.addOutput('recipient_address', 50000);
txb.sign(0, account);

const tx = txb.build().toHex();
console.log("Signed TX:", tx);
