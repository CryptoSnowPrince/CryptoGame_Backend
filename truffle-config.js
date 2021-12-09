module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: 5777 // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "^0.4.26"
    }
  }
};
