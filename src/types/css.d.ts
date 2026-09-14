/**
 * Next ships types for `*.module.css` only, so a side-effect import of a plain
 * stylesheet (`import "./sheet.css"`) has no declaration to resolve against and
 * TypeScript reports it as a missing module. Declaring the pattern here fixes
 * that; `*.module.css` is a longer match, so CSS Modules keep their own typing.
 */
declare module "*.css";
