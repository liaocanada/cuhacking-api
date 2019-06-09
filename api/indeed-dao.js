let indeed = require('indeed-scraper');
let getJobDescription = require('./indeed-job-parser');

let countryToHost = {
    CA: 'www.indeed.ca',
    US: 'www.indeed.com',
    other: 'www.indeed.com'
};

let getIndeedDescriptions = (description, city, province, country, level, jobType) => {

    // No parameters - return null
    if (!description && !city && !jobType) {
        return null;
    }

    let host = countryToHost[country] || countryToHost['other'];

    // Insert parameters into an object
    let queryOptions = {
        host: host,
        query: description,
        city: city + (!!province ? (', ' + province) : ''),
        radius: '50',
        level: level,
        jobType: jobType,
        maxAge: '',
        sort: 'relevance',
        limit: '500'
    };

    console.log('Options: ', queryOptions);
    // https://indeed.com/jobs?q=software&l=ottawa&radius=25&explvl=mid_level&fromage=&sort=relevance&jt=fulltime&start=

    let indeedJobDescriptions = indeed.query(queryOptions)
        .then(res => {
            let jobUrls = res.map(job => job.url);

            let descriptions = jobUrls.map(url => {  // Returns array of promises of descriptions
                return getJobDescription(url);  // A request-promise
            })

            return Promise.all(descriptions);
        })
        .then(objArray => {
            return objArray.filter(Boolean).map(  // Removes falsy descriptions
                obj => obj.description
            )
        })  // Array of descriptions (Strings)
        .catch(err => {
            console.error(err);
        });

    return indeedJobDescriptions;
}

module.exports = getIndeedDescriptions;
