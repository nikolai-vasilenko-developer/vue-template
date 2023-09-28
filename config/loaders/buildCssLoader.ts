import webpack from "webpack";

export const buildCssLoader = (): webpack.RuleSetRule => ({
    test: /\.s[ac]ss$/i,
    use:
        [
            "style-loader",
            "css-loader",
            {
                loader: "sass-loader",
                options: {
                    // Prefer `dart-sass`
                    implementation: require("sass"),

                },
            },
        ],
})
