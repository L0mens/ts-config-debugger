var Main = (function () {
    function Main(string) {
        this._texte = string;
    }
    Main.prototype.log = function () {
        console.log(this._texte);
    };
    Object.defineProperty(Main.prototype, "texte", {
        set: function (string) {
            this._texte = string;
        },
        enumerable: false,
        configurable: true
    });
    return Main;
}());
var m = new Main("Hello World");
m.log();
m.texte = "See ya";
var test = new Test();
m.log();
//# sourceMappingURL=main.js.map