import styled from 'styled-components';

export const BlogsContainer = styled.div`
    
`

export const BlogContainer = styled.div`
    width: 85%;
    margin: 100px auto 20px;
    gap: 0;

    h3{
        padding: 0;
    }

    p{
        width: 40%;
        padding: 0;
    }

    @media only screen and (max-width: 500px){
        p{
            width: 100%;
        }   
    }
`
export const MainBlogsContainer = styled.div`
    width: 85%;
    margin: 0px auto;
    gap: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    div{
        min-height: 300px;
        max-height: 400px;
        border-radius: 16px;
        padding: 15px 20px;
        box-shadow: 0 8px 10px rgba(0,0,0,0.35);
        color: white;
        text-shadow: 0 8px 20px rgba(0,0,0,0.35);
    }

    div:nth-child(1){
        /* color: red; */
        grid-column:  span 2;
    }

    .read_more{
        background-color: white;
        color: black;
        border-radius: 12px;
        padding: 10px 20px;
        margin-top: 30px;
        display: inline;
    }

    @media only screen and (max-width: 500px){
        display: flex;
        flex-direction: column;
    }

`