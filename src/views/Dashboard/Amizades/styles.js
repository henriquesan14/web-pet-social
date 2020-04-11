import styled from 'vue-styled-components';
import { darken } from 'polished';

export const Amizades = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #c2c2c2;
    width: 700px;
    padding: 10px;

    div{
        ul{
            width: 600px;
            
            li{
                display: flex;
                align-items: center;
                justify-content: space-between;
                border: 1px solid #c2c2c2;
                padding: 5px;
                
                .bar-desc{
                    display: flex;
                    align-items: center;
                    img{
                        width: 40px;
                        height: 40px;
                        border-radius: 25px;
                        margin-right: 10px;
                    }

                    h5{
                        font-weight: bold;
                    }
                }

                .bar-btns{
                    button{
                        border-radius:2px;
                        border: none;
                        padding: 3px 8px;
                        color: #fff;
                        outline: none;

                        svg{
                            margin-right: 5px;
                        }

                        &:first-child{
                            margin-right: 5px;
                        }
                    }

                    button.confirm{
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
            }
        }
    }
`;