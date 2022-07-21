const summary = require ('../src/hw6/score')

describe ('average score', () => {

    test('expect summary to be defined', () => {
        expect(summary).toBeDefined()
    })

    test('expect summary to be defined', () => {
        expect(typeof summary).toBe('number')
    })

     test('calculate avarage score for students', () => {
        expect(summary).toEqual(16)
    })


})