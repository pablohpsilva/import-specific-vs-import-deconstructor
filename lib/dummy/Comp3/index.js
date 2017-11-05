export default {
    func1() {
        return 1
    },
    func2() {
        return 2
    },
    func3() {
        return 3
    },
    func4() {
        return 4
    },
    func5() {
        return 5
    },
    someBiggerFunction() {
        const var1 = 1
        const var2 = 2
        const var3 = 3

        return this.func1()
            + this.func2()
            + this.func3()
            + this.func4()
            + this.func5()
            + var1
            + var2
            + var3
    }
}