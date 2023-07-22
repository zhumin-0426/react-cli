// const postcssPresetEnv = require("postcss-preset-env");
import postcssPresetEnv from 'postcss-preset-env'
import postcssNested from 'postcss-nested'
export default {
    plugins:[
        postcssNested(),
        postcssPresetEnv()
    ]
}