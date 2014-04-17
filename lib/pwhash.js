var crypto = require('crypto');
var parseargs = require('minimist');

function pwhash(pw, salt) {
  var saltbuf = new Buffer(salt, 'hex');
  var buf = new Buffer(pw+saltbuf, 'binary');
  var shasum = crypto.createHash('sha1');
  shasum.update(buf);
  return '-hashed-'+shasum.digest('hex')+',salt';
}

function gensalt(pw){
  crypto.randomBytes(32, function(err, buf){
    if(err){
      console.log(err);
      return;
    }
    var salt = buf.toString('hex');
    var hash = pwhash(pw, salt);
    console.log(hash + " (generated salt = "+salt+" )");
  });
}

exports.doCommand = function(){
  var args = parseargs(process.argv.slice(2));

  if(!args.p){
    console.log("usage: pwhash -p password -s salt (as hex string)");
    return;
  }

  if(!args.s){
    gensalt(args.p);
    return;
  }

  var hash = pwhash(args.p, args.s);
  console.log(hash);
}
