import { State } from "@arkecosystem/core-interfaces";
import { Utils } from "@arkecosystem/crypto";

export const transformWallet = (wallet: State.IWallet) => {
    return {
        address: wallet.address,
        publicKey: wallet.publicKey,
        nonce: wallet.nonce.toFixed(),
        balance: Utils.BigNumber.make(wallet.balance).toFixed(),
        attributes: wallet.getAttributes(),
    };
};
