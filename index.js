const fs = require("fs");
const { circleArea, circleCircumference } = require("./circle");

console.log(circleCircumference(6), circleArea(5));

//fs modülünü kullanarak employees.json dosyasini olusturalim

fs.writeFile(
  "employees.json",
  '{ "name": "Employee 1 Name", "salary": 2000 }',
  "utf8",
  (err) => {
    if (err) throw err;
    console.log("Dosya olusturuldu");
  }
);

fs.readFile("./employees.json", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("Datalar okunuyor:", data);
});

fs.appendFile(
  "employees.json",
  '{"name":"Employee 2","salary":5000}',
  (err) => {
    if (err) throw err;
    console.log("Dosyalar güncellendi");
  }
);

fs.unlink("employees.json", (err) => {
  if (err) throw err;
  console.log("dosya basarili bir sekilde silindi");
});
