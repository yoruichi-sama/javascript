/**
 * funcoes executadas quando uma acao ocorre.
 */


function foo1(callback) {
    setTimeout(function(){
        console.log('foo1');
        if (callback) callback();
    },rand());    
}

function foo2(callback) {
    setTimeout(function(){
        console.log('foo2');
        if (callback) callback();
    },rand());
}

function foo3(callback) {
    setTimeout(function(){
        console.log('foo3');
        if (callback) callback();
    },rand());
}

foo1(function(){
    foo2(function(){
        foo3(function(){
            console.log('Olá');
        });
    });
});

function rand(min=1000, max=3000){
    return Math.floor(Math.random() * (max - min) + min);
}
