// include spec/javascripts/helpers/spec_helper.js and app/assets/javascripts/foo.js
//= require helpers/spec_helper
//= require locations
describe('Map', function() {
  it("recognizes what you clicked", function() {
    expect($('#clicked-state').effect).toBe('highlight', {color: '#C7F464'}, 2000);
  });
});