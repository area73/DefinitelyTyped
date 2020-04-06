import { UnaryFunction } from '../internal/index';
import Pred from '../Pred';
import Maybe from './Maybe';

/**
 * safeAfter :: ((b -> Boolean) | Pred) -> (a -> b) -> a -> Maybe b
 */
declare function safeAfter(pred: UnaryFunction<boolean> | Pred, fn: UnaryFunction, val: unknown): Maybe;
declare function safeAfter(pred: UnaryFunction<boolean> | Pred, fn: UnaryFunction): (val: unknown) => Maybe;
declare function safeAfter(pred: UnaryFunction<boolean> | Pred): (fn: UnaryFunction) => (val: unknown) => Maybe;

export default safeAfter;
