import { IChannel, IMessage, ITeam } from "./types";
/**
 * Check whether a given value is an array where
 * each member is of a specified type
 *
 * @param arr - array to check
 * @param check - type guard to use when evaluating each item
 * @public
 */
export declare function isTypedArray<T>(arr: unknown, check: (x: any) => x is T): arr is T[];
/**
 * Check whether a given value is an {@link @shlack/types#ITeam}
 * @param arg - value to check
 * @beta
 *
 * @example
 * Here's an example of how to use this guard
 * ```ts
 * const team = { id: 'li', name: 'LinkedIn' };
 * isTeam(team); // true
 * ```
 */
export declare function isTeam(arg: any): arg is ITeam;
/**
 * Check whether a given value is an {@link @shlack/types#IChannel}
 * @param arg - value to check
 * @beta
 */
export declare function isChannel(arg: any): arg is IChannel;
/**
 * Check whether a given value is an {@link @shlack/types#IMessage}
 * @param arg - value to check
 * @beta
 */
export declare function isMessage(arg: any): arg is IMessage;
