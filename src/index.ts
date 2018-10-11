import { IStyleAPI, IStyleItem } from "import-sort-style";

function isAliasModule({ moduleName }) {
  return moduleName.startsWith("$");
}

export default function(styleApi: IStyleAPI): Array<IStyleItem> {
  const {
    alias,
    and,
    dotSegmentCount,
    hasNoMember,
    isAbsoluteModule,
    isNodeModule,
    isRelativeModule,
    name,
    not,
    naturally,
    unicode
  } = styleApi;

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
      match: and(isNodeModule, not(isAliasModule)),
      sort: name(naturally)
    },
    { separator: false },

    // import … from "foo";
    {
      match: and(isAbsoluteModule, not(isAliasModule)),
      sort: name(naturally)
    },
    { separator: true },

    // import … from "$src/";
    {
      match: isAliasModule,
      sort: name(naturally)
    },
    { separator: true },

    // import … from "./foo";
    // import … from "../foo";
    {
      match: isRelativeModule,
      sort: [dotSegmentCount, name(naturally)],
      sortNamedMembers: alias(unicode)
    },
    { separator: true }
  ];
}
