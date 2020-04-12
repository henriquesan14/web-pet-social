import styled from 'vue-styled-components';
import { darken } from 'polished';

export const BoxChat = styled.div`
    border: 1px solid #c2c2c2;
    width: 800px;
    display: flex;
    padding: 3px;

    .bar-conversas{
        flex: 1;
        overflow: scroll;
        border-right: 1px solid #c2c2c2;

        input{
            width: 98%;
            border-radius: 4px;
            border: 1px solid #c2c2c2;
            padding: 5px 5px ;
            margin-bottom: 5px;
        }

        ul{
            li{
                cursor: pointer;
                display: flex;
                align-items: center;
                padding: 0 0 0 3px;
                border-bottom: 1px solid #c2c2c2;
                
                img{
                    margin-right: 10px;
                    width: 40px;
                    height: 40px;
                    border-radius: 20px;
                    border: 1px solid #fff;
                }

                div{
                    display: flex;
                    flex-direction: column;

                    h5{
                        margin: 0;
                    }
                }

                &:hover{
                    background-color: #1250a6;
                    color: #fff;
                }
            }

        }
    }

    .bar-chat{
        flex: 2;
        display: flex;
        flex-direction: column;

        .header{
            display: flex;
            padding: 5px;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #c2c2c2;
            margin-bottom: 5px;
            img{
                height: 35px;
                width: 35px;
                border-radius: 30px;
                margin-right: 10px;
            }
            h5{
                font-weight: bold;
            }
        }

        .messages{
            overflow: scroll;
            flex: 1;
            padding: 5px;
            display: flex;
            flex-direction: column-reverse;
            justify-content: flex-start;
            
            .message{
                padding: 5px 10px;
                align-self: flex-start;
                background-color: #c2c2c2;
                border-bottom-right-radius: 10px;
                border-top-right-radius: 10px;
                border-bottom-left-radius: 10px;
                margin-top: 5px;

                span{
                    font-size: 10px;
                }
            }
            
            .me{
                background-color: #1250a6;
                color: #fff;
                border-bottom-right-radius: 0;
                border-top-left-radius: 10px;
                align-self: flex-end;
            }
        }

        .send-message{
            display: flex;
            justify-content: stretch;
           
            form{
                display: flex;
                justify-content: stretch;
                width: 100%;

                input{
                    width: 100%;
                    padding: 5px;
                }

                button{
                    background: #062F90;
                    padding: 0 10px;
                    border: none;
                    outline: none;

                    svg{
                        color: #fff;
                    }

                    &:hover{
                        background: ${darken(0.03, '#0B1376')};
                    }
                }
            }
        }
    }

`;