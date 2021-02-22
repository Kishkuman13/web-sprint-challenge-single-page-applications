describe('Pizza Order Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza')
  })

  const crustInput = () => cy.get('input[value=thin]')
  const sizeInput = () => cy.get('select')
  const top1Input = () => cy.get('input[name=pepperoni]')
  const top2Input = () => cy.get('input[name=ham]')
  const top3Input = () => cy.get('input[name=olives]')
  const top4Input = () => cy.get('input[name=extra]')
  const nameInput = () => cy.get('input[name=custname]')
  const phoneInput = () => cy.get('input[name=phone]')
  const addressInput = () => cy.get('input[name=address]')
  const instructionsInput = () => cy.get('textarea[name=specialIns]')
  const submitBtn = () => cy.get('button')

  describe('Can add text to input fields', () => {
    it('Name input', () => {
      nameInput()
        .should('exist')
        .type('Bob')
        .should('have.value','Bob')
    })
    it('Phone input', () => {
      phoneInput()
        .should('exist')
        .type('1234567')
        .should('have.value','1234567')
    })
    it('Address input', () => {
      addressInput()
        .should('exist')
        .type('this street')
        .should('have.value','this street')
    })
    it('Special instruction input', () => {
      instructionsInput()
        .should('exist')
        .type('draw a dino')
        .should('have.value','draw a dino')
    })
  })
  describe('Can select multiple toppings',() => {
    it('Select toppings', () => {
      top1Input()
        .click()
      top2Input()
        .click()
      top3Input()
        .click()
      top4Input()
        .click()
      
      top1Input()
        .should('have.value','on')
      top2Input()
      .should('have.value','on')
      top3Input()
      .should('have.value','on')
      top4Input()
      .should('have.value','on')

    })
  })
  describe('Can submit form', () => {
    it('Fill form and submit', () => {
      crustInput()
      .click()
      sizeInput()
      .select('Large')
      top1Input()
      .click()
      top2Input()
      .click()
      nameInput()
        .type('Bob')
      phoneInput()
        .type('1234567')
      addressInput()
        .type('this street')
      submitBtn()
      .click()
      cy.contains('Thank you for your order!')

    })
  })

})