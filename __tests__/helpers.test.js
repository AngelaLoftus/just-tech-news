const {format_date, format_plural, format_url} = require('../utils/helpers')
 
test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');

});

//test to check that format_plural() correctly pluralizes words
test('expect format_plural to correcly pluralize words', () =>{
    const animal= format_plural("tiger", 2);
    const animal2 = format_plural("lion", 1);

    expect(animal).toBe("tigers");
    expect(animal2).toBe("lion")
})
 

//test to shorten URLS
test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect (url2).toBe('coolstuff.com');
    expect (url3).toBe('google.com');
});
module