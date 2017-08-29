var foo='bar';

(function() {
  // TODO: Hardcoded value.
  var testCase1 = {
    return true;
  };

  var testCase2 = {
    return false;
  };

  var testCase3 = {
    return true;
  };
  
  var automator = new Automator();
  automator.run(testCase1);
  automator.run(testCase2);

})();
