## typedoc-plugin-single-line-tags

### What

A plugin for [Typedoc](http://typedoc.org)

This plugin allows specific typedoc `@tags` to be processed as a single line, instead of as multi-line.

Typedoc assumes all tags within a comment (such as @returns) live at the end of the comment.
All content following a tag is considered to be part of the tag.
This causes tags at the beginning of a comment to consume all of the rest of the comment.

Example:

```ts
/**
 * @internal
 * Without the plugin, this comment does not show up in the
 * docs because it's removed by typedoc tag processing
 */
```

This plugin moves all the tags to the bottom of the comment blocks
so they don't consume the rest of the comment content.

```ts
/**
 * This comment now shows up in the docs because 'internal' is moved below it by the plugin.
 * @internal
 */
```

By default, this plugin processes the following tags as single-line:

- `internal`
- `external`
- `preferred`
- `module`
- `hidden`

### Installing

Typedoc has the ability to discover and auto-load typedoc plugins found in node_modules.
Simply install the plugin and run typedoc.

```bash
npm install --save typedoc-plugin-single-line-tags
typedoc
```

### Specifying additional tags

A command line parameter `--single-line-tags` (or `--slt` for short) can be used to add additional single-line-tags (comma separated).

```bash
typedoc --single-line-tags internalapi,externalapi
```

