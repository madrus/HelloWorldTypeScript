module demo_02_08 {

    // Interface ISquareFunction
    interface ISquareFunction {
        ( x: number ): number;
    }

    // a simple way to define a function
    //var squareItBasic = ( num: number ) => num * num;

    // now using an interface
    var squareItBasic: ISquareFunction = ( num: number ) => num * num;

    // Interface IRectangle
    interface IRectangle {
        h: number;
        w?: number;
    }

    var squareIt: ( rect: IRectangle ) => number;

    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };

    squareIt = rect => {
        if ( rect.w === undefined ) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    console.log( squareIt( rectA ) );
    console.log( squareIt( rectB ) );

    // Interface IPerson
    interface IPerson {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: ( years: number ) => void;
        greet: ( msg: string ) => string;
    }

    var p: IPerson = {
        favoriteMovie: 'LOTR', // we can actually add extra properties
        name: 'Colleen',
        age: 40,
        kids: 4,
        calcPets() {
            return this.kids * 2;
        },
        makeYounger( years: number ) {
            this.age -= years;
        },
        greet( msg: string ) {
            return msg + ', ' + this.name;
        }
    };
    var pets = p.calcPets();
    console.log( pets );

    p.makeYounger( 15 );
    var newAge = p.age;
    console.log( newAge );

    var msg = p.greet( 'Good day to you' );
    console.log( msg );

    interface ISessionEval {
        addRating: ( rating: number ) => void;
        calcRating: () => number;
    }

    function sessionEvaluator(): ISessionEval {
        var ratings: number[] = [];
        const addRating = ( rating: number = 5 ) => ratings.push( rating );
        const calcRating = () => {
            var sum = 0;
            ratings.forEach( score => sum += score );

            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        }
    }

    // initialize the sessionEvaluator
    var s = sessionEvaluator();

    // add some scores
    s.addRating( 4 );
    s.addRating( 5 );
    s.addRating( 5 );
    s.addRating( 5 );

    // evaluate the scores
    console.log( s.calcRating() );


}