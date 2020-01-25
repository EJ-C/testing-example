const googleSearch = require('./script');

dbMock = [
'dog.com',
'cheesepuff.com',
'disnet.com',
'dogpictures.com'
];


describe('googleSearch', () => {
	it('this is a test', () => {
		expect('hellooo').toBe('hellooo')
		googleSearch('testtest', dbMock);
	})
	it('is weird searching google test', () => {
		expect(googleSearch('testtest', dbMock)).toEqual([]);
		expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
	})

	it('work with undefined and null input', () => {
		expect(googleSearch(undefined, dbMock)).toEqual([]);
		expect(googleSearch(null, dbMock)).toEqual([]);
	})

	it('does not return more than 3 matches', () => {
		expect(googleSearch('.com', dbMock).length).toEqual(3);
	})
})
