const rp = require('request-promise');
const $ = require('cheerio');

const getJobDescription = function (url) {
    return rp(url)
        .then(html => {

            // let root = $('.jobsearch-JobMetadataHeader + div', html);
            let root = $('#jobDescriptionText', html);

            /** 
             * Indeed splits its Job description across multiple <div> and <p> tags, which may or may not be
             *      nested a variable amount of times. This function recursively traverses through these
             *      and adds text found to the string variable.
             * 
             * Base case: If the root component (div or p) has text, it appends it.
             * Otherwise: Makes each of its children the root component and calls addText()
            */
            let addText = (root, string) => {  // Traverses through divs and adds text
                if (!!root.text()) {
                    return string + root.text();
                }
                // Recursively traverse child div or p tags
                root.children().foreach(newRoot => {
                    string += addText(newRoot, string);
                })

                return string;
            }
            let description = addText(root, "");
            // console.log("Description is ", description)

            return {
                description: description
            };
        })
        .catch(function (err) {
            //handle error
        });
};

module.exports = getJobDescription;