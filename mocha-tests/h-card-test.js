/*
Mocha integration test from: h-card.html
The test was built on Fri Jan 04 2013 14:24:02 GMT+0000 (GMT)
*/

var assert = chai.assert;


describe('Just a name (h-card parsing test)', function() {
   var htmlFragment = "\n<p class=\"h-card\">Frances Berriman</p>\n"
   var found = helper.parseHTML(htmlFragment,'http://example.com/')
   var expected = {"items":[{"type":["h-card"],"properties":{"name":["Frances Berriman"]}}]}

   it("found.items[0].type[0]", function(){
      assert.equal(found.items[0].type[0].toString(), "h-card");
   })

   it("found.items[0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["name"][0].toString(), "Frances Berriman");
   })

})




describe('Just a hyperlink (h-card parsing test)', function() {
   var htmlFragment = "\n<a class=\"h-card\" href=\"http://benward.me/\">Ben Ward</a>\n"
   var found = helper.parseHTML(htmlFragment,'http://example.com/')
   var expected = {"items":[{"type":["h-card"],"properties":{"name":["Ben Ward"],"url":["http://benward.me/"]}}]}

   it("found.items[0].type[0]", function(){
      assert.equal(found.items[0].type[0].toString(), "h-card");
   })

   it("found.items[0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["name"][0].toString(), "Ben Ward");
   })

   it("found.items[0].properties['url'][0]", function(){
      assert.equal(found.items[0].properties["url"][0].toString(), "http://benward.me/");
   })

})




describe('A hyperlinked photo (h-card parsing test)', function() {
   var htmlFragment = "\n    <a class=\"h-card\" href=\"http://rohit.khare.org/\">\n   <img alt=\"Rohit Khare\" src=\"https://twimg0-a.akamaihd.net/profile_images/53307499/180px-Rohit-sq.jpg\">\n</a>\n"
   var found = helper.parseHTML(htmlFragment,'http://example.com/')
   var expected = {"items":[{"type":["h-card"],"properties":{"name":["Rohit Khare"],"photo":["https://twimg0-a.akamaihd.net/profile_images/53307499/180px-Rohit-sq.jpg"],"url":["http://rohit.khare.org/"]}}]}

   it("found.items[0].type[0]", function(){
      assert.equal(found.items[0].type[0].toString(), "h-card");
   })

   it("found.items[0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["name"][0].toString(), "Rohit Khare");
   })

   it("found.items[0].properties['photo'][0]", function(){
      assert.equal(found.items[0].properties["photo"][0].toString(), "https://twimg0-a.akamaihd.net/profile_images/53307499/180px-Rohit-sq.jpg");
   })

   it("found.items[0].properties['url'][0]", function(){
      assert.equal(found.items[0].properties["url"][0].toString(), "http://rohit.khare.org/");
   })

})




describe('An extended description (h-card parsing test)', function() {
   var htmlFragment = "\n<div class=\"h-card\">\n  <img class=\"u-photo\" alt=\"photo of Mitchell\" src=\"http://blog.mozilla.org/press/files/2012/04/mitchell-baker.jpg\">\n  <p>\n    <a class=\"p-name u-url\" href=\"http://blog.lizardwrangler.com/\">Mitchell Baker</a>\n    (<a class=\"u-url\" href=\"https://twitter.com/MitchellBaker\">@MitchellBaker</a>)\n    <span class=\"p-org\">Mozilla Foundation</span>\n  </p>\n  <p class=\"p-note\">Mitchell is responsible for setting the direction and scope of the Mozilla Foundation and its activities.</p>\n  <p><span class=\"p-category\">Strategy</span> and <span class=\"p-category\">Leadership</span></p>\n</div>\n"
   var found = helper.parseHTML(htmlFragment,'http://example.com/')
   var expected = {"items":[{"type":["h-card"],"properties":{"photo":["http://blog.mozilla.org/press/files/2012/04/mitchell-baker.jpg"],"url":["http://blog.lizardwrangler.com/","https://twitter.com/MitchellBaker"],"name":["Mitchell Baker"],"org":["Mozilla Foundation"],"note":["Mitchell is responsible for setting the direction and scope of the Mozilla Foundation and its activities."],"category":["Strategy","Leadership"]}}]}

   it("found.items[0].type[0]", function(){
      assert.equal(found.items[0].type[0].toString(), "h-card");
   })

   it("found.items[0].properties['photo'][0]", function(){
      assert.equal(found.items[0].properties["photo"][0].toString(), "http://blog.mozilla.org/press/files/2012/04/mitchell-baker.jpg");
   })

   it("found.items[0].properties['url'][0]", function(){
      assert.equal(found.items[0].properties["url"][0].toString(), "http://blog.lizardwrangler.com/");
   })

   it("found.items[0].properties['url'][1]", function(){
      assert.equal(found.items[0].properties["url"][1].toString(), "https://twitter.com/MitchellBaker");
   })

   it("found.items[0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["name"][0].toString(), "Mitchell Baker");
   })

   it("found.items[0].properties['org'][0]", function(){
      assert.equal(found.items[0].properties["org"][0].toString(), "Mozilla Foundation");
   })

   it("found.items[0].properties['note'][0]", function(){
      assert.equal(found.items[0].properties["note"][0].toString(), "Mitchell is responsible for setting the direction and scope of the Mozilla Foundation and its activities.");
   })

   it("found.items[0].properties['category'][0]", function(){
      assert.equal(found.items[0].properties["category"][0].toString(), "Strategy");
   })

   it("found.items[0].properties['category'][1]", function(){
      assert.equal(found.items[0].properties["category"][1].toString(), "Leadership");
   })

})




