import React, { Component } from 'react';
import './OurHistory.css';
import img from '../../../../assets/web/images/about.jpg'
class OurHistory extends Component {

    componentDidMount () {
    }

    render () {
        return (
         <div>
             <section className="ftco-about d-md-flex">
                 <div className="one-half img" style={{ backgroundImage:`url(${img})` }} />
                 <div className="one-half ftco-animate">
                     <div className="overlap">
                         <div className="heading-section ftco-animate ">
                             <span className="subheading">Discover</span>
                             <h2 className="mb-4">Our Story</h2>
                         </div>
                         <div>
                             <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came
                                 from it would have been rewritten a thousand times and everything that was left from
                                 its origin would be the word "and" and the Little Blind Text should turn around and
                                 return to its own, safe country. But nothing the copy said could convince her and so it
                                 didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with
                                 Longe and Parole and dragged her into their agency, where they abused her for
                                 their.</p>
                         </div>
                     </div>
                 </div>
             </section>
         </div>
        )
    }
}

export default OurHistory;