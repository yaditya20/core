import { Interfaces } from "@arkecosystem/crypto";

export interface TransactionBroadcaster {
    broadcastTransactions(transactions: Interfaces.ITransaction<Interfaces.ITransactionData>[]): Promise<void>;
}
