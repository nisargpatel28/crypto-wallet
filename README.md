🪙 BitWallet – A Self-Custody Bitcoin Wallet (Built with Node.js & React)

Description:
BitWallet is a simple yet secure Bitcoin self-custody wallet that lets users generate their own wallets, manage private keys, and send or receive transactions — all without relying on third-party custody. Built using Node.js, React.js, and bitcoinjs-lib, it demonstrates how cryptography, usability, and decentralization can come together to create a truly user-controlled crypto experience.

Key Features:

🔐 Self-Custody Setup: Generate mnemonic seed phrases (BIP39) and derive addresses (BIP32/BIP44).

💸 Transaction Handling: Create, sign, and broadcast Bitcoin Testnet transactions using bitcoinjs-lib.

🪙 Multi-Signature Support: Optional 2-of-3 multi-sig wallet setup for added security.

📊 Balance & History: Fetch wallet balance and transaction history via Blockstream’s API.

🌐 User Interface: Simple React dashboard to view address, balance, and transaction status.

🔏 Local Key Encryption: Private keys stored securely (AES-encrypted) in local storage for demo use.

🧠 Educational Purpose: Ideal for understanding Bitcoin fundamentals — from key management to transaction signing.

Tech Stack:

Node.js

React.js

bitcoinjs-lib, bip39, bip32

Axios

Blockstream Testnet API

How It Works:

Generate a wallet and seed phrase.

Get test BTC from a faucet.

Send BTC using the app — all transactions are signed locally.

Optionally enable multi-sig setup for shared custody.

Why I Built This:
To explore the core principles of self-custody and decentralization, and to show how modern web tools can help users securely control their own Bitcoin — without depending on centralized wallets or exchanges.