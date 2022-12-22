"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
require("./styles.css");

var SplashScreen = function () {
    return (<react_1.Flex minWidth='max-content' alignItems='center' gap='2'>
        <react_1.Box p='2'>
          <react_1.Heading size='md'>Chakra App</react_1.Heading>
        </react_1.Box>
        <react_1.Spacer />
        <react_1.ButtonGroup gap='2'>
          <react_1.Button colorScheme='teal'>Sign Up</react_1.Button>
          <react_1.Button colorScheme='teal'>Log in</react_1.Button>
        </react_1.ButtonGroup>
      </react_1.Flex>);
};
exports["default"] = SplashScreen;
//# sourceMappingURL=index.js.map