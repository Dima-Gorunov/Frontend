import React, {useState} from 'react';

const LogoSvg = () => {
    const [color, setColor] = useState("white")

    return (
        <svg
            width="45" height="25" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14.5622 24.1479H19.5453L22.3618 21.2845L25.1782 24.1479H30.1419L22.352 16.2282L14.5622 24.1479ZM0 7.08275L8.39421 23.56L13.4754 18.6444L7.4009 9.02098L0 7.08275ZM44.8052 7.08021L36.4111 23.5575L31.3299 18.6419L37.4045 9.01843L44.8052 7.08021ZM22.355 0.714355L13.9801 12.2013L16.2152 15.9675L22.355 9.91466L28.4947 15.9675L30.7297 12.2013L22.355 0.714355Z"
                  fill="white"/>
        </svg>
    );
};

export default LogoSvg;