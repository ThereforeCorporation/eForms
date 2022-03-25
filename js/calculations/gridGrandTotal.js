//To calculate a grand total of all lines from your grid
//editGrid = API Name of Edit Grid Component
//totalPrice = API Name of column to sum up
value = data.editGrid.reduce((a, b) => a + (b['totalPrice'] || 0), 0);