test('Devo conhecer as principais assertivas do JEST', () => {
    let number = null
    expect(number).toBeNull()
    number = 10
    expect(number).not.toBeNull()
    expect(number).toBe(10)
    expect(number).toEqual(10)
    expect(number).toBeGreaterThan(9)
    expect(number).toBeLessThan(11)
})

test('Devo saber trabalhar com objetos', () => {
    const obj = {name: 'João', mail: 'joao@mail.com'}
    expect(obj).toHaveProperty('name')
    expect(obj).toHaveProperty('name', 'João')
    expect(obj.name).toBe('João')

    const obj2 = {name: 'João', mail: 'joao@mail.com'}
    expect(obj).toEqual(obj2)
    expect(obj).toBe(obj)
})