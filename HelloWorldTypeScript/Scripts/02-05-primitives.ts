module demo_02_05 {
    // any
    var data: any;
    var info; // implicit any
    //var doSomething = function (arg) { // implicit any
    //    return arg;
    //}
    //var x = doSomething(5);

    // primitives
    var age: number = 21;
    var score: number = 34.56;
    var rating = 99.99; // inferred type of number

    var hasData: boolean = true;
    var isReady = true;
    var isBold = function () { return 'yes'; }
    var hasHair = isBold(); // makes hasHair of string type
    var hasBrains = !!isBold(); // makes hasBrains of boolean type

    // string array
    function getArrayLength(x: string[]) {
        var len: number = x.length;
        return len;
    }
    var names: string[] = ['john', 'andre', 'peter', 'zack'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));

    // null
    var guitarSales: any = null;
    var animal = null; // implicit any
    var orderDate: Date = null;

    // underfined
    var quantity: number;
    var company = undefined; // implicit any
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);
}