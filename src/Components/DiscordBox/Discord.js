import React, { useState } from 'react';
import styled from 'styled-components';
import './Discord.css';

const Disc = styled.div`
    display: block;
    position: fixed;
    background-color: #7289da;
    color: white;
    border-radius: 7px;
    font-size: 18px;
    right: 0px;
    bottom: 0px;
    width: 400px;
    height: 400px;
    transition: transform 0.35s ease-in-out;
    cursor: pointer;
     
    p{
        margin-left: 20px;
    }

    .info-discord{
        display: inline-flex;
        text-align: left;
        width: inherit;
    }
    
    .info-discord icon{
        position: absolute;
        background-color: #7289da;
        color: white;
        border: none;
        padding-top: 18px;
        right: 15px;
        cursor: pointer;
    }
    
    .iframe-discord{
        border-style: none;
        position: absolute;
        top: 52px;
        left: 0px;
        width: 100%;
        height: 348px;
    }

    @media screen and (min-width: 1000px){
        transform: ${({ status }) => status ? 'translateY(0px)' : 'translateY(348px)'};
    }

    @media screen and (max-width: 1000px){
        position: relative;
        right: unset;
        bottom: unset;
        width: 60%;
        height: 400px;
        margin: 0 auto;
        
        .panelButton{
            display: none;
        }

        .info-discord{
            position: relative;
            left: unset;
            width: unset;
            text-align: center;
            font-size: 16px;
            right: 10px;
        }
    }

    @media screen and (max-width: 700px){
        height: 500px;
        width: 100%;
        margin: 0 auto;
        border-radius: unset;
        .iframe-discord{
            height: 448px;
        }
    }
`;

const Discord = ({ source }) => {
    let [open, setOpen] = useState(false)
    let icon="˄";

    if(open){ icon = "˅"; }

    if (!source) { return <div>Loading...</div>; }
    const src = source;     

    return (
        <div>
            <Disc status={open} onClick={() => setOpen(!open)}>
                <div className="info-discord">
                    <p>Want some more help? Talk to us!</p>
                    <icon className="panelButton">{icon}</icon>
                </div>
                <div className="dropup-discord">
                    <iframe className="iframe-discord" src={src}></iframe>
                </div>
            </Disc>
        </div>
    );
};

export default Discord;
