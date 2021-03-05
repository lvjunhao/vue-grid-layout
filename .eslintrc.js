module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    "plugins": [
        "flowtype"
    ],
    parserOptions: {
        "parser": "babel-eslint",
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true   //只在添加@flow注释的文件才做检查
        }
    }
}
