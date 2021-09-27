let generadorToken = {}

function generador_token(x1, x2, x3){
    x1_slice = x1.slice(0,4);
    x2_slice = x2.slice(4,8);
    x3_slice = x3.slice(2,6);
    return x1_slice + x2_slice + x3_slice;
}

module.exports = generador_token;