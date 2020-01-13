const whitSass = require('@zeit/next-sass');
 module.exports=whitSass({
     cssModules: true,
     cssLoaderOptions: {
         localIdentName: '[name]__[local]__[hash:base64:5]'
     }
 });