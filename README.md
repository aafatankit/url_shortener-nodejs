# url_shortener-nodejs


This is a URL shortener project, hosted on http://13.233.215.209:8000

NodeJS was used for backend.

I also made this project with a PHP backend.


Frontend:

The UI is similar to Google's URL shortener with a small 'Add More' (plus) button to add more long urls so that all of them can be shortened at once. Components: a. An input field - to enter URLs b. "Add More" button to add more URLs (to be submitted at once) c. A Submit button d. A table to show previously shortened URLs with details as shown in the attachment.

Backend:

Following points must be taken into consideration for backend part:

API must shorten single long url as well as an array of long urls at once.
API should only accept complete (https://foo.com/bar) URLs and throw BAD REQUEST ERROR otherwise.
API must have an endpoint to fetch back the original long url(s) from given array of shortened URLs or a single short URL.
Hash of shortened URLs must not be greater than 8 characters.
Proper HTTP status codes must be returned like 200 for GET and 404 for not found in API response.
(Bonus) Maintain a count of number of times a short URL is used to access the original long URL (as displayed in front-end, see attachment).
User must be redirected to original long URL on accessing the short URL.
