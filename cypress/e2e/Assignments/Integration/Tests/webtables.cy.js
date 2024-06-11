describe('web tables', () => {


    it('1st test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('//table[@name="courses"]/tbody/tr/td').each(($el, index, $list)=>{
            let t = $el.text()
            if(t.includes('Python Language')){
                cy.wrap($el).then((msg)=>{
                    cy.log(msg.text())
                })
            }
        })
    })
    it('2nd test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

         cy.wrap($el).next().then((price)=>
             {
                cy.log(price.text())
             })
    })
   
    it.only('2nd element',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('(//table[@id="product"])[2]').each(($el, index, $list)=>{
            let t = $el.text()
            if(t.includes('Ronaldo')){
                let prvelement = $list.eq(index - 1)
                cy.wrap(prvelement).then((prev)=>{
                    cy.log(prev.text())
                })
            }
        })


    })

})


