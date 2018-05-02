module.exports = class QueueInterface {
  /**
   * Create an instance of the process queue.
   * @param  {Blockchain} blockchain
   * @param  {String} event
   * @return {void}
   */
  constructor (blockchain, event) {
    this.blockchain = blockchain
    this.event = event
  }

  /**
   * Drain the queue.
   * @return {void}
   */
  drain () {
    this.queue.drain = () => this.blockchain.dispatch(this.event)
  }

  /**
   * Pause the queue.
   * @return {void}
   */
  pause () {
    return this.queue.pause()
  }

  /**
   * Flush the queue.
   * @return {void}
   */
  clear () {
    return this.queue.remove(() => true)
  }

  /**
   *  Resue the queue.
   * @return {void}
   */
  resume () {
    return this.queue.resume()
  }

  /**
   *  Resue the queue.
   * @return {void}
   */
  push (item) {
    return this.queue.push(item)
  }

  /**
   *  Resue the queue.
   * @return {void}
   */
  length () {
    return this.queue.length()
  }
}
