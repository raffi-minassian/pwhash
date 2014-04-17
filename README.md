pwhash
========

A small utility command that returns an sha1 password hash in the style of couchdb's internal password hashing.

## Installation

npm install node-pwhash -g

##Usage

pwhash -p password -s salt (as hex string)

## Notes

I like the way [couchdb](http://couchdb.apache.org) manages password storage for users and I have a lot of projects which loosely emulate that. This tools makes it quick and easy to generate an sha1 password hash on the command line for temporary users during testing, etc.

If you leave off the salt, the command will generate a random one for you and display it along with the password hash on the output as a hex string.

Have a look at the source and modify as needed. Its super short and simple.

### Security
Don't use this for anything critical. It doesnt do any sort of password strength checking and the internally generated salts are only 32 bits of data. Thats not enough for anything serious. I think couchdb uses 128 bits last time I checked. I'm sure these are not the only issues, so if you use this to create password hashes that are later cracked ... **I told you so**.

## To Do

Needs Tests!!!


## License

Copyright (c) 2014, Raffi Minassian

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
