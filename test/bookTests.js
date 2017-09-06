var book =require('../lib/book.js').book;

exports['Should contain one page after add'] = function(test){
	book.addPage('some content');
	
	test.equal(book.getPageCount(),1);
	test.done();
	
}