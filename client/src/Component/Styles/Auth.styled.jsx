import styled from 'styled-components'

export const AuthContainer = styled.div`
    width: 70%;
    margin: 20px auto;

    
    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
    }

    form input{
        padding: 12px 20px;
        border-radius: 6px;
        border: 1px solid rgb(200,200,200);
    }

    form input:focus{
        outline: rgba(200,100,100, 0.4)
    }

    p{
        // text-align: center;
        margin-top: 20px;
    }

    .account_check{
        text-decoration: underline;
    }
`

export const AuthButton = styled.div`
    /* width: 100%; */
    padding: 12px 10px;
    background: rgb(240,100,100);
    color: white;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
`

export const MainAuthContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    align-items: center;

    .img img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    @media only screen and (max-width: 500px) {
        display: block;

        div:nth-child(2){
            color: white;
            text-shadow:  0 0 5px rgba(0,0,0,0.7);
            position: absolute;
            top: 20vh;
            background-color: rgba(255,255,255, 0.5);
            backdrop-filter: blur(10px);
            border: 2px solid rgb(200, 200, 200);
            box-shadow: 0 0 15px rgba(0,0,0,0.15);
            padding:20px 4px;
            width: 80%;
            left: 10%;
            box-sizing: border-box;
            border-radius: 13px;
        }
    }
`
