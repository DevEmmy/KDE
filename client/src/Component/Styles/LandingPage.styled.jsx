import styled from 'styled-components';

export const LandingPageContainer = styled.div`
    h2{
        text-align: center;
        padding: 120px 0 60px;
        font-size: 70px;
        color: rgb(100,100,100);
    }

    @media only screen and (max-width: 500px) {
        h2{
            padding: 0px 0 20px;
            font-size: 26px;
        }
    }
`

export const BannerContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .dark_bg{
        position: absolute;
        z-index:1;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
    }

    .text_content{
        position: absolute;
        top: 0;
        left: 0;
        right:0;
        // margin-top: -70vh;
        z-index: 3;
        top: 30vh;
        // display: grid;
        // align-items: center;
        // justify-content: center;
        text-align: center;
        /* line-height: 0; */
    }

    .text_content h1{
        font-size: 60px;
        color: white;
    }

    .text_content p{
        font-size: 25px;
        color: white;
        width: 70%;
        margin: 0 auto;
    }

    @media only screen and (max-width: 500px){
        .text_content{
            padding: 30px;
            top: 10vh;
            line-height: 1;
        }
        .text_content h1{
            font-size: 50px;
        }

        .text_content p{
            font-size: 22px;
            width: 95%;
        }
    }
` 

export const NewsLetterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;
    width: 90%;
    margin: 100px auto;
    padding-top: 30px;

    .news_text_container{
        // display: grid;
        // gap: 2px;
        // grid-template-columns: 1fr;
    }

    .news_text_container > h1{
        font-weight: 600;
        font-size: 40px;
    }

    .news_text_container > p{
        color: rgb(100,100,100);
        font-size: 20px;
    }

    .newsLetter_form{
        padding: 25px;
        display: grid;
        gap: 30px;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
      }
      
      .newsLetter_form > input{
        border-radius: 0;
        font-size: 19px;
      }
      
      .newsLetter_form > input[type="email"]{
        padding: 12px 20px;
        border: 1px solid rgb(200,200,200);
        
        color: rgb(180,180,180);
      }
      
      .newsLetter_form > input[type="button"]{
        background-color: #FFD700;
        color: white;
        border: none;
      }
      
      .newsLetter_form > input:focus{
        outline: none;
      }

      @media only screen and (max-width: 500px){
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 20px auto;

          .newsLetter_form{
              display: flex;
              flex-direction: column;
              gap:10px;
              padding: 0;
          }

          .newsLetter_form > input{
              padding: 10px 20px;
          }
      }
`

export const FooterContainer = styled.div`
    width: 92%;
    margin: 50px auto 0;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 50px;
    border-top: 1px solid;
    padding: 30px 0;

    .footer > .footer_1 > h3, .footer_2 > h3, .footer_3> h3{
        font-weight: 600;
        border: 1px solid;
        padding: 10px;
        font-size: 15px;
    }
    
    /* .footer_1, .footer_2, .footer_3{
        display: grid;
    } */
    
    .copyright{
        font-weight: 600;
        padding: 20px 0;
    }
    
    .footer_items, .footer_1 > p{
        margin-top: 10px;
        display: grid;
        grid-template-rows: 1fr;
        gap: 10px;
        font-size: 15px;
    }
    
    .footer_item{
        cursor: pointer;
        display: inline-flex;
        font-size: 15px;
        padding-left: 10px;
    }
    
    .footer_item:hover{
        text-decoration: underline;
    }
    
    .footer_item > a {
        font-size: 15px;
    }

    @media only screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        gap: 0;
    }
`

export const LatestContainer = styled.div`
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

    .main_listing{
      display: flex;
      flex-direction: column;
    }
  }
`


export const BookSection = styled.div`
display: grid;

    h3{
        font-size: 30px;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    form input{
        padding: 12px 20px;
    }

    .submit_message{
        padding: 12px 20px;
        text-align: center;
        background-color: #FFD700;
        color: white;
        cursor: pointer;
    }

    @media only screen and (max-width: 500px){
        width: 100%;
    }
`

export const AboutContainer = styled.div`
    text-align: center;
    width: 70%;
    margin: 100px auto;

    .members{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
    }

    .member{
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow:  0 0 20px rgba(0,0,0,0.23);
    }

    .member img{
        width:200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
    
    }

    .text_content p{
       margin-top: -20px;
    }

    @media only screen and (max-width: 500px) {
        width: 90%;
        margin: 0px auto;
        .members{
            display: flex;
            flex-direction: column;
        }

        .member{
            width: 90%;
            margin: 0 auto;
        }

        .member img{
            width: 130px;
            height: 130px;
            box-sizing: border-box;
        }
        
    }
`