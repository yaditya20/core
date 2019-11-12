module.exports = {
    cli: {
        core: {
            run: {
                plugins: {
                    include: ["@arkecosystem/core-magistrate-transactions"],
                },
            },
        },
        relay: {
            run: {
                plugins: {
                    include: ["@arkecosystem/core-magistrate-transactions"],
                    exclude: ["@arkecosystem/core-logger-signale"],
                },
            },
        },
        forger: {
            run: {
                plugins: {
                    include: [
                        "@arkecosystem/core-logger-signale",
                        "@arkecosystem/core-magistrate-transactions",
                    ],
                    exclude: [
                        "@arkecosystem/core-logger-pino",
                        "@arkecosystem/core-p2p",
                        "@arkecosystem/core-blockchain",
                        "@arkecosystem/core-api",
                        "@arkecosystem/core-database-postgres",
                        "@arkecosystem/core-transaction-pool",
                        "@arkecosystem/core-wallet-api",
                        "@arkecosystem/core-snapshots",
                    ],
                },
            },
        },
        chain: {
            run: {
                plugins: {
                    include: ["@arkecosystem/core-magistrate-transactions"],
                },
            },
        },
        snapshot: {
            run: {
                plugins: {
                    include: ["@arkecosystem/core-magistrate-transactions"],
                },
            },
        },
    },
}
