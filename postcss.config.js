const pxToViewport = require('postcss-px-to-viewport')
module.exports = {
    plugins: [
        pxToViewport({
            unitToConvert: 'vw', // 要转化的单位
            viewportWidth: 375, // UI设计稿的宽度
            // unitPrecision: 6, // 转换后的精度，即小数点位数
            // propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            // viewportUnit: 'px', // 指定需要转换成的视窗单位，默认vw
            // fontViewportUnit: 'px', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ['vant','wrap'], // 指定不转换为视窗单位的类名，
            // minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            // replace: true, // 是否转换后直接更换属性值
            // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
            // include: [/dcr163/], // 设置需要使用的文件,指定文件或目录在这里配置，官方的正则方式不生效，只支持单个文件名
            // landscape: false // 是否处理横屏情况
          })
    ]
};