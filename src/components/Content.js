import React from 'react'
import { Navlink } from 'react-router-dom'
import ReactPlayer from "react-player/lazy";
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import { useHref } from 'react-router-dom';
import { Link } from 'react-router-dom'


function Content() {
    return (
        <div className='content'>
            <div className='joint'>


                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href='https://vimeo.com/421078612'>
                            Netflix Presents Made In Africa  </a>
                    </h3>
                    <ReactPlayer
                        width="450px"
                        height="200px"
                        url="https://vimeo.com/421078612"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'




                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href='https://vimeo.com/421078612'>
                            Dillon Windvogel & Amamkele Qamata  </a>
                    </h3>

                </div>





                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href='https://vimeo.com/711035908'>
                            Netflix Presents Made In Africa  </a>
                    </h3>
                    <ReactPlayer
                        width="450px"
                        height="200px"
                        url="https://vimeo.com/711035908"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'



                    >
                    </ReactPlayer>

                    <h3 className='text-title-below'>
                        <a href='https://vimeo.com/711035908'>
                            Sne Mbatha & Noxolo Dlamini  </a>
                    </h3>

                </div>


            </div>

            <div className='joint'>

                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href='https://vimeo.com/421087361'>
                            EL & Jaguar </a>
                    </h3>

                    <ReactPlayer
                        width="450px"
                        height="200px"
                        url="https://vimeo.com/421087361"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'


                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href='https://vimeo.com/421087361'>
                            Warrior </a>
                    </h3>

                </div>


                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href='https://vimeo.com/432081061'>
                            Paxton - Demonstrate </a>
                    </h3>

                    <ReactPlayer
                        width="450px"
                        height="200px"
                        url="https://vimeo.com/432081061"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'


                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href='https://vimeo.com/432081061'>
                            Demonstrate </a>
                    </h3>

                </div>
            </div>

            <div className='joint'>



                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href='https://vimeo.com/421078612'>
                            Unite.Us </a>
                    </h3>
                    <ReactPlayer
                        width="450px"
                        height="200px"
                        url="https://vimeo.com/421078612"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'

                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href='https://vimeo.com/421078612'>
                            Call To Action</a>
                    </h3>

                </div>

                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href='https://vimeo.com/585287675'>
                            Redbull - Unfold Thabo </a>
                    </h3>

                    <ReactPlayer
                        width="450px"
                        height="200px"
                        url="https://vimeo.com/585287675"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'



                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href='https://vimeo.com/585287675'>
                            ‘Yvng Savage Moloi’ </a>
                    </h3>

                </div>


            </div>

            <div className='joint'>

                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href='https://vimeo.com/427314371'>
                            Be My Woman </a>
                    </h3>
                    <ReactPlayer
                        width="450px"
                        height="200px"
                        url="https://vimeo.com/427314371"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'


                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href='https://vimeo.com/427314371'>
                            Shortfilm</a>
                    </h3>

                </div>


                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href='https://vimeo.com/432078886'>
                            Luyolo  </a>
                    </h3>
                    <ReactPlayer
                        width="450px"
                        height="200px"
                        url="https://vimeo.com/432078886"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'


                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href='https://vimeo.com/432078886'>
                            Sunshine Through The Rain  </a>
                    </h3>

                </div>

            </div>

            <div className='joint'>

                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href='https://vimeo.com/432079625'>
                            Thabsie </a>
                    </h3>
                    <h3></h3>
                    <ReactPlayer
                        width="450px"
                        height="200px"
                        url="https://vimeo.com/432079625"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'


                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href='https://vimeo.com/432079625'>
                            Ilula </a>
                    </h3>


                </div>

                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/470254175">Farai Solution </a>
                    </h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/470254175"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'

                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/470254175"> </a>
                    </h3>

                </div>



            </div>
            <div className='joint'>

                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href='https://vimeo.com/504752439'>
                            Hillsongs South Africa  </a>
                    </h3>
                    <ReactPlayer
                        width="450px"
                        height="200px"
                        url="https://vimeo.com/504752439"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'


                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href='https://vimeo.com/504752439'>
                            Drummer Boy    </a>
                    </h3>

                </div>

                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/504751510">Hillsongs South Africa </a>
                    </h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/504751510"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'


                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/504751510"> Noel</a> </h3>


                </div>

            </div>

            <div className='joint'>
                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/554289216">Decrim Botswana</a>
                    </h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/554289216"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'

                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/554289216"> </a>
                    </h3>

                </div>

                <div className="react-playa">

                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/504376211">Nadia Nakai </a></h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/504376211"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'


                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/504376211"></a></h3>

                </div>

            </div>

            <div className='joint'>

                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/504376679">Originators </a>
                    </h3>

                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/504376679"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'


                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'><a href="https://vimeo.com/504376679">  Kwesta</a>
                    </h3>


                </div>

                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/486888165">Visa </a>
                    </h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/486888165"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'

                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/486888165">Mapule Ndhlovu</a>
                    </h3>

                </div>

            </div>

            <div className='joint'>
                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href='https://vimeo.com/583034242'>
                            Coca-Cola Presents Jag  </a>
                    </h3>

                    <ReactPlayer
                        width="450px"
                        height="200px"
                        url="https://vimeo.com/583034242"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'


                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href='https://vimeo.com/583034242'>
                            El Fashion Film </a>
                    </h3>

                </div>



                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/442758714">The Hustle promo </a>
                    </h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/442758714"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'

                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/442758714"></a>
                    </h3>

                </div>

            </div>

            <div className='joint'>


                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/439218744">Standard Bank</a>
                    </h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/439218744"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'

                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/439218744"> Your Next Million</a>
                    </h3>

                </div>


                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/439213236">Vusi Thembekwayo </a>
                    </h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/439213236"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'

                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/439213236"> Mini Documentary</a>
                    </h3>

                </div>

            </div>

            <div className='joint'>
                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/504750495">Hillsong South Africa </a>
                    </h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/504750495"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'

                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/504750495"> RATCT</a>
                    </h3>

                </div>


                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/439211091">Ami Faku </a>
                    </h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/439211091"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'

                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/439211091">Inde Lendlela</a>
                    </h3>

                </div>

            </div>
            <div className='joint'>


                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/439210233">Joshua the I AM </a>
                    </h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/439210233"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'

                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/439210233"> Gassed</a>
                    </h3>

                </div>

                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/439209549">Yanga </a>
                    </h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/439209549"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'

                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/439209549"> Scars </a>
                    </h3>

                </div>

            </div>

            <div className='joint'>

                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/439208017">Mpho Sebina </a>
                    </h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/439208017"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'

                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/439208017">Slip Away</a>
                    </h3>

                </div>

                <div className="react-playa">
                    <h3 className='text-title-above'>
                        <a href="https://vimeo.com/439207461">M.anifest </a>
                    </h3>
                    <ReactPlayer

                        width="450px"
                        height="200px"
                        url="https://vimeo.com/439207461"
                        loop
                        playing={false}
                        controls={true}
                        light={false}
                        progressInterval
                        webkit-playsinline
                        playsinline
                        pip
                        fallback={null}
                        playIcon
                        previewTabIndex={1}
                        config
                        className='video'


                    >
                    </ReactPlayer>
                    <h3 className='text-title-below'>
                        <a href="https://vimeo.com/439207461"> Me No Woa</a>
                    </h3>

                </div>

            </div>

        </div>

    )
}

export default Content