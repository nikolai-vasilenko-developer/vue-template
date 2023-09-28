import path from "path";
import {buildConfigOptions, buildTypes, setupConfig} from "./config/build/setupConfig";

interface EnvironmentBuild {
    mode: buildTypes
}

export default ({mode}: EnvironmentBuild) => {

    const isDev = mode === 'production';

    const options: buildConfigOptions = {
        paths: {
            entry: path.resolve(__dirname, "src", "index.ts"),
            out: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'src', 'app', 'public', 'index.html'),
            static: path.resolve(__dirname, 'src', 'public'),
            eslintPath: path.resolve(__dirname, 'eslintrc.json'),
            stylelintFilesPath: path.resolve(__dirname, 'src/**/*.{scss}'),
            root: path.resolve(__dirname, 'src')
        },
        mode,
        isDev: isDev
    }

    return setupConfig(options);
};
