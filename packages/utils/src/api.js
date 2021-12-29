"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsyncDataEffect = void 0;
const react_1 = require("react");
const deferred_1 = require("./deferred");
/**
 *
 * @param  getData
 * @param  options
 */
function useAsyncDataEffect(getData, options) {
    let cancelled = false;
    const { setter, stateName } = options;
    (0, react_1.useEffect)(() => {
        const d = new deferred_1.default();
        getData()
            .then((jsonData) => {
            if (cancelled)
                return;
            else
                d.resolve(jsonData);
        })
            .catch(d.reject);
        d.promise
            .then((data) => {
            if (!cancelled) {
                console.info("%c Updating state: " + stateName, "background: green; color: white; display: block;");
                setter(data);
            }
        })
            .catch(console.error);
        return () => {
            cancelled = true;
        };
    }, [...(options.otherStatesToMonitor || []), stateName]);
}
exports.useAsyncDataEffect = useAsyncDataEffect;
