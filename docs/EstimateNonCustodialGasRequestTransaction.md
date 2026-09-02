# EstimateNonCustodialGasRequestTransaction

Required for EVM chains. Optional for non-EVM (ignored). Supports 1) Token transfer { from, tokenAddress, to, amount }, 2) Native transfer { from, to, value }, 3) Raw { from, to, value, data }. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **string** | Sender address | [default to undefined]
**to** | **string** | For native transfers: recipient address. For token transfers: recipient address (tokenAddress must be provided separately). For raw format: contract or recipient address.  | [optional] [default to undefined]
**value** | **string** | Amount in native currency (ETH/BNB/MATIC). Can be provided as decimal string (e.g., \&quot;1.0\&quot;) or wei string. Required for native transfers.  | [optional] [default to undefined]
**data** | **string** | Raw transaction data (hex string starting with 0x). Used for raw format or contract calls. For token transfers, this is auto-generated from tokenAddress, to, and amount.  | [optional] [default to undefined]
**tokenAddress** | **string** | Token contract address (for token transfers). When provided with \&#39;amount\&#39;, automatically encodes the transfer.  | [optional] [default to undefined]
**amount** | **string** | Token amount in human-readable format (e.g., \&quot;1.0\&quot; for 1 token). Used with tokenAddress for user-friendly token transfers. Automatically converted to token units based on token decimals.  | [optional] [default to undefined]

## Example

```typescript
import { EstimateNonCustodialGasRequestTransaction } from 'mudbase-sdk';

const instance: EstimateNonCustodialGasRequestTransaction = {
    from,
    to,
    value,
    data,
    tokenAddress,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
