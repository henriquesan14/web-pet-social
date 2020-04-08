import styled from 'vue-styled-components';
import { darken } from 'polished';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 315px;

    img {
        display: block;
        margin: 0 auto;
        width: 150px;
    }

    a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;
            text-align: center;
            &:hover{
                opacity: 1;
            }
        }

    form{
        display: flex;
        flex-direction: column;
        margin-top: 30px;


        input {
            background: rgba(0,0,0,0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;
            &::placeholder{
                color: rgba(255,255,255,0.7);
            }
        }

        span{
            color: #fb6f91;
            align-self: flex-start;
            margin-top: -8px;
            font-weight: bold;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: blue;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;
            
            &:hover{
                background: ${darken(0.03, '#3b9eff')};
            }
        }
    }
`

