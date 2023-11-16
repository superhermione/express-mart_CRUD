function deleteCategory(categoryID) {
    let link = '/delete-category/';
    let data = {
        categoryID: categoryID
    };
  
    $.ajax({
      url: link,
      type: 'DELETE',
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      success: function(result) {
        deleteRow(categoryID);
      }
    });
  }
  
  function deleteRow(categoryID){
      let table = document.getElementById("category-table");
      for (let i = 0, row; row = table.rows[i]; i++) {
         if (table.rows[i].getAttribute("data-value") == categoryID) {
              table.deleteRow(i);
              break;
         }
      }
  }