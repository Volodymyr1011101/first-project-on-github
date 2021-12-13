module.exports = {
    extends: ["stylelint-config-recommended-scss"],
    plugins: [
        "stylelint-scss",
    ],
    defaultSeverity: "warning",
    rules: {
        //Use 4 spaces for indentation
        "indentation": 4,

        //Have a maximum nesting depth of 3
        "max-nesting-depth": 3,

        //Use kebab-case for selectors
        "selector-class-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",

        //One selector per line
        "selector-list-comma-newline-after": "always-multi-line",

        //Enforce a space after declaration colon to force the property and value to be on the same line
        "declaration-colon-space-after": "always",

        //There must always be a newline after the semicolon in multi-line rules.
        "declaration-block-semicolon-newline-after": "always-multi-line",

        //There must always be a newline before the closing brace in multi-line blocks.
        "block-closing-brace-newline-before": "always-multi-line",

        //Require a single space before the opening brace of blocks (opening brace on the same line as last selector).
        "block-opening-brace-space-before": "always",

        //Only one declaration allowed in a single line (`.selector-1 { width: 10%; }`)
        "declaration-block-single-line-max-declarations": 1,


        //Additional rules
        "string-quotes": "single",
        "color-named": "never",
        "color-hex-case": "lower",
        "no-eol-whitespace": true,
        "no-empty-first-line": true,
    },
};
