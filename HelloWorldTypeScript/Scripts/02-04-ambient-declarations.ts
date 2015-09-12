/** 
    As of TypeScript v1.5 the following declaration is not required any more:

        declare var ko;
    
    Same holds for the explicit reference:

        /// <reference path="typings/knockout/knockout.d.ts" />
*/

module demo_02_04 {
    var name = ko.observable('John Papa');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };

    var value: string = guy.fullName();
    console.log(value);
}