import React from 'react';

const Visual = ({ media }) => {
    return (
        <>
            {media.media_type === 'image'
                ? <img 
                    src={media.url}
                    height='300'
                    width='500'
                    alt={media.title}
                />
                : <iframe 
                    width="500" 
                    height="300" 
                    src={media.url} 
                    title={media.title}
                    frameBorder="0"  
                    allowFullScreen
                />  
            }
        </>
    )
}

export default Visual