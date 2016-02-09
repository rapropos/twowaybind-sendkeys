describe('twoway-binding fights with sendkeys', function() {

    var input = "abcdefghijkl";

    beforeEach(function() {
       browser.get("http://localhost:3000");
    });

    it('should be happy using a control', function() {
        element(by.id('happyInput')).sendKeys(input);
        expect(element(by.id('happyValue')).getText()).toEqual(input);
    });

    it('will try using two-way binding', function() {
        element(by.id('sadInput')).sendKeys(input);
        expect(element(by.id('sadValue')).getText()).toEqual(input);
    });
});