import styled from 'vue-styled-components';
import { darken } from 'polished';

export const Profile = styled.div`
    border: 1px solid #c2c2c2;
    width: 700px;

    h4{
        text-align: center;
    }

    h5{
        text-align: center;
        font-size: 15px;
    }

    div.infos{
        display: flex;

        .bar-avatar{
            flex: 1;
            padding: 10px;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        .bar-infos{
            flex: 2;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            ul{
                display: flex;
                width:100%;
                justify-content: space-between;
                padding: 0 20px;

                li{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    strong{
                        font-size: 18px;
                    }

                    span{

                    }

                    svg#mars{
                        font-size: 20px;
                        color: #1250a6;
                    }

                    svg#venus{
                        font-size: 20px;
                        color: #E4119B;
                    }
                }
            }
        }

        .bar-btns{
            

            button{
                padding: 5px 20px;
                border-radius: 4px;
                color: #fff;
                border: none;
                outline: none;
                &:first-child{
                    margin-right: 15px;
                }
            }

            button.add{
                background-color: #1250a6;

                &:hover{
                    background: ${darken(0.03, '#0B1376')};
                }
            }

            button.remove{
                background-color: #F93D3D;

                &:hover{
                    background-color: #D60707;
                }
            }
        }

        img{
            margin: 0 auto;
            width: 150px;
            height: 150px;
            border-radius: 75px;
            margin-bottom: 15px;
            border: 2px solid #1250a6;
            cursor: pointer;
        }
    }
    
`;