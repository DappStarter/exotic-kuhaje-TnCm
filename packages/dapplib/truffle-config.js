require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy remember stick around heavy civil army gaze'; 
let testAccounts = [
"0x4a2f988b7d20ca12130ca013a1e6a06ef7b4b83f4f1fc4877868a80d1a41bdd3",
"0x9800c2ef348520755db5475f993fb9cc2caf24a97f844ef2f65c7ed1b9953086",
"0x5b6aa5b7a40d4752891c1f59001332238e646aa2041e435afeb8aba020318b50",
"0x46943aa0a94572a5628ba87bec3ecbc6741a0e957964d2764e87105155b1123e",
"0x0552839ad0fc77fe6746ab946845afbf0492e240c2f19d3fbccd7d1b762c2fa6",
"0xd7e9de6533a95666d9e71c479f7cac76a5553ce40219ef94c64679e333e9c2fc",
"0x6d48da61bbad2c69a991f1bfc0ad184db311ce5340c15e3a708e94fd4e99ff69",
"0x58988f0e27f7e968b39903610d15bdc7da36186b6526507ee8f84bb767242bcf",
"0xfdecf9bfc245a70b347d5133dafb36eb8d34fb3cd110ff593449b3ab58735293",
"0xf28c30565b2e8ecdb11e2075181a0452a36d92bbf012f7aa6140e152c7e1ec37"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

