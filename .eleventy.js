const sass = require('sass')
const path = require('path')

// Filters
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = function (eleventyConfig) {
	// Set directories to pass through to the public folder
  	eleventyConfig.addPassthroughCopy('./src/assets/');

	eleventyConfig.addPassthroughCopy('./src/js/')

	// Add a values collection
	eleventyConfig.addCollection('values', (collection) => {
		return collection.getFilteredByGlob('src/values/*.md');
	})

	// Add a features collection
	eleventyConfig.addCollection('features', (collection) => {
		return collection.getFilteredByGlob('src/features/*.md');
	})

	// Add a vacancies collection
	eleventyConfig.addCollection('vacancies', (collection) => {
		return collection.getFilteredByGlob('src/vacancies/*.md')
	});

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