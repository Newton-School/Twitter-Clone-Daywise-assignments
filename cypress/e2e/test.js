describe('Employee card', () => {
    it('displays the employee card with correct details', () => {
      cy.visit('employee-card.html') // Replace 'employee-card.html' with the actual path to your HTML file
  
      // Check that the image is displayed
      cy.get('img').should('be.visible')
  
      // Check that the employee ID is present and correct
      cy.contains('Employee ID: 12345').should('exist')
  
      // Check that the employee name is present and correct
      cy.get('h1').contains('John Doe').should('exist')
  
      // Check that the employee role is present and correct
      cy.get('h1').contains('Software Engineer').should('exist')
    })
  })