//var Customers = require('./../controllers/customers');

//

module.exports.init = function(api_key, Logger) {

    _api_key = api_key;

    // TEST

    //Customers.list().then(function(result) {

    //    Logger.log('Checkout: Connected');
        //Logger.log(result.data[0].cards);

        //Customers.delete('cust_022BE1A4-189F-48C2-8523-03697B71D8EB');

    //}).catch(function(error) {

    //    Logger.error('Checkout: Error');

    //});

};

//

var _namespace;
var _api_key;

module.exports.namespace = function() {
    return _namespace;
};

module.exports.api_key = function() {
    return _api_key;
};
