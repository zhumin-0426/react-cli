// const postcssPresetEnv = require("postcss-preset-env");
import postcssPresetEnv from 'postcss-preset-env'
import postcssNested from 'postcss-nesting'
export default {
    plugins:[
        postcssNested(),
        postcssPresetEnv()
    ]
}