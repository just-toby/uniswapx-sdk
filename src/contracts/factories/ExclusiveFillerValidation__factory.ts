/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ExclusiveFillerValidation,
  ExclusiveFillerValidationInterface,
} from "../ExclusiveFillerValidation";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "filler",
        type: "address",
      },
    ],
    name: "NotExclusiveFiller",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "filler",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "contract IReactor",
                name: "reactor",
                type: "address",
              },
              {
                internalType: "address",
                name: "swapper",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
              },
              {
                internalType: "contract IValidationCallback",
                name: "additionalValidationContract",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "additionalValidationData",
                type: "bytes",
              },
            ],
            internalType: "struct OrderInfo",
            name: "info",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "contract ERC20",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxAmount",
                type: "uint256",
              },
            ],
            internalType: "struct InputToken",
            name: "input",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
            ],
            internalType: "struct OutputToken[]",
            name: "outputs",
            type: "tuple[]",
          },
          {
            internalType: "bytes",
            name: "sig",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32",
          },
        ],
        internalType: "struct ResolvedOrder",
        name: "resolvedOrder",
        type: "tuple",
      },
    ],
    name: "validate",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061028e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636e84ba2b14610030575b600080fd5b61004361003e36600461012b565b610045565b005b6000806100528380610182565b6100609060a08101906101c0565b81019061006d919061022c565b915091504281101580156100ad57508173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614155b15610100576040517f75c1bb1400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240160405180910390fd5b50505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461012857600080fd5b50565b6000806040838503121561013e57600080fd5b823561014981610106565b9150602083013567ffffffffffffffff81111561016557600080fd5b830160e0818603121561017757600080fd5b809150509250929050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff418336030181126101b657600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126101f557600080fd5b83018035915067ffffffffffffffff82111561021057600080fd5b60200191503681900382131561022557600080fd5b9250929050565b6000806040838503121561023f57600080fd5b823561024a81610106565b94602093909301359350505056fea26469706673582212206579b40c1182fd5a8010af77de0687bc34923ed298af29b427646b929c96bfb764736f6c63430008130033";

type ExclusiveFillerValidationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExclusiveFillerValidationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExclusiveFillerValidation__factory extends ContractFactory {
  constructor(...args: ExclusiveFillerValidationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ExclusiveFillerValidation> {
    return super.deploy(overrides || {}) as Promise<ExclusiveFillerValidation>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ExclusiveFillerValidation {
    return super.attach(address) as ExclusiveFillerValidation;
  }
  override connect(signer: Signer): ExclusiveFillerValidation__factory {
    return super.connect(signer) as ExclusiveFillerValidation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExclusiveFillerValidationInterface {
    return new utils.Interface(_abi) as ExclusiveFillerValidationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExclusiveFillerValidation {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ExclusiveFillerValidation;
  }
}
