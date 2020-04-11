import styled from 'vue-styled-components';

export const NewPost = styled.div`
    border: 1px solid #c2c2c2;
    margin-bottom: 10px;
    padding: 5px;
    background-color: #fff;
    div.bar-legenda {
        display: flex;
        
        padding: 10px;
        img {
            margin: 0 15px 0 0;
            width: 50px;
            height: 50px;
            border-radius: 30px;
            border: 2px solid #1250a6;
        }
        input {
            width: 100%;
            border: none;
        }
    }

    div#image-selected{
        img{
            width: 80px;
            height: 80px;
            margin: 5px 0;
        }
    }

    hr{
        margin: 2px;
    }

    div.bar-file{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        padding: 5px 8px;
        background-color: #1250a6;
        cursor: pointer;
        
        svg{
            color: #fff;
            margin-right: 5px;
        }

        span{
            color: #fff;
        }
    }

    button{
        margin-top: 5px;
        border: none;
        color: #fff;
        border-radius: 5px;
        padding: 5px;
        background-color: #1250a6;
        width: 100%;

        &:disabled{
            cursor: not-allowed;
            background-color: #96A8B5;
        }
    }

`;

export const Post = styled.div`
    width: 100%;
    border: 1px solid #c2c2c2;
    margin-bottom: 15px;
    background-color: #fff;

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding: 10px;

        .desc-user{
            display:flex;
            align-items:center
        }

        img{
            width: 40px;
            height: 40px;
            border-radius: 25px;
            margin-right: 10px;
            border: 2px solid #1250a6;
        }

        h5{
            font-size: 16px;
        }
    }

    .content{
        display: flex;

        img{
            width: 100%;
        }


    }

    .footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;

        span{
            margin-bottom: 5px;
        }

        ul{
            display: flex;
            align-items: center;

            li{
                svg{
                    cursor: pointer;
                    font-size: 30px;
                }

                &:first-child{
                    margin-right: 30px;
                }
            }
        }


    }

`;