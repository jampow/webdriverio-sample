const expect = require('chai').expect

describe('Tela de cadastro', function(){
    before(function(){
        browser.url('/account/register')
    })

    it('Preenche todo o formulário', function(){
        $('#txtName').setValue('Gian')
        $('#txtSurname').setValue('Soares')
        $('#txtEmail').setValue('jtesrte@dkfjsldkr.com')
        $('#txtPassword').setValue('teste123')
    })

    it('Valida o valor padrão', function(){
        const txtOccup = $('#txtOccupation .text').getText()
        expect(txtOccup).to.be.equal('Executivo')
    })

    it('Seleciona Empreendedor', function(){
        const fieldOccup = $('#txtOccupation')
        fieldOccup.click()

        const occupOptions = $$('#txtOccupation .item')
        occupOptions[1].click()

        const txtOccup = $('#txtOccupation .text').getText()
        expect(txtOccup).to.be.equal('Empreendedor')
    })

    it('Clica em cadastrar', function(){
        $('#btnSignup').click()

        browser.waitUntil(function(){
            return browser.getUrl() === 'http://devs.localhost:8080/account/register-success'
        }, 5000)

        const title = $('h1').getText()
        expect(title).to.be.equal('Cadastro Efetuado')
    })

})