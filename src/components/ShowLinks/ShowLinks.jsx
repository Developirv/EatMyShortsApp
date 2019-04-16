import React, { Component } from 'react';



//import './App.css';



// run frinkiac API for simpsons search engine


//var frinkiac = require('frinkiac');

//frinkiac.search('smrt')
  //  .then(function(res) {
    //    if (res.status !== 200) {
      //      throw res;
        //} else {
          //  return res.data;
        //}
    //})
    //.catch(function(err) {
      //  throw err;
    //})
    //.then(function(data) {
      //  var memeURLs = data.map(frinkiac.memeMap, frinkiac); 
        
    //});
 

export default class ShowLinks extends Component {
    render() {
        return (
            <div>
                <iframe player src="https://open.spotify.com/embed/show/441Ajk0RlCQpSzUQX0k7Hm" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>

        )
    }
}

