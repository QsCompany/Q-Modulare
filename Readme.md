# QLoader

[![N|Solid](https://storage.jumpshare.com/preview/F3wMY4nPf--XqiTv7L1coZ3SLfmf1xptQ9CicdjaxzRbGME59CvDU91nU9WKDqrulBQ66uXHlai1bGyW9gbBVlNlSmh0egFbdyHzE6LvoMAI4av1wcwKsmUDuTGzHRrg)](https://www.QDev.dz/products/QLoader)

QLoader is a module loader
  - AMD modules. 
  - SystemJS modules.
 
#  Features!
  - Support native Plugins
    - Json (parser)
    - Template (Template handler)
    - style (Css handler) 
    - Folder (Structure)
    - xml (not implemented yet)
    - image (not implemented yet)
    - library
   - extension Plugins
   - Assemblies (like dll architecture)
   - Dispatcher (Task Synchronizer)
   - Self Access Security (Self defense TECH)
   - type Refection 
   - Library Isolation Tech
 
> QLoader is a lightweight module loader very optimized for speed and memory. I hope to forke me and send me any bugs at Ammi.said@outlook.com.  site [http://www.QCompany.dz][df1]
### Installation

QLoader doesn't requires any specification it's run on any browser

```sh
$ npm i @qcompany/qloader
$ node app
```
### Implementation

- in your html under head tag insert 
````html
<script srt="<path>/QLoader.min.js" entry-point='<pathOfmodule-to-load>' ></script>
````

### Finaly

 - LET QLOADER WORK YOUR WORK
 - Add GO TO OTHERSTUFS

### example 
create js file in <root>/f1/lib1.js
  
```js

define('lib1',['exports'],function(exports){
  exports.namespace={
    classA:function(){
      this.WordA="Hello";
      this.Word2="World";
      this.toString=function(){return this.WordA+" "+this.Word2;};
      return this;
    }
  };
});
define('mod1',[],function(){
  exports.Description="I am a module mod1 I am from library called lib1 ";
});
```
  
  create js file in <root>/mod1.js
```js

define('mod1',['exports','lib:lib|./f1/lib1','lib/mod1'],function(exports,lib1,mod1){
  exports.obj={
    getHelloWorld:function(){return new lib1.entryPoint.namespace.classA().toString();},
    getMod1Description:function(){return mod1.Description;}
  };
});

```
create js file in <root>/f1/f2/app.js
```js
  //suggestion :<root>= http://localhost/
  
define("adminFolder/app",["require","exports","define","context","../../mod1"],
    function(require,exports,define,context,'mod'){
        //note: require: for get modules
        //      exports: is those things you want to expose to assemply
        //      define:  to register a new module
        //      context: contains usefull function for type reflection
        var StringContructor=context.GetType('String'); // result: String Constructor;
        var ClassAContructor=context.GetType('namespace.classA'); // result: classA constructor from lib1.js
        var parentFolder=context.GetPath('./../') // result: :string "http://localhost/f1/";
        var myFolder=context.GetPath('./') // result: :string "http://localhost/f1/f2/"; 
        var root=context.GetPath('/') // result: :string "http://localhost/";
        alert(mod1.getHelloWorld());
        alert(mod1.getMod1Description());
        //              and more .....
    }
```` 

License
----
DzLicenceForScientist

**Free Software, Hell Yeah!**
