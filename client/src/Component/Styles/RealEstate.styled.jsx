import styled from 'styled-components';

export const RealEstatePageContainer = styled.div`

`

export const ListingDetails = styled.div`
  width: 90%;
  margin: 20px auto;

  .save_list{
    /* display: inline-block; */
    padding: 14px 20px;
    border-radius: 36px;
    background-color: #FFD700;
    color: white;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  h3{
    font-size: 50px;
    padding: 0;
  }

  p{
    width: 100%;
  }

  .details_book_container{
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 100px;
    align-items: center;
  }

  @media only screen and (max-width:500px){
    p{
      width: 100%;
    }

    h3{
      font-size: 30px;
    }

    .details_book_container{
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`

export const RealEstateContentContainer = styled.div`
width: 90%;
margin: 50px auto;

.real_estate_filter{
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 30px;
  }
  
  .filter{
    font-size: 20px;
    padding: 10px 18px;
    border: 2px solid black;
    cursor: pointer;
    transition: .1s;
    font-weight: 700;
    border-radius: 30px;
  }
  
  .filter:hover{
    background-color: #FFD700;
    color: white;
  }
  
  .real_estate_listings > h2{
    font-size: 40px;
    margin: 20px 0;
  }
  
  .real_estate_main{
    margin: 30px auto;
  }
  
  .real_estate_main > h2{
    font-size: 44px;
  }
  
  .main_listing{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 50px;
    width: 88%;
    margin: 30px auto;
  }
  
  .list{
    display: grid;
    /* border: 1px solid rgb(100,100,100); */
    border-radius: 10px;
    font-size: 15px;
    background-color: white;
    cursor: pointer;
    transition: .3s;
    border: 1px solid rgb(200,200,200);
  }
  
  .list:hover{
    box-shadow:  0 13px 30px rgba(0,0,0,0.18);
  }
  
  .list > .list_text > h3{
    font-size: 15px;
    font-weight: 500;
  }
  
  .list > .list_text > h6{
    font-size: 20px;
    background-color: white;
    border: 1px solid black;
    font-weight: 300;
  }
  
  .list > .list_text > p{
    font-size: 15px;
    font-weight: 300;
    padding-top: 10px;
    color: gray;
  }
  
  .list > img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  
  .list_text{
    padding: 20px;
  }

  @media only screen and (max-width: 500px){
    .real_estate_filter{
      gap: 10px;
    }

    .filter{
      font-size: 14px;
      padding: 5px 10px;
    }

    .main_listing{
      display: flex;
      flex-direction: column;
    }
  }
`