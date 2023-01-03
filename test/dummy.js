//const should=require('chai').should()
const assert=require('assert')

describe('Aspect  Check',function(){
    let name="aarvi"
    let list = {
        item:[{
            'id':'101',
            "name":'aarvi',
            'email':"aarvi@gmail.com"

        }],
        title:'Emp Detail'
    }
    it('Check String',function(){
        assert.typeOf(name,'string')
    })
})