const {normalizeURL} =require ('./crawl.js')
const {test , expect} =require("@jest/globals")
//accept the url with the protocol
test('normalizeUrl',()=>{
    const input='http://boot.dev/path'
  
    const actual = normalizeURL(input)
    const expected ='boot.dev/path'
    expect(actual).toEqual(expected) 
})
//accept url with the / in the end
test('normalizeUrl',()=>{
    const input='http://boot.dev/path/'
  
    const actual = normalizeURL(input)
    const expected ='boot.dev/path'
    expect(actual).toEqual(expected) 
})

