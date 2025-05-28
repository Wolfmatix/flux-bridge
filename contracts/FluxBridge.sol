
// SPDX-License-Identifier: MIT pragma solidity ^0.8.19;

contract FluxBridge { address public owner; address public feeRecipient; uint256 public feePercent = 100; // 1% = 100 basis points

event BridgeInitiated(
    address indexed from,
    string targetChain,
    address targetAddress,
    uint256 amount,
    uint256 fee
);

constructor(address _feeRecipient) {
    owner = msg.sender;
    feeRecipient = _feeRecipient;
}

receive() external payable {
    revert("Send ETH through bridge() only");
}

function bridge(string memory targetChain, address targetAddress) external payable {
    require(msg.value >= 0.0005 ether, "Min 0.0005 ETH required");

    uint256 fee = (msg.value * feePercent) / 10000;
    uint256 amountAfterFee = msg.value - fee;

    // Forward fee
    (bool sentFee, ) = feeRecipient.call{value: fee}("");
    require(sentFee, "Fee transfer failed");

    // Emit event for off-chain relayer
    emit BridgeInitiated(msg.sender, targetChain, targetAddress, amountAfterFee, fee);
}

function updateFee(uint256 newFeePercent) external {
    require(msg.sender == owner, "Not owner");
    require(newFeePercent <= 500, "Fee too high"); // max 5%
    feePercent = newFeePercent;
}

function updateRecipient(address newRecipient) external {
    require(msg.sender == owner, "Not owner");
    feeRecipient = newRecipient;
}

function withdraw() external {
    require(msg.sender == owner, "Not owner");
    payable(owner).transfer(address(this).balance);
}

}

