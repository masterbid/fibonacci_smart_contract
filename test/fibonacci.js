const Fibonacci = artifacts.require('Fibonacci')

contract('Fibonacci', () => {
    let fibonacci = null
    before(async () => {
        fibonacci = await Fibonacci.deployed()
    })

    it('Should correctly calculate fibonacci sequence', async () => {
        const result = await fibonacci.fib(10)
        assert(result.toNumber() === 55)
    })
})