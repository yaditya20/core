import { State } from "@arkecosystem/core-interfaces";
import { transformWallet } from "../wallets/transformer";

export const transformBusiness = (businessWallet: State.IWallet) => {
    return transformWallet(businessWallet);
};
