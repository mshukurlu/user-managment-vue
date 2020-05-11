class Form
{
    constructor(data)
    {
        this.originalData = data;

       for(let field in data)
       {
           this[field] = data[field]
       }
    }

    data()
    {
        const data = Object.assign({},this);

        return data;
    }


    reset()
    {
        console.log('reset');
        for(let field in this.originalData)
        {
            this[field] = ''
        }
    }
}

export default Form;