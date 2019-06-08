## CareerCounsel - API
This repository contains the API to summarize hundreds of real-time job postings from job boards and return them in an easy to understand, summarized statistical format. This repository only contains code for the backend API -- the frontend React interface can be found [here](https://github.com/liaocanada/cuhacking-app).

### Trying it out

API usage example: <https://api.davidliao.ca/getJobStats?career=dba&city=ottawa&province=&experience=junior&position=fulltime>.

The app is deployed onto <https://app.davidliao.ca>.

To run locally, run `node server.js`. The API can be accessed from <http://localhost:5000/stats?career=dba&city=ottawa&province=&experience=junior&position=fulltime>.

### Behind the Scenes

* Development
  * JavaScript/Node.js
  * [Cheerio](https://github.com/cheeriojs/cheerio) to filter specific HTML/CSS elements from a webpage
  * [Indeed Scraper](https://github.com/rynobax/indeed-scraper) for getting matching URLs
* Deployment and Hosting
  * AWS Lambda for **serverless** code running
  * Amazon API Gateway to manage a RESTful API
  * Amazon CloudFront CDN to serve the APIs off of **secure, low-latency** edge locations
  * Amazon Certificate Manager for SSL/TLS certificate to allow for **HTTPS** connections
  * Google Domains DNS service

### Features

The application can currently return
1. The level of education needed, and
2. The type of degree needed

from external job boards, such as Indeed and Github Jobs. 

We plan on adding better and more informative statistics like what specific soft/hard skills are needed, and possibly maps showing which areas have higher/lower average salaries for a given search.

<!-- ### Interface
![Screenshot](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/766/212/datas/gallery.jpg) -->
