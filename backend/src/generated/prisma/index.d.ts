
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Caixa
 * 
 */
export type Caixa = $Result.DefaultSelection<Prisma.$CaixaPayload>
/**
 * Model Conciliacao
 * 
 */
export type Conciliacao = $Result.DefaultSelection<Prisma.$ConciliacaoPayload>
/**
 * Model Transacao
 * 
 */
export type Transacao = $Result.DefaultSelection<Prisma.$TransacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Caixas
 * const caixas = await prisma.caixa.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Caixas
   * const caixas = await prisma.caixa.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.caixa`: Exposes CRUD operations for the **Caixa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caixas
    * const caixas = await prisma.caixa.findMany()
    * ```
    */
  get caixa(): Prisma.CaixaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conciliacao`: Exposes CRUD operations for the **Conciliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conciliacaos
    * const conciliacaos = await prisma.conciliacao.findMany()
    * ```
    */
  get conciliacao(): Prisma.ConciliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transacao`: Exposes CRUD operations for the **Transacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transacaos
    * const transacaos = await prisma.transacao.findMany()
    * ```
    */
  get transacao(): Prisma.TransacaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Caixa: 'Caixa',
    Conciliacao: 'Conciliacao',
    Transacao: 'Transacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "caixa" | "conciliacao" | "transacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Caixa: {
        payload: Prisma.$CaixaPayload<ExtArgs>
        fields: Prisma.CaixaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaixaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaixaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>
          }
          findFirst: {
            args: Prisma.CaixaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaixaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>
          }
          findMany: {
            args: Prisma.CaixaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>[]
          }
          create: {
            args: Prisma.CaixaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>
          }
          createMany: {
            args: Prisma.CaixaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CaixaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>
          }
          update: {
            args: Prisma.CaixaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>
          }
          deleteMany: {
            args: Prisma.CaixaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaixaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CaixaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>
          }
          aggregate: {
            args: Prisma.CaixaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaixa>
          }
          groupBy: {
            args: Prisma.CaixaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaixaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaixaCountArgs<ExtArgs>
            result: $Utils.Optional<CaixaCountAggregateOutputType> | number
          }
        }
      }
      Conciliacao: {
        payload: Prisma.$ConciliacaoPayload<ExtArgs>
        fields: Prisma.ConciliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConciliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConciliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConciliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConciliacaoPayload>
          }
          findFirst: {
            args: Prisma.ConciliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConciliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConciliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConciliacaoPayload>
          }
          findMany: {
            args: Prisma.ConciliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConciliacaoPayload>[]
          }
          create: {
            args: Prisma.ConciliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConciliacaoPayload>
          }
          createMany: {
            args: Prisma.ConciliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConciliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConciliacaoPayload>
          }
          update: {
            args: Prisma.ConciliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConciliacaoPayload>
          }
          deleteMany: {
            args: Prisma.ConciliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConciliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConciliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConciliacaoPayload>
          }
          aggregate: {
            args: Prisma.ConciliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConciliacao>
          }
          groupBy: {
            args: Prisma.ConciliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConciliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConciliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<ConciliacaoCountAggregateOutputType> | number
          }
        }
      }
      Transacao: {
        payload: Prisma.$TransacaoPayload<ExtArgs>
        fields: Prisma.TransacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findFirst: {
            args: Prisma.TransacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findMany: {
            args: Prisma.TransacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          create: {
            args: Prisma.TransacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          createMany: {
            args: Prisma.TransacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          update: {
            args: Prisma.TransacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          deleteMany: {
            args: Prisma.TransacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          aggregate: {
            args: Prisma.TransacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransacao>
          }
          groupBy: {
            args: Prisma.TransacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransacaoCountArgs<ExtArgs>
            result: $Utils.Optional<TransacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    caixa?: CaixaOmit
    conciliacao?: ConciliacaoOmit
    transacao?: TransacaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CaixaCountOutputType
   */

  export type CaixaCountOutputType = {
    transacoes: number
    conciliacoes: number
  }

  export type CaixaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacoes?: boolean | CaixaCountOutputTypeCountTransacoesArgs
    conciliacoes?: boolean | CaixaCountOutputTypeCountConciliacoesArgs
  }

  // Custom InputTypes
  /**
   * CaixaCountOutputType without action
   */
  export type CaixaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaixaCountOutputType
     */
    select?: CaixaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CaixaCountOutputType without action
   */
  export type CaixaCountOutputTypeCountTransacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
  }

  /**
   * CaixaCountOutputType without action
   */
  export type CaixaCountOutputTypeCountConciliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConciliacaoWhereInput
  }


  /**
   * Count Type ConciliacaoCountOutputType
   */

  export type ConciliacaoCountOutputType = {
    transacoes: number
  }

  export type ConciliacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacoes?: boolean | ConciliacaoCountOutputTypeCountTransacoesArgs
  }

  // Custom InputTypes
  /**
   * ConciliacaoCountOutputType without action
   */
  export type ConciliacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConciliacaoCountOutputType
     */
    select?: ConciliacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConciliacaoCountOutputType without action
   */
  export type ConciliacaoCountOutputTypeCountTransacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Caixa
   */

  export type AggregateCaixa = {
    _count: CaixaCountAggregateOutputType | null
    _avg: CaixaAvgAggregateOutputType | null
    _sum: CaixaSumAggregateOutputType | null
    _min: CaixaMinAggregateOutputType | null
    _max: CaixaMaxAggregateOutputType | null
  }

  export type CaixaAvgAggregateOutputType = {
    id: number | null
  }

  export type CaixaSumAggregateOutputType = {
    id: number | null
  }

  export type CaixaMinAggregateOutputType = {
    id: number | null
    nomeLoja: string | null
    status: string | null
  }

  export type CaixaMaxAggregateOutputType = {
    id: number | null
    nomeLoja: string | null
    status: string | null
  }

  export type CaixaCountAggregateOutputType = {
    id: number
    nomeLoja: number
    status: number
    _all: number
  }


  export type CaixaAvgAggregateInputType = {
    id?: true
  }

  export type CaixaSumAggregateInputType = {
    id?: true
  }

  export type CaixaMinAggregateInputType = {
    id?: true
    nomeLoja?: true
    status?: true
  }

  export type CaixaMaxAggregateInputType = {
    id?: true
    nomeLoja?: true
    status?: true
  }

  export type CaixaCountAggregateInputType = {
    id?: true
    nomeLoja?: true
    status?: true
    _all?: true
  }

  export type CaixaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caixa to aggregate.
     */
    where?: CaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caixas to fetch.
     */
    orderBy?: CaixaOrderByWithRelationInput | CaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Caixas
    **/
    _count?: true | CaixaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaixaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaixaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaixaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaixaMaxAggregateInputType
  }

  export type GetCaixaAggregateType<T extends CaixaAggregateArgs> = {
        [P in keyof T & keyof AggregateCaixa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaixa[P]>
      : GetScalarType<T[P], AggregateCaixa[P]>
  }




  export type CaixaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaixaWhereInput
    orderBy?: CaixaOrderByWithAggregationInput | CaixaOrderByWithAggregationInput[]
    by: CaixaScalarFieldEnum[] | CaixaScalarFieldEnum
    having?: CaixaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaixaCountAggregateInputType | true
    _avg?: CaixaAvgAggregateInputType
    _sum?: CaixaSumAggregateInputType
    _min?: CaixaMinAggregateInputType
    _max?: CaixaMaxAggregateInputType
  }

  export type CaixaGroupByOutputType = {
    id: number
    nomeLoja: string
    status: string
    _count: CaixaCountAggregateOutputType | null
    _avg: CaixaAvgAggregateOutputType | null
    _sum: CaixaSumAggregateOutputType | null
    _min: CaixaMinAggregateOutputType | null
    _max: CaixaMaxAggregateOutputType | null
  }

  type GetCaixaGroupByPayload<T extends CaixaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaixaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaixaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaixaGroupByOutputType[P]>
            : GetScalarType<T[P], CaixaGroupByOutputType[P]>
        }
      >
    >


  export type CaixaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeLoja?: boolean
    status?: boolean
    transacoes?: boolean | Caixa$transacoesArgs<ExtArgs>
    conciliacoes?: boolean | Caixa$conciliacoesArgs<ExtArgs>
    _count?: boolean | CaixaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caixa"]>



  export type CaixaSelectScalar = {
    id?: boolean
    nomeLoja?: boolean
    status?: boolean
  }

  export type CaixaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeLoja" | "status", ExtArgs["result"]["caixa"]>
  export type CaixaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacoes?: boolean | Caixa$transacoesArgs<ExtArgs>
    conciliacoes?: boolean | Caixa$conciliacoesArgs<ExtArgs>
    _count?: boolean | CaixaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CaixaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Caixa"
    objects: {
      transacoes: Prisma.$TransacaoPayload<ExtArgs>[]
      conciliacoes: Prisma.$ConciliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeLoja: string
      status: string
    }, ExtArgs["result"]["caixa"]>
    composites: {}
  }

  type CaixaGetPayload<S extends boolean | null | undefined | CaixaDefaultArgs> = $Result.GetResult<Prisma.$CaixaPayload, S>

  type CaixaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaixaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaixaCountAggregateInputType | true
    }

  export interface CaixaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Caixa'], meta: { name: 'Caixa' } }
    /**
     * Find zero or one Caixa that matches the filter.
     * @param {CaixaFindUniqueArgs} args - Arguments to find a Caixa
     * @example
     * // Get one Caixa
     * const caixa = await prisma.caixa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaixaFindUniqueArgs>(args: SelectSubset<T, CaixaFindUniqueArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Caixa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaixaFindUniqueOrThrowArgs} args - Arguments to find a Caixa
     * @example
     * // Get one Caixa
     * const caixa = await prisma.caixa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaixaFindUniqueOrThrowArgs>(args: SelectSubset<T, CaixaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caixa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaFindFirstArgs} args - Arguments to find a Caixa
     * @example
     * // Get one Caixa
     * const caixa = await prisma.caixa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaixaFindFirstArgs>(args?: SelectSubset<T, CaixaFindFirstArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caixa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaFindFirstOrThrowArgs} args - Arguments to find a Caixa
     * @example
     * // Get one Caixa
     * const caixa = await prisma.caixa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaixaFindFirstOrThrowArgs>(args?: SelectSubset<T, CaixaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Caixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caixas
     * const caixas = await prisma.caixa.findMany()
     * 
     * // Get first 10 Caixas
     * const caixas = await prisma.caixa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caixaWithIdOnly = await prisma.caixa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaixaFindManyArgs>(args?: SelectSubset<T, CaixaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Caixa.
     * @param {CaixaCreateArgs} args - Arguments to create a Caixa.
     * @example
     * // Create one Caixa
     * const Caixa = await prisma.caixa.create({
     *   data: {
     *     // ... data to create a Caixa
     *   }
     * })
     * 
     */
    create<T extends CaixaCreateArgs>(args: SelectSubset<T, CaixaCreateArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Caixas.
     * @param {CaixaCreateManyArgs} args - Arguments to create many Caixas.
     * @example
     * // Create many Caixas
     * const caixa = await prisma.caixa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaixaCreateManyArgs>(args?: SelectSubset<T, CaixaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Caixa.
     * @param {CaixaDeleteArgs} args - Arguments to delete one Caixa.
     * @example
     * // Delete one Caixa
     * const Caixa = await prisma.caixa.delete({
     *   where: {
     *     // ... filter to delete one Caixa
     *   }
     * })
     * 
     */
    delete<T extends CaixaDeleteArgs>(args: SelectSubset<T, CaixaDeleteArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Caixa.
     * @param {CaixaUpdateArgs} args - Arguments to update one Caixa.
     * @example
     * // Update one Caixa
     * const caixa = await prisma.caixa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaixaUpdateArgs>(args: SelectSubset<T, CaixaUpdateArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Caixas.
     * @param {CaixaDeleteManyArgs} args - Arguments to filter Caixas to delete.
     * @example
     * // Delete a few Caixas
     * const { count } = await prisma.caixa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaixaDeleteManyArgs>(args?: SelectSubset<T, CaixaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caixas
     * const caixa = await prisma.caixa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaixaUpdateManyArgs>(args: SelectSubset<T, CaixaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Caixa.
     * @param {CaixaUpsertArgs} args - Arguments to update or create a Caixa.
     * @example
     * // Update or create a Caixa
     * const caixa = await prisma.caixa.upsert({
     *   create: {
     *     // ... data to create a Caixa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caixa we want to update
     *   }
     * })
     */
    upsert<T extends CaixaUpsertArgs>(args: SelectSubset<T, CaixaUpsertArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Caixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaCountArgs} args - Arguments to filter Caixas to count.
     * @example
     * // Count the number of Caixas
     * const count = await prisma.caixa.count({
     *   where: {
     *     // ... the filter for the Caixas we want to count
     *   }
     * })
    **/
    count<T extends CaixaCountArgs>(
      args?: Subset<T, CaixaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaixaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caixa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaixaAggregateArgs>(args: Subset<T, CaixaAggregateArgs>): Prisma.PrismaPromise<GetCaixaAggregateType<T>>

    /**
     * Group by Caixa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaixaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaixaGroupByArgs['orderBy'] }
        : { orderBy?: CaixaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaixaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaixaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Caixa model
   */
  readonly fields: CaixaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Caixa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaixaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transacoes<T extends Caixa$transacoesArgs<ExtArgs> = {}>(args?: Subset<T, Caixa$transacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conciliacoes<T extends Caixa$conciliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Caixa$conciliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConciliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Caixa model
   */
  interface CaixaFieldRefs {
    readonly id: FieldRef<"Caixa", 'Int'>
    readonly nomeLoja: FieldRef<"Caixa", 'String'>
    readonly status: FieldRef<"Caixa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Caixa findUnique
   */
  export type CaixaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * Filter, which Caixa to fetch.
     */
    where: CaixaWhereUniqueInput
  }

  /**
   * Caixa findUniqueOrThrow
   */
  export type CaixaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * Filter, which Caixa to fetch.
     */
    where: CaixaWhereUniqueInput
  }

  /**
   * Caixa findFirst
   */
  export type CaixaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * Filter, which Caixa to fetch.
     */
    where?: CaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caixas to fetch.
     */
    orderBy?: CaixaOrderByWithRelationInput | CaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caixas.
     */
    cursor?: CaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caixas.
     */
    distinct?: CaixaScalarFieldEnum | CaixaScalarFieldEnum[]
  }

  /**
   * Caixa findFirstOrThrow
   */
  export type CaixaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * Filter, which Caixa to fetch.
     */
    where?: CaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caixas to fetch.
     */
    orderBy?: CaixaOrderByWithRelationInput | CaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caixas.
     */
    cursor?: CaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caixas.
     */
    distinct?: CaixaScalarFieldEnum | CaixaScalarFieldEnum[]
  }

  /**
   * Caixa findMany
   */
  export type CaixaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * Filter, which Caixas to fetch.
     */
    where?: CaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caixas to fetch.
     */
    orderBy?: CaixaOrderByWithRelationInput | CaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Caixas.
     */
    cursor?: CaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caixas.
     */
    skip?: number
    distinct?: CaixaScalarFieldEnum | CaixaScalarFieldEnum[]
  }

  /**
   * Caixa create
   */
  export type CaixaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * The data needed to create a Caixa.
     */
    data: XOR<CaixaCreateInput, CaixaUncheckedCreateInput>
  }

  /**
   * Caixa createMany
   */
  export type CaixaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Caixas.
     */
    data: CaixaCreateManyInput | CaixaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Caixa update
   */
  export type CaixaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * The data needed to update a Caixa.
     */
    data: XOR<CaixaUpdateInput, CaixaUncheckedUpdateInput>
    /**
     * Choose, which Caixa to update.
     */
    where: CaixaWhereUniqueInput
  }

  /**
   * Caixa updateMany
   */
  export type CaixaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Caixas.
     */
    data: XOR<CaixaUpdateManyMutationInput, CaixaUncheckedUpdateManyInput>
    /**
     * Filter which Caixas to update
     */
    where?: CaixaWhereInput
    /**
     * Limit how many Caixas to update.
     */
    limit?: number
  }

  /**
   * Caixa upsert
   */
  export type CaixaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * The filter to search for the Caixa to update in case it exists.
     */
    where: CaixaWhereUniqueInput
    /**
     * In case the Caixa found by the `where` argument doesn't exist, create a new Caixa with this data.
     */
    create: XOR<CaixaCreateInput, CaixaUncheckedCreateInput>
    /**
     * In case the Caixa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaixaUpdateInput, CaixaUncheckedUpdateInput>
  }

  /**
   * Caixa delete
   */
  export type CaixaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * Filter which Caixa to delete.
     */
    where: CaixaWhereUniqueInput
  }

  /**
   * Caixa deleteMany
   */
  export type CaixaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caixas to delete
     */
    where?: CaixaWhereInput
    /**
     * Limit how many Caixas to delete.
     */
    limit?: number
  }

  /**
   * Caixa.transacoes
   */
  export type Caixa$transacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    cursor?: TransacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Caixa.conciliacoes
   */
  export type Caixa$conciliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conciliacao
     */
    select?: ConciliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conciliacao
     */
    omit?: ConciliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConciliacaoInclude<ExtArgs> | null
    where?: ConciliacaoWhereInput
    orderBy?: ConciliacaoOrderByWithRelationInput | ConciliacaoOrderByWithRelationInput[]
    cursor?: ConciliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConciliacaoScalarFieldEnum | ConciliacaoScalarFieldEnum[]
  }

  /**
   * Caixa without action
   */
  export type CaixaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
  }


  /**
   * Model Conciliacao
   */

  export type AggregateConciliacao = {
    _count: ConciliacaoCountAggregateOutputType | null
    _avg: ConciliacaoAvgAggregateOutputType | null
    _sum: ConciliacaoSumAggregateOutputType | null
    _min: ConciliacaoMinAggregateOutputType | null
    _max: ConciliacaoMaxAggregateOutputType | null
  }

  export type ConciliacaoAvgAggregateOutputType = {
    id: number | null
    caixaId: number | null
  }

  export type ConciliacaoSumAggregateOutputType = {
    id: number | null
    caixaId: number | null
  }

  export type ConciliacaoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    analistaResponsavel: string | null
    status: boolean | null
    caixaId: number | null
  }

  export type ConciliacaoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    analistaResponsavel: string | null
    status: boolean | null
    caixaId: number | null
  }

  export type ConciliacaoCountAggregateOutputType = {
    id: number
    data: number
    analistaResponsavel: number
    status: number
    caixaId: number
    _all: number
  }


  export type ConciliacaoAvgAggregateInputType = {
    id?: true
    caixaId?: true
  }

  export type ConciliacaoSumAggregateInputType = {
    id?: true
    caixaId?: true
  }

  export type ConciliacaoMinAggregateInputType = {
    id?: true
    data?: true
    analistaResponsavel?: true
    status?: true
    caixaId?: true
  }

  export type ConciliacaoMaxAggregateInputType = {
    id?: true
    data?: true
    analistaResponsavel?: true
    status?: true
    caixaId?: true
  }

  export type ConciliacaoCountAggregateInputType = {
    id?: true
    data?: true
    analistaResponsavel?: true
    status?: true
    caixaId?: true
    _all?: true
  }

  export type ConciliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conciliacao to aggregate.
     */
    where?: ConciliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conciliacaos to fetch.
     */
    orderBy?: ConciliacaoOrderByWithRelationInput | ConciliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConciliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conciliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conciliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conciliacaos
    **/
    _count?: true | ConciliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConciliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConciliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConciliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConciliacaoMaxAggregateInputType
  }

  export type GetConciliacaoAggregateType<T extends ConciliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateConciliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConciliacao[P]>
      : GetScalarType<T[P], AggregateConciliacao[P]>
  }




  export type ConciliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConciliacaoWhereInput
    orderBy?: ConciliacaoOrderByWithAggregationInput | ConciliacaoOrderByWithAggregationInput[]
    by: ConciliacaoScalarFieldEnum[] | ConciliacaoScalarFieldEnum
    having?: ConciliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConciliacaoCountAggregateInputType | true
    _avg?: ConciliacaoAvgAggregateInputType
    _sum?: ConciliacaoSumAggregateInputType
    _min?: ConciliacaoMinAggregateInputType
    _max?: ConciliacaoMaxAggregateInputType
  }

  export type ConciliacaoGroupByOutputType = {
    id: number
    data: Date
    analistaResponsavel: string
    status: boolean
    caixaId: number
    _count: ConciliacaoCountAggregateOutputType | null
    _avg: ConciliacaoAvgAggregateOutputType | null
    _sum: ConciliacaoSumAggregateOutputType | null
    _min: ConciliacaoMinAggregateOutputType | null
    _max: ConciliacaoMaxAggregateOutputType | null
  }

  type GetConciliacaoGroupByPayload<T extends ConciliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConciliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConciliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConciliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], ConciliacaoGroupByOutputType[P]>
        }
      >
    >


  export type ConciliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    analistaResponsavel?: boolean
    status?: boolean
    caixaId?: boolean
    caixa?: boolean | CaixaDefaultArgs<ExtArgs>
    transacoes?: boolean | Conciliacao$transacoesArgs<ExtArgs>
    _count?: boolean | ConciliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conciliacao"]>



  export type ConciliacaoSelectScalar = {
    id?: boolean
    data?: boolean
    analistaResponsavel?: boolean
    status?: boolean
    caixaId?: boolean
  }

  export type ConciliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "analistaResponsavel" | "status" | "caixaId", ExtArgs["result"]["conciliacao"]>
  export type ConciliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caixa?: boolean | CaixaDefaultArgs<ExtArgs>
    transacoes?: boolean | Conciliacao$transacoesArgs<ExtArgs>
    _count?: boolean | ConciliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ConciliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conciliacao"
    objects: {
      caixa: Prisma.$CaixaPayload<ExtArgs>
      transacoes: Prisma.$TransacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      analistaResponsavel: string
      status: boolean
      caixaId: number
    }, ExtArgs["result"]["conciliacao"]>
    composites: {}
  }

  type ConciliacaoGetPayload<S extends boolean | null | undefined | ConciliacaoDefaultArgs> = $Result.GetResult<Prisma.$ConciliacaoPayload, S>

  type ConciliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConciliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConciliacaoCountAggregateInputType | true
    }

  export interface ConciliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conciliacao'], meta: { name: 'Conciliacao' } }
    /**
     * Find zero or one Conciliacao that matches the filter.
     * @param {ConciliacaoFindUniqueArgs} args - Arguments to find a Conciliacao
     * @example
     * // Get one Conciliacao
     * const conciliacao = await prisma.conciliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConciliacaoFindUniqueArgs>(args: SelectSubset<T, ConciliacaoFindUniqueArgs<ExtArgs>>): Prisma__ConciliacaoClient<$Result.GetResult<Prisma.$ConciliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conciliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConciliacaoFindUniqueOrThrowArgs} args - Arguments to find a Conciliacao
     * @example
     * // Get one Conciliacao
     * const conciliacao = await prisma.conciliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConciliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ConciliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConciliacaoClient<$Result.GetResult<Prisma.$ConciliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conciliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConciliacaoFindFirstArgs} args - Arguments to find a Conciliacao
     * @example
     * // Get one Conciliacao
     * const conciliacao = await prisma.conciliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConciliacaoFindFirstArgs>(args?: SelectSubset<T, ConciliacaoFindFirstArgs<ExtArgs>>): Prisma__ConciliacaoClient<$Result.GetResult<Prisma.$ConciliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conciliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConciliacaoFindFirstOrThrowArgs} args - Arguments to find a Conciliacao
     * @example
     * // Get one Conciliacao
     * const conciliacao = await prisma.conciliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConciliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ConciliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConciliacaoClient<$Result.GetResult<Prisma.$ConciliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conciliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConciliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conciliacaos
     * const conciliacaos = await prisma.conciliacao.findMany()
     * 
     * // Get first 10 Conciliacaos
     * const conciliacaos = await prisma.conciliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conciliacaoWithIdOnly = await prisma.conciliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConciliacaoFindManyArgs>(args?: SelectSubset<T, ConciliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConciliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conciliacao.
     * @param {ConciliacaoCreateArgs} args - Arguments to create a Conciliacao.
     * @example
     * // Create one Conciliacao
     * const Conciliacao = await prisma.conciliacao.create({
     *   data: {
     *     // ... data to create a Conciliacao
     *   }
     * })
     * 
     */
    create<T extends ConciliacaoCreateArgs>(args: SelectSubset<T, ConciliacaoCreateArgs<ExtArgs>>): Prisma__ConciliacaoClient<$Result.GetResult<Prisma.$ConciliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conciliacaos.
     * @param {ConciliacaoCreateManyArgs} args - Arguments to create many Conciliacaos.
     * @example
     * // Create many Conciliacaos
     * const conciliacao = await prisma.conciliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConciliacaoCreateManyArgs>(args?: SelectSubset<T, ConciliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conciliacao.
     * @param {ConciliacaoDeleteArgs} args - Arguments to delete one Conciliacao.
     * @example
     * // Delete one Conciliacao
     * const Conciliacao = await prisma.conciliacao.delete({
     *   where: {
     *     // ... filter to delete one Conciliacao
     *   }
     * })
     * 
     */
    delete<T extends ConciliacaoDeleteArgs>(args: SelectSubset<T, ConciliacaoDeleteArgs<ExtArgs>>): Prisma__ConciliacaoClient<$Result.GetResult<Prisma.$ConciliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conciliacao.
     * @param {ConciliacaoUpdateArgs} args - Arguments to update one Conciliacao.
     * @example
     * // Update one Conciliacao
     * const conciliacao = await prisma.conciliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConciliacaoUpdateArgs>(args: SelectSubset<T, ConciliacaoUpdateArgs<ExtArgs>>): Prisma__ConciliacaoClient<$Result.GetResult<Prisma.$ConciliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conciliacaos.
     * @param {ConciliacaoDeleteManyArgs} args - Arguments to filter Conciliacaos to delete.
     * @example
     * // Delete a few Conciliacaos
     * const { count } = await prisma.conciliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConciliacaoDeleteManyArgs>(args?: SelectSubset<T, ConciliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conciliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConciliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conciliacaos
     * const conciliacao = await prisma.conciliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConciliacaoUpdateManyArgs>(args: SelectSubset<T, ConciliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conciliacao.
     * @param {ConciliacaoUpsertArgs} args - Arguments to update or create a Conciliacao.
     * @example
     * // Update or create a Conciliacao
     * const conciliacao = await prisma.conciliacao.upsert({
     *   create: {
     *     // ... data to create a Conciliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conciliacao we want to update
     *   }
     * })
     */
    upsert<T extends ConciliacaoUpsertArgs>(args: SelectSubset<T, ConciliacaoUpsertArgs<ExtArgs>>): Prisma__ConciliacaoClient<$Result.GetResult<Prisma.$ConciliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conciliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConciliacaoCountArgs} args - Arguments to filter Conciliacaos to count.
     * @example
     * // Count the number of Conciliacaos
     * const count = await prisma.conciliacao.count({
     *   where: {
     *     // ... the filter for the Conciliacaos we want to count
     *   }
     * })
    **/
    count<T extends ConciliacaoCountArgs>(
      args?: Subset<T, ConciliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConciliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conciliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConciliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConciliacaoAggregateArgs>(args: Subset<T, ConciliacaoAggregateArgs>): Prisma.PrismaPromise<GetConciliacaoAggregateType<T>>

    /**
     * Group by Conciliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConciliacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConciliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConciliacaoGroupByArgs['orderBy'] }
        : { orderBy?: ConciliacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConciliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConciliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conciliacao model
   */
  readonly fields: ConciliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conciliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConciliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caixa<T extends CaixaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaixaDefaultArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transacoes<T extends Conciliacao$transacoesArgs<ExtArgs> = {}>(args?: Subset<T, Conciliacao$transacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conciliacao model
   */
  interface ConciliacaoFieldRefs {
    readonly id: FieldRef<"Conciliacao", 'Int'>
    readonly data: FieldRef<"Conciliacao", 'DateTime'>
    readonly analistaResponsavel: FieldRef<"Conciliacao", 'String'>
    readonly status: FieldRef<"Conciliacao", 'Boolean'>
    readonly caixaId: FieldRef<"Conciliacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Conciliacao findUnique
   */
  export type ConciliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conciliacao
     */
    select?: ConciliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conciliacao
     */
    omit?: ConciliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConciliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Conciliacao to fetch.
     */
    where: ConciliacaoWhereUniqueInput
  }

  /**
   * Conciliacao findUniqueOrThrow
   */
  export type ConciliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conciliacao
     */
    select?: ConciliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conciliacao
     */
    omit?: ConciliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConciliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Conciliacao to fetch.
     */
    where: ConciliacaoWhereUniqueInput
  }

  /**
   * Conciliacao findFirst
   */
  export type ConciliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conciliacao
     */
    select?: ConciliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conciliacao
     */
    omit?: ConciliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConciliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Conciliacao to fetch.
     */
    where?: ConciliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conciliacaos to fetch.
     */
    orderBy?: ConciliacaoOrderByWithRelationInput | ConciliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conciliacaos.
     */
    cursor?: ConciliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conciliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conciliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conciliacaos.
     */
    distinct?: ConciliacaoScalarFieldEnum | ConciliacaoScalarFieldEnum[]
  }

  /**
   * Conciliacao findFirstOrThrow
   */
  export type ConciliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conciliacao
     */
    select?: ConciliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conciliacao
     */
    omit?: ConciliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConciliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Conciliacao to fetch.
     */
    where?: ConciliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conciliacaos to fetch.
     */
    orderBy?: ConciliacaoOrderByWithRelationInput | ConciliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conciliacaos.
     */
    cursor?: ConciliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conciliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conciliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conciliacaos.
     */
    distinct?: ConciliacaoScalarFieldEnum | ConciliacaoScalarFieldEnum[]
  }

  /**
   * Conciliacao findMany
   */
  export type ConciliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conciliacao
     */
    select?: ConciliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conciliacao
     */
    omit?: ConciliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConciliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Conciliacaos to fetch.
     */
    where?: ConciliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conciliacaos to fetch.
     */
    orderBy?: ConciliacaoOrderByWithRelationInput | ConciliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conciliacaos.
     */
    cursor?: ConciliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conciliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conciliacaos.
     */
    skip?: number
    distinct?: ConciliacaoScalarFieldEnum | ConciliacaoScalarFieldEnum[]
  }

  /**
   * Conciliacao create
   */
  export type ConciliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conciliacao
     */
    select?: ConciliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conciliacao
     */
    omit?: ConciliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConciliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Conciliacao.
     */
    data: XOR<ConciliacaoCreateInput, ConciliacaoUncheckedCreateInput>
  }

  /**
   * Conciliacao createMany
   */
  export type ConciliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conciliacaos.
     */
    data: ConciliacaoCreateManyInput | ConciliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conciliacao update
   */
  export type ConciliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conciliacao
     */
    select?: ConciliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conciliacao
     */
    omit?: ConciliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConciliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Conciliacao.
     */
    data: XOR<ConciliacaoUpdateInput, ConciliacaoUncheckedUpdateInput>
    /**
     * Choose, which Conciliacao to update.
     */
    where: ConciliacaoWhereUniqueInput
  }

  /**
   * Conciliacao updateMany
   */
  export type ConciliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conciliacaos.
     */
    data: XOR<ConciliacaoUpdateManyMutationInput, ConciliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Conciliacaos to update
     */
    where?: ConciliacaoWhereInput
    /**
     * Limit how many Conciliacaos to update.
     */
    limit?: number
  }

  /**
   * Conciliacao upsert
   */
  export type ConciliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conciliacao
     */
    select?: ConciliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conciliacao
     */
    omit?: ConciliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConciliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Conciliacao to update in case it exists.
     */
    where: ConciliacaoWhereUniqueInput
    /**
     * In case the Conciliacao found by the `where` argument doesn't exist, create a new Conciliacao with this data.
     */
    create: XOR<ConciliacaoCreateInput, ConciliacaoUncheckedCreateInput>
    /**
     * In case the Conciliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConciliacaoUpdateInput, ConciliacaoUncheckedUpdateInput>
  }

  /**
   * Conciliacao delete
   */
  export type ConciliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conciliacao
     */
    select?: ConciliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conciliacao
     */
    omit?: ConciliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConciliacaoInclude<ExtArgs> | null
    /**
     * Filter which Conciliacao to delete.
     */
    where: ConciliacaoWhereUniqueInput
  }

  /**
   * Conciliacao deleteMany
   */
  export type ConciliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conciliacaos to delete
     */
    where?: ConciliacaoWhereInput
    /**
     * Limit how many Conciliacaos to delete.
     */
    limit?: number
  }

  /**
   * Conciliacao.transacoes
   */
  export type Conciliacao$transacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    cursor?: TransacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Conciliacao without action
   */
  export type ConciliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conciliacao
     */
    select?: ConciliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conciliacao
     */
    omit?: ConciliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConciliacaoInclude<ExtArgs> | null
  }


  /**
   * Model Transacao
   */

  export type AggregateTransacao = {
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  export type TransacaoAvgAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    caixaId: number | null
    conciliacaoId: number | null
  }

  export type TransacaoSumAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    caixaId: number | null
    conciliacaoId: number | null
  }

  export type TransacaoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    tipo: string | null
    valor: Decimal | null
    codigo: string | null
    evidencia: string | null
    mensagemAnalista: string | null
    depositoConferido: boolean | null
    caixaId: number | null
    conciliacaoId: number | null
  }

  export type TransacaoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    tipo: string | null
    valor: Decimal | null
    codigo: string | null
    evidencia: string | null
    mensagemAnalista: string | null
    depositoConferido: boolean | null
    caixaId: number | null
    conciliacaoId: number | null
  }

  export type TransacaoCountAggregateOutputType = {
    id: number
    data: number
    tipo: number
    valor: number
    codigo: number
    evidencia: number
    mensagemAnalista: number
    depositoConferido: number
    caixaId: number
    conciliacaoId: number
    _all: number
  }


  export type TransacaoAvgAggregateInputType = {
    id?: true
    valor?: true
    caixaId?: true
    conciliacaoId?: true
  }

  export type TransacaoSumAggregateInputType = {
    id?: true
    valor?: true
    caixaId?: true
    conciliacaoId?: true
  }

  export type TransacaoMinAggregateInputType = {
    id?: true
    data?: true
    tipo?: true
    valor?: true
    codigo?: true
    evidencia?: true
    mensagemAnalista?: true
    depositoConferido?: true
    caixaId?: true
    conciliacaoId?: true
  }

  export type TransacaoMaxAggregateInputType = {
    id?: true
    data?: true
    tipo?: true
    valor?: true
    codigo?: true
    evidencia?: true
    mensagemAnalista?: true
    depositoConferido?: true
    caixaId?: true
    conciliacaoId?: true
  }

  export type TransacaoCountAggregateInputType = {
    id?: true
    data?: true
    tipo?: true
    valor?: true
    codigo?: true
    evidencia?: true
    mensagemAnalista?: true
    depositoConferido?: true
    caixaId?: true
    conciliacaoId?: true
    _all?: true
  }

  export type TransacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacao to aggregate.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transacaos
    **/
    _count?: true | TransacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransacaoMaxAggregateInputType
  }

  export type GetTransacaoAggregateType<T extends TransacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTransacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransacao[P]>
      : GetScalarType<T[P], AggregateTransacao[P]>
  }




  export type TransacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithAggregationInput | TransacaoOrderByWithAggregationInput[]
    by: TransacaoScalarFieldEnum[] | TransacaoScalarFieldEnum
    having?: TransacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransacaoCountAggregateInputType | true
    _avg?: TransacaoAvgAggregateInputType
    _sum?: TransacaoSumAggregateInputType
    _min?: TransacaoMinAggregateInputType
    _max?: TransacaoMaxAggregateInputType
  }

  export type TransacaoGroupByOutputType = {
    id: number
    data: Date
    tipo: string
    valor: Decimal
    codigo: string | null
    evidencia: string | null
    mensagemAnalista: string | null
    depositoConferido: boolean
    caixaId: number
    conciliacaoId: number | null
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  type GetTransacaoGroupByPayload<T extends TransacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
            : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
        }
      >
    >


  export type TransacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    tipo?: boolean
    valor?: boolean
    codigo?: boolean
    evidencia?: boolean
    mensagemAnalista?: boolean
    depositoConferido?: boolean
    caixaId?: boolean
    conciliacaoId?: boolean
    caixa?: boolean | CaixaDefaultArgs<ExtArgs>
    conciliacao?: boolean | Transacao$conciliacaoArgs<ExtArgs>
  }, ExtArgs["result"]["transacao"]>



  export type TransacaoSelectScalar = {
    id?: boolean
    data?: boolean
    tipo?: boolean
    valor?: boolean
    codigo?: boolean
    evidencia?: boolean
    mensagemAnalista?: boolean
    depositoConferido?: boolean
    caixaId?: boolean
    conciliacaoId?: boolean
  }

  export type TransacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "tipo" | "valor" | "codigo" | "evidencia" | "mensagemAnalista" | "depositoConferido" | "caixaId" | "conciliacaoId", ExtArgs["result"]["transacao"]>
  export type TransacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caixa?: boolean | CaixaDefaultArgs<ExtArgs>
    conciliacao?: boolean | Transacao$conciliacaoArgs<ExtArgs>
  }

  export type $TransacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transacao"
    objects: {
      caixa: Prisma.$CaixaPayload<ExtArgs>
      conciliacao: Prisma.$ConciliacaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      tipo: string
      valor: Prisma.Decimal
      codigo: string | null
      evidencia: string | null
      mensagemAnalista: string | null
      depositoConferido: boolean
      caixaId: number
      conciliacaoId: number | null
    }, ExtArgs["result"]["transacao"]>
    composites: {}
  }

  type TransacaoGetPayload<S extends boolean | null | undefined | TransacaoDefaultArgs> = $Result.GetResult<Prisma.$TransacaoPayload, S>

  type TransacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransacaoCountAggregateInputType | true
    }

  export interface TransacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transacao'], meta: { name: 'Transacao' } }
    /**
     * Find zero or one Transacao that matches the filter.
     * @param {TransacaoFindUniqueArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransacaoFindUniqueArgs>(args: SelectSubset<T, TransacaoFindUniqueArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransacaoFindUniqueOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, TransacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransacaoFindFirstArgs>(args?: SelectSubset<T, TransacaoFindFirstArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, TransacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transacaos
     * const transacaos = await prisma.transacao.findMany()
     * 
     * // Get first 10 Transacaos
     * const transacaos = await prisma.transacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transacaoWithIdOnly = await prisma.transacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransacaoFindManyArgs>(args?: SelectSubset<T, TransacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transacao.
     * @param {TransacaoCreateArgs} args - Arguments to create a Transacao.
     * @example
     * // Create one Transacao
     * const Transacao = await prisma.transacao.create({
     *   data: {
     *     // ... data to create a Transacao
     *   }
     * })
     * 
     */
    create<T extends TransacaoCreateArgs>(args: SelectSubset<T, TransacaoCreateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transacaos.
     * @param {TransacaoCreateManyArgs} args - Arguments to create many Transacaos.
     * @example
     * // Create many Transacaos
     * const transacao = await prisma.transacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransacaoCreateManyArgs>(args?: SelectSubset<T, TransacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transacao.
     * @param {TransacaoDeleteArgs} args - Arguments to delete one Transacao.
     * @example
     * // Delete one Transacao
     * const Transacao = await prisma.transacao.delete({
     *   where: {
     *     // ... filter to delete one Transacao
     *   }
     * })
     * 
     */
    delete<T extends TransacaoDeleteArgs>(args: SelectSubset<T, TransacaoDeleteArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transacao.
     * @param {TransacaoUpdateArgs} args - Arguments to update one Transacao.
     * @example
     * // Update one Transacao
     * const transacao = await prisma.transacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransacaoUpdateArgs>(args: SelectSubset<T, TransacaoUpdateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transacaos.
     * @param {TransacaoDeleteManyArgs} args - Arguments to filter Transacaos to delete.
     * @example
     * // Delete a few Transacaos
     * const { count } = await prisma.transacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransacaoDeleteManyArgs>(args?: SelectSubset<T, TransacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transacaos
     * const transacao = await prisma.transacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransacaoUpdateManyArgs>(args: SelectSubset<T, TransacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transacao.
     * @param {TransacaoUpsertArgs} args - Arguments to update or create a Transacao.
     * @example
     * // Update or create a Transacao
     * const transacao = await prisma.transacao.upsert({
     *   create: {
     *     // ... data to create a Transacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transacao we want to update
     *   }
     * })
     */
    upsert<T extends TransacaoUpsertArgs>(args: SelectSubset<T, TransacaoUpsertArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoCountArgs} args - Arguments to filter Transacaos to count.
     * @example
     * // Count the number of Transacaos
     * const count = await prisma.transacao.count({
     *   where: {
     *     // ... the filter for the Transacaos we want to count
     *   }
     * })
    **/
    count<T extends TransacaoCountArgs>(
      args?: Subset<T, TransacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransacaoAggregateArgs>(args: Subset<T, TransacaoAggregateArgs>): Prisma.PrismaPromise<GetTransacaoAggregateType<T>>

    /**
     * Group by Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransacaoGroupByArgs['orderBy'] }
        : { orderBy?: TransacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transacao model
   */
  readonly fields: TransacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caixa<T extends CaixaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaixaDefaultArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conciliacao<T extends Transacao$conciliacaoArgs<ExtArgs> = {}>(args?: Subset<T, Transacao$conciliacaoArgs<ExtArgs>>): Prisma__ConciliacaoClient<$Result.GetResult<Prisma.$ConciliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transacao model
   */
  interface TransacaoFieldRefs {
    readonly id: FieldRef<"Transacao", 'Int'>
    readonly data: FieldRef<"Transacao", 'DateTime'>
    readonly tipo: FieldRef<"Transacao", 'String'>
    readonly valor: FieldRef<"Transacao", 'Decimal'>
    readonly codigo: FieldRef<"Transacao", 'String'>
    readonly evidencia: FieldRef<"Transacao", 'String'>
    readonly mensagemAnalista: FieldRef<"Transacao", 'String'>
    readonly depositoConferido: FieldRef<"Transacao", 'Boolean'>
    readonly caixaId: FieldRef<"Transacao", 'Int'>
    readonly conciliacaoId: FieldRef<"Transacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transacao findUnique
   */
  export type TransacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findUniqueOrThrow
   */
  export type TransacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findFirst
   */
  export type TransacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findFirstOrThrow
   */
  export type TransacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findMany
   */
  export type TransacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacaos to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao create
   */
  export type TransacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Transacao.
     */
    data: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
  }

  /**
   * Transacao createMany
   */
  export type TransacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transacaos.
     */
    data: TransacaoCreateManyInput | TransacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transacao update
   */
  export type TransacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Transacao.
     */
    data: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
    /**
     * Choose, which Transacao to update.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao updateMany
   */
  export type TransacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transacaos.
     */
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyInput>
    /**
     * Filter which Transacaos to update
     */
    where?: TransacaoWhereInput
    /**
     * Limit how many Transacaos to update.
     */
    limit?: number
  }

  /**
   * Transacao upsert
   */
  export type TransacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Transacao to update in case it exists.
     */
    where: TransacaoWhereUniqueInput
    /**
     * In case the Transacao found by the `where` argument doesn't exist, create a new Transacao with this data.
     */
    create: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
    /**
     * In case the Transacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
  }

  /**
   * Transacao delete
   */
  export type TransacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter which Transacao to delete.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao deleteMany
   */
  export type TransacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacaos to delete
     */
    where?: TransacaoWhereInput
    /**
     * Limit how many Transacaos to delete.
     */
    limit?: number
  }

  /**
   * Transacao.conciliacao
   */
  export type Transacao$conciliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conciliacao
     */
    select?: ConciliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conciliacao
     */
    omit?: ConciliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConciliacaoInclude<ExtArgs> | null
    where?: ConciliacaoWhereInput
  }

  /**
   * Transacao without action
   */
  export type TransacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CaixaScalarFieldEnum: {
    id: 'id',
    nomeLoja: 'nomeLoja',
    status: 'status'
  };

  export type CaixaScalarFieldEnum = (typeof CaixaScalarFieldEnum)[keyof typeof CaixaScalarFieldEnum]


  export const ConciliacaoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    analistaResponsavel: 'analistaResponsavel',
    status: 'status',
    caixaId: 'caixaId'
  };

  export type ConciliacaoScalarFieldEnum = (typeof ConciliacaoScalarFieldEnum)[keyof typeof ConciliacaoScalarFieldEnum]


  export const TransacaoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    tipo: 'tipo',
    valor: 'valor',
    codigo: 'codigo',
    evidencia: 'evidencia',
    mensagemAnalista: 'mensagemAnalista',
    depositoConferido: 'depositoConferido',
    caixaId: 'caixaId',
    conciliacaoId: 'conciliacaoId'
  };

  export type TransacaoScalarFieldEnum = (typeof TransacaoScalarFieldEnum)[keyof typeof TransacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const CaixaOrderByRelevanceFieldEnum: {
    nomeLoja: 'nomeLoja',
    status: 'status'
  };

  export type CaixaOrderByRelevanceFieldEnum = (typeof CaixaOrderByRelevanceFieldEnum)[keyof typeof CaixaOrderByRelevanceFieldEnum]


  export const ConciliacaoOrderByRelevanceFieldEnum: {
    analistaResponsavel: 'analistaResponsavel'
  };

  export type ConciliacaoOrderByRelevanceFieldEnum = (typeof ConciliacaoOrderByRelevanceFieldEnum)[keyof typeof ConciliacaoOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TransacaoOrderByRelevanceFieldEnum: {
    tipo: 'tipo',
    codigo: 'codigo',
    evidencia: 'evidencia',
    mensagemAnalista: 'mensagemAnalista'
  };

  export type TransacaoOrderByRelevanceFieldEnum = (typeof TransacaoOrderByRelevanceFieldEnum)[keyof typeof TransacaoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CaixaWhereInput = {
    AND?: CaixaWhereInput | CaixaWhereInput[]
    OR?: CaixaWhereInput[]
    NOT?: CaixaWhereInput | CaixaWhereInput[]
    id?: IntFilter<"Caixa"> | number
    nomeLoja?: StringFilter<"Caixa"> | string
    status?: StringFilter<"Caixa"> | string
    transacoes?: TransacaoListRelationFilter
    conciliacoes?: ConciliacaoListRelationFilter
  }

  export type CaixaOrderByWithRelationInput = {
    id?: SortOrder
    nomeLoja?: SortOrder
    status?: SortOrder
    transacoes?: TransacaoOrderByRelationAggregateInput
    conciliacoes?: ConciliacaoOrderByRelationAggregateInput
    _relevance?: CaixaOrderByRelevanceInput
  }

  export type CaixaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CaixaWhereInput | CaixaWhereInput[]
    OR?: CaixaWhereInput[]
    NOT?: CaixaWhereInput | CaixaWhereInput[]
    nomeLoja?: StringFilter<"Caixa"> | string
    status?: StringFilter<"Caixa"> | string
    transacoes?: TransacaoListRelationFilter
    conciliacoes?: ConciliacaoListRelationFilter
  }, "id">

  export type CaixaOrderByWithAggregationInput = {
    id?: SortOrder
    nomeLoja?: SortOrder
    status?: SortOrder
    _count?: CaixaCountOrderByAggregateInput
    _avg?: CaixaAvgOrderByAggregateInput
    _max?: CaixaMaxOrderByAggregateInput
    _min?: CaixaMinOrderByAggregateInput
    _sum?: CaixaSumOrderByAggregateInput
  }

  export type CaixaScalarWhereWithAggregatesInput = {
    AND?: CaixaScalarWhereWithAggregatesInput | CaixaScalarWhereWithAggregatesInput[]
    OR?: CaixaScalarWhereWithAggregatesInput[]
    NOT?: CaixaScalarWhereWithAggregatesInput | CaixaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Caixa"> | number
    nomeLoja?: StringWithAggregatesFilter<"Caixa"> | string
    status?: StringWithAggregatesFilter<"Caixa"> | string
  }

  export type ConciliacaoWhereInput = {
    AND?: ConciliacaoWhereInput | ConciliacaoWhereInput[]
    OR?: ConciliacaoWhereInput[]
    NOT?: ConciliacaoWhereInput | ConciliacaoWhereInput[]
    id?: IntFilter<"Conciliacao"> | number
    data?: DateTimeFilter<"Conciliacao"> | Date | string
    analistaResponsavel?: StringFilter<"Conciliacao"> | string
    status?: BoolFilter<"Conciliacao"> | boolean
    caixaId?: IntFilter<"Conciliacao"> | number
    caixa?: XOR<CaixaScalarRelationFilter, CaixaWhereInput>
    transacoes?: TransacaoListRelationFilter
  }

  export type ConciliacaoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    analistaResponsavel?: SortOrder
    status?: SortOrder
    caixaId?: SortOrder
    caixa?: CaixaOrderByWithRelationInput
    transacoes?: TransacaoOrderByRelationAggregateInput
    _relevance?: ConciliacaoOrderByRelevanceInput
  }

  export type ConciliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConciliacaoWhereInput | ConciliacaoWhereInput[]
    OR?: ConciliacaoWhereInput[]
    NOT?: ConciliacaoWhereInput | ConciliacaoWhereInput[]
    data?: DateTimeFilter<"Conciliacao"> | Date | string
    analistaResponsavel?: StringFilter<"Conciliacao"> | string
    status?: BoolFilter<"Conciliacao"> | boolean
    caixaId?: IntFilter<"Conciliacao"> | number
    caixa?: XOR<CaixaScalarRelationFilter, CaixaWhereInput>
    transacoes?: TransacaoListRelationFilter
  }, "id">

  export type ConciliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    analistaResponsavel?: SortOrder
    status?: SortOrder
    caixaId?: SortOrder
    _count?: ConciliacaoCountOrderByAggregateInput
    _avg?: ConciliacaoAvgOrderByAggregateInput
    _max?: ConciliacaoMaxOrderByAggregateInput
    _min?: ConciliacaoMinOrderByAggregateInput
    _sum?: ConciliacaoSumOrderByAggregateInput
  }

  export type ConciliacaoScalarWhereWithAggregatesInput = {
    AND?: ConciliacaoScalarWhereWithAggregatesInput | ConciliacaoScalarWhereWithAggregatesInput[]
    OR?: ConciliacaoScalarWhereWithAggregatesInput[]
    NOT?: ConciliacaoScalarWhereWithAggregatesInput | ConciliacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conciliacao"> | number
    data?: DateTimeWithAggregatesFilter<"Conciliacao"> | Date | string
    analistaResponsavel?: StringWithAggregatesFilter<"Conciliacao"> | string
    status?: BoolWithAggregatesFilter<"Conciliacao"> | boolean
    caixaId?: IntWithAggregatesFilter<"Conciliacao"> | number
  }

  export type TransacaoWhereInput = {
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    id?: IntFilter<"Transacao"> | number
    data?: DateTimeFilter<"Transacao"> | Date | string
    tipo?: StringFilter<"Transacao"> | string
    valor?: DecimalFilter<"Transacao"> | Decimal | DecimalJsLike | number | string
    codigo?: StringNullableFilter<"Transacao"> | string | null
    evidencia?: StringNullableFilter<"Transacao"> | string | null
    mensagemAnalista?: StringNullableFilter<"Transacao"> | string | null
    depositoConferido?: BoolFilter<"Transacao"> | boolean
    caixaId?: IntFilter<"Transacao"> | number
    conciliacaoId?: IntNullableFilter<"Transacao"> | number | null
    caixa?: XOR<CaixaScalarRelationFilter, CaixaWhereInput>
    conciliacao?: XOR<ConciliacaoNullableScalarRelationFilter, ConciliacaoWhereInput> | null
  }

  export type TransacaoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    codigo?: SortOrderInput | SortOrder
    evidencia?: SortOrderInput | SortOrder
    mensagemAnalista?: SortOrderInput | SortOrder
    depositoConferido?: SortOrder
    caixaId?: SortOrder
    conciliacaoId?: SortOrderInput | SortOrder
    caixa?: CaixaOrderByWithRelationInput
    conciliacao?: ConciliacaoOrderByWithRelationInput
    _relevance?: TransacaoOrderByRelevanceInput
  }

  export type TransacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    data?: DateTimeFilter<"Transacao"> | Date | string
    tipo?: StringFilter<"Transacao"> | string
    valor?: DecimalFilter<"Transacao"> | Decimal | DecimalJsLike | number | string
    codigo?: StringNullableFilter<"Transacao"> | string | null
    evidencia?: StringNullableFilter<"Transacao"> | string | null
    mensagemAnalista?: StringNullableFilter<"Transacao"> | string | null
    depositoConferido?: BoolFilter<"Transacao"> | boolean
    caixaId?: IntFilter<"Transacao"> | number
    conciliacaoId?: IntNullableFilter<"Transacao"> | number | null
    caixa?: XOR<CaixaScalarRelationFilter, CaixaWhereInput>
    conciliacao?: XOR<ConciliacaoNullableScalarRelationFilter, ConciliacaoWhereInput> | null
  }, "id">

  export type TransacaoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    codigo?: SortOrderInput | SortOrder
    evidencia?: SortOrderInput | SortOrder
    mensagemAnalista?: SortOrderInput | SortOrder
    depositoConferido?: SortOrder
    caixaId?: SortOrder
    conciliacaoId?: SortOrderInput | SortOrder
    _count?: TransacaoCountOrderByAggregateInput
    _avg?: TransacaoAvgOrderByAggregateInput
    _max?: TransacaoMaxOrderByAggregateInput
    _min?: TransacaoMinOrderByAggregateInput
    _sum?: TransacaoSumOrderByAggregateInput
  }

  export type TransacaoScalarWhereWithAggregatesInput = {
    AND?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    OR?: TransacaoScalarWhereWithAggregatesInput[]
    NOT?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transacao"> | number
    data?: DateTimeWithAggregatesFilter<"Transacao"> | Date | string
    tipo?: StringWithAggregatesFilter<"Transacao"> | string
    valor?: DecimalWithAggregatesFilter<"Transacao"> | Decimal | DecimalJsLike | number | string
    codigo?: StringNullableWithAggregatesFilter<"Transacao"> | string | null
    evidencia?: StringNullableWithAggregatesFilter<"Transacao"> | string | null
    mensagemAnalista?: StringNullableWithAggregatesFilter<"Transacao"> | string | null
    depositoConferido?: BoolWithAggregatesFilter<"Transacao"> | boolean
    caixaId?: IntWithAggregatesFilter<"Transacao"> | number
    conciliacaoId?: IntNullableWithAggregatesFilter<"Transacao"> | number | null
  }

  export type CaixaCreateInput = {
    nomeLoja: string
    status: string
    transacoes?: TransacaoCreateNestedManyWithoutCaixaInput
    conciliacoes?: ConciliacaoCreateNestedManyWithoutCaixaInput
  }

  export type CaixaUncheckedCreateInput = {
    id?: number
    nomeLoja: string
    status: string
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutCaixaInput
    conciliacoes?: ConciliacaoUncheckedCreateNestedManyWithoutCaixaInput
  }

  export type CaixaUpdateInput = {
    nomeLoja?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transacoes?: TransacaoUpdateManyWithoutCaixaNestedInput
    conciliacoes?: ConciliacaoUpdateManyWithoutCaixaNestedInput
  }

  export type CaixaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeLoja?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transacoes?: TransacaoUncheckedUpdateManyWithoutCaixaNestedInput
    conciliacoes?: ConciliacaoUncheckedUpdateManyWithoutCaixaNestedInput
  }

  export type CaixaCreateManyInput = {
    id?: number
    nomeLoja: string
    status: string
  }

  export type CaixaUpdateManyMutationInput = {
    nomeLoja?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CaixaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeLoja?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ConciliacaoCreateInput = {
    data: Date | string
    analistaResponsavel: string
    status: boolean
    caixa: CaixaCreateNestedOneWithoutConciliacoesInput
    transacoes?: TransacaoCreateNestedManyWithoutConciliacaoInput
  }

  export type ConciliacaoUncheckedCreateInput = {
    id?: number
    data: Date | string
    analistaResponsavel: string
    status: boolean
    caixaId: number
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutConciliacaoInput
  }

  export type ConciliacaoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    analistaResponsavel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    caixa?: CaixaUpdateOneRequiredWithoutConciliacoesNestedInput
    transacoes?: TransacaoUpdateManyWithoutConciliacaoNestedInput
  }

  export type ConciliacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    analistaResponsavel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    caixaId?: IntFieldUpdateOperationsInput | number
    transacoes?: TransacaoUncheckedUpdateManyWithoutConciliacaoNestedInput
  }

  export type ConciliacaoCreateManyInput = {
    id?: number
    data: Date | string
    analistaResponsavel: string
    status: boolean
    caixaId: number
  }

  export type ConciliacaoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    analistaResponsavel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConciliacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    analistaResponsavel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    caixaId?: IntFieldUpdateOperationsInput | number
  }

  export type TransacaoCreateInput = {
    data: Date | string
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    codigo?: string | null
    evidencia?: string | null
    mensagemAnalista?: string | null
    depositoConferido?: boolean
    caixa: CaixaCreateNestedOneWithoutTransacoesInput
    conciliacao?: ConciliacaoCreateNestedOneWithoutTransacoesInput
  }

  export type TransacaoUncheckedCreateInput = {
    id?: number
    data: Date | string
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    codigo?: string | null
    evidencia?: string | null
    mensagemAnalista?: string | null
    depositoConferido?: boolean
    caixaId: number
    conciliacaoId?: number | null
  }

  export type TransacaoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    mensagemAnalista?: NullableStringFieldUpdateOperationsInput | string | null
    depositoConferido?: BoolFieldUpdateOperationsInput | boolean
    caixa?: CaixaUpdateOneRequiredWithoutTransacoesNestedInput
    conciliacao?: ConciliacaoUpdateOneWithoutTransacoesNestedInput
  }

  export type TransacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    mensagemAnalista?: NullableStringFieldUpdateOperationsInput | string | null
    depositoConferido?: BoolFieldUpdateOperationsInput | boolean
    caixaId?: IntFieldUpdateOperationsInput | number
    conciliacaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransacaoCreateManyInput = {
    id?: number
    data: Date | string
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    codigo?: string | null
    evidencia?: string | null
    mensagemAnalista?: string | null
    depositoConferido?: boolean
    caixaId: number
    conciliacaoId?: number | null
  }

  export type TransacaoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    mensagemAnalista?: NullableStringFieldUpdateOperationsInput | string | null
    depositoConferido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    mensagemAnalista?: NullableStringFieldUpdateOperationsInput | string | null
    depositoConferido?: BoolFieldUpdateOperationsInput | boolean
    caixaId?: IntFieldUpdateOperationsInput | number
    conciliacaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TransacaoListRelationFilter = {
    every?: TransacaoWhereInput
    some?: TransacaoWhereInput
    none?: TransacaoWhereInput
  }

  export type ConciliacaoListRelationFilter = {
    every?: ConciliacaoWhereInput
    some?: ConciliacaoWhereInput
    none?: ConciliacaoWhereInput
  }

  export type TransacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConciliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaixaOrderByRelevanceInput = {
    fields: CaixaOrderByRelevanceFieldEnum | CaixaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CaixaCountOrderByAggregateInput = {
    id?: SortOrder
    nomeLoja?: SortOrder
    status?: SortOrder
  }

  export type CaixaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CaixaMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeLoja?: SortOrder
    status?: SortOrder
  }

  export type CaixaMinOrderByAggregateInput = {
    id?: SortOrder
    nomeLoja?: SortOrder
    status?: SortOrder
  }

  export type CaixaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CaixaScalarRelationFilter = {
    is?: CaixaWhereInput
    isNot?: CaixaWhereInput
  }

  export type ConciliacaoOrderByRelevanceInput = {
    fields: ConciliacaoOrderByRelevanceFieldEnum | ConciliacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ConciliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    analistaResponsavel?: SortOrder
    status?: SortOrder
    caixaId?: SortOrder
  }

  export type ConciliacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    caixaId?: SortOrder
  }

  export type ConciliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    analistaResponsavel?: SortOrder
    status?: SortOrder
    caixaId?: SortOrder
  }

  export type ConciliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    analistaResponsavel?: SortOrder
    status?: SortOrder
    caixaId?: SortOrder
  }

  export type ConciliacaoSumOrderByAggregateInput = {
    id?: SortOrder
    caixaId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ConciliacaoNullableScalarRelationFilter = {
    is?: ConciliacaoWhereInput | null
    isNot?: ConciliacaoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransacaoOrderByRelevanceInput = {
    fields: TransacaoOrderByRelevanceFieldEnum | TransacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransacaoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    codigo?: SortOrder
    evidencia?: SortOrder
    mensagemAnalista?: SortOrder
    depositoConferido?: SortOrder
    caixaId?: SortOrder
    conciliacaoId?: SortOrder
  }

  export type TransacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    caixaId?: SortOrder
    conciliacaoId?: SortOrder
  }

  export type TransacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    codigo?: SortOrder
    evidencia?: SortOrder
    mensagemAnalista?: SortOrder
    depositoConferido?: SortOrder
    caixaId?: SortOrder
    conciliacaoId?: SortOrder
  }

  export type TransacaoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    codigo?: SortOrder
    evidencia?: SortOrder
    mensagemAnalista?: SortOrder
    depositoConferido?: SortOrder
    caixaId?: SortOrder
    conciliacaoId?: SortOrder
  }

  export type TransacaoSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    caixaId?: SortOrder
    conciliacaoId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TransacaoCreateNestedManyWithoutCaixaInput = {
    create?: XOR<TransacaoCreateWithoutCaixaInput, TransacaoUncheckedCreateWithoutCaixaInput> | TransacaoCreateWithoutCaixaInput[] | TransacaoUncheckedCreateWithoutCaixaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutCaixaInput | TransacaoCreateOrConnectWithoutCaixaInput[]
    createMany?: TransacaoCreateManyCaixaInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type ConciliacaoCreateNestedManyWithoutCaixaInput = {
    create?: XOR<ConciliacaoCreateWithoutCaixaInput, ConciliacaoUncheckedCreateWithoutCaixaInput> | ConciliacaoCreateWithoutCaixaInput[] | ConciliacaoUncheckedCreateWithoutCaixaInput[]
    connectOrCreate?: ConciliacaoCreateOrConnectWithoutCaixaInput | ConciliacaoCreateOrConnectWithoutCaixaInput[]
    createMany?: ConciliacaoCreateManyCaixaInputEnvelope
    connect?: ConciliacaoWhereUniqueInput | ConciliacaoWhereUniqueInput[]
  }

  export type TransacaoUncheckedCreateNestedManyWithoutCaixaInput = {
    create?: XOR<TransacaoCreateWithoutCaixaInput, TransacaoUncheckedCreateWithoutCaixaInput> | TransacaoCreateWithoutCaixaInput[] | TransacaoUncheckedCreateWithoutCaixaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutCaixaInput | TransacaoCreateOrConnectWithoutCaixaInput[]
    createMany?: TransacaoCreateManyCaixaInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type ConciliacaoUncheckedCreateNestedManyWithoutCaixaInput = {
    create?: XOR<ConciliacaoCreateWithoutCaixaInput, ConciliacaoUncheckedCreateWithoutCaixaInput> | ConciliacaoCreateWithoutCaixaInput[] | ConciliacaoUncheckedCreateWithoutCaixaInput[]
    connectOrCreate?: ConciliacaoCreateOrConnectWithoutCaixaInput | ConciliacaoCreateOrConnectWithoutCaixaInput[]
    createMany?: ConciliacaoCreateManyCaixaInputEnvelope
    connect?: ConciliacaoWhereUniqueInput | ConciliacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TransacaoUpdateManyWithoutCaixaNestedInput = {
    create?: XOR<TransacaoCreateWithoutCaixaInput, TransacaoUncheckedCreateWithoutCaixaInput> | TransacaoCreateWithoutCaixaInput[] | TransacaoUncheckedCreateWithoutCaixaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutCaixaInput | TransacaoCreateOrConnectWithoutCaixaInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutCaixaInput | TransacaoUpsertWithWhereUniqueWithoutCaixaInput[]
    createMany?: TransacaoCreateManyCaixaInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutCaixaInput | TransacaoUpdateWithWhereUniqueWithoutCaixaInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutCaixaInput | TransacaoUpdateManyWithWhereWithoutCaixaInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type ConciliacaoUpdateManyWithoutCaixaNestedInput = {
    create?: XOR<ConciliacaoCreateWithoutCaixaInput, ConciliacaoUncheckedCreateWithoutCaixaInput> | ConciliacaoCreateWithoutCaixaInput[] | ConciliacaoUncheckedCreateWithoutCaixaInput[]
    connectOrCreate?: ConciliacaoCreateOrConnectWithoutCaixaInput | ConciliacaoCreateOrConnectWithoutCaixaInput[]
    upsert?: ConciliacaoUpsertWithWhereUniqueWithoutCaixaInput | ConciliacaoUpsertWithWhereUniqueWithoutCaixaInput[]
    createMany?: ConciliacaoCreateManyCaixaInputEnvelope
    set?: ConciliacaoWhereUniqueInput | ConciliacaoWhereUniqueInput[]
    disconnect?: ConciliacaoWhereUniqueInput | ConciliacaoWhereUniqueInput[]
    delete?: ConciliacaoWhereUniqueInput | ConciliacaoWhereUniqueInput[]
    connect?: ConciliacaoWhereUniqueInput | ConciliacaoWhereUniqueInput[]
    update?: ConciliacaoUpdateWithWhereUniqueWithoutCaixaInput | ConciliacaoUpdateWithWhereUniqueWithoutCaixaInput[]
    updateMany?: ConciliacaoUpdateManyWithWhereWithoutCaixaInput | ConciliacaoUpdateManyWithWhereWithoutCaixaInput[]
    deleteMany?: ConciliacaoScalarWhereInput | ConciliacaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransacaoUncheckedUpdateManyWithoutCaixaNestedInput = {
    create?: XOR<TransacaoCreateWithoutCaixaInput, TransacaoUncheckedCreateWithoutCaixaInput> | TransacaoCreateWithoutCaixaInput[] | TransacaoUncheckedCreateWithoutCaixaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutCaixaInput | TransacaoCreateOrConnectWithoutCaixaInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutCaixaInput | TransacaoUpsertWithWhereUniqueWithoutCaixaInput[]
    createMany?: TransacaoCreateManyCaixaInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutCaixaInput | TransacaoUpdateWithWhereUniqueWithoutCaixaInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutCaixaInput | TransacaoUpdateManyWithWhereWithoutCaixaInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type ConciliacaoUncheckedUpdateManyWithoutCaixaNestedInput = {
    create?: XOR<ConciliacaoCreateWithoutCaixaInput, ConciliacaoUncheckedCreateWithoutCaixaInput> | ConciliacaoCreateWithoutCaixaInput[] | ConciliacaoUncheckedCreateWithoutCaixaInput[]
    connectOrCreate?: ConciliacaoCreateOrConnectWithoutCaixaInput | ConciliacaoCreateOrConnectWithoutCaixaInput[]
    upsert?: ConciliacaoUpsertWithWhereUniqueWithoutCaixaInput | ConciliacaoUpsertWithWhereUniqueWithoutCaixaInput[]
    createMany?: ConciliacaoCreateManyCaixaInputEnvelope
    set?: ConciliacaoWhereUniqueInput | ConciliacaoWhereUniqueInput[]
    disconnect?: ConciliacaoWhereUniqueInput | ConciliacaoWhereUniqueInput[]
    delete?: ConciliacaoWhereUniqueInput | ConciliacaoWhereUniqueInput[]
    connect?: ConciliacaoWhereUniqueInput | ConciliacaoWhereUniqueInput[]
    update?: ConciliacaoUpdateWithWhereUniqueWithoutCaixaInput | ConciliacaoUpdateWithWhereUniqueWithoutCaixaInput[]
    updateMany?: ConciliacaoUpdateManyWithWhereWithoutCaixaInput | ConciliacaoUpdateManyWithWhereWithoutCaixaInput[]
    deleteMany?: ConciliacaoScalarWhereInput | ConciliacaoScalarWhereInput[]
  }

  export type CaixaCreateNestedOneWithoutConciliacoesInput = {
    create?: XOR<CaixaCreateWithoutConciliacoesInput, CaixaUncheckedCreateWithoutConciliacoesInput>
    connectOrCreate?: CaixaCreateOrConnectWithoutConciliacoesInput
    connect?: CaixaWhereUniqueInput
  }

  export type TransacaoCreateNestedManyWithoutConciliacaoInput = {
    create?: XOR<TransacaoCreateWithoutConciliacaoInput, TransacaoUncheckedCreateWithoutConciliacaoInput> | TransacaoCreateWithoutConciliacaoInput[] | TransacaoUncheckedCreateWithoutConciliacaoInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutConciliacaoInput | TransacaoCreateOrConnectWithoutConciliacaoInput[]
    createMany?: TransacaoCreateManyConciliacaoInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type TransacaoUncheckedCreateNestedManyWithoutConciliacaoInput = {
    create?: XOR<TransacaoCreateWithoutConciliacaoInput, TransacaoUncheckedCreateWithoutConciliacaoInput> | TransacaoCreateWithoutConciliacaoInput[] | TransacaoUncheckedCreateWithoutConciliacaoInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutConciliacaoInput | TransacaoCreateOrConnectWithoutConciliacaoInput[]
    createMany?: TransacaoCreateManyConciliacaoInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CaixaUpdateOneRequiredWithoutConciliacoesNestedInput = {
    create?: XOR<CaixaCreateWithoutConciliacoesInput, CaixaUncheckedCreateWithoutConciliacoesInput>
    connectOrCreate?: CaixaCreateOrConnectWithoutConciliacoesInput
    upsert?: CaixaUpsertWithoutConciliacoesInput
    connect?: CaixaWhereUniqueInput
    update?: XOR<XOR<CaixaUpdateToOneWithWhereWithoutConciliacoesInput, CaixaUpdateWithoutConciliacoesInput>, CaixaUncheckedUpdateWithoutConciliacoesInput>
  }

  export type TransacaoUpdateManyWithoutConciliacaoNestedInput = {
    create?: XOR<TransacaoCreateWithoutConciliacaoInput, TransacaoUncheckedCreateWithoutConciliacaoInput> | TransacaoCreateWithoutConciliacaoInput[] | TransacaoUncheckedCreateWithoutConciliacaoInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutConciliacaoInput | TransacaoCreateOrConnectWithoutConciliacaoInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutConciliacaoInput | TransacaoUpsertWithWhereUniqueWithoutConciliacaoInput[]
    createMany?: TransacaoCreateManyConciliacaoInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutConciliacaoInput | TransacaoUpdateWithWhereUniqueWithoutConciliacaoInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutConciliacaoInput | TransacaoUpdateManyWithWhereWithoutConciliacaoInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type TransacaoUncheckedUpdateManyWithoutConciliacaoNestedInput = {
    create?: XOR<TransacaoCreateWithoutConciliacaoInput, TransacaoUncheckedCreateWithoutConciliacaoInput> | TransacaoCreateWithoutConciliacaoInput[] | TransacaoUncheckedCreateWithoutConciliacaoInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutConciliacaoInput | TransacaoCreateOrConnectWithoutConciliacaoInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutConciliacaoInput | TransacaoUpsertWithWhereUniqueWithoutConciliacaoInput[]
    createMany?: TransacaoCreateManyConciliacaoInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutConciliacaoInput | TransacaoUpdateWithWhereUniqueWithoutConciliacaoInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutConciliacaoInput | TransacaoUpdateManyWithWhereWithoutConciliacaoInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type CaixaCreateNestedOneWithoutTransacoesInput = {
    create?: XOR<CaixaCreateWithoutTransacoesInput, CaixaUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: CaixaCreateOrConnectWithoutTransacoesInput
    connect?: CaixaWhereUniqueInput
  }

  export type ConciliacaoCreateNestedOneWithoutTransacoesInput = {
    create?: XOR<ConciliacaoCreateWithoutTransacoesInput, ConciliacaoUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: ConciliacaoCreateOrConnectWithoutTransacoesInput
    connect?: ConciliacaoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CaixaUpdateOneRequiredWithoutTransacoesNestedInput = {
    create?: XOR<CaixaCreateWithoutTransacoesInput, CaixaUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: CaixaCreateOrConnectWithoutTransacoesInput
    upsert?: CaixaUpsertWithoutTransacoesInput
    connect?: CaixaWhereUniqueInput
    update?: XOR<XOR<CaixaUpdateToOneWithWhereWithoutTransacoesInput, CaixaUpdateWithoutTransacoesInput>, CaixaUncheckedUpdateWithoutTransacoesInput>
  }

  export type ConciliacaoUpdateOneWithoutTransacoesNestedInput = {
    create?: XOR<ConciliacaoCreateWithoutTransacoesInput, ConciliacaoUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: ConciliacaoCreateOrConnectWithoutTransacoesInput
    upsert?: ConciliacaoUpsertWithoutTransacoesInput
    disconnect?: ConciliacaoWhereInput | boolean
    delete?: ConciliacaoWhereInput | boolean
    connect?: ConciliacaoWhereUniqueInput
    update?: XOR<XOR<ConciliacaoUpdateToOneWithWhereWithoutTransacoesInput, ConciliacaoUpdateWithoutTransacoesInput>, ConciliacaoUncheckedUpdateWithoutTransacoesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TransacaoCreateWithoutCaixaInput = {
    data: Date | string
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    codigo?: string | null
    evidencia?: string | null
    mensagemAnalista?: string | null
    depositoConferido?: boolean
    conciliacao?: ConciliacaoCreateNestedOneWithoutTransacoesInput
  }

  export type TransacaoUncheckedCreateWithoutCaixaInput = {
    id?: number
    data: Date | string
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    codigo?: string | null
    evidencia?: string | null
    mensagemAnalista?: string | null
    depositoConferido?: boolean
    conciliacaoId?: number | null
  }

  export type TransacaoCreateOrConnectWithoutCaixaInput = {
    where: TransacaoWhereUniqueInput
    create: XOR<TransacaoCreateWithoutCaixaInput, TransacaoUncheckedCreateWithoutCaixaInput>
  }

  export type TransacaoCreateManyCaixaInputEnvelope = {
    data: TransacaoCreateManyCaixaInput | TransacaoCreateManyCaixaInput[]
    skipDuplicates?: boolean
  }

  export type ConciliacaoCreateWithoutCaixaInput = {
    data: Date | string
    analistaResponsavel: string
    status: boolean
    transacoes?: TransacaoCreateNestedManyWithoutConciliacaoInput
  }

  export type ConciliacaoUncheckedCreateWithoutCaixaInput = {
    id?: number
    data: Date | string
    analistaResponsavel: string
    status: boolean
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutConciliacaoInput
  }

  export type ConciliacaoCreateOrConnectWithoutCaixaInput = {
    where: ConciliacaoWhereUniqueInput
    create: XOR<ConciliacaoCreateWithoutCaixaInput, ConciliacaoUncheckedCreateWithoutCaixaInput>
  }

  export type ConciliacaoCreateManyCaixaInputEnvelope = {
    data: ConciliacaoCreateManyCaixaInput | ConciliacaoCreateManyCaixaInput[]
    skipDuplicates?: boolean
  }

  export type TransacaoUpsertWithWhereUniqueWithoutCaixaInput = {
    where: TransacaoWhereUniqueInput
    update: XOR<TransacaoUpdateWithoutCaixaInput, TransacaoUncheckedUpdateWithoutCaixaInput>
    create: XOR<TransacaoCreateWithoutCaixaInput, TransacaoUncheckedCreateWithoutCaixaInput>
  }

  export type TransacaoUpdateWithWhereUniqueWithoutCaixaInput = {
    where: TransacaoWhereUniqueInput
    data: XOR<TransacaoUpdateWithoutCaixaInput, TransacaoUncheckedUpdateWithoutCaixaInput>
  }

  export type TransacaoUpdateManyWithWhereWithoutCaixaInput = {
    where: TransacaoScalarWhereInput
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyWithoutCaixaInput>
  }

  export type TransacaoScalarWhereInput = {
    AND?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
    OR?: TransacaoScalarWhereInput[]
    NOT?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
    id?: IntFilter<"Transacao"> | number
    data?: DateTimeFilter<"Transacao"> | Date | string
    tipo?: StringFilter<"Transacao"> | string
    valor?: DecimalFilter<"Transacao"> | Decimal | DecimalJsLike | number | string
    codigo?: StringNullableFilter<"Transacao"> | string | null
    evidencia?: StringNullableFilter<"Transacao"> | string | null
    mensagemAnalista?: StringNullableFilter<"Transacao"> | string | null
    depositoConferido?: BoolFilter<"Transacao"> | boolean
    caixaId?: IntFilter<"Transacao"> | number
    conciliacaoId?: IntNullableFilter<"Transacao"> | number | null
  }

  export type ConciliacaoUpsertWithWhereUniqueWithoutCaixaInput = {
    where: ConciliacaoWhereUniqueInput
    update: XOR<ConciliacaoUpdateWithoutCaixaInput, ConciliacaoUncheckedUpdateWithoutCaixaInput>
    create: XOR<ConciliacaoCreateWithoutCaixaInput, ConciliacaoUncheckedCreateWithoutCaixaInput>
  }

  export type ConciliacaoUpdateWithWhereUniqueWithoutCaixaInput = {
    where: ConciliacaoWhereUniqueInput
    data: XOR<ConciliacaoUpdateWithoutCaixaInput, ConciliacaoUncheckedUpdateWithoutCaixaInput>
  }

  export type ConciliacaoUpdateManyWithWhereWithoutCaixaInput = {
    where: ConciliacaoScalarWhereInput
    data: XOR<ConciliacaoUpdateManyMutationInput, ConciliacaoUncheckedUpdateManyWithoutCaixaInput>
  }

  export type ConciliacaoScalarWhereInput = {
    AND?: ConciliacaoScalarWhereInput | ConciliacaoScalarWhereInput[]
    OR?: ConciliacaoScalarWhereInput[]
    NOT?: ConciliacaoScalarWhereInput | ConciliacaoScalarWhereInput[]
    id?: IntFilter<"Conciliacao"> | number
    data?: DateTimeFilter<"Conciliacao"> | Date | string
    analistaResponsavel?: StringFilter<"Conciliacao"> | string
    status?: BoolFilter<"Conciliacao"> | boolean
    caixaId?: IntFilter<"Conciliacao"> | number
  }

  export type CaixaCreateWithoutConciliacoesInput = {
    nomeLoja: string
    status: string
    transacoes?: TransacaoCreateNestedManyWithoutCaixaInput
  }

  export type CaixaUncheckedCreateWithoutConciliacoesInput = {
    id?: number
    nomeLoja: string
    status: string
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutCaixaInput
  }

  export type CaixaCreateOrConnectWithoutConciliacoesInput = {
    where: CaixaWhereUniqueInput
    create: XOR<CaixaCreateWithoutConciliacoesInput, CaixaUncheckedCreateWithoutConciliacoesInput>
  }

  export type TransacaoCreateWithoutConciliacaoInput = {
    data: Date | string
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    codigo?: string | null
    evidencia?: string | null
    mensagemAnalista?: string | null
    depositoConferido?: boolean
    caixa: CaixaCreateNestedOneWithoutTransacoesInput
  }

  export type TransacaoUncheckedCreateWithoutConciliacaoInput = {
    id?: number
    data: Date | string
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    codigo?: string | null
    evidencia?: string | null
    mensagemAnalista?: string | null
    depositoConferido?: boolean
    caixaId: number
  }

  export type TransacaoCreateOrConnectWithoutConciliacaoInput = {
    where: TransacaoWhereUniqueInput
    create: XOR<TransacaoCreateWithoutConciliacaoInput, TransacaoUncheckedCreateWithoutConciliacaoInput>
  }

  export type TransacaoCreateManyConciliacaoInputEnvelope = {
    data: TransacaoCreateManyConciliacaoInput | TransacaoCreateManyConciliacaoInput[]
    skipDuplicates?: boolean
  }

  export type CaixaUpsertWithoutConciliacoesInput = {
    update: XOR<CaixaUpdateWithoutConciliacoesInput, CaixaUncheckedUpdateWithoutConciliacoesInput>
    create: XOR<CaixaCreateWithoutConciliacoesInput, CaixaUncheckedCreateWithoutConciliacoesInput>
    where?: CaixaWhereInput
  }

  export type CaixaUpdateToOneWithWhereWithoutConciliacoesInput = {
    where?: CaixaWhereInput
    data: XOR<CaixaUpdateWithoutConciliacoesInput, CaixaUncheckedUpdateWithoutConciliacoesInput>
  }

  export type CaixaUpdateWithoutConciliacoesInput = {
    nomeLoja?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transacoes?: TransacaoUpdateManyWithoutCaixaNestedInput
  }

  export type CaixaUncheckedUpdateWithoutConciliacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeLoja?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transacoes?: TransacaoUncheckedUpdateManyWithoutCaixaNestedInput
  }

  export type TransacaoUpsertWithWhereUniqueWithoutConciliacaoInput = {
    where: TransacaoWhereUniqueInput
    update: XOR<TransacaoUpdateWithoutConciliacaoInput, TransacaoUncheckedUpdateWithoutConciliacaoInput>
    create: XOR<TransacaoCreateWithoutConciliacaoInput, TransacaoUncheckedCreateWithoutConciliacaoInput>
  }

  export type TransacaoUpdateWithWhereUniqueWithoutConciliacaoInput = {
    where: TransacaoWhereUniqueInput
    data: XOR<TransacaoUpdateWithoutConciliacaoInput, TransacaoUncheckedUpdateWithoutConciliacaoInput>
  }

  export type TransacaoUpdateManyWithWhereWithoutConciliacaoInput = {
    where: TransacaoScalarWhereInput
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyWithoutConciliacaoInput>
  }

  export type CaixaCreateWithoutTransacoesInput = {
    nomeLoja: string
    status: string
    conciliacoes?: ConciliacaoCreateNestedManyWithoutCaixaInput
  }

  export type CaixaUncheckedCreateWithoutTransacoesInput = {
    id?: number
    nomeLoja: string
    status: string
    conciliacoes?: ConciliacaoUncheckedCreateNestedManyWithoutCaixaInput
  }

  export type CaixaCreateOrConnectWithoutTransacoesInput = {
    where: CaixaWhereUniqueInput
    create: XOR<CaixaCreateWithoutTransacoesInput, CaixaUncheckedCreateWithoutTransacoesInput>
  }

  export type ConciliacaoCreateWithoutTransacoesInput = {
    data: Date | string
    analistaResponsavel: string
    status: boolean
    caixa: CaixaCreateNestedOneWithoutConciliacoesInput
  }

  export type ConciliacaoUncheckedCreateWithoutTransacoesInput = {
    id?: number
    data: Date | string
    analistaResponsavel: string
    status: boolean
    caixaId: number
  }

  export type ConciliacaoCreateOrConnectWithoutTransacoesInput = {
    where: ConciliacaoWhereUniqueInput
    create: XOR<ConciliacaoCreateWithoutTransacoesInput, ConciliacaoUncheckedCreateWithoutTransacoesInput>
  }

  export type CaixaUpsertWithoutTransacoesInput = {
    update: XOR<CaixaUpdateWithoutTransacoesInput, CaixaUncheckedUpdateWithoutTransacoesInput>
    create: XOR<CaixaCreateWithoutTransacoesInput, CaixaUncheckedCreateWithoutTransacoesInput>
    where?: CaixaWhereInput
  }

  export type CaixaUpdateToOneWithWhereWithoutTransacoesInput = {
    where?: CaixaWhereInput
    data: XOR<CaixaUpdateWithoutTransacoesInput, CaixaUncheckedUpdateWithoutTransacoesInput>
  }

  export type CaixaUpdateWithoutTransacoesInput = {
    nomeLoja?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    conciliacoes?: ConciliacaoUpdateManyWithoutCaixaNestedInput
  }

  export type CaixaUncheckedUpdateWithoutTransacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeLoja?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    conciliacoes?: ConciliacaoUncheckedUpdateManyWithoutCaixaNestedInput
  }

  export type ConciliacaoUpsertWithoutTransacoesInput = {
    update: XOR<ConciliacaoUpdateWithoutTransacoesInput, ConciliacaoUncheckedUpdateWithoutTransacoesInput>
    create: XOR<ConciliacaoCreateWithoutTransacoesInput, ConciliacaoUncheckedCreateWithoutTransacoesInput>
    where?: ConciliacaoWhereInput
  }

  export type ConciliacaoUpdateToOneWithWhereWithoutTransacoesInput = {
    where?: ConciliacaoWhereInput
    data: XOR<ConciliacaoUpdateWithoutTransacoesInput, ConciliacaoUncheckedUpdateWithoutTransacoesInput>
  }

  export type ConciliacaoUpdateWithoutTransacoesInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    analistaResponsavel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    caixa?: CaixaUpdateOneRequiredWithoutConciliacoesNestedInput
  }

  export type ConciliacaoUncheckedUpdateWithoutTransacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    analistaResponsavel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    caixaId?: IntFieldUpdateOperationsInput | number
  }

  export type TransacaoCreateManyCaixaInput = {
    id?: number
    data: Date | string
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    codigo?: string | null
    evidencia?: string | null
    mensagemAnalista?: string | null
    depositoConferido?: boolean
    conciliacaoId?: number | null
  }

  export type ConciliacaoCreateManyCaixaInput = {
    id?: number
    data: Date | string
    analistaResponsavel: string
    status: boolean
  }

  export type TransacaoUpdateWithoutCaixaInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    mensagemAnalista?: NullableStringFieldUpdateOperationsInput | string | null
    depositoConferido?: BoolFieldUpdateOperationsInput | boolean
    conciliacao?: ConciliacaoUpdateOneWithoutTransacoesNestedInput
  }

  export type TransacaoUncheckedUpdateWithoutCaixaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    mensagemAnalista?: NullableStringFieldUpdateOperationsInput | string | null
    depositoConferido?: BoolFieldUpdateOperationsInput | boolean
    conciliacaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransacaoUncheckedUpdateManyWithoutCaixaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    mensagemAnalista?: NullableStringFieldUpdateOperationsInput | string | null
    depositoConferido?: BoolFieldUpdateOperationsInput | boolean
    conciliacaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConciliacaoUpdateWithoutCaixaInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    analistaResponsavel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    transacoes?: TransacaoUpdateManyWithoutConciliacaoNestedInput
  }

  export type ConciliacaoUncheckedUpdateWithoutCaixaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    analistaResponsavel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    transacoes?: TransacaoUncheckedUpdateManyWithoutConciliacaoNestedInput
  }

  export type ConciliacaoUncheckedUpdateManyWithoutCaixaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    analistaResponsavel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransacaoCreateManyConciliacaoInput = {
    id?: number
    data: Date | string
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    codigo?: string | null
    evidencia?: string | null
    mensagemAnalista?: string | null
    depositoConferido?: boolean
    caixaId: number
  }

  export type TransacaoUpdateWithoutConciliacaoInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    mensagemAnalista?: NullableStringFieldUpdateOperationsInput | string | null
    depositoConferido?: BoolFieldUpdateOperationsInput | boolean
    caixa?: CaixaUpdateOneRequiredWithoutTransacoesNestedInput
  }

  export type TransacaoUncheckedUpdateWithoutConciliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    mensagemAnalista?: NullableStringFieldUpdateOperationsInput | string | null
    depositoConferido?: BoolFieldUpdateOperationsInput | boolean
    caixaId?: IntFieldUpdateOperationsInput | number
  }

  export type TransacaoUncheckedUpdateManyWithoutConciliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    mensagemAnalista?: NullableStringFieldUpdateOperationsInput | string | null
    depositoConferido?: BoolFieldUpdateOperationsInput | boolean
    caixaId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}