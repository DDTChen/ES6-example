import add from './export_function.js'
import util from './export_class.js'
import {PI, sub} from './export_var.js'
import * as Math from './export_var.js'

console.log(add(1, 2));
console.log(sub(2, 1));
console.log('-----');
console.log(sub(Math.PI, 1));


var abc = new util();
abc.print();