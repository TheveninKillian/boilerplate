const about = require("./about")
// @ponicode
describe("about", () => {
    test("0", () => {
        let callFunction = () => {
            about(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            about(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            about(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            about(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            about(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            about(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
