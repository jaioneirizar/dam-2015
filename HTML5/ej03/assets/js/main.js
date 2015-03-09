window.onload = function() {

    var input = document.querySelectorAll("input, textarea"),
        storage = sessionStorage,
        //si queremos que funcione en local
        //storage=localStorage;
        prefix = "ej03_prefix_";

    function saveText() {
        storage.setItem(prefix + this.name, this.value);

    }

    for (var i = input.length - 1; i >= 0; i--) {
        input.item(i).addEventListener("input", saveText);
    }
    var showData = function(key, value) {
        for (var i = input.length - 1; i >= 0; i--) {
            var name = key.replace(prefix, '');
            if (input.item(i).namme === name) {
                input.item(i).value = value;
            }
        }

    };

    if (storage.length) {
        for (var j = storage.length - 1; j >= 0; j--) {
            var key = storage.key(j);
            showData(key, storage.getItem(key));
        }
    }

    var handleStorage = function(e) {
        console.log(e);
        showData(e.key, e.newValue);
    };

    window.addEventListener("storage", handleStorage);

};
