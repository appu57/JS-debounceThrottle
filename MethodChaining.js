class language{
    constructor(name)
    {
        this.name=name;
        this.env='';
        this.id=''
    }
    setEnv(env)
    {
        this.env=env;
    }
    setId(id)
    {
        this.id=id;
    }
}

const javascript = new language("Javascript");
javascript.setEnv("browseer");
javascript.setId("0");
console.log(javascript)
/* With  Method chaining*/

class languageChaining{
    constructor(name)
    {
        this.name=name;
        this.env='';
        this.id=''
    }
    setEnv(env)
    {
        this.env=env;
        return this 
    }
    setId(id)
    {
        this.id=id;
        return this
    }
}

const javascriptLanguage = new languageChaining("Javascript");
javascriptLanguage.setEnv("Scripting").setId("0"); //adding return this helps us call each method in single reference
console.log(javascriptLanguage)

