# ES6-example
1. Module<BR>
   在ES6下終於可以簡單的使用export與import關鍵字來達到模組匯入與匯出的功能了<BR>
   https://babeljs.io/docs/learn-es2015/#modules
   
2. Class<BR>
   雖然javascript本來就可以用prototype做到物件導向的設計，ES6的class讓這件事更好寫。<BR>
   但是這個class的功能並不多，像：只能宣告成員方法，無法宣告成員屬性，只有static、public，沒有private。<BR>
   https://babeljs.io/docs/learn-es2015/#classes
   
3. Let + Const<BR>
   javascript原來宣告變數的var的有效範圍達整個function(如果在function內的話)。<BR>
   let可以讓所宣告的變數有效範圍侷限在大括號內，而const則是增加了常數定義的功能。<BR>
   https://babeljs.io/docs/learn-es2015/#let-const
   https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/let

4. Arrows and Lexical This
   => 是一個簡化宣告function的寫法，其實在許多的語言都已經有支援了。<BR>
   好處是可以讓程式碼更簡潔，也不用擔心this的問題；當然，要先習慣看這種寫法才行。<BR>
   https://babeljs.io/docs/learn-es2015/#arrows-and-lexical-this

5. Promises
   當需要呼叫許多非同步的功能時，常常會遇到惡魔金字塔(Pyramid of Doom)的窘境如下：
   function(
        {},
        function(
            {},
            function() {
                {},
                function...
            }
        ) {

        }    
    );
        改成
    function（）
    .then ()
    .then ()
    ...
    提升程式碼可看性
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
   https://babeljs.io/docs/learn-es2015/#promises
   
6. Template Strings
   可以用變數直接加到字串內，不需要再用字串連接的方式了。<BR>
   https://babeljs.io/docs/learn-es2015/#template-strings
