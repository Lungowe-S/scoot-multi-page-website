const sass = require('sass')
const path = require('path')

module.exports = function (eleventyConfig) {
	// Set directories to pass through to the public folder
  	eleventyConfig.addPassthroughCopy('./src/assets/');

	// Add a values collection
	eleventyConfig.addCollection('values', (collection) => {
		return collection.getFilteredByGlob('src/values/*.md');
	})

	// Returns main sass file into css folder
    eleventyConfig.addTemplateFormats('scss')
	eleventyConfig.addExtension('scss', {
		outputFileExtension: 'css',
		compile(content, inputPath) {
			let parsed = path.parse(inputPath)
			if (parsed.name.startsWith('_')) return

			console.log('Compiling scss...', inputPath)
		
			return (data) => {
				let result = sass.compile(inputPath)
				return result.css
			}
		},
	});

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};