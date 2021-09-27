const generadorToken = require("../../src/generador");


describe("Prueba tarea: ", function() {
    it('Datos null: ', function() {
        expect(function() { 
            generadorToken(x1=null, x2=null, x3=null);
        }). toThrowError(Error);
    });

    it('Datos Undefined: ', function() {
        expect(function() {
            generadorToken(x1=undefined, x2=undefined, x3=undefined);
        }).toThrowError(Error);
    });

    it('Prueba entradas numéricas: ', function() {
        expect(function() {
            let value = generadorToken(parseInt(x1=1), parseInt(x2=1), parseInt(x3=1))
            expect(value).toBeGreaterThan(0)
        })
    });

    it('Prueba donde x1 y x2 sean de 8 dígitos, pero x3 sea de 4 dígitos (y sean strings): ', function() {
        expect(function(){
            let value = generadorToken(x1.lenght ='karinava', x2.lenght ='rgasrios', x3.lenght='hola')
            expect(value).toBeString()
        })
    })

    it('Prueba donde x1, x2 y x3 tengan 8 dígitos (y sean strings): ', function(){
        expect(function(){
            let value = generadorToken(new String(x1.lenght ='karinava'), new String(x2.lenght ='rgasrios'), new String(x3.lenght = 'holacomo'))
            expect(value).toBeString()
        })
    })
});
