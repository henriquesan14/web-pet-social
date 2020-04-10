import styled from 'vue-styled-components';
import { darken } from 'polished';

export const ContentProfile = styled.div`
    form{
        padding:10px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        width: 500px;

        img{
            margin: 0 auto;
            width: 150px;
            height: 150px;
            border-radius: 75px;
            margin-bottom: 15px;
            cursor: pointer;
        }

        h5{
            text-align: center;
        }

        h3{
            text-align: center;
            margin-bottom: 20px;
        }

        input {
            border: 1px solid #c2c2c2 !important;
            background: #fff;
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            margin: 0 0 10px;
            &::placeholder{
                color: rgba(0,0,0,0.7);
            }
        }

        span{
            color: #fb6f91;
            align-self: flex-start;
            margin-top: -8px;
            font-weight: bold;
            font-size: 13px;
        }
        
        select{
            border: 1px solid #c2c2c2;
            border-radius: 4px;
            padding: 10px 15px;
            margin: 0 0 10px;

            option{
                color: rgba(0,0,0,0.7);
            }
        }

        button {
            outline: 0;
            margin: 5px 0 0;
            height: 44px;
            background: #062F90;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;
            
            &:hover{
                background: ${darken(0.03, '#0B1376')};
            }
        }

        button#btn-times{
            margin: 0 auto;
            background-color: #F93D3D;
            height: 30px;
            width: 100px;
            margin-bottom: 5px;

            &:hover{
                background-color: #D60707;
            }
        }
    }
`;