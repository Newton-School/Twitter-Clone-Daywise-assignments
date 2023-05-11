// describe('Employee card', () => {
//   it('displays the employee card with correct details', () => {
//     cy.visit('/Day1/index.html') 
//     cy.get('img').should('be.visible')
//     cy.get('img')
//       .should('have.attr', 'src')
//       .should('include', 'https://img.freepik.com/premium-vector/portrait-beautiful-young-woman-with-short-wavy-hair_478440-368.jpg')
//     cy.get('img')
//       .should('have.attr', 'alt')
//       .should('include', 'Profile Image')
//     cy.get('h1').contains('@sophia').should('exist')
//     cy.get('h1').contains('Sophia Smith').should('exist')
//     cy.get('h1').contains('Writes about tech and design').should('exist')
//   })
// })


describe('Profile', () => {
  it('displays the correct name', () => {
    cy.visit('./Day2/index.html')
    cy.get('.profile h1').should('contain', 'Sophia Smith')
  })

  it('displays the correct username', () => {
    cy.visit('./Day2/index.html')
    cy.get('.profile h2').should('contain', '@sophia')
  })

  it('displays the correct description', () => {
    cy.visit('./Day2/index.html')
    cy.get('.profile p').should('contain', 'Writes about tech and design')
  })

  it('displays the profile image', () => {
    cy.visit('./Day2/index.html')
    cy.get('.profile img').should('have.attr', 'src', 'https://img.freepik.com/premium-vector/portrait-beautiful-young-woman-with-short-wavy-hair_478440-368.jpg')
  })

  it('has the correct styles', () => {
    cy.visit('./Day2/index.html')
    cy.get('.profile')
      .should('have.css', 'width', '250px')
      .and('have.css', 'font-family', 'Roboto, sans-serif')
    cy.get('.profile h1').should('have.css', 'font-size', '23px')
    cy.get('.profile h2').should('have.css', 'font-size', '15px')
    cy.get('.profile p').should('have.css', 'font-size', '10px')
  })
})


// describe('Profile', () => {
//   it('displays the correct information', () => {
//     cy.visit('Day2/index.html') 
    
//     cy.get('.profile')
//       .should('have.css', 'border', '2px solid rgb(168, 168, 168)')
//       .and('have.css', 'width', '250px')
//       .and('have.css', 'font-family', 'Roboto, sans-serif')

//     cy.get('.profile img')
//       .should('have.attr', 'src', 'https://img.freepik.com/premium-vector/portrait-beautiful-young-woman-with-short-wavy-hair_478440-368.jpg')
//       .and('have.attr', 'alt', 'Profile Image')
//       .and('have.css', 'border-radius', '50%')
//       .and('have.css', 'width', '4rem')

//     cy.get('.profile h1')
//       .should('have.text', 'Sophia Smith')
//       .and('have.css', 'font-size', '23px')

//     cy.get('.profile h2')
//       .should('have.text', '@sophia')
//       .and('have.css', 'font-size', '15px')

//     cy.get('.profile p')
//       .eq(0)
//       .should('have.text', 'Writes about tech and design')
//       .and('have.css', 'font-size', '10px')

//     cy.get('.profile h3')
//       .eq(0)
//       .should('have.text', '6,664')
//     cy.get('.profile p')
//       .eq(1)
//       .should('have.text', 'Following')
//     cy.get('.profile h3')
//       .eq(1)
//       .should('have.text', '9,991')
//     cy.get('.profile p')
//       .eq(2)
//       .should('have.text', 'Followers')

//     cy.get('.profile p')
//       .eq(3)
//       .should('have.text', 'My Profile')
//   })
// })
