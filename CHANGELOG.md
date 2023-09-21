# @zoralabs/zora-1155-contracts

## 1.5.0

### Minor Changes

- 09afa85: Adds first minter rewards to zora 1155 contracts.
- 9217e96: Added deterministic contract creation from the Zora1155 factory
- 05566bc: Added the PremintExecutor contract, and updated erc1155 to support delegated minting

### Patch Changes

- b1dbb47: Fix types reference for package export
- 09afa85: Deprecate ZoraCreatorRedeemMinterStrategy at v1.0.1, a newer version will soon be released

## 1.4.0

### Minor Changes

- 5b3fafd: Change permission checks for contracts – fix allowing roles that are not admin assigned to tokenid 0 to apply those roles to any token in the contract.
- 9f6510d: Add support for rewards

  - Add new minting functions supporting rewards
  - Add new "rewards" library

## 1.3.3

### Patch Changes

- 498998f: Added pgn sepolia
  Added pgn mainnet
- cc3b55a: New base mainnet deploy
