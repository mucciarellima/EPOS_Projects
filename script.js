
// Function to search for customers
var searchCustomers = function(){
    var customers = EposnowAPI.Customers.getAllWhere('Surname', 'like', $('#customerName').val());
    var data = { target: customers };
    var template = _.template($("#tpl-customers").text());
    $("#searchResult").html(template(data));
}
var token = "MjdCQzgwMENGQjBGNDE5RkJCODkxOUM2NjY4MzFEOUU6QkEwMTRBQjhFRjA0NDMyQUE0QTE0QUI4QTVFOTFDRDQ=";
