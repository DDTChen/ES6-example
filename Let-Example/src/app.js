function varTest() {
    console.log('------ varTest ------');
    var x = 31;
    if (true) {
        var x = 71;  // same variable!
        console.log(x);  // 71
    }
    console.log(x);  // 71
}

function letTest() {
    console.log('------ letTest ------');
    let x = 31;
    if (true) {
        let x = 71;  // different variable
        console.log(x);  // 71
    }
    console.log(x);  // 31
}

function varletTest() {
    console.log('------ varletTest ------');
    var x = 31;
    if (true) {
        let x = 71;  // different variable
        console.log(x);  // 71
    }
    console.log(x);  // 31
}

function constTest() {
    console.log('------ constTest ------');
    let x;
    if (true) {
        // okay, block scoped name
        const x = 31;
        // error, const
        //x = 71;
        console.log(x);  // 31
    }
    // okay, declared with `let`
    x = 71;
    console.log(x);  // 71
}

varTest();
letTest();
varletTest();
constTest();