import React from 'react';
import { Postcard } from '../../components/Postcard';
//picture importing was the only way to get pictures to work
import cats from '../../images/cats.jpg'

class TabletopExperience extends React.Component {

    render() {
        return (
            <>
                <Postcard type={"paragraph"} in={false} url={""} content={"The fitness graham pacer test is a multi stage capacity test that prograssively gets more difficult as it continues. The fitness graham pacer test will begin in 30 seconds so line up at the door this is a continuation of the test"} />
                <Postcard type={"paragraph"} in={false} url={""} content={"The fitness graham pacer test is a multi stage capacity test that prograssively gets more difficult as it continues. The fitness graham pacer test will begin in 30 seconds so line up at the door this is a continuation of the test"} />
                <Postcard type={"paragraph"} in={false} url={""} content={"The fitness graham pacer test is a multi stage capacity test that prograssively gets more difficult as it continues. The fitness graham pacer test will begin in 30 seconds so line up at the door this is a continuation of the test"} />
                <Postcard type={"picture"} in={false} url={cats} content={"A picture of my Cats"} />
            </>
        )
    }
}

export { TabletopExperience };