//Whitepaper 2.8.2  - Internal Therefore Web Call from Button
var xmlhttp = new XMLHttpRequest();
xmlhttp.open(
  "POST",
  "https://[your_tenant_name].thereforeonline.com/theservice/v0001/restun/ExecuteSingleQuery",
  true
);
xmlhttp.setRequestHeader("Content-Type", "application/json");
xmlhttp.setRequestHeader("Authorization", "Basic [your_auth_info]");
xmlhttp.setRequestHeader("TenantName", "[your_tenant_name]");
var Condition =
  '{"Query":{"CategoryNo": 86,"Conditions": [{"Condition":"' +
  data.date +
  '","FieldNoOrName": 2224,"Mode": 0},{"Condition":"' +
  data.time +
  '","FieldNoOrName": 2227,"Mode": 0},{"Condition": "1","FieldNoOrName":2275,"Mode": 0}]}}}';
xmlhttp.send(Condition);
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4) {
    if (xmlhttp.status == 200) {
      retour = JSON.parse(xmlhttp.response);
      d1R1.value = retour.QueryResult.ResultRows.length;
    }
  }
};
