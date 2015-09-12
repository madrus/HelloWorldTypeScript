module demo_02_01 {
    var squareItSimple = function (h: number, w: number) {
        return h * w;
    };

    // same result 
    var squareItSimplest = (h: number, w: number) => h * w;

    var helloWorld: (name?: string) => void;
    helloWorld = (name?: string) => {
        console.log('Hello ' + (name || 'unknown person'));
    };
    helloWorld();
    helloWorld('Andre');

    var squareIt: (rect: { h: number; w?: number }) => number;

    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };

    squareIt = rect => {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));

}
