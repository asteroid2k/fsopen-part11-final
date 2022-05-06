describe('Blogs', function () {
  it('sign in page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('Log In')
    cy.contains('Username')
  })
})
