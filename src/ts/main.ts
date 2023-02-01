class Main{
    private _texte : String
    constructor(string: String){
        this._texte = string;
    }

    log(){
        console.log(this._texte);
    }

    set texte(string: String){
        this._texte = string;
    }
}

const m = new Main("Hello World")
m.log()
m.texte = "See ya"
const test = new Test()
m.log()