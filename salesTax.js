// GIVEB
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

// GIVEN - This is an array of objects.
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// Implement your code here
function salesTaxReport(salesData, taxRates) {
  // Start with empty final results array.
  var results = {};

  // Look into companySalesData array
  // Each element is an object of {name, province, and sales-array}
  salesData.forEach(function (element) {

    //Assign the name and province of each element to a var
    var companyName = element.name;
    var provinceName = element.province;

    // Here we create the properties of the results object.
    // Note, each property here is an object on its own.
    // Check to see if the property has been created first,
    // if undefined, then add the properties to the object with 0 values.
    if (results[companyName] === undefined) {
        results[companyName] = {
        totalSales: 0,
        totalTaxes: 0
      };
    }

    // Assign the correct values to the sales and tax properties.
    // Add up the elements inside the sales-array property of the the
    // companySalesData object.
    element.sales.forEach(function (element) {
      results[companyName].totalSales += element;
      results[companyName].totalTaxes += element * taxRates[provinceName];
    });
  });

  //Return final report
  return results;
}

var results = salesTaxReport(companySalesData, salesTaxRates);
console.log(results);

function newResultObj () {
  this.totalSales = 0;
  this.totalTaxes = 0;
}

/* Expected Results:
var results =
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/