// describe('Profile page', () => {
//   beforeEach(() => {
//     cy.visit('index.html')
//   })

//   it('should have a profile image with correct styles', () => {
//     cy.get('.profile img')
//       .should('have.css', 'width', '72px')
//       .and('have.css', 'height', '72px')
//       .and('have.css', 'border-radius', '50%')
//   })

//   it('should have a profile header with correct styles', () => {
//     cy.get('.profile-header')
//       .should('have.css', 'text-align', 'center')
//       .and('have.css', 'border-radius', '12px 12px 0px 0px')
//       .and('have.css', 'background', 'rgb(13, 104, 231) none repeat scroll 0% 0% / auto padding-box border-box')
//   })

//   it('should have a profile info section with correct styles', () => {
//     cy.get('.profile-info h1')
//       .should('have.css', 'font-size', '23px')
//       .and('have.css', 'color', 'rgb(245, 248, 250)')
//       .and('have.css', 'font-weight', '300')
//       .and('have.css', 'margin-top', '0px')
//       .and('have.css', 'margin-bottom', '0px')

//     cy.get('.profile-info h2')
//       .should('have.css', 'font-size', '15px')
//       .and('have.css', 'color', 'rgb(101, 119, 134)')
//       .and('have.css', 'margin', '5px 0px')

//     cy.get('.profile-info p')
//       .should('have.css', 'font-size', '13px')
//       .and('have.css', 'color', 'rgb(170, 184, 194)')
//   })
// })




describe('Profile page', () => {
  beforeEach(() => {
    cy.visit('index2.html')
  })

  it('should have a profile image with correct styles', () => {
    cy.get('.profile img')
      .should('have.css', 'width', '72px')
      .and('have.css', 'height', '72px')
      .and('have.css', 'border-radius', '50%')
  })

  it('should have a profile header with correct styles', () => {
    cy.get('.profile-header')
      .should('have.css', 'text-align', 'center')
      .and('have.css', 'border-radius', '12px 12px 0px 0px')
      .and('have.css', 'background', 'rgb(13, 104, 231) none repeat scroll 0% 0% / auto padding-box border-box')
  })

  it('should have a profile info section with correct styles', () => {
    cy.get('.profile-info h1')
      .should('have.css', 'font-size', '23px')
      .and('have.css', 'color', 'rgb(245, 248, 250)')
      .and('have.css', 'font-weight', '300')
      .and('have.css', 'margin-top', '0px')
      .and('have.css', 'margin-bottom', '0px')

    cy.get('.profile-info h2')
      .should('have.css', 'font-size', '15px')
      .and('have.css', 'color', 'rgb(101, 119, 134)')
      .and('have.css', 'margin', '5px 0px')

    cy.get('.profile-info p')
      .should('have.css', 'font-size', '13px')
      .and('have.css', 'color', 'rgb(170, 184, 194)')
  })

  it('should have a stat box with correct styles', () => {
    cy.get('.stat-box')
      .should('have.css', 'padding', '5px 0px')

    cy.get('.stat-box > div')
      .should('have.css', 'text-align', 'center')

    cy.get('.stat-box h3')
      .should('have.css', 'color', 'rgb(245, 248, 250)')
      .should('have.css', 'margin-bottom', '0px')

      cy.get('.stat-box p')
      .should('have.css', 'color', 'rgb(170, 184, 194)')
      .should('have.css', 'margin-top', '8px')

  })

  it('should have a my profile section with correct styles', () => {
    cy.get('.my-profile')
      .should('have.css', 'text-align', 'center')
      .and('have.css', 'padding', '10px 0px')

      cy.get('.my-profile p')
      .should('have.css', 'color', 'rgb(29, 161, 242)')
  })
})