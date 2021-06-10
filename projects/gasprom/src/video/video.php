<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" crossorigin="anonymous">
    <title>Video</title>
    <style>
        body{
            margin:0;
            padding:0;
            position:relative;
            width:100%;
            height:100vh;
            max-width:100%;
            max-height:100vh;  
    font-family: sans-serif; 
        }
        .wrapper{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
        }
        video{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black;
        }
        
        .embed-responsive .volume {
                    position: absolute;
                    width: 130px;
                    height: 135px;
                    top: calc(50% - 70px);
                    left: calc(50% - 65px);
                    z-index: 1000;
                    background: rgba(0, 0, 0, .5);
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    cursor: pointer;
                    animation: pulse 1s linear infinite;
                                }

                                .embed-responsive .volume p {
                                    color: #fff;
                                    font-weight: bold;
                                    font-size: 18px;
                                    cursor: pointer;
                                }

                                .embed-responsive .volume i {
                                    color: #fff;
                                    padding-top: 25px;
                                    font-size: 4rem;
                                }

                                @keyframes pulse {
                                    0% {
                                        transform: scale(1, 1);
                                    }

                                    50% {
                                        transform: scale(1.1, 1.1);
                                    }

                                    100% {
                                        transform: scale(1, 1);
                                    }
                                }
    </style>
</head>
<body>
    <div class="wrapper">
                            <div class="embed-responsive embed-responsive-16by9">
                                <div class="volume"
                                    onclick="document.querySelector('video').muted = false; this.style.display = 'none'">
                                    <i class="fas fa-5x fa-volume-up unmute-btn"></i>
                                    <p style="font-size: 15px">Включить звук</p>
                                </div>
                                <video oncontextmenu="return false;" autoplay muted
                                    controls=true>
                                    <source src="./video.mp4" type="video/mp4">
                                    <div class="wrapper">
                            <div class="embed-responsive embed-responsive-16by9">
                                <div class="volume"
                                    onclick="document.querySelector('video').muted = false; this.style.display = 'none'">
                                    <i class="fas fa-5x fa-volume-up unmute-btn"></i>
                                    <p style="font-size: 15px">Включить звук</p>
                                </div>
                                <video oncontextmenu="return false;" autoplay muted
                                    controls=true>
                                    <source src="./video.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
    </div><div class="wrapper">
                            <div class="embed-responsive embed-responsive-16by9">
                                <div class="volume"
                                    onclick="document.querySelector('video').muted = false; this.style.display = 'none'">
                                    <i class="fas fa-5x fa-volume-up unmute-btn"></i>
                                    <p style="font-size: 15px">Включить звук</p>
                                </div>
                                <video oncontextmenu="return false;" autoplay muted
                                    controls=true>
                                    <source src="./video.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                                    Your browser does not support the video tag.
                                    font-family: sans-serif;  
            font-family: sans-serif;  
    </div>                           Your browser does not support the video tag.
                                </video>
                            </div>
    </div>

</body>
</html>