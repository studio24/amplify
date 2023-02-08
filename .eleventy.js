module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({'web/dist/fonts': "fonts"})
    eleventyConfig.addPassthroughCopy({'web/dist/images': "images"})
    eleventyConfig.addPassthroughCopy({'web/dist/js': "js"})
    eleventyConfig.addPassthroughCopy({'web/dist/styles': "styles"})
    eleventyConfig.addPassthroughCopy({'web/dist/svg': "svg"})

    // Enable custom order in site navigation
    eleventyConfig.addCollection("navItems", function (collection) {
        return collection.getAll().filter((item) => item.data.navItem)
            .sort((a, b) => b.data.navOrder - a.data.navOrder);
    })

    // Inject nunjucks macro import for components into top level Markdown files
    eleventyConfig.addCollection('rootfiles', function (collection) {
        const macroImport = `{% from "./_includes/system/components.njk" import pageComponents %}`;
        let topLevelCollection = collection.getAll().filter((item) => item.data.root);

        topLevelCollection.forEach((item) => {
            item.template.frontMatter.content = `${macroImport}\n${item.template.frontMatter.content}`;
        })

        return topLevelCollection;
    })

    // Inject nunjucks macro import for components in section-specific Markdown files
    eleventyConfig.addCollection('subpages', function (collection) {
        const macroImport = `{% from "../_includes/system/components.njk" import pageComponents %}`;
        let subPageCollection = collection.getAll().filter((item) => item.data.subpage);

        subPageCollection.forEach((item) => {
            item.template.frontMatter.content = `${macroImport}\n${item.template.frontMatter.content}`;
        })

        return subPageCollection;
    })
    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        dir: {
            input: "web/amplify/eleventy",
            output: "web/eleventy-dist",
            layout: "templates/page.njk"
        }
    }
}