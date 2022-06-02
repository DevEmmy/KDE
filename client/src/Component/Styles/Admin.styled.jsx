import styled from 'styled-components'

export const AdminContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 50px;
    background-color: rgb(240,240,240);
`


export const AdminLeftContainer = styled.div`
    background-color: white;
    height: 100vh;
    padding: 20px;
    position: sticky;
    top: 0;
    left: 0;
    bottom: 0;

    .profile_container{
        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    .profile_container img{
        width: 130px;
        height: 130px;
        object-fit: cover;
        border-radius: 50%;
    }

    .nav_items > .item{
        padding: 1px 13px;
        cursor: pointer;
        transition: all .3s;
        
    }
    .nav_items > .item h5{
        font-weight: 400;
    }

    .nav_items > .item:hover{
        background-color: rgb(240, 240, 240);
    }
`

export const AdminRightContainer = styled.div`
    background-color: white;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    bottom: 0;
`

export const AdminCenterContainer = styled.div`
    padding: 30px 10px;

    .welcome{
        padding: 10px;
        font-size: 25px;
        font-weight: 500;
        color: rgb(100,100,100);
    }

    .number_of_users{
        padding: 15px 10px;
        display: inline-flex;
        background-color: rgb(0, 122, 204);
        border-radius: 6px;
        box-shadow:0 6px 12px rgb(0, 122, 204, 0.4);
        color: white;
        font-weight: 500;
    }

    .no_of_items{
        display: flex;
        gap: 30px;
    }
`

export const ListingCompoContainer = styled.div`
    
    margin: 30px 0;
    padding: 5px 10px;

    .top_sections{
        background-color: black;
        color: white;
        display: inline-flex;
        padding: 14px 30px;
        border-radius: 5px;
        cursor: pointer;
    }
`

export const ListContainer = styled.div`
    display:grid ;
    grid-template-columns: 3fr 2fr;
    gap: 30px;
    margin-top: 20px;
    background-color: white;
    padding: 10px 20px;

    .left img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`

export const MainListContainer = styled.div`
    position: relative;

    .actions{
        position: absolute;
        top: 20px;
        right: 90px;
        width: 70px;
        display: grid;
        gap: 30px;
        grid-template-columns: 1fr 1fr;
    }
` 

export const AddListingContainer = styled.div`
    form{
        display: grid;
        gap: 20px;
        margin: 20px 0;
    }

    form input{
        padding: 20px 20px;
        border-radius: 4px;
        display: inline-block;
        max-width: 50%;
    }

    form textarea{
        resize: none;
        width: 50%;
        padding: 10px 20px;
        height: 200px;
    }

    form select{
        padding: 20px;
        width: 20%;
    }

    .preview{
        width: 100px;
        height: auto;
    }

    form button{
        width: 50%;
        background-color: black;
        color: white;
        padding: 20px;
        border-radius: 6px;
    }
`