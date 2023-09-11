import React, { useEffect ,useState} from 'react';

const Filters2 = ({filter}) => { 
    const [isRuned,setisRuned]=useState(false) 
    useEffect(()=>{
        function runScript(src) { 
            const script = document.createElement("script");
            script.type = 'module';
            script.src = src;
            script.async = true;

            document.body.appendChild(script);
        }
        if(!isRuned){   
            document.getElementById('loadingFilters').style.display='flex' 
            runScript('/filters2Scripts/jeelizFaceFilter.js')
            runScript('/filters2Scripts/three.min.js')
            runScript('/filters2Scripts/JeelizResizer.js')
            runScript('/filters2Scripts/JeelizThreeHelper.js')
            runScript('/filters2Scripts/main.js')
            setisRuned(true)
        }
    },[isRuned])
    useEffect(() => { 

        function main() {
            var VIDEOELEMENT
            if (document.getElementById('videoOfUser')) {
                VIDEOELEMENT = document.getElementById('videoOfUser');
            } else {
                setTimeout(main, 1000);
                return
            }
            if (VIDEOELEMENT['currentTime'] && VIDEOELEMENT['videoWidth']
                && VIDEOELEMENT['videoHeight']) {
                    const c = document.getElementById('jeeFaceFilterCanvas')
                    var video = document.getElementById("videoOfUser"); 
                    c.height = video.videoHeight
                    c.width = video.videoWidth 
            } else {
                setTimeout(main, 1000);
                VIDEOELEMENT['play']();
            }


        }
        main()
    }, [])
    return (
        <>
            <div style={{display:'none'}}>
                <canvas width="600" height="600" id='jeeFaceFilterCanvas'></canvas>
                <canvas width="600" height="600" id='myCanvas'></canvas>
                <video playsinline autoplay muted width="600" height="600" id="video"></video>
                <video playsinline autoplay muted width="600" height="600" id="tmpUserVideo"></video>
            </div>
        </>
    );
}

export default Filters2;
