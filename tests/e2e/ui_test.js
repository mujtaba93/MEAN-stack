describe('MEAN Stack APP UI test case', function () {

    it('should display correct title', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:9000');
        expect(element(by.tagName('H1')).getText()).toContain('MEAN Stack Demo');
    });

    it('should display correct description', function () {
        expect(element.all(by.tagName('p')).get(0).getText()).toContain('Node JS');
    });

    it('should display correct title for books page', function () {
        browser.waitForAngularEnabled(true);
        browser.get('http://localhost:9000/public/views/view_books.html');
        expect(element.all(by.tagName('th')).get(0).getText()).toContain('Book Name');
        expect(element.all(by.tagName('th')).get(1).getText()).toContain('Book Author');
        expect(element.all(by.tagName('th')).get(2).getText()).toContain('Genre');
        expect(element.all(by.tagName('th')).get(3).getText()).toContain('Read');
    });

    it('should check if buttons are populated', function () {
        expect(element.all(by.tagName('a')).get(0).getText()).toContain('DETAILS');
    });
});

