list = [];
QUnit.module("metodusok tesztelese", function () {
    QUnit.text("teljes lista", function (assert) {
        assert.equal(
            osszealitas(lista),
            "<table><tr><td> nev </td><td> rozsa1 </td><td> rozsa2 </td></tr><tr><td> faj </td><td> növény </td><td> növény </td></tr><tr><td> milyen </td><td> virág </td><td> virág </td></tr></table>",
        );
    });

    QUnit.text("sorok szama 3 e", function (assert) {
       assert.equal(
        tableBody = document.querySelector('.coverage-summary tbody'),
        tableBody.querySelectorAll('td'), list.length
       )
        
    });
    
});