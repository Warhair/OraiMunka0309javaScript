QUnit.module("leptetes metodus tesztelese", function() {
  QUnit.test("leptetes letezik e", function(assert) {
    assert.ok(leptetes, "Létezik a leptetes");
  });
  QUnit.test("leptetes letezik e", function(assert) {
    assert.ok(typeof leptetes == "function", "a leptetes fuggvény");
  });
  QUnit.test("leptetes(1, 2)", function(assert) {
    assert.equal(leptetes(1, 2), 3);
  });
  QUnit.test("leptetes(1, 0)", function(assert) {
    assert.equal(leptetes(1, 0), 1);
  });
  QUnit.test("leptetes(1, lista.length-1)", function(assert) {
    assert.equal(leptetes(1, lista.length - 1), 0);
  });
  QUnit.test("leptetes(-1, 2)", function(assert) {
    assert.equal(leptetes(-1, 2), 1);
  });
  QUnit.test("leptetes(-1, 0)", function(assert) {
    assert.equal(leptetes(-1, 0), lista.length - 1);
  });
  QUnit.test("leptetes(-1, lista.length-1)", function(assert) {
    assert.equal(leptetes(-1, lista.length - 1), lista.length - 2);
  });
});
QUnit.module("osszeallit metodus tesztelese", function() {
  QUnit.test("osszealitas letezik e", function(assert) {
    assert.ok(osszealitas, "Létezik a osszealitas");
  });
  QUnit.test("osszealitas letezik e", function(assert) {
    assert.ok(typeof osszealitas == "function", "a osszealitas fuggvény");
  });
  QUnit.test("lista resze", function (assert){
    let lista = [
        "kepek/alszik.jpg",
        "kepek/bocsok.jpg",
        "kepek/cirkusz.jpg",
        "kepek/eszik.jpg",
        "kepek/integet.jpg",
        "kepek/maci.jpg",
        "kepek/medve.jpg",
        "kepek/taj.jpg",
      ];
      assert.equal(
        osszealitas(lista),
        '<div><img src="kepek/alszik.jpg" alt=""></div><div><img src="kepek/bocsok.jpg" alt=""></div><div><img src="kepek/cirkusz.jpg" alt=""></div><div><img src="kepek/eszik.jpg" alt=""></div><div><img src="kepek/integet.jpg" alt=""></div><div><img src="kepek/maci.jpg" alt=""></div><div><img src="kepek/medve.jpg" alt=""></div><div><img src="kepek/taj.jpg" alt=""></div>'
      );
    });
  QUnit.test("ures lista", function (assert){
        lista = [];
        assert.equal(osszealitas(), "");
  });
  QUnit.test("egy elemu lista", function(assert){
        lista = ["kepek/alszik.jpg"];
        assert.equal(
            osszealitas(lista),
            '<div><img src="kepek/alszik.jpg" alt=""></div>'
        );
  });
});
