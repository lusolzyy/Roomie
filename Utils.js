var outputAsJSON = function(obj) {
    console.log(JSON.stringify(obj, null, "    "));
}

module.exports = {
    prettyPrintJson: outputAsJSON
}
