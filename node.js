import * as bip39 from 'bip39';
import * as bitcoin from 'bitcoinjs-lib';
import * as bip32 from 'bip32';

const network = bitcoin.networks.testnet; // or bitcoin.networks.bitcoin
const mnemonic = bip39.generateMnemonic();
const seed = await bip39.mnemonicToSeed(mnemonic);
const root = bip32.fromSeed(seed, network);
const account = root.derivePath("m/44'/1'/0'/0/0");
const { address } = bitcoin.payments.p2pkh({ pubkey: account.publicKey, network });
// Address
console.log("Mnemonic:", mnemonic);
console.log("Address:", address);
