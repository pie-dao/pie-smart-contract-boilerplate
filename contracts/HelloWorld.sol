pragma solidity 0.6.4;

contract HelloWorld {

    string internal message;

    function setMessage(string memory _message) public {
        message = _message;
    }

    function getMessage() external view returns(string memory) {
        return message;
    }

    function throwError() external {
        require(false, "Hello Error");
    }

}