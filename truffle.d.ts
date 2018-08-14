// Autogenerated file
// DO NOT EDIT!!!
// You can update it by running `yarn generate-types`

import * as Web3 from "web3"
import * as BigNumber from "bignumber.js"

type Address = string
type TransactionOptions = Partial<Transaction>
type UInt = number | BigNumber.BigNumber

interface Transaction {
  hash: string
  nonce: number
  blockHash: string | null
  blockNumber: number | null
  transactionIndex: number | null
  from: Address | ContractInstance
  to: string | null
  value: UInt
  gasPrice: UInt
  gas: number
  input: string
}

interface ContractInstance {
  address: string
  sendTransaction(options?: TransactionOptions): Promise<void>
}

export interface EncoderInstance extends ContractInstance {
  encodeUInt: {
    (uint: UInt, options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (uint: UInt, options?: TransactionOptions) => Promise<string>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  encodeAddress: {
    (address: Address, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (address: Address, options?: TransactionOptions) => Promise<string>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  encodeString: {
    (str: string, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (str: string, options?: TransactionOptions) => Promise<string>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
}

export interface EncoderContract {
  new: () => Promise<EncoderInstance>
  deployed(): Promise<EncoderInstance>
  at(address: string): EncoderInstance
}

export interface ERC20BasicInstance extends ContractInstance {
  balanceOf: {
    (who: Address, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (
      who: Address,
      options?: TransactionOptions
    ) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  transfer: {
    (to: Address, value: UInt, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (
      to: Address,
      value: UInt,
      options?: TransactionOptions
    ) => Promise<boolean>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
}

export interface ERC20BasicContract {
  new: () => Promise<ERC20BasicInstance>
  deployed(): Promise<ERC20BasicInstance>
  at(address: string): ERC20BasicInstance
}

export interface IdentityInstance extends ContractInstance {
  READ_ONLY: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  KEY_MANAGEMENT: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  ALL_PURPOSES: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  WRITE_ONLY: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  FUNDS_MANAGEMENT: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }

  getAccessorPurpose: {
    (key: Address, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (
      key: Address,
      options?: TransactionOptions
    ) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  addAccessor: {
    (key: Address, purpose: UInt, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (
      key: Address,
      purpose: UInt,
      options?: TransactionOptions
    ) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  removeAccessor: {
    (key: Address, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (
      key: Address,
      options?: TransactionOptions
    ) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  withdraw: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  transferEth: {
    (amount: UInt, account: Address, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (
      amount: UInt,
      account: Address,
      options?: TransactionOptions
    ) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  getBalance: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  getTokenBalance: {
    (token: Address, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (
      token: Address,
      options?: TransactionOptions
    ) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  withdrawTokens: {
    (token: Address, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (
      token: Address,
      options?: TransactionOptions
    ) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  transferTokens: {
    (
      token: Address,
      to: Address,
      amount: UInt,
      options?: TransactionOptions
    ): Promise<Web3.TransactionReceipt>
    call: (
      token: Address,
      to: Address,
      amount: UInt,
      options?: TransactionOptions
    ) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
}

export interface IdentityContract {
  new: (
    initialAccessors: Address[],
    purposes: UInt[]
  ) => Promise<IdentityInstance>
  deployed(): Promise<IdentityInstance>
  at(address: string): IdentityInstance
}

export interface MigrationsInstance extends ContractInstance {
  last_completed_migration: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  owner: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<Address>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }

  setCompleted: {
    (completed: UInt, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (
      completed: UInt,
      options?: TransactionOptions
    ) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  upgrade: {
    (new_address: Address, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (
      new_address: Address,
      options?: TransactionOptions
    ) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
}

export interface MigrationsContract {
  new: () => Promise<MigrationsInstance>
  deployed(): Promise<MigrationsInstance>
  at(address: string): MigrationsInstance
}

export interface OwnableInstance extends ContractInstance {
  owner: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<Address>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }

  renounceOwnership: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  transferOwnership: {
    (newOwner: Address, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (
      newOwner: Address,
      options?: TransactionOptions
    ) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
}

export interface OwnableContract {
  new: () => Promise<OwnableInstance>
  deployed(): Promise<OwnableInstance>
  at(address: string): OwnableInstance
}

export interface PurposesConstantsInstance extends ContractInstance {
  READ_ONLY: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  KEY_MANAGEMENT: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  ALL_PURPOSES: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  WRITE_ONLY: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  FUNDS_MANAGEMENT: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
}

export interface PurposesConstantsContract {
  new: () => Promise<PurposesConstantsInstance>
  deployed(): Promise<PurposesConstantsInstance>
  at(address: string): PurposesConstantsInstance
}

export interface RegistryInstance extends ContractInstance {
  renounceOwnership: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  owner: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<Address>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  transferOwnership: {
    (newOwner: Address, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (
      newOwner: Address,
      options?: TransactionOptions
    ) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }

  setClaim: {
    (
      subject: Address,
      issuer: Address,
      id: string,
      key: string,
      data: string,
      options?: TransactionOptions
    ): Promise<Web3.TransactionReceipt>
    call: (
      subject: Address,
      issuer: Address,
      id: string,
      key: string,
      data: string,
      options?: TransactionOptions
    ) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  getClaim: {
    (
      subject: Address,
      issuer: Address,
      id: string,
      key: string,
      options?: TransactionOptions
    ): Promise<Web3.TransactionReceipt>
    call: (
      subject: Address,
      issuer: Address,
      id: string,
      key: string,
      options?: TransactionOptions
    ) => Promise<string>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  removeClaim: {
    (
      subject: Address,
      issuer: Address,
      id: string,
      key: string,
      options?: TransactionOptions
    ): Promise<Web3.TransactionReceipt>
    call: (
      subject: Address,
      issuer: Address,
      id: string,
      key: string,
      options?: TransactionOptions
    ) => Promise<Web3.TransactionReceipt>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
}

export interface RegistryContract {
  new: () => Promise<RegistryInstance>
  deployed(): Promise<RegistryInstance>
  at(address: string): RegistryInstance
}

export interface SignatureValidatorInstance extends ContractInstance {
  checkSignature: {
    (
      message1: string,
      nonce: UInt,
      header1: string,
      header2: string,
      r: string,
      s: string,
      v: UInt,
      options?: TransactionOptions
    ): Promise<Web3.TransactionReceipt>
    call: (
      message1: string,
      nonce: UInt,
      header1: string,
      header2: string,
      r: string,
      s: string,
      v: UInt,
      options?: TransactionOptions
    ) => Promise<Address>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
}

export interface SignatureValidatorContract {
  new: () => Promise<SignatureValidatorInstance>
  deployed(): Promise<SignatureValidatorInstance>
  at(address: string): SignatureValidatorInstance
}

export interface ZincAccessorInstance extends ContractInstance {
  READ_ONLY: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  encodeUInt: {
    (uint: UInt, options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (uint: UInt, options?: TransactionOptions) => Promise<string>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  KEY_MANAGEMENT: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  checkSignature: {
    (
      message1: string,
      nonce: UInt,
      header1: string,
      header2: string,
      r: string,
      s: string,
      v: UInt,
      options?: TransactionOptions
    ): Promise<Web3.TransactionReceipt>
    call: (
      message1: string,
      nonce: UInt,
      header1: string,
      header2: string,
      r: string,
      s: string,
      v: UInt,
      options?: TransactionOptions
    ) => Promise<Address>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  ALL_PURPOSES: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  nonce: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  encodeAddress: {
    (address: Address, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (address: Address, options?: TransactionOptions) => Promise<string>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  WRITE_ONLY: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  FUNDS_MANAGEMENT: {
    (options?: TransactionOptions): Promise<Web3.TransactionReceipt>
    call: (options?: TransactionOptions) => Promise<BigNumber.BigNumber>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  encodeString: {
    (str: string, options?: TransactionOptions): Promise<
      Web3.TransactionReceipt
    >
    call: (str: string, options?: TransactionOptions) => Promise<string>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }

  constructUserIdentity: {
    (
      userAddress: Address,
      message1: string,
      nonce: UInt,
      header1: string,
      header2: string,
      r: string,
      s: string,
      v: UInt,
      options?: TransactionOptions
    ): Promise<Web3.TransactionReceipt>
    call: (
      userAddress: Address,
      message1: string,
      nonce: UInt,
      header1: string,
      header2: string,
      r: string,
      s: string,
      v: UInt,
      options?: TransactionOptions
    ) => Promise<Address>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  addAccessor: {
    (
      key: Address,
      idContract: Address,
      purpose: UInt,
      userAddress: Address,
      message1: string,
      nonce: UInt,
      header1: string,
      header2: string,
      r: string,
      s: string,
      v: UInt,
      options?: TransactionOptions
    ): Promise<Web3.TransactionReceipt>
    call: (
      key: Address,
      idContract: Address,
      purpose: UInt,
      userAddress: Address,
      message1: string,
      nonce: UInt,
      header1: string,
      header2: string,
      r: string,
      s: string,
      v: UInt,
      options?: TransactionOptions
    ) => Promise<boolean>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
  removeAccessor: {
    (
      key: Address,
      idContract: Address,
      userAddress: Address,
      message1: string,
      nonce: UInt,
      header1: string,
      header2: string,
      r: string,
      s: string,
      v: UInt,
      options?: TransactionOptions
    ): Promise<Web3.TransactionReceipt>
    call: (
      key: Address,
      idContract: Address,
      userAddress: Address,
      message1: string,
      nonce: UInt,
      header1: string,
      header2: string,
      r: string,
      s: string,
      v: UInt,
      options?: TransactionOptions
    ) => Promise<boolean>
    estimateGas: (
      subject: string,
      issuer: string,
      id: string,
      key: string,
      data?: string,
      options?: {
        from?: string
        gas?: number
      }
    ) => number
  }
}

export interface ZincAccessorContract {
  new: () => Promise<ZincAccessorInstance>
  deployed(): Promise<ZincAccessorInstance>
  at(address: string): ZincAccessorInstance
}

declare type _contractTest = (accounts: string[]) => void
declare interface TransactionMeta {
  from: string
}

interface Artifacts {
  require(name: "Encoder"): EncoderContract
  require(name: "ERC20Basic"): ERC20BasicContract
  require(name: "Identity"): IdentityContract
  require(name: "Migrations"): MigrationsContract
  require(name: "Ownable"): OwnableContract
  require(name: "PurposesConstants"): PurposesConstantsContract
  require(name: "Registry"): RegistryContract
  require(name: "SignatureValidator"): SignatureValidatorContract
  require(name: "ZincAccessor"): ZincAccessorContract
}

declare global {
  var artifacts: Artifacts
  function contract(name: string, test: _contractTest): void
  function it(name: string, test: (accounts: string[]) => void): void
}