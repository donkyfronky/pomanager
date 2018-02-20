class PoImporter {
    constructor(filepath) {
        this.filepath = filepath;
        this.parser = require("gettext-parser");
    }

    getProject(name) {
        return 'dario';
    }

    sayHelloInEnglish(){
        return 'frocio';
    }
}

module.exports = PoImporter;