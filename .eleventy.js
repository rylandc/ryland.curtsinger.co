module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("sortMenu", function(collection, sortOrder) {
        if(!sortOrder) {
            return collection;
        }
        let order = sortOrder.map(path => `./${path}.html`);

        return collection.sort(function(a, b) {
            let firstIndex = order.indexOf(a.inputPath);
            let secondIndex = order.indexOf(b.inputPath);

            if( firstIndex === -1 ) return 1;
            if( secondIndex === -1 ) return -1;

            return firstIndex - secondIndex;
        });
    });
    
    eleventyConfig.addPassthroughCopy("styles");
    eleventyConfig.addPassthroughCopy("scripts");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("files");
    eleventyConfig.addPassthroughCopy("favicon.ico");
};