describe('Organization marked-up with h-card (h-card parsing test)', function() {
   var htmlFragment = "\n<div class=\"h-card\">\n  <a class=\"p-name u-url\" href=\"http://blog.lizardwrangler.com/\">Mitchell Baker</a> \n  (<a class=\"p-org h-card\" href=\"http://mozilla.org/\">Mozilla Foundation</a>)\n</div>\n"
   var found = helper.parseHTML(htmlFragment,'http://example.com/')
   var expected = {"items":[{"type":["h-card"],"properties":{"url":["http://blog.lizardwrangler.com/"],"name":["Mitchell Baker"],"org":[{"value":"Mozilla Foundation","type":["h-card"],"properties":{"name":["Mozilla Foundation"],"url":["http://mozilla.org/"]}}]}},{"type":["h-card"],"properties":{"name":["Mozilla Foundation"],"url":["http://mozilla.org/"]}}]}

   it("found.items[0].type[0]", function(){
      assert.equal(found.items[0].type[0].toString(), "h-card");
   })

   it("found.items[0].properties['url'][0]", function(){
      assert.equal(found.items[0].properties["url"][0].toString(), "http://blog.lizardwrangler.com/");
   })

   it("found.items[0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["name"][0].toString(), "Mitchell Baker");
   })

   it("found.items[0].properties['org'][0].value", function(){
      assert.equal(found.items[0].properties["org"][0].value, "Mozilla Foundation");
   })

   it("found.items[0].properties['org'][0].type[0]", function(){
      assert.equal(found.items[0].properties["org"][0].type[0].toString(), "h-card");
   })

   it("found.items[0].properties['org'][0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["org"][0].properties["name"][0].toString(), "Mozilla Foundation");
   })

   it("found.items[0].properties['org'][0].properties['url'][0]", function(){
      assert.equal(found.items[0].properties["org"][0].properties["url"][0].toString(), "http://mozilla.org/");
   })

})




describe('Organization marked-up with h-card and h-org (h-card parsing test)', function() {
   var htmlFragment = "\n<div class=\"h-card\">\n  <a class=\"p-name u-url\" href=\"http://blog.lizardwrangler.com/\">Mitchell Baker</a> \n  (<a class=\"p-org h-card h-org\" href=\"http://mozilla.org/\">Mozilla Foundation</a>)\n</div>\n"
   var found = helper.parseHTML(htmlFragment,'http://example.com/')
   var expected = {"items":[{"type":["h-card"],"properties":{"name":["Mitchell Baker"],"url":["http://blog.lizardwrangler.com/"],"org":[{"value":"Mozilla Foundation","type":["h-card","h-org"],"properties":{"name":["Mozilla Foundation"],"url":["http://mozilla.org/"]}}]}},{"type":["h-card"],"properties":{"name":["Mozilla Foundation"],"url":["http://mozilla.org/"]}},{"type":["h-org"],"properties":{"name":["Mozilla Foundation"]}}]}

   it("found.items[0].type[0]", function(){
      assert.equal(found.items[0].type[0].toString(), "h-card");
   })

   it("found.items[0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["name"][0].toString(), "Mitchell Baker");
   })

   it("found.items[0].properties['url'][0]", function(){
      assert.equal(found.items[0].properties["url"][0].toString(), "http://blog.lizardwrangler.com/");
   })

   it("found.items[0].properties['org'][0].value", function(){
      assert.equal(found.items[0].properties["org"][0].value, "Mozilla Foundation");
   })

   it("found.items[0].properties['org'][0].type[0]", function(){
      assert.equal(found.items[0].properties["org"][0].type[0].toString(), "h-card");
   })

   it("found.items[0].properties['org'][0].type[1]", function(){
      assert.equal(found.items[0].properties["org"][0].type[1].toString(), "h-org");
   })

   it("found.items[0].properties['org'][0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["org"][0].properties["name"][0].toString(), "Mozilla Foundation");
   })

   it("found.items[0].properties['org'][0].properties['url'][0]", function(){
      assert.equal(found.items[0].properties["org"][0].properties["url"][0].toString(), "http://mozilla.org/");
   })

})




describe('Additional nested microformats (h-card parsing test)', function() {
   var htmlFragment = "\n<div class=\"h-card\">\n  <a class=\"p-name u-url\" href=\"http://blog.lizardwrangler.com/\">Mitchell Baker</a> \n  (<a class=\"h-org h-card\" href=\"http://mozilla.org/\">Mozilla Foundation</a>)\n</div>\n"
   var found = helper.parseHTML(htmlFragment,'http://example.com/')
   var expected = {"items":[{"type":["h-card"],"properties":{"name":["Mitchell Baker"],"url":["http://blog.lizardwrangler.com/"]},"children":[{"type":["h-card","h-org"],"properties":{"name":["Mozilla Foundation"],"url":["http://mozilla.org/"]}}]},{"type":["h-card"],"properties":{"name":["Mozilla Foundation"],"url":["http://mozilla.org/"]}},{"type":["h-org"],"properties":{"name":["Mozilla Foundation"]}}]}

   it("found.items[0].type[0]", function(){
      assert.equal(found.items[0].type[0].toString(), "h-card");
   })

   it("found.items[0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["name"][0].toString(), "Mitchell Baker");
   })

   it("found.items[0].properties['url'][0]", function(){
      assert.equal(found.items[0].properties["url"][0].toString(), "http://blog.lizardwrangler.com/");
   })

})




