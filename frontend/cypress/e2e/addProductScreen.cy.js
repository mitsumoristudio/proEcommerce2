describe('Add Product', () => {
    it('Should test all the functionality and placeholders', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('[data-cx="input-email"]').type("admin@gmail.com")
        cy.get('[data-cx="input-password"]').type("123456")
        cy.get('[data-cy="submit"]').click()

        cy.visit('http://localhost:3000/admin/addProduct');
        cy.get('[data-cy="addProduct-title"]').should("exist")
            .should('have.text', "Add new product");
        cy.get('[data-cy="product-headline"]').should("exist")
            .should('have.text', 'Product Name');
        cy.get('[data-cy="price-headline"]').should("exist")
            .should('have.text', 'Price $');
        cy.get('[data-cy="brand-headline"]').should("exist")
            .should('have.text', 'Brand Name');
        cy.get('[data-cy="count-headline"]').should("exist")
            .should('have.text', 'Count In Stock');
        cy.get('[data-cy="category-headline"]').should("exist")
            .should('have.text', 'Category');
        cy.get('[data-cy="submit"]').click()
        cy.get('[data-cy="cancel"]').click()
    })
    it("should test all the types and placeholders", () => {
        cy.visit('http://localhost:3000/admin/addProduct');
        cy.get('[data-cx="input-product"]').type("Sony Playstation 5")
        cy.get('[data-cx="input-price"]').type("150")
        cy.get('[data-cx="input-brand_name"]').type("Muji")
        cy.get('[data-cx="input-count]').type("2")
        cy.get('[data-cx="input-cateogy"]').type("Electronics")
        cy.url().should("contain", "/admin/producttable");




    })
})