"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var splashScreen_1 = require("./main/splashScreen");
var react_2 = require("@chakra-ui/react");
function App() {
    return (<react_2.ChakraProvider>
      <splashScreen_1["default"]></splashScreen_1["default"]>
    </react_2.ChakraProvider>);
}
exports["default"] = App;
//# sourceMappingURL=App.js.map