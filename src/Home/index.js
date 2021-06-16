import React, { Component } from 'react';
import {connect} from "react-redux";

// class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return (<><h1>Home {this.props.count}</h1> </> );
//     }
// }

const Home = ({count}) => {
    return (<><h1>Home {count}</h1> </>  );
}
 


const mapStateToProps = (store)=>({
    count:store
})
export default connect(mapStateToProps,null)(Home);



// const Home = () => {
//     return (<>
//     <h1>Home</h1>
//     </>  );
// }
 
