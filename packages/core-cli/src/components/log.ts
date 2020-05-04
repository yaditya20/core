import { Identifiers, inject, injectable } from "../ioc";
import { Logger } from "../services";

/**
 * @export
 * @class Log
 */
@injectable()
export class Log {
    /**
     * @private
     * @type {Logger}
     * @memberof Command
     */
    @inject(Identifiers.Logger)
    readonly #logger!: Logger;

    /**
     * @static
     * @param {string} message
     * @memberof Log
     */
    public render(message: string): void {
        this.logger.log(message);
    }
}
