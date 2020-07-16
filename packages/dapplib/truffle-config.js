require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remember smile hidden clog off tail'; 
let testAccounts = [
"0x39ef3dd904ffb523bf572fce9efc42bf9fd23fa359463edb6f9cf4ffec24eef5",
"0xb6e55805bce5d1480d71568f8680e20098de36669f4f81b5151ab7a206a62e86",
"0x7daa44beac7c2b4be92ba740e8e872a6fe306276f2544db0a6641fd5dcb61a69",
"0x3088a330628b5abb337d6d641bcd4aaca9c5067e78b33f6fc4458f946ba8d94f",
"0xab2d21c36e6f69b03b9256ffc7591468bf24978e4c1ac3d74438238bc7e03db0",
"0xd2d3124fa553ac0a2abc5671713b65d2e9582de1119baf1067b73f05afdb4793",
"0x5577c889848f591f13063f48ce15d905b624db43348defefdc9c3bd2668e3bff",
"0x3fb13b600beb3b1652005b6024b580f64586011da3144ade04163acfa61d46a8",
"0x642883d0aff4d2d7739b6fd2c36f35740aabcffe42cf455ec4e7660c69fb8da6",
"0xee68a1dd726745bf558cfe68996633edafe1f03403670ffa16e3feb3e8839edc"
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
            version: '^0.5.11'
        }
    }
};
