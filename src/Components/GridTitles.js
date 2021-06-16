import React from 'react';
import Box from './box.js';
import MadLibs from './madlibs.js';

const GridTitles = ({ mouseclick }) => {
    return (
        <div className= 'tc'>
            <h1 className='tc Title'>Choose a Story</h1>
            <div className='grid_madlibs'>
                {
                    MadLibs.templates.map((x, i) => {
                        return (
                        <Box 
                        key={i}
                        index={i}
                        titles={MadLibs.templates[i].title} 
                        clickchange = {mouseclick}
                        />
                    );
                    })
                }
            </div>
        </div>
    );

}

export default GridTitles