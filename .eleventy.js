const { DateTime } = require('luxon');

module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter('postDate', dateObj => DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED))

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}