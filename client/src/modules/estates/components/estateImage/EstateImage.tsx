import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const ImgBox = styled('div')`
  overflow: hidden;
  width: 209px;
  display: flex;
  align-items: center;
`;

const Img = styled('div')<{url: string}>`
  background-image: ${({ url })=> `url(${url})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 100%;
`;

function checkImageUrl(url: string): Promise<string | false> {
    const img = new Image();
    return new Promise((resolve) => {
        img.onload = () => {
            resolve(url);
        };
        img.onerror = () => {
            resolve(false);
        };
        img.src = url;
    });
}

type EstateImageProps = {
    url: string;
}

const brokenImage = 'https://img.kpopmap.com/2016/10/taeyang-pink-hair-kpop-big-bang.jpg';

const EstateImage: FC<EstateImageProps> = ({ url }) =>{
    const [img, setImg] = useState<string>('');
    useEffect(()=>{
        checkImageUrl(url)
            .then((result) => {
                if (result) {
                    setImg(result);
                } else {
                    setImg(brokenImage);
                }
            });
     
    },[url]);
    return (
        <ImgBox>
            <Img url={img} />
        </ImgBox>
    );
};

export default EstateImage;