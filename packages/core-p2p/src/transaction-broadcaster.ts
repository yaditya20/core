import { Container, Contracts, Providers, Utils } from "@arkecosystem/core-kernel";
import { Interfaces } from "@arkecosystem/crypto";

import { PeerCommunicator } from "./peer-communicator";

@Container.injectable()
export class TransactionBroadcaster implements Contracts.P2P.TransactionBroadcaster {
    @Container.inject(Container.Identifiers.LogService)
    readonly #logger!: Contracts.Kernel.Logger;

    @Container.inject(Container.Identifiers.PluginConfiguration)
    @Container.tagged("plugin", "@arkecosystem/core-p2p")
    readonly #configuration!: Providers.PluginConfiguration;

    @Container.inject(Container.Identifiers.PeerStorage)
    readonly #storage!: Contracts.P2P.PeerStorage;

    @Container.inject(Container.Identifiers.PeerCommunicator)
    readonly #communicator!: PeerCommunicator;

    public async broadcastTransactions(transactions: Interfaces.ITransaction[]): Promise<void> {
        if (transactions.length === 0) {
            this.logger.warning("Broadcasting 0 transactions");
            return;
        }

        const maxPeersBroadcast: number = this.configuration.getRequired<number>("maxPeersBroadcast");
        const peers: Contracts.P2P.Peer[] = Utils.take(Utils.shuffle(this.storage.getPeers()), maxPeersBroadcast);

        const transactionsStr = Utils.pluralize("transaction", transactions.length, true);
        const peersStr = Utils.pluralize("peer", peers.length, true);
        this.logger.debug(`Broadcasting ${transactionsStr} to ${peersStr}`);

        const transactionsBroadcast: Interfaces.ITransactionJson[] = transactions.map((t) => t.toJson());
        const promises = peers.map((p) => this.communicator.postTransactions(p, transactionsBroadcast));

        await Promise.all(promises);
    }
}
