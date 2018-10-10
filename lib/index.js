"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(styleApi) {
    const { alias, and, dotSegmentCount, hasNoMember, isAbsoluteModule, isNodeModule, isRelativeModule, moduleName, naturally, unicode, startsWith } = styleApi;
    // @ts-ignore
    return [
        // import "foo" with side effects
        { match: and(hasNoMember, isAbsoluteModule) },
        { separator: true },
        // import "./foo" with side effects
        { match: and(hasNoMember, isRelativeModule) },
        { separator: true },
        // import … from "fs";
        {
            match: isNodeModule,
            sort: moduleName(naturally)
        },
        { separator: false },
        // import … from "foo";
        {
            match: isAbsoluteModule,
            sort: moduleName(naturally)
        },
        { separator: true },
        // import … from "$src/";
        {
            match: startsWith("$"),
            sort: moduleName(naturally)
        },
        { separator: true },
        // import … from "./foo";
        // import … from "../foo";
        {
            match: isRelativeModule,
            sort: [dotSegmentCount, moduleName(naturally)],
            sortNamedMembers: alias(unicode)
        },
        { separator: true }
    ];
}
exports.default = default_1;