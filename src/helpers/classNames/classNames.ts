// record type is an object with restricted values type, here key must be string and value string o boolean
type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}

classNames("bnt-close", { hovered: true, selectable: true, red: false }, [
  "pdg",
]);
