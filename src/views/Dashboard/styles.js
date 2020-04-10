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

    div.user-dropdown{
        cursor: pointer;
        height:100%;
        border-radius: 5px;
        color : #fff;

        &:hover{
            background-color: rgba(0,0,0,.4); 
        }

        .user-button{
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 20px;
        }

        .user-dropdown-content{
            position: absolute;
            min-width: 162px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            padding: 10px;
            z-index: 1;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s, opacity 0.5s linear;

            a {
                font-size: 0.9rem;
                text-decoration: none;
                color: #000;
                padding: 10px;
                &:hover {
                background-color: #ededed;
                text-decoration: none;
                color: #000;
                }
            }
        }

        &:hover .user-dropdown-content{
            visibility: visible;
            opacity: 1;
        }

        img{
            margin: 0 8px;
            width: 40px;
            height: 40px;
            border-radius: 20px;
            border: 1px solid #fff;
        }
    }

`;


export const Content = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
`;