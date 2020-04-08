import styled from 'vue-styled-components';


export const Header = styled.div`
    display: flex;
    padding: 0 40px;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    grid-area: header;
    background-color: #1250a6;

    div.search-bar{
        display: flex;
        
        img{
            width: 35px;
            height: 35px;
            margin-right: 10px;
        }

        input {
            background: rgba(0,0,0,0.1);
            border: 0;
            border-radius: 4px;
            height: 40px;
            padding: 0 80px 0 10px;
            color: #fff;
            &::placeholder{
                color: rgba(255,255,255,0.7);
            }
        }

        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;

            li {
                padding: 5px;
                border-radius: 3px;
                cursor: pointer;
                color: #fff;
                margin-left: 10px;

                &:hover{
                    background-color: rgba(0,0,0,.4); 
                }
            }

            &:first-child{
                margin: 0;
            }
        }
    }

    div.profile-bar{
        cursor: pointer;
        height:100%;
        padding:0 5px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        color : #fff;

        &:hover{
            background-color: rgba(0,0,0,.4); 
        }

        img{
            margin: 0 8px;
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }
    }

`